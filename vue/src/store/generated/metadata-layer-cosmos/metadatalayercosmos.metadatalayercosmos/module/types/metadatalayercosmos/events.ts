/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

/** proto/blog/events.proto */

export interface EventFullTrackCreated {
  Id: number;
  address: string;
}

const baseEventFullTrackCreated: object = { Id: 0, address: "" };

export const EventFullTrackCreated = {
  encode(
    message: EventFullTrackCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Id !== 0) {
      writer.uint32(8).uint64(message.Id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventFullTrackCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventFullTrackCreated } as EventFullTrackCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventFullTrackCreated {
    const message = { ...baseEventFullTrackCreated } as EventFullTrackCreated;
    if (object.Id !== undefined && object.Id !== null) {
      message.Id = Number(object.Id);
    } else {
      message.Id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventFullTrackCreated): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventFullTrackCreated>
  ): EventFullTrackCreated {
    const message = { ...baseEventFullTrackCreated } as EventFullTrackCreated;
    if (object.Id !== undefined && object.Id !== null) {
      message.Id = object.Id;
    } else {
      message.Id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
