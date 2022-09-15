package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "metadata-layer-cosmos/testutil/keeper"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MetadatalayercosmosKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
