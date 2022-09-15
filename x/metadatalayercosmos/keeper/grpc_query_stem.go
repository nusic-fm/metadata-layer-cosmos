package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func (k Keeper) StemAll(c context.Context, req *types.QueryAllStemRequest) (*types.QueryAllStemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var stems []types.Stem
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	stemStore := prefix.NewStore(store, types.KeyPrefix(types.StemKey))

	pageRes, err := query.Paginate(stemStore, req.Pagination, func(key []byte, value []byte) error {
		var stem types.Stem
		if err := k.cdc.Unmarshal(value, &stem); err != nil {
			return err
		}

		stems = append(stems, stem)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStemResponse{Stem: stems, Pagination: pageRes}, nil
}

func (k Keeper) Stem(c context.Context, req *types.QueryGetStemRequest) (*types.QueryGetStemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	stem, found := k.GetStem(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetStemResponse{Stem: stem}, nil
}
