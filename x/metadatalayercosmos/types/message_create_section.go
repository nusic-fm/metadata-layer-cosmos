package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateSection = "create_section"

var _ sdk.Msg = &MsgCreateSection{}

func NewMsgCreateSection(creator string, fullTrackID uint64, sectionName string, sectionStartTimeMs uint64, sectionEndTimeMs uint64) *MsgCreateSection {
	return &MsgCreateSection{
		Creator:            creator,
		FullTrackID:        fullTrackID,
		SectionName:        sectionName,
		SectionStartTimeMs: sectionStartTimeMs,
		SectionEndTimeMs:   sectionEndTimeMs,
	}
}

func (msg *MsgCreateSection) Route() string {
	return RouterKey
}

func (msg *MsgCreateSection) Type() string {
	return TypeMsgCreateSection
}

func (msg *MsgCreateSection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
