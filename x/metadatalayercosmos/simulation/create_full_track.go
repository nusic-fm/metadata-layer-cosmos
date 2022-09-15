package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"metadata-layer-cosmos/x/metadatalayercosmos/keeper"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func SimulateMsgCreateFullTrack(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateFullTrack{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateFullTrack simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateFullTrack simulation not implemented"), nil, nil
	}
}
