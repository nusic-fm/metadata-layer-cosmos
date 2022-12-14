// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: metadatalayercosmos/stem.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Stem struct {
	Id          uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	StemCid     string `protobuf:"bytes,2,opt,name=stemCid,proto3" json:"stemCid,omitempty"`
	StemName    string `protobuf:"bytes,3,opt,name=stemName,proto3" json:"stemName,omitempty"`
	StemType    string `protobuf:"bytes,4,opt,name=stemType,proto3" json:"stemType,omitempty"`
	FullTrackID uint64 `protobuf:"varint,5,opt,name=fullTrackID,proto3" json:"fullTrackID,omitempty"`
}

func (m *Stem) Reset()         { *m = Stem{} }
func (m *Stem) String() string { return proto.CompactTextString(m) }
func (*Stem) ProtoMessage()    {}
func (*Stem) Descriptor() ([]byte, []int) {
	return fileDescriptor_5a703e952185c454, []int{0}
}
func (m *Stem) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Stem) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Stem.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Stem) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Stem.Merge(m, src)
}
func (m *Stem) XXX_Size() int {
	return m.Size()
}
func (m *Stem) XXX_DiscardUnknown() {
	xxx_messageInfo_Stem.DiscardUnknown(m)
}

var xxx_messageInfo_Stem proto.InternalMessageInfo

func (m *Stem) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Stem) GetStemCid() string {
	if m != nil {
		return m.StemCid
	}
	return ""
}

func (m *Stem) GetStemName() string {
	if m != nil {
		return m.StemName
	}
	return ""
}

func (m *Stem) GetStemType() string {
	if m != nil {
		return m.StemType
	}
	return ""
}

func (m *Stem) GetFullTrackID() uint64 {
	if m != nil {
		return m.FullTrackID
	}
	return 0
}

func init() {
	proto.RegisterType((*Stem)(nil), "metadatalayercosmos.metadatalayercosmos.Stem")
}

func init() { proto.RegisterFile("metadatalayercosmos/stem.proto", fileDescriptor_5a703e952185c454) }

var fileDescriptor_5a703e952185c454 = []byte{
	// 207 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcb, 0x4d, 0x2d, 0x49,
	0x4c, 0x49, 0x2c, 0x49, 0xcc, 0x49, 0xac, 0x4c, 0x2d, 0x4a, 0xce, 0x2f, 0xce, 0xcd, 0x2f, 0xd6,
	0x2f, 0x2e, 0x49, 0xcd, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x52, 0xc7, 0x22, 0xaf, 0x87,
	0x45, 0x4c, 0xa9, 0x8b, 0x91, 0x8b, 0x25, 0xb8, 0x24, 0x35, 0x57, 0x88, 0x8f, 0x8b, 0x29, 0x33,
	0x45, 0x82, 0x51, 0x81, 0x51, 0x83, 0x25, 0x88, 0x29, 0x33, 0x45, 0x48, 0x82, 0x8b, 0x1d, 0x64,
	0x9e, 0x73, 0x66, 0x8a, 0x04, 0x93, 0x02, 0xa3, 0x06, 0x67, 0x10, 0x8c, 0x2b, 0x24, 0xc5, 0xc5,
	0x01, 0x62, 0xfa, 0x25, 0xe6, 0xa6, 0x4a, 0x30, 0x83, 0xa5, 0xe0, 0x7c, 0x98, 0x5c, 0x48, 0x65,
	0x41, 0xaa, 0x04, 0x0b, 0x42, 0x0e, 0xc4, 0x17, 0x52, 0xe0, 0xe2, 0x4e, 0x2b, 0xcd, 0xc9, 0x09,
	0x29, 0x4a, 0x4c, 0xce, 0xf6, 0x74, 0x91, 0x60, 0x05, 0x5b, 0x85, 0x2c, 0xe4, 0xe4, 0x7d, 0xe2,
	0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70,
	0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51, 0x86, 0x30, 0xb7, 0xeb, 0x82, 0x1d, 0xaf,
	0x0b, 0xf5, 0x71, 0x85, 0x3e, 0xb6, 0x70, 0x28, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0x87,
	0x84, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x82, 0x6c, 0xc4, 0x80, 0x2b, 0x01, 0x00, 0x00,
}

func (m *Stem) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Stem) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Stem) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.FullTrackID != 0 {
		i = encodeVarintStem(dAtA, i, uint64(m.FullTrackID))
		i--
		dAtA[i] = 0x28
	}
	if len(m.StemType) > 0 {
		i -= len(m.StemType)
		copy(dAtA[i:], m.StemType)
		i = encodeVarintStem(dAtA, i, uint64(len(m.StemType)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.StemName) > 0 {
		i -= len(m.StemName)
		copy(dAtA[i:], m.StemName)
		i = encodeVarintStem(dAtA, i, uint64(len(m.StemName)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.StemCid) > 0 {
		i -= len(m.StemCid)
		copy(dAtA[i:], m.StemCid)
		i = encodeVarintStem(dAtA, i, uint64(len(m.StemCid)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintStem(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintStem(dAtA []byte, offset int, v uint64) int {
	offset -= sovStem(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Stem) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovStem(uint64(m.Id))
	}
	l = len(m.StemCid)
	if l > 0 {
		n += 1 + l + sovStem(uint64(l))
	}
	l = len(m.StemName)
	if l > 0 {
		n += 1 + l + sovStem(uint64(l))
	}
	l = len(m.StemType)
	if l > 0 {
		n += 1 + l + sovStem(uint64(l))
	}
	if m.FullTrackID != 0 {
		n += 1 + sovStem(uint64(m.FullTrackID))
	}
	return n
}

func sovStem(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozStem(x uint64) (n int) {
	return sovStem(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Stem) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowStem
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Stem: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Stem: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StemCid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StemCid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StemName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StemName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StemType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthStem
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthStem
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StemType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field FullTrackID", wireType)
			}
			m.FullTrackID = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowStem
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.FullTrackID |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipStem(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthStem
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipStem(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowStem
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowStem
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowStem
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthStem
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupStem
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthStem
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthStem        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowStem          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupStem = fmt.Errorf("proto: unexpected end of group")
)
