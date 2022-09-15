package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

var _ = strconv.Itoa(0)

func CmdCreateStem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-stem [full-track-id] [stem-cid] [stem-name] [stem-type]",
		Short: "Broadcast message create-stem",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFullTrackID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argStemCid := args[1]
			argStemName := args[2]
			argStemType := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateStem(
				clientCtx.GetFromAddress().String(),
				argFullTrackID,
				argStemCid,
				argStemName,
				argStemType,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
