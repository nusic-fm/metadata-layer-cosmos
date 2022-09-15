package keeper

import (
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

var _ types.QueryServer = Keeper{}
