package keeper

import (
	"context"

	"metadata-layer-cosmos/x/metadatalayercosmos/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Metadata(goCtx context.Context, req *types.QueryMetadataRequest) (*types.QueryMetadataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Define a variable that will store a list of posts
	var sections []*types.Section
	var stems []*types.Stem

	// Get context with the information about the environment
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get the key-value module store using the store key (in this case store key is "chain")
	store := ctx.KVStore(k.storeKey)

	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	sectionStore := prefix.NewStore(store, []byte(types.SectionKey))

	// Get the post by ID
	fullTrack, _ := k.GetFullTrack(ctx, req.FullTrackID)

	// Get the post ID
	fullTrackID := fullTrack.Id

	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(sectionStore, req.Pagination, func(key []byte, value []byte) error {
		var comment types.Section
		if err := k.cdc.Unmarshal(value, &comment); err != nil {
			return err
		}

		if comment.FullTrackID == fullTrackID {
			sections = append(sections, &comment)
		}

		return nil
	})

	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	stemStore := prefix.NewStore(store, []byte(types.StemKey))
	// Paginate the posts store based on PageRequest
	_, stemErr := query.Paginate(stemStore, req.Pagination, func(key []byte, value []byte) error {
		var stem types.Stem
		if err := k.cdc.Unmarshal(value, &stem); err != nil {
			return err
		}

		if stem.FullTrackID == fullTrackID {
			stems = append(stems, &stem)
		}

		return nil
	})

	// Throw an error if pagination failed
	if stemErr != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	// Return a struct containing a list of posts and pagination info
	return &types.QueryMetadataResponse{FullTrack: &fullTrack, Sections: sections, Stems: stems, Pagination: pageRes}, nil
}
