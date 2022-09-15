/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

export interface MsgCreateFullTrack {
  creator: string;
  cid: string;
  artistName: string;
  trackTitle: string;
  album: string;
  bpm: string;
  key: string;
  bars: string;
  beats: string;
  genre: string;
  timeSignature: string;
  durationMs: string;
  startBeatOffsetMs: string;
  sectionsCount: string;
  stemsCount: string;
  id: number;
}

export interface MsgCreateFullTrackResponse {
  id: number;
}

export interface MsgCreateSection {
  creator: string;
  fullTrackID: number;
  sectionName: string;
  sectionStartTimeMs: number;
  sectionEndTimeMs: number;
  id: number;
}

export interface MsgCreateSectionResponse {
  id: number;
}

export interface MsgCreateStem {
  creator: string;
  fullTrackID: number;
  stemCid: string;
  stemName: string;
  stemType: string;
  id: number;
}

export interface MsgCreateStemResponse {
  id: number;
}

const baseMsgCreateFullTrack: object = {
  creator: "",
  cid: "",
  artistName: "",
  trackTitle: "",
  album: "",
  bpm: "",
  key: "",
  bars: "",
  beats: "",
  genre: "",
  timeSignature: "",
  durationMs: "",
  startBeatOffsetMs: "",
  sectionsCount: "",
  stemsCount: "",
  id: 0,
};

export const MsgCreateFullTrack = {
  encode(
    message: MsgCreateFullTrack,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.artistName !== "") {
      writer.uint32(26).string(message.artistName);
    }
    if (message.trackTitle !== "") {
      writer.uint32(34).string(message.trackTitle);
    }
    if (message.album !== "") {
      writer.uint32(42).string(message.album);
    }
    if (message.bpm !== "") {
      writer.uint32(50).string(message.bpm);
    }
    if (message.key !== "") {
      writer.uint32(58).string(message.key);
    }
    if (message.bars !== "") {
      writer.uint32(66).string(message.bars);
    }
    if (message.beats !== "") {
      writer.uint32(74).string(message.beats);
    }
    if (message.genre !== "") {
      writer.uint32(82).string(message.genre);
    }
    if (message.timeSignature !== "") {
      writer.uint32(90).string(message.timeSignature);
    }
    if (message.durationMs !== "") {
      writer.uint32(98).string(message.durationMs);
    }
    if (message.startBeatOffsetMs !== "") {
      writer.uint32(106).string(message.startBeatOffsetMs);
    }
    if (message.sectionsCount !== "") {
      writer.uint32(114).string(message.sectionsCount);
    }
    if (message.stemsCount !== "") {
      writer.uint32(122).string(message.stemsCount);
    }
    if (message.id !== 0) {
      writer.uint32(128).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateFullTrack {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateFullTrack } as MsgCreateFullTrack;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.artistName = reader.string();
          break;
        case 4:
          message.trackTitle = reader.string();
          break;
        case 5:
          message.album = reader.string();
          break;
        case 6:
          message.bpm = reader.string();
          break;
        case 7:
          message.key = reader.string();
          break;
        case 8:
          message.bars = reader.string();
          break;
        case 9:
          message.beats = reader.string();
          break;
        case 10:
          message.genre = reader.string();
          break;
        case 11:
          message.timeSignature = reader.string();
          break;
        case 12:
          message.durationMs = reader.string();
          break;
        case 13:
          message.startBeatOffsetMs = reader.string();
          break;
        case 14:
          message.sectionsCount = reader.string();
          break;
        case 15:
          message.stemsCount = reader.string();
          break;
        case 16:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFullTrack {
    const message = { ...baseMsgCreateFullTrack } as MsgCreateFullTrack;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.artistName !== undefined && object.artistName !== null) {
      message.artistName = String(object.artistName);
    } else {
      message.artistName = "";
    }
    if (object.trackTitle !== undefined && object.trackTitle !== null) {
      message.trackTitle = String(object.trackTitle);
    } else {
      message.trackTitle = "";
    }
    if (object.album !== undefined && object.album !== null) {
      message.album = String(object.album);
    } else {
      message.album = "";
    }
    if (object.bpm !== undefined && object.bpm !== null) {
      message.bpm = String(object.bpm);
    } else {
      message.bpm = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.bars !== undefined && object.bars !== null) {
      message.bars = String(object.bars);
    } else {
      message.bars = "";
    }
    if (object.beats !== undefined && object.beats !== null) {
      message.beats = String(object.beats);
    } else {
      message.beats = "";
    }
    if (object.genre !== undefined && object.genre !== null) {
      message.genre = String(object.genre);
    } else {
      message.genre = "";
    }
    if (object.timeSignature !== undefined && object.timeSignature !== null) {
      message.timeSignature = String(object.timeSignature);
    } else {
      message.timeSignature = "";
    }
    if (object.durationMs !== undefined && object.durationMs !== null) {
      message.durationMs = String(object.durationMs);
    } else {
      message.durationMs = "";
    }
    if (
      object.startBeatOffsetMs !== undefined &&
      object.startBeatOffsetMs !== null
    ) {
      message.startBeatOffsetMs = String(object.startBeatOffsetMs);
    } else {
      message.startBeatOffsetMs = "";
    }
    if (object.sectionsCount !== undefined && object.sectionsCount !== null) {
      message.sectionsCount = String(object.sectionsCount);
    } else {
      message.sectionsCount = "";
    }
    if (object.stemsCount !== undefined && object.stemsCount !== null) {
      message.stemsCount = String(object.stemsCount);
    } else {
      message.stemsCount = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFullTrack): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cid !== undefined && (obj.cid = message.cid);
    message.artistName !== undefined && (obj.artistName = message.artistName);
    message.trackTitle !== undefined && (obj.trackTitle = message.trackTitle);
    message.album !== undefined && (obj.album = message.album);
    message.bpm !== undefined && (obj.bpm = message.bpm);
    message.key !== undefined && (obj.key = message.key);
    message.bars !== undefined && (obj.bars = message.bars);
    message.beats !== undefined && (obj.beats = message.beats);
    message.genre !== undefined && (obj.genre = message.genre);
    message.timeSignature !== undefined &&
      (obj.timeSignature = message.timeSignature);
    message.durationMs !== undefined && (obj.durationMs = message.durationMs);
    message.startBeatOffsetMs !== undefined &&
      (obj.startBeatOffsetMs = message.startBeatOffsetMs);
    message.sectionsCount !== undefined &&
      (obj.sectionsCount = message.sectionsCount);
    message.stemsCount !== undefined && (obj.stemsCount = message.stemsCount);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateFullTrack>): MsgCreateFullTrack {
    const message = { ...baseMsgCreateFullTrack } as MsgCreateFullTrack;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.artistName !== undefined && object.artistName !== null) {
      message.artistName = object.artistName;
    } else {
      message.artistName = "";
    }
    if (object.trackTitle !== undefined && object.trackTitle !== null) {
      message.trackTitle = object.trackTitle;
    } else {
      message.trackTitle = "";
    }
    if (object.album !== undefined && object.album !== null) {
      message.album = object.album;
    } else {
      message.album = "";
    }
    if (object.bpm !== undefined && object.bpm !== null) {
      message.bpm = object.bpm;
    } else {
      message.bpm = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.bars !== undefined && object.bars !== null) {
      message.bars = object.bars;
    } else {
      message.bars = "";
    }
    if (object.beats !== undefined && object.beats !== null) {
      message.beats = object.beats;
    } else {
      message.beats = "";
    }
    if (object.genre !== undefined && object.genre !== null) {
      message.genre = object.genre;
    } else {
      message.genre = "";
    }
    if (object.timeSignature !== undefined && object.timeSignature !== null) {
      message.timeSignature = object.timeSignature;
    } else {
      message.timeSignature = "";
    }
    if (object.durationMs !== undefined && object.durationMs !== null) {
      message.durationMs = object.durationMs;
    } else {
      message.durationMs = "";
    }
    if (
      object.startBeatOffsetMs !== undefined &&
      object.startBeatOffsetMs !== null
    ) {
      message.startBeatOffsetMs = object.startBeatOffsetMs;
    } else {
      message.startBeatOffsetMs = "";
    }
    if (object.sectionsCount !== undefined && object.sectionsCount !== null) {
      message.sectionsCount = object.sectionsCount;
    } else {
      message.sectionsCount = "";
    }
    if (object.stemsCount !== undefined && object.stemsCount !== null) {
      message.stemsCount = object.stemsCount;
    } else {
      message.stemsCount = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateFullTrackResponse: object = { id: 0 };

export const MsgCreateFullTrackResponse = {
  encode(
    message: MsgCreateFullTrackResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFullTrackResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFullTrackResponse,
    } as MsgCreateFullTrackResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFullTrackResponse {
    const message = {
      ...baseMsgCreateFullTrackResponse,
    } as MsgCreateFullTrackResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateFullTrackResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFullTrackResponse>
  ): MsgCreateFullTrackResponse {
    const message = {
      ...baseMsgCreateFullTrackResponse,
    } as MsgCreateFullTrackResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateSection: object = {
  creator: "",
  fullTrackID: 0,
  sectionName: "",
  sectionStartTimeMs: 0,
  sectionEndTimeMs: 0,
  id: 0,
};

export const MsgCreateSection = {
  encode(message: MsgCreateSection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fullTrackID !== 0) {
      writer.uint32(16).uint64(message.fullTrackID);
    }
    if (message.sectionName !== "") {
      writer.uint32(26).string(message.sectionName);
    }
    if (message.sectionStartTimeMs !== 0) {
      writer.uint32(32).uint64(message.sectionStartTimeMs);
    }
    if (message.sectionEndTimeMs !== 0) {
      writer.uint32(40).uint64(message.sectionEndTimeMs);
    }
    if (message.id !== 0) {
      writer.uint32(48).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSection } as MsgCreateSection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fullTrackID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sectionName = reader.string();
          break;
        case 4:
          message.sectionStartTimeMs = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.sectionEndTimeMs = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSection {
    const message = { ...baseMsgCreateSection } as MsgCreateSection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    if (object.sectionName !== undefined && object.sectionName !== null) {
      message.sectionName = String(object.sectionName);
    } else {
      message.sectionName = "";
    }
    if (
      object.sectionStartTimeMs !== undefined &&
      object.sectionStartTimeMs !== null
    ) {
      message.sectionStartTimeMs = Number(object.sectionStartTimeMs);
    } else {
      message.sectionStartTimeMs = 0;
    }
    if (
      object.sectionEndTimeMs !== undefined &&
      object.sectionEndTimeMs !== null
    ) {
      message.sectionEndTimeMs = Number(object.sectionEndTimeMs);
    } else {
      message.sectionEndTimeMs = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    message.sectionName !== undefined &&
      (obj.sectionName = message.sectionName);
    message.sectionStartTimeMs !== undefined &&
      (obj.sectionStartTimeMs = message.sectionStartTimeMs);
    message.sectionEndTimeMs !== undefined &&
      (obj.sectionEndTimeMs = message.sectionEndTimeMs);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSection>): MsgCreateSection {
    const message = { ...baseMsgCreateSection } as MsgCreateSection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = object.fullTrackID;
    } else {
      message.fullTrackID = 0;
    }
    if (object.sectionName !== undefined && object.sectionName !== null) {
      message.sectionName = object.sectionName;
    } else {
      message.sectionName = "";
    }
    if (
      object.sectionStartTimeMs !== undefined &&
      object.sectionStartTimeMs !== null
    ) {
      message.sectionStartTimeMs = object.sectionStartTimeMs;
    } else {
      message.sectionStartTimeMs = 0;
    }
    if (
      object.sectionEndTimeMs !== undefined &&
      object.sectionEndTimeMs !== null
    ) {
      message.sectionEndTimeMs = object.sectionEndTimeMs;
    } else {
      message.sectionEndTimeMs = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateSectionResponse: object = { id: 0 };

export const MsgCreateSectionResponse = {
  encode(
    message: MsgCreateSectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSectionResponse,
    } as MsgCreateSectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSectionResponse {
    const message = {
      ...baseMsgCreateSectionResponse,
    } as MsgCreateSectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSectionResponse>
  ): MsgCreateSectionResponse {
    const message = {
      ...baseMsgCreateSectionResponse,
    } as MsgCreateSectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateStem: object = {
  creator: "",
  fullTrackID: 0,
  stemCid: "",
  stemName: "",
  stemType: "",
  id: 0,
};

export const MsgCreateStem = {
  encode(message: MsgCreateStem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fullTrackID !== 0) {
      writer.uint32(16).uint64(message.fullTrackID);
    }
    if (message.stemCid !== "") {
      writer.uint32(26).string(message.stemCid);
    }
    if (message.stemName !== "") {
      writer.uint32(34).string(message.stemName);
    }
    if (message.stemType !== "") {
      writer.uint32(42).string(message.stemType);
    }
    if (message.id !== 0) {
      writer.uint32(48).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStem } as MsgCreateStem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fullTrackID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.stemCid = reader.string();
          break;
        case 4:
          message.stemName = reader.string();
          break;
        case 5:
          message.stemType = reader.string();
          break;
        case 6:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStem {
    const message = { ...baseMsgCreateStem } as MsgCreateStem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    if (object.stemCid !== undefined && object.stemCid !== null) {
      message.stemCid = String(object.stemCid);
    } else {
      message.stemCid = "";
    }
    if (object.stemName !== undefined && object.stemName !== null) {
      message.stemName = String(object.stemName);
    } else {
      message.stemName = "";
    }
    if (object.stemType !== undefined && object.stemType !== null) {
      message.stemType = String(object.stemType);
    } else {
      message.stemType = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateStem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    message.stemCid !== undefined && (obj.stemCid = message.stemCid);
    message.stemName !== undefined && (obj.stemName = message.stemName);
    message.stemType !== undefined && (obj.stemType = message.stemType);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateStem>): MsgCreateStem {
    const message = { ...baseMsgCreateStem } as MsgCreateStem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = object.fullTrackID;
    } else {
      message.fullTrackID = 0;
    }
    if (object.stemCid !== undefined && object.stemCid !== null) {
      message.stemCid = object.stemCid;
    } else {
      message.stemCid = "";
    }
    if (object.stemName !== undefined && object.stemName !== null) {
      message.stemName = object.stemName;
    } else {
      message.stemName = "";
    }
    if (object.stemType !== undefined && object.stemType !== null) {
      message.stemType = object.stemType;
    } else {
      message.stemType = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateStemResponse: object = { id: 0 };

export const MsgCreateStemResponse = {
  encode(
    message: MsgCreateStemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStemResponse } as MsgCreateStemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStemResponse {
    const message = { ...baseMsgCreateStemResponse } as MsgCreateStemResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateStemResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateStemResponse>
  ): MsgCreateStemResponse {
    const message = { ...baseMsgCreateStemResponse } as MsgCreateStemResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateFullTrack(
    request: MsgCreateFullTrack
  ): Promise<MsgCreateFullTrackResponse>;
  CreateSection(request: MsgCreateSection): Promise<MsgCreateSectionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateStem(request: MsgCreateStem): Promise<MsgCreateStemResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateFullTrack(
    request: MsgCreateFullTrack
  ): Promise<MsgCreateFullTrackResponse> {
    const data = MsgCreateFullTrack.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Msg",
      "CreateFullTrack",
      data
    );
    return promise.then((data) =>
      MsgCreateFullTrackResponse.decode(new Reader(data))
    );
  }

  CreateSection(request: MsgCreateSection): Promise<MsgCreateSectionResponse> {
    const data = MsgCreateSection.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Msg",
      "CreateSection",
      data
    );
    return promise.then((data) =>
      MsgCreateSectionResponse.decode(new Reader(data))
    );
  }

  CreateStem(request: MsgCreateStem): Promise<MsgCreateStemResponse> {
    const data = MsgCreateStem.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Msg",
      "CreateStem",
      data
    );
    return promise.then((data) =>
      MsgCreateStemResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
