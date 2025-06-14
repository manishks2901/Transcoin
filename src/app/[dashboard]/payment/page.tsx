"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useState } from "react";
import {  createTransferInstruction, TOKEN_2022_PROGRAM_ID} from "@solana/spl-token";

const Payment = () => {
  const [toWallet, settoWallet] = useState<PublicKey | undefined>(undefined);
  const [amount, setAmount] = useState<number>(0);
  const { publicKey, wallet, sendTransaction } = useWallet();
  const { connection } = useConnection();
  let i= 1;
  async function HandleTransaction() {
    console.log("log check",i++)
    try {
    if(!wallet){
        throw new Error("Account not found")
    }
      if (!publicKey) {
        throw new Error("Wallet not connected");
      }
      const PYUSD_MINT = new PublicKey(
        "CXk2AMBfi3TwaEL2468s6zP8xq9NxTXjp9gjMgzeUynM"
      );
      const fromAccounts = await connection.getParsedTokenAccountsByOwner(
        publicKey as PublicKey,
        {
          mint: PYUSD_MINT,
        }
      );
      console.log("From Account",fromAccounts)
      if (!toWallet) {
        throw new Error("Recipient wallet address is not set");
      }

      const toTokenAccounts = await connection.getParsedTokenAccountsByOwner(toWallet, {
        mint: PYUSD_MINT
      });
      console.log("to token account ", toTokenAccounts)
      console.log("log check",i++)


      const transaction = new Transaction().add(
        createTransferInstruction(
            fromAccounts.value[0].pubkey,
            toTokenAccounts.value[0].pubkey,
            publicKey,
            1,
            [],
            TOKEN_2022_PROGRAM_ID
        )
      );
    console.log("log check",i++)

    console.log(transaction.instructions)
    console.log("log check",i++)

      const signature = await sendTransaction(
        transaction,
        connection
      )
      console.log(`Transfer complete Transaction ${signature}`);

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Card>
      <CardHeader>Send Payment</CardHeader>
      <CardContent>
        <Input
          onChange={(e) => settoWallet(new PublicKey(e.target.value))}
          placeholder="Enter the wallet address"
        />
        <Input
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter the Amount"
        />
        <Button onClick={HandleTransaction}>Make Payment</Button>
      </CardContent>
    </Card>
  );
};

export default Payment;
