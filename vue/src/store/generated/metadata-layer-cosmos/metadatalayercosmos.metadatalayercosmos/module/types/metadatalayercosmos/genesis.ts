/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../metadatalayercosmos/params";
import { Section } from "../metadatalayercosmos/section";
import { Stem } from "../metadatalayercosmos/stem";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

/** GenesisState defines the metadatalayercosmos module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  sectionList: Section[];
  sectionCount: number;
  stemList: Stem[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  stemCount: number;
}

const baseGenesisState: object = { sectionCount: 0, stemCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sectionList) {
      Section.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sectionCount !== 0) {
      writer.uint32(24).uint64(message.sectionCount);
    }
    for (const v of message.stemList) {
      Stem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.stemCount !== 0) {
      writer.uint32(40).uint64(message.stemCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.sectionList = [];
    message.stemList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.sectionList.push(Section.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sectionCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.stemList.push(Stem.decode(reader, reader.uint32()));
          break;
        case 5:
          message.stemCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sectionList = [];
    message.stemList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.sectionList !== undefined && object.sectionList !== null) {
      for (const e of object.sectionList) {
        message.sectionList.push(Section.fromJSON(e));
      }
    }
    if (object.sectionCount !== undefined && object.sectionCount !== null) {
      message.sectionCount = Number(object.sectionCount);
    } else {
      message.sectionCount = 0;
    }
    if (object.stemList !== undefined && object.stemList !== null) {
      for (const e of object.stemList) {
        message.stemList.push(Stem.fromJSON(e));
      }
    }
    if (object.stemCount !== undefined && object.stemCount !== null) {
      message.stemCount = Number(object.stemCount);
    } else {
      message.stemCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.sectionList) {
      obj.sectionList = message.sectionList.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.sectionList = [];
    }
    message.sectionCount !== undefined &&
      (obj.sectionCount = message.sectionCount);
    if (message.stemList) {
      obj.stemList = message.stemList.map((e) =>
        e ? Stem.toJSON(e) : undefined
      );
    } else {
      obj.stemList = [];
    }
    message.stemCount !== undefined && (obj.stemCount = message.stemCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sectionList = [];
    message.stemList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.sectionList !== undefined && object.sectionList !== null) {
      for (const e of object.sectionList) {
        message.sectionList.push(Section.fromPartial(e));
      }
    }
    if (object.sectionCount !== undefined && object.sectionCount !== null) {
      message.sectionCount = object.sectionCount;
    } else {
      message.sectionCount = 0;
    }
    if (object.stemList !== undefined && object.stemList !== null) {
      for (const e of object.stemList) {
        message.stemList.push(Stem.fromPartial(e));
      }
    }
    if (object.stemCount !== undefined && object.stemCount !== null) {
      message.stemCount = object.stemCount;
    } else {
      message.stemCount = 0;
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
