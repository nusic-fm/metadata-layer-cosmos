package types

const (
	// ModuleName defines the module name
	ModuleName = "metadatalayercosmos"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_metadatalayercosmos"

	// Keep track of the index of posts
	FullTrackKey      = "FullTrack-value-"
	FullTrackCountKey = "FullTrack-count-"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	SectionKey      = "Section-value-"
	SectionCountKey = "Section-count-"
)

const (
	StemKey      = "Stem-value-"
	StemCountKey = "Stem-count-"
)
