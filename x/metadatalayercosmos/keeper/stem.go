package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

// GetStemCount get the total number of stem
func (k Keeper) GetStemCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.StemCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetStemCount set the total number of stem
func (k Keeper) SetStemCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.StemCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendStem appends a stem in the store with a new id and update the count
func (k Keeper) AppendStem(
	ctx sdk.Context,
	stem types.Stem,
) uint64 {
	// Create the stem
	count := k.GetStemCount(ctx)

	// Set the ID of the appended value
	stem.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StemKey))
	appendedValue := k.cdc.MustMarshal(&stem)
	store.Set(GetStemIDBytes(stem.Id), appendedValue)

	// Update stem count
	k.SetStemCount(ctx, count+1)

	return count
}

// SetStem set a specific stem in the store
func (k Keeper) SetStem(ctx sdk.Context, stem types.Stem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StemKey))
	b := k.cdc.MustMarshal(&stem)
	store.Set(GetStemIDBytes(stem.Id), b)
}

// GetStem returns a stem from its id
func (k Keeper) GetStem(ctx sdk.Context, id uint64) (val types.Stem, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StemKey))
	b := store.Get(GetStemIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStem removes a stem from the store
func (k Keeper) RemoveStem(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StemKey))
	store.Delete(GetStemIDBytes(id))
}

// GetAllStem returns all stem
func (k Keeper) GetAllStem(ctx sdk.Context) (list []types.Stem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StemKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Stem
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetStemIDBytes returns the byte representation of the ID
func GetStemIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetStemIDFromBytes returns ID in uint64 format from a byte array
func GetStemIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
