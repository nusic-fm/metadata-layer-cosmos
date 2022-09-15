package metadatalayercosmos

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"metadata-layer-cosmos/x/metadatalayercosmos/keeper"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the section
	for _, elem := range genState.SectionList {
		k.SetSection(ctx, elem)
	}

	// Set section count
	k.SetSectionCount(ctx, genState.SectionCount)
	// Set all the stem
	for _, elem := range genState.StemList {
		k.SetStem(ctx, elem)
	}

	// Set stem count
	k.SetStemCount(ctx, genState.StemCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.SectionList = k.GetAllSection(ctx)
	genesis.SectionCount = k.GetSectionCount(ctx)
	genesis.StemList = k.GetAllStem(ctx)
	genesis.StemCount = k.GetStemCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
