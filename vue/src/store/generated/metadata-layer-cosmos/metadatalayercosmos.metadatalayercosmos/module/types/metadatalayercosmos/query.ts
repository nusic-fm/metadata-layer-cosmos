/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../metadatalayercosmos/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { FullTrack } from "../metadatalayercosmos/fulltrack";
import { Section } from "../metadatalayercosmos/section";
import { Stem } from "../metadatalayercosmos/stem";

export const protobufPackage = "metadatalayercosmos.metadatalayercosmos";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryFullTracksRequest {
  pagination: PageRequest | undefined;
}

export interface QueryFullTracksResponse {
  /** Returning a list of posts */
  FullTrack: FullTrack[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetSectionRequest {
  id: number;
}

export interface QueryGetSectionResponse {
  Section: Section | undefined;
}

export interface QueryAllSectionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSectionResponse {
  Section: Section[];
  pagination: PageResponse | undefined;
}

export interface QuerySectionsRequest {
  fullTrackID: number;
  pagination: PageRequest | undefined;
}

export interface QuerySectionsResponse {
  fullTrack: FullTrack | undefined;
  /** Returning a list of comments */
  sections: Section[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetStemRequest {
  id: number;
}

export interface QueryGetStemResponse {
  Stem: Stem | undefined;
}

export interface QueryAllStemRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStemResponse {
  Stem: Stem[];
  pagination: PageResponse | undefined;
}

export interface QueryStemsRequest {
  fullTrackID: number;
  pagination: PageRequest | undefined;
}

export interface QueryStemsResponse {
  fullTrack: FullTrack | undefined;
  /** Returning a list of comments */
  stems: Stem[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryMetadataRequest {
  fullTrackID: number;
  pagination: PageRequest | undefined;
}

export interface QueryMetadataResponse {
  fullTrack: FullTrack | undefined;
  sections: Section[];
  /** Returning a list of comments */
  stems: Stem[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryFullTracksRequest: object = {};

export const QueryFullTracksRequest = {
  encode(
    message: QueryFullTracksRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryFullTracksRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryFullTracksRequest } as QueryFullTracksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFullTracksRequest {
    const message = { ...baseQueryFullTracksRequest } as QueryFullTracksRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFullTracksRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFullTracksRequest>
  ): QueryFullTracksRequest {
    const message = { ...baseQueryFullTracksRequest } as QueryFullTracksRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryFullTracksResponse: object = {};

export const QueryFullTracksResponse = {
  encode(
    message: QueryFullTracksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.FullTrack) {
      FullTrack.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryFullTracksResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFullTracksResponse,
    } as QueryFullTracksResponse;
    message.FullTrack = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FullTrack.push(FullTrack.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFullTracksResponse {
    const message = {
      ...baseQueryFullTracksResponse,
    } as QueryFullTracksResponse;
    message.FullTrack = [];
    if (object.FullTrack !== undefined && object.FullTrack !== null) {
      for (const e of object.FullTrack) {
        message.FullTrack.push(FullTrack.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryFullTracksResponse): unknown {
    const obj: any = {};
    if (message.FullTrack) {
      obj.FullTrack = message.FullTrack.map((e) =>
        e ? FullTrack.toJSON(e) : undefined
      );
    } else {
      obj.FullTrack = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFullTracksResponse>
  ): QueryFullTracksResponse {
    const message = {
      ...baseQueryFullTracksResponse,
    } as QueryFullTracksResponse;
    message.FullTrack = [];
    if (object.FullTrack !== undefined && object.FullTrack !== null) {
      for (const e of object.FullTrack) {
        message.FullTrack.push(FullTrack.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSectionRequest: object = { id: 0 };

export const QueryGetSectionRequest = {
  encode(
    message: QueryGetSectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSectionRequest } as QueryGetSectionRequest;
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

  fromJSON(object: any): QueryGetSectionRequest {
    const message = { ...baseQueryGetSectionRequest } as QueryGetSectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSectionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionRequest>
  ): QueryGetSectionRequest {
    const message = { ...baseQueryGetSectionRequest } as QueryGetSectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetSectionResponse: object = {};

export const QueryGetSectionResponse = {
  encode(
    message: QueryGetSectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Section !== undefined) {
      Section.encode(message.Section, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSectionResponse,
    } as QueryGetSectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Section = Section.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSectionResponse {
    const message = {
      ...baseQueryGetSectionResponse,
    } as QueryGetSectionResponse;
    if (object.Section !== undefined && object.Section !== null) {
      message.Section = Section.fromJSON(object.Section);
    } else {
      message.Section = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSectionResponse): unknown {
    const obj: any = {};
    message.Section !== undefined &&
      (obj.Section = message.Section
        ? Section.toJSON(message.Section)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionResponse>
  ): QueryGetSectionResponse {
    const message = {
      ...baseQueryGetSectionResponse,
    } as QueryGetSectionResponse;
    if (object.Section !== undefined && object.Section !== null) {
      message.Section = Section.fromPartial(object.Section);
    } else {
      message.Section = undefined;
    }
    return message;
  },
};

const baseQueryAllSectionRequest: object = {};

export const QueryAllSectionRequest = {
  encode(
    message: QueryAllSectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSectionRequest } as QueryAllSectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSectionRequest {
    const message = { ...baseQueryAllSectionRequest } as QueryAllSectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSectionRequest>
  ): QueryAllSectionRequest {
    const message = { ...baseQueryAllSectionRequest } as QueryAllSectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSectionResponse: object = {};

export const QueryAllSectionResponse = {
  encode(
    message: QueryAllSectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Section) {
      Section.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSectionResponse,
    } as QueryAllSectionResponse;
    message.Section = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Section.push(Section.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSectionResponse {
    const message = {
      ...baseQueryAllSectionResponse,
    } as QueryAllSectionResponse;
    message.Section = [];
    if (object.Section !== undefined && object.Section !== null) {
      for (const e of object.Section) {
        message.Section.push(Section.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSectionResponse): unknown {
    const obj: any = {};
    if (message.Section) {
      obj.Section = message.Section.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.Section = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSectionResponse>
  ): QueryAllSectionResponse {
    const message = {
      ...baseQueryAllSectionResponse,
    } as QueryAllSectionResponse;
    message.Section = [];
    if (object.Section !== undefined && object.Section !== null) {
      for (const e of object.Section) {
        message.Section.push(Section.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySectionsRequest: object = { fullTrackID: 0 };

export const QuerySectionsRequest = {
  encode(
    message: QuerySectionsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fullTrackID !== 0) {
      writer.uint32(8).uint64(message.fullTrackID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySectionsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySectionsRequest } as QuerySectionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullTrackID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySectionsRequest {
    const message = { ...baseQuerySectionsRequest } as QuerySectionsRequest;
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySectionsRequest): unknown {
    const obj: any = {};
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySectionsRequest>): QuerySectionsRequest {
    const message = { ...baseQuerySectionsRequest } as QuerySectionsRequest;
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = object.fullTrackID;
    } else {
      message.fullTrackID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySectionsResponse: object = {};

export const QuerySectionsResponse = {
  encode(
    message: QuerySectionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fullTrack !== undefined) {
      FullTrack.encode(message.fullTrack, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sections) {
      Section.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySectionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySectionsResponse } as QuerySectionsResponse;
    message.sections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullTrack = FullTrack.decode(reader, reader.uint32());
          break;
        case 2:
          message.sections.push(Section.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySectionsResponse {
    const message = { ...baseQuerySectionsResponse } as QuerySectionsResponse;
    message.sections = [];
    if (object.fullTrack !== undefined && object.fullTrack !== null) {
      message.fullTrack = FullTrack.fromJSON(object.fullTrack);
    } else {
      message.fullTrack = undefined;
    }
    if (object.sections !== undefined && object.sections !== null) {
      for (const e of object.sections) {
        message.sections.push(Section.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySectionsResponse): unknown {
    const obj: any = {};
    message.fullTrack !== undefined &&
      (obj.fullTrack = message.fullTrack
        ? FullTrack.toJSON(message.fullTrack)
        : undefined);
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.sections = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySectionsResponse>
  ): QuerySectionsResponse {
    const message = { ...baseQuerySectionsResponse } as QuerySectionsResponse;
    message.sections = [];
    if (object.fullTrack !== undefined && object.fullTrack !== null) {
      message.fullTrack = FullTrack.fromPartial(object.fullTrack);
    } else {
      message.fullTrack = undefined;
    }
    if (object.sections !== undefined && object.sections !== null) {
      for (const e of object.sections) {
        message.sections.push(Section.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetStemRequest: object = { id: 0 };

export const QueryGetStemRequest = {
  encode(
    message: QueryGetStemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetStemRequest } as QueryGetStemRequest;
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

  fromJSON(object: any): QueryGetStemRequest {
    const message = { ...baseQueryGetStemRequest } as QueryGetStemRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetStemRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetStemRequest>): QueryGetStemRequest {
    const message = { ...baseQueryGetStemRequest } as QueryGetStemRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetStemResponse: object = {};

export const QueryGetStemResponse = {
  encode(
    message: QueryGetStemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Stem !== undefined) {
      Stem.encode(message.Stem, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetStemResponse } as QueryGetStemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Stem = Stem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStemResponse {
    const message = { ...baseQueryGetStemResponse } as QueryGetStemResponse;
    if (object.Stem !== undefined && object.Stem !== null) {
      message.Stem = Stem.fromJSON(object.Stem);
    } else {
      message.Stem = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStemResponse): unknown {
    const obj: any = {};
    message.Stem !== undefined &&
      (obj.Stem = message.Stem ? Stem.toJSON(message.Stem) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetStemResponse>): QueryGetStemResponse {
    const message = { ...baseQueryGetStemResponse } as QueryGetStemResponse;
    if (object.Stem !== undefined && object.Stem !== null) {
      message.Stem = Stem.fromPartial(object.Stem);
    } else {
      message.Stem = undefined;
    }
    return message;
  },
};

const baseQueryAllStemRequest: object = {};

export const QueryAllStemRequest = {
  encode(
    message: QueryAllStemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllStemRequest } as QueryAllStemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStemRequest {
    const message = { ...baseQueryAllStemRequest } as QueryAllStemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStemRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllStemRequest>): QueryAllStemRequest {
    const message = { ...baseQueryAllStemRequest } as QueryAllStemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStemResponse: object = {};

export const QueryAllStemResponse = {
  encode(
    message: QueryAllStemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Stem) {
      Stem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllStemResponse } as QueryAllStemResponse;
    message.Stem = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Stem.push(Stem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStemResponse {
    const message = { ...baseQueryAllStemResponse } as QueryAllStemResponse;
    message.Stem = [];
    if (object.Stem !== undefined && object.Stem !== null) {
      for (const e of object.Stem) {
        message.Stem.push(Stem.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStemResponse): unknown {
    const obj: any = {};
    if (message.Stem) {
      obj.Stem = message.Stem.map((e) => (e ? Stem.toJSON(e) : undefined));
    } else {
      obj.Stem = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllStemResponse>): QueryAllStemResponse {
    const message = { ...baseQueryAllStemResponse } as QueryAllStemResponse;
    message.Stem = [];
    if (object.Stem !== undefined && object.Stem !== null) {
      for (const e of object.Stem) {
        message.Stem.push(Stem.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryStemsRequest: object = { fullTrackID: 0 };

export const QueryStemsRequest = {
  encode(message: QueryStemsRequest, writer: Writer = Writer.create()): Writer {
    if (message.fullTrackID !== 0) {
      writer.uint32(8).uint64(message.fullTrackID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStemsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStemsRequest } as QueryStemsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullTrackID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStemsRequest {
    const message = { ...baseQueryStemsRequest } as QueryStemsRequest;
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryStemsRequest): unknown {
    const obj: any = {};
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStemsRequest>): QueryStemsRequest {
    const message = { ...baseQueryStemsRequest } as QueryStemsRequest;
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = object.fullTrackID;
    } else {
      message.fullTrackID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryStemsResponse: object = {};

export const QueryStemsResponse = {
  encode(
    message: QueryStemsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fullTrack !== undefined) {
      FullTrack.encode(message.fullTrack, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stems) {
      Stem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStemsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStemsResponse } as QueryStemsResponse;
    message.stems = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullTrack = FullTrack.decode(reader, reader.uint32());
          break;
        case 2:
          message.stems.push(Stem.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStemsResponse {
    const message = { ...baseQueryStemsResponse } as QueryStemsResponse;
    message.stems = [];
    if (object.fullTrack !== undefined && object.fullTrack !== null) {
      message.fullTrack = FullTrack.fromJSON(object.fullTrack);
    } else {
      message.fullTrack = undefined;
    }
    if (object.stems !== undefined && object.stems !== null) {
      for (const e of object.stems) {
        message.stems.push(Stem.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryStemsResponse): unknown {
    const obj: any = {};
    message.fullTrack !== undefined &&
      (obj.fullTrack = message.fullTrack
        ? FullTrack.toJSON(message.fullTrack)
        : undefined);
    if (message.stems) {
      obj.stems = message.stems.map((e) => (e ? Stem.toJSON(e) : undefined));
    } else {
      obj.stems = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStemsResponse>): QueryStemsResponse {
    const message = { ...baseQueryStemsResponse } as QueryStemsResponse;
    message.stems = [];
    if (object.fullTrack !== undefined && object.fullTrack !== null) {
      message.fullTrack = FullTrack.fromPartial(object.fullTrack);
    } else {
      message.fullTrack = undefined;
    }
    if (object.stems !== undefined && object.stems !== null) {
      for (const e of object.stems) {
        message.stems.push(Stem.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryMetadataRequest: object = { fullTrackID: 0 };

export const QueryMetadataRequest = {
  encode(
    message: QueryMetadataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fullTrackID !== 0) {
      writer.uint32(8).uint64(message.fullTrackID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryMetadataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMetadataRequest } as QueryMetadataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullTrackID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMetadataRequest {
    const message = { ...baseQueryMetadataRequest } as QueryMetadataRequest;
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = Number(object.fullTrackID);
    } else {
      message.fullTrackID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMetadataRequest): unknown {
    const obj: any = {};
    message.fullTrackID !== undefined &&
      (obj.fullTrackID = message.fullTrackID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMetadataRequest>): QueryMetadataRequest {
    const message = { ...baseQueryMetadataRequest } as QueryMetadataRequest;
    if (object.fullTrackID !== undefined && object.fullTrackID !== null) {
      message.fullTrackID = object.fullTrackID;
    } else {
      message.fullTrackID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryMetadataResponse: object = {};

export const QueryMetadataResponse = {
  encode(
    message: QueryMetadataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fullTrack !== undefined) {
      FullTrack.encode(message.fullTrack, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sections) {
      Section.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.stems) {
      Stem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryMetadataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMetadataResponse } as QueryMetadataResponse;
    message.sections = [];
    message.stems = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullTrack = FullTrack.decode(reader, reader.uint32());
          break;
        case 2:
          message.sections.push(Section.decode(reader, reader.uint32()));
          break;
        case 3:
          message.stems.push(Stem.decode(reader, reader.uint32()));
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMetadataResponse {
    const message = { ...baseQueryMetadataResponse } as QueryMetadataResponse;
    message.sections = [];
    message.stems = [];
    if (object.fullTrack !== undefined && object.fullTrack !== null) {
      message.fullTrack = FullTrack.fromJSON(object.fullTrack);
    } else {
      message.fullTrack = undefined;
    }
    if (object.sections !== undefined && object.sections !== null) {
      for (const e of object.sections) {
        message.sections.push(Section.fromJSON(e));
      }
    }
    if (object.stems !== undefined && object.stems !== null) {
      for (const e of object.stems) {
        message.stems.push(Stem.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMetadataResponse): unknown {
    const obj: any = {};
    message.fullTrack !== undefined &&
      (obj.fullTrack = message.fullTrack
        ? FullTrack.toJSON(message.fullTrack)
        : undefined);
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.sections = [];
    }
    if (message.stems) {
      obj.stems = message.stems.map((e) => (e ? Stem.toJSON(e) : undefined));
    } else {
      obj.stems = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMetadataResponse>
  ): QueryMetadataResponse {
    const message = { ...baseQueryMetadataResponse } as QueryMetadataResponse;
    message.sections = [];
    message.stems = [];
    if (object.fullTrack !== undefined && object.fullTrack !== null) {
      message.fullTrack = FullTrack.fromPartial(object.fullTrack);
    } else {
      message.fullTrack = undefined;
    }
    if (object.sections !== undefined && object.sections !== null) {
      for (const e of object.sections) {
        message.sections.push(Section.fromPartial(e));
      }
    }
    if (object.stems !== undefined && object.stems !== null) {
      for (const e of object.stems) {
        message.stems.push(Stem.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of FullTracks items. */
  FullTracks(request: QueryFullTracksRequest): Promise<QueryFullTracksResponse>;
  /** Queries a Section by id. */
  Section(request: QueryGetSectionRequest): Promise<QueryGetSectionResponse>;
  /** Queries a list of Section items. */
  SectionAll(request: QueryAllSectionRequest): Promise<QueryAllSectionResponse>;
  /** Queries a list of Sections items. */
  Sections(request: QuerySectionsRequest): Promise<QuerySectionsResponse>;
  /** Queries a Stem by id. */
  Stem(request: QueryGetStemRequest): Promise<QueryGetStemResponse>;
  /** Queries a list of Stem items. */
  StemAll(request: QueryAllStemRequest): Promise<QueryAllStemResponse>;
  /** Queries a list of Stems items. */
  Stems(request: QueryStemsRequest): Promise<QueryStemsResponse>;
  /** Queries a list of Metadata items. */
  Metadata(request: QueryMetadataRequest): Promise<QueryMetadataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  FullTracks(
    request: QueryFullTracksRequest
  ): Promise<QueryFullTracksResponse> {
    const data = QueryFullTracksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "FullTracks",
      data
    );
    return promise.then((data) =>
      QueryFullTracksResponse.decode(new Reader(data))
    );
  }

  Section(request: QueryGetSectionRequest): Promise<QueryGetSectionResponse> {
    const data = QueryGetSectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "Section",
      data
    );
    return promise.then((data) =>
      QueryGetSectionResponse.decode(new Reader(data))
    );
  }

  SectionAll(
    request: QueryAllSectionRequest
  ): Promise<QueryAllSectionResponse> {
    const data = QueryAllSectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "SectionAll",
      data
    );
    return promise.then((data) =>
      QueryAllSectionResponse.decode(new Reader(data))
    );
  }

  Sections(request: QuerySectionsRequest): Promise<QuerySectionsResponse> {
    const data = QuerySectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "Sections",
      data
    );
    return promise.then((data) =>
      QuerySectionsResponse.decode(new Reader(data))
    );
  }

  Stem(request: QueryGetStemRequest): Promise<QueryGetStemResponse> {
    const data = QueryGetStemRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "Stem",
      data
    );
    return promise.then((data) =>
      QueryGetStemResponse.decode(new Reader(data))
    );
  }

  StemAll(request: QueryAllStemRequest): Promise<QueryAllStemResponse> {
    const data = QueryAllStemRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "StemAll",
      data
    );
    return promise.then((data) =>
      QueryAllStemResponse.decode(new Reader(data))
    );
  }

  Stems(request: QueryStemsRequest): Promise<QueryStemsResponse> {
    const data = QueryStemsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "Stems",
      data
    );
    return promise.then((data) => QueryStemsResponse.decode(new Reader(data)));
  }

  Metadata(request: QueryMetadataRequest): Promise<QueryMetadataResponse> {
    const data = QueryMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "metadatalayercosmos.metadatalayercosmos.Query",
      "Metadata",
      data
    );
    return promise.then((data) =>
      QueryMetadataResponse.decode(new Reader(data))
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
