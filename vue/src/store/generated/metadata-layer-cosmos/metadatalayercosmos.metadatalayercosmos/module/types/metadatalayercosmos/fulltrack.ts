/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

export interface FullTrack {
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

const baseFullTrack: object = {
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

export const FullTrack = {
  encode(message: FullTrack, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): FullTrack {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFullTrack } as FullTrack;
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

  fromJSON(object: any): FullTrack {
    const message = { ...baseFullTrack } as FullTrack;
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

  toJSON(message: FullTrack): unknown {
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

  fromPartial(object: DeepPartial<FullTrack>): FullTrack {
    const message = { ...baseFullTrack } as FullTrack;
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
