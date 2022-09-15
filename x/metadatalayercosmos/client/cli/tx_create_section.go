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

func CmdCreateSection() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-section [full-track-id] [section-name] [section-start-time-ms] [section-end-time-ms]",
		Short: "Broadcast message create-section",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFullTrackID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argSectionName := args[1]
			argSectionStartTimeMs, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argSectionEndTimeMs, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSection(
				clientCtx.GetFromAddress().String(),
				argFullTrackID,
				argSectionName,
				argSectionStartTimeMs,
				argSectionEndTimeMs,
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
