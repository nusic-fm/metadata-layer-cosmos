package metadatalayercosmos

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"metadata-layer-cosmos/testutil/sample"
	metadatalayercosmossimulation "metadata-layer-cosmos/x/metadatalayercosmos/simulation"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = metadatalayercosmossimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateFullTrack = "op_weight_msg_create_full_track"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateFullTrack int = 100

	opWeightMsgCreateSection = "op_weight_msg_create_section"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSection int = 100

	opWeightMsgCreateStem = "op_weight_msg_create_stem"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateStem int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	metadatalayercosmosGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&metadatalayercosmosGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateFullTrack int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateFullTrack, &weightMsgCreateFullTrack, nil,
		func(_ *rand.Rand) {
			weightMsgCreateFullTrack = defaultWeightMsgCreateFullTrack
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateFullTrack,
		metadatalayercosmossimulation.SimulateMsgCreateFullTrack(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSection, &weightMsgCreateSection, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSection = defaultWeightMsgCreateSection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSection,
		metadatalayercosmossimulation.SimulateMsgCreateSection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateStem int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateStem, &weightMsgCreateStem, nil,
		func(_ *rand.Rand) {
			weightMsgCreateStem = defaultWeightMsgCreateStem
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateStem,
		metadatalayercosmossimulation.SimulateMsgCreateStem(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
