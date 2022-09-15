package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func (k Keeper) GetFullTrack(ctx sdk.Context, id uint64) (val types.FullTrack, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FullTrackKey))

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)

	b := store.Get(bz)
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

func (k Keeper) GetFullTrackCount(ctx sdk.Context) uint64 {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FullTrackCountKey))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FullTrackCountKey)

	// Get the value of the count
	bz := store.Get(byteKey)

	// Return zero if the count value is not found (for example, it's the first post)
	if bz == nil {
		return 0
	}

	// Convert the count into a uint64
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetFullTrackCount(ctx sdk.Context, count uint64) {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FullTrackCountKey))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FullTrackCountKey)

	// Convert count from uint64 to string and get bytes
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	// Set the value of Post-count- to count
	store.Set(byteKey, bz)
}

func (k Keeper) AppendFullTrack(ctx sdk.Context, post types.FullTrack) uint64 {
	// Get the current number of posts in the store
	count := k.GetFullTrackCount(ctx)

	// Assign an ID to the post based on the number of posts in the store
	post.Id = count

	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FullTrackKey))

	// Convert the post ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, post.Id)

	// Marshal the post into bytes
	appendedValue := k.cdc.MustMarshal(&post)

	// Insert the post bytes using post ID as a key
	store.Set(byteKey, appendedValue)

	// Update the post count
	k.SetFullTrackCount(ctx, count+1)
	return count
}
