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

func (k Keeper) Sections(goCtx context.Context, req *types.QuerySectionsRequest) (*types.QuerySectionsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Define a variable that will store a list of posts
	var sections []*types.Section

	// Get context with the information about the environment
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get the key-value module store using the store key (in this case store key is "chain")
	store := ctx.KVStore(k.storeKey)

	// Get the part of the store that keeps posts (using post key, which is "Post-value-")
	commentStore := prefix.NewStore(store, []byte(types.SectionKey))

	// Get the post by ID
	post, _ := k.GetFullTrack(ctx, req.FullTrackID)

	// Get the post ID
	postID := post.Id

	// Paginate the posts store based on PageRequest
	pageRes, err := query.Paginate(commentStore, req.Pagination, func(key []byte, value []byte) error {
		var comment types.Section
		if err := k.cdc.Unmarshal(value, &comment); err != nil {
			return err
		}

		if comment.FullTrackID == postID {
			sections = append(sections, &comment)
		}

		return nil
	})

	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	// Return a struct containing a list of posts and pagination info
	return &types.QuerySectionsResponse{FullTrack: &post, Sections: sections, Pagination: pageRes}, nil
	// return &types.QuerySectionsResponse{}, nil
}
