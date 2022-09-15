package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

var _ = strconv.Itoa(0)

func CmdMetadata() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "metadata [full-track-id]",
		Short: "Query metadata",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqFullTrackID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryMetadataRequest{

				FullTrackID: reqFullTrackID,
			}

			res, err := queryClient.Metadata(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
