package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"metadata-layer-cosmos/x/metadatalayercosmos/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				SectionList: []types.Section{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				SectionCount: 2,
				StemList: []types.Stem{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				StemCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated section",
			genState: &types.GenesisState{
				SectionList: []types.Section{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid section count",
			genState: &types.GenesisState{
				SectionList: []types.Section{
					{
						Id: 1,
					},
				},
				SectionCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated stem",
			genState: &types.GenesisState{
				StemList: []types.Stem{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid stem count",
			genState: &types.GenesisState{
				StemList: []types.Stem{
					{
						Id: 1,
					},
				},
				StemCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
