/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

export interface Stem {
  id: number;
  stemCid: string;
  stemName: string;
  stemType: string;
  fullTrackID: number;
}

const baseStem: object = {
  id: 0,
  stemCid: "",
  stemName: "",
  stemType: "",
  fullTrackID: 0,
};

export const Stem = {
  encode(message: Stem, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.stemCid !== "") {
      writer.uint32(18).string(message.stemCid);
    }
    if (message.stemName !== "") {
      writer.uint32(26).string(message.stemName);
    }
    if (message.stemType !== "") {
      writer.uint32(34).string(message.stemType);
    }
    if (message.fullTrackID !== 0) {
      writer.uint32(40).uint64(message.fullTrackID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Stem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStem } as Stem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.stemCid = reader.string();
          break;
        case 3:
          message.stemName = reader.string();
          break;
        case 4:
          message.stemType = reader.string();
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

  fromJSON(object: any): Stem {
    const message = { ...baseStem } as Stem;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
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
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    return message;
  },

  toJSON(message: Stem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.stemCid !== undefined && (obj.stemCid = message.stemCid);
    message.stemName !== undefined && (obj.stemName = message.stemName);
    message.stemType !== undefined && (obj.stemType = message.stemType);
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    return obj;
  },

  fromPartial(object: DeepPartial<Stem>): Stem {
    const message = { ...baseStem } as Stem;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
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
