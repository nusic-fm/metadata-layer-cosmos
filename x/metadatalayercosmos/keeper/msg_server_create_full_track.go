package keeper

import (
	"context"

	"metadata-layer-cosmos/x/metadatalayercosmos/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateFullTrack(goCtx context.Context, msg *types.MsgCreateFullTrack) (*types.MsgCreateFullTrackResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var fullTrack = types.FullTrack{
		Creator:           msg.Creator,
		Cid:               msg.Cid,
		TrackTitle:        msg.TrackTitle,
		ArtistName:        msg.ArtistName,
		Album:             msg.Album,
		Bpm:               msg.Bpm,
		Key:               msg.Key,
		Bars:              msg.Bars,
		Beats:             msg.Beats,
		Genre:             msg.Genre,
		TimeSignature:     msg.TimeSignature,
		DurationMs:        msg.DurationMs,
		StartBeatOffsetMs: msg.StartBeatOffsetMs,
		SectionsCount:     msg.SectionsCount,
		StemsCount:        msg.StemsCount,
	}

	// Add a post to the store and get back the ID
	id := k.AppendFullTrack(ctx, fullTrack)

	return &types.MsgCreateFullTrackResponse{Id: id}, nil
}
