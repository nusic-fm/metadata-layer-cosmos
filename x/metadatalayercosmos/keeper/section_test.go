package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "metadata-layer-cosmos/testutil/keeper"
	"metadata-layer-cosmos/testutil/nullify"
	"metadata-layer-cosmos/x/metadatalayercosmos/keeper"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func createNSection(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Section {
	items := make([]types.Section, n)
	for i := range items {
		items[i].Id = keeper.AppendSection(ctx, items[i])
	}
	return items
}

func TestSectionGet(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNSection(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetSection(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestSectionRemove(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNSection(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSection(ctx, item.Id)
		_, found := keeper.GetSection(ctx, item.Id)
		require.False(t, found)
	}
}

func TestSectionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNSection(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSection(ctx)),
	)
}

func TestSectionCount(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNSection(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetSectionCount(ctx))
}
