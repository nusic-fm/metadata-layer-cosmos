package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "metadata-layer-cosmos/testutil/keeper"
	"metadata-layer-cosmos/x/metadatalayercosmos/keeper"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MetadatalayercosmosKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
