// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSection } from "./types/metadatalayercosmos/tx";
import { MsgCreateStem } from "./types/metadatalayercosmos/tx";
import { MsgCreateFullTrack } from "./types/metadatalayercosmos/tx";


const types = [
  ["/metadatalayercosmos.metadatalayercosmos.MsgCreateSection", MsgCreateSection],
  ["/metadatalayercosmos.metadatalayercosmos.MsgCreateStem", MsgCreateStem],
  ["/metadatalayercosmos.metadatalayercosmos.MsgCreateFullTrack", MsgCreateFullTrack],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateSection: (data: MsgCreateSection): EncodeObject => ({ typeUrl: "/metadatalayercosmos.metadatalayercosmos.MsgCreateSection", value: MsgCreateSection.fromPartial( data ) }),
    msgCreateStem: (data: MsgCreateStem): EncodeObject => ({ typeUrl: "/metadatalayercosmos.metadatalayercosmos.MsgCreateStem", value: MsgCreateStem.fromPartial( data ) }),
    msgCreateFullTrack: (data: MsgCreateFullTrack): EncodeObject => ({ typeUrl: "/metadatalayercosmos.metadatalayercosmos.MsgCreateFullTrack", value: MsgCreateFullTrack.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
