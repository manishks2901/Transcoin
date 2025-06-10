"use client";

import {  PublicKey } from "@solana/web3.js";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [ balance, setBalance] = useState(0)

  const PYUSD_MINT = new PublicKey(
    "CXk2AMBfi3TwaEL2468s6zP8xq9NxTXjp9gjMgzeUynM"
  );
  function FetchPYUSDToken(){
    if (wallet.publicKey) {
      (async () => {
        const tokenAccount = await connection.getParsedTokenAccountsByOwner(wallet.publicKey as PublicKey, {
          mint: PYUSD_MINT,
        });
        console.log(
          "pyusd balance is ",
          tokenAccount.value[0]?.account.data.parsed.info.tokenAmount.uiAmount
        );
        setBalance(tokenAccount.value[0]?.account.data.parsed.info.tokenAmount.uiAmount || 0);
      })();
    }
  }
  useEffect(() => {
    FetchPYUSDToken()
  }, [wallet.publicKey, connection]);
  return (
    <aside className="w-64 h-[600px] rounded-2xl bg-gray-900 shadow-md p-4 text-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-blue-700 rounded-full mx-auto text-white flex items-center justify-center text-2xl font-bold shadow-lg">
          A
        </div>
        <p className="mt-2 font-semibold text-gray-200">
          {wallet && wallet.publicKey ? wallet.publicKey.toString().substring(0, 5) : " "}
        </p>

        <p className="mt-3 text-xl font-semibold text-blue-300">{balance.toString()} PYUSD</p>
        <p className="mt-1 text-sm font-semibold text-gray-400">Available Balance</p>
      </div>
      <div className="mt-6 space-y-2">
        <button className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-2 rounded shadow hover:from-purple-600 hover:to-blue-600 transition-colors">
          Send Payment
        </button>
        <button className="w-full border border-gray-700 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors">Request Payment</button>
        <button className="w-full border border-gray-700 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors">Edit Profile</button>
        <button className="w-full border border-gray-700 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors">
          Analytics Dashboard
        </button>
      </div>
    </aside>
  );
}
