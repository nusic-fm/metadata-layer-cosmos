package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

// GetSectionCount get the total number of section
func (k Keeper) GetSectionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SectionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetSectionCount set the total number of section
func (k Keeper) SetSectionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SectionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendSection appends a section in the store with a new id and update the count
func (k Keeper) AppendSection(
	ctx sdk.Context,
	section types.Section,
) uint64 {
	// Create the section
	count := k.GetSectionCount(ctx)

	// Set the ID of the appended value
	section.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKey))
	appendedValue := k.cdc.MustMarshal(&section)
	store.Set(GetSectionIDBytes(section.Id), appendedValue)

	// Update section count
	k.SetSectionCount(ctx, count+1)

	return count
}

// SetSection set a specific section in the store
func (k Keeper) SetSection(ctx sdk.Context, section types.Section) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKey))
	b := k.cdc.MustMarshal(&section)
	store.Set(GetSectionIDBytes(section.Id), b)
}

// GetSection returns a section from its id
func (k Keeper) GetSection(ctx sdk.Context, id uint64) (val types.Section, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKey))
	b := store.Get(GetSectionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSection removes a section from the store
func (k Keeper) RemoveSection(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKey))
	store.Delete(GetSectionIDBytes(id))
}

// GetAllSection returns all section
func (k Keeper) GetAllSection(ctx sdk.Context) (list []types.Section) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Section
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSectionIDBytes returns the byte representation of the ID
func GetSectionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSectionIDFromBytes returns ID in uint64 format from a byte array
func GetSectionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
