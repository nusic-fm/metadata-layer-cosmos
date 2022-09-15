package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateStem = "create_stem"

var _ sdk.Msg = &MsgCreateStem{}

func NewMsgCreateStem(creator string, fullTrackID uint64, stemCid string, stemName string, stemType string) *MsgCreateStem {
	return &MsgCreateStem{
		Creator:     creator,
		FullTrackID: fullTrackID,
		StemCid:     stemCid,
		StemName:    stemName,
		StemType:    stemType,
	}
}

func (msg *MsgCreateStem) Route() string {
	return RouterKey
}

func (msg *MsgCreateStem) Type() string {
	return TypeMsgCreateStem
}

func (msg *MsgCreateStem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateStem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateStem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
