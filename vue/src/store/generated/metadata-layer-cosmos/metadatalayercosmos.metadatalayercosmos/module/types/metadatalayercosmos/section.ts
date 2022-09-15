/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

export interface Section {
  id: number;
  sectionName: string;
  sectionStartTimeMs: number;
  sectionEndTimeMs: number;
  fullTrackID: number;
}

const baseSection: object = {
  id: 0,
  sectionName: "",
  sectionStartTimeMs: 0,
  sectionEndTimeMs: 0,
  fullTrackID: 0,
};

export const Section = {
  encode(message: Section, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sectionName !== "") {
      writer.uint32(18).string(message.sectionName);
    }
    if (message.sectionStartTimeMs !== 0) {
      writer.uint32(24).uint64(message.sectionStartTimeMs);
    }
    if (message.sectionEndTimeMs !== 0) {
      writer.uint32(32).uint64(message.sectionEndTimeMs);
    }
    if (message.fullTrackID !== 0) {
      writer.uint32(40).uint64(message.fullTrackID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Section {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSection } as Section;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sectionName = reader.string();
          break;
        case 3:
          message.sectionStartTimeMs = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.sectionEndTimeMs = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.fullTrackID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Section {
    const message = { ...baseSection } as Section;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
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
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    return message;
  },

  toJSON(message: Section): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sectionName !== undefined &&
      (obj.sectionName = message.sectionName);
    message.sectionStartTimeMs !== undefined &&
      (obj.sectionStartTimeMs = message.sectionStartTimeMs);
    message.sectionEndTimeMs !== undefined &&
      (obj.sectionEndTimeMs = message.sectionEndTimeMs);
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    return obj;
  },

  fromPartial(object: DeepPartial<Section>): Section {
    const message = { ...baseSection } as Section;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
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
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = object.fullTrackID;
    } else {
      message.fullTrackID = 0;
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
