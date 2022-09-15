package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateFullTrack = "create_full_track"

var _ sdk.Msg = &MsgCreateFullTrack{}

func NewMsgCreateFullTrack(creator string, cid string, artistName string, trackTitle string, album string, bpm string, key string, bars string, beats string, genre string, timeSignature string, durationMs string, startBeatOffsetMs string, sectionsCount string, stemsCount string) *MsgCreateFullTrack {
	return &MsgCreateFullTrack{
		Creator:           creator,
		Cid:               cid,
		ArtistName:        artistName,
		TrackTitle:        trackTitle,
		Album:             album,
		Bpm:               bpm,
		Key:               key,
		Bars:              bars,
		Beats:             beats,
		Genre:             genre,
		TimeSignature:     timeSignature,
		DurationMs:        durationMs,
		StartBeatOffsetMs: startBeatOffsetMs,
		SectionsCount:     sectionsCount,
		StemsCount:        stemsCount,
	}
}

func (msg *MsgCreateFullTrack) Route() string {
	return RouterKey
}

func (msg *MsgCreateFullTrack) Type() string {
	return TypeMsgCreateFullTrack
}

func (msg *MsgCreateFullTrack) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFullTrack) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFullTrack) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
