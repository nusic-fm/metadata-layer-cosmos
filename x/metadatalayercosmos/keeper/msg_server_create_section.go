package keeper

import (
	"context"
	"fmt"

	"metadata-layer-cosmos/x/metadatalayercosmos/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateSection(goCtx context.Context, msg *types.MsgCreateSection) (*types.MsgCreateSectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the Post Exists for which a comment is being created
	_, found := k.GetFullTrack(ctx, msg.FullTrackID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.FullTrackID))
	}
	// Create variable of type comment
	var section = types.Section{
		FullTrackID:        msg.FullTrackID,
		SectionName:        msg.SectionName,
		SectionStartTimeMs: msg.SectionStartTimeMs,
		SectionEndTimeMs:   msg.SectionEndTimeMs,
	}
	id := k.AppendSection(ctx, section)
	return &types.MsgCreateSectionResponse{Id: id}, nil
}
