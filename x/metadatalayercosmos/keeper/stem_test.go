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

func createNStem(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Stem {
	items := make([]types.Stem, n)
	for i := range items {
		items[i].Id = keeper.AppendStem(ctx, items[i])
	}
	return items
}

func TestStemGet(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNStem(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetStem(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestStemRemove(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNStem(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStem(ctx, item.Id)
		_, found := keeper.GetStem(ctx, item.Id)
		require.False(t, found)
	}
}

func TestStemGetAll(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNStem(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStem(ctx)),
	)
}

func TestStemCount(t *testing.T) {
	keeper, ctx := keepertest.MetadatalayercosmosKeeper(t)
	items := createNStem(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetStemCount(ctx))
}
