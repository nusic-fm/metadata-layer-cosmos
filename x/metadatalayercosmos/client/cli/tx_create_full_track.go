package cli

import (
	"strconv"

	"metadata-layer-cosmos/x/metadatalayercosmos/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateFullTrack() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-full-track [cid] [artist-name] [track-title] [album] [bpm] [key] [bars] [beats] [genre] [time-signature] [duration-ms] [start-beat-offset-ms] [sections-count] [stems-count]",
		Short: "Broadcast message createFullTrack",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCid := args[0]
			argArtistName := args[1]
			argTrackTitle := args[2]
			argAlbum := args[3]
			argBpm := args[4]
			argKey := args[5]
			argBars := args[6]
			argBeats := args[7]
			argGenre := args[8]
			argTimeSignature := args[9]
			argDurationMs := args[10]
			argStartBeatOffsetMs := args[11]
			argSectionsCount := args[12]
			argStemsCount := args[13]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateFullTrack(
				clientCtx.GetFromAddress().String(),
				argCid,
				argArtistName,
				argTrackTitle,
				argAlbum,
				argBpm,
				argKey,
				argBars,
				argBeats,
				argGenre,
				argTimeSignature,
				argDurationMs,
				argStartBeatOffsetMs,
				argSectionsCount,
				argStemsCount,
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
