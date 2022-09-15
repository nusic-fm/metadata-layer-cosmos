package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SectionList: []Section{},
		StemList:    []Stem{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in section
	sectionIdMap := make(map[uint64]bool)
	sectionCount := gs.GetSectionCount()
	for _, elem := range gs.SectionList {
		if _, ok := sectionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for section")
		}
		if elem.Id >= sectionCount {
			return fmt.Errorf("section id should be lower or equal than the last id")
		}
		sectionIdMap[elem.Id] = true
	}
	// Check for duplicated ID in stem
	stemIdMap := make(map[uint64]bool)
	stemCount := gs.GetStemCount()
	for _, elem := range gs.StemList {
		if _, ok := stemIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for stem")
		}
		if elem.Id >= stemCount {
			return fmt.Errorf("stem id should be lower or equal than the last id")
		}
		stemIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
