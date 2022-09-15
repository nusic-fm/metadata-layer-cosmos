package metadatalayercosmos_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "metadata-layer-cosmos/testutil/keeper"
	"metadata-layer-cosmos/testutil/nullify"
	"metadata-layer-cosmos/x/metadatalayercosmos"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SectionList: []types.Section{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		SectionCount: 2,
		StemList: []types.Stem{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		StemCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MetadatalayercosmosKeeper(t)
	metadatalayercosmos.InitGenesis(ctx, *k, genesisState)
	got := metadatalayercosmos.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.SectionList, got.SectionList)
	require.Equal(t, genesisState.SectionCount, got.SectionCount)
	require.ElementsMatch(t, genesisState.StemList, got.StemList)
	require.Equal(t, genesisState.StemCount, got.StemCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
