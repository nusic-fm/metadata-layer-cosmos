package keeper

import (
	"context"
	"fmt"

	"metadata-layer-cosmos/x/metadatalayercosmos/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateStem(goCtx context.Context, msg *types.MsgCreateStem) (*types.MsgCreateStemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	_, found := k.GetFullTrack(ctx, msg.FullTrackID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.FullTrackID))
	}
	var stem = types.Stem{
		StemCid:     msg.StemCid,
		StemName:    msg.StemName,
		StemType:    msg.StemType,
		FullTrackID: msg.FullTrackID,
	}
	id := k.AppendStem(ctx, stem)

	return &types.MsgCreateStemResponse{Id: id}, nil
}
