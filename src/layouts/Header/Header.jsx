import React, { useEffect } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { shortenAddress, useEthers } from "@usedapp/core";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useDispatch } from "react-redux";

import config from './../../utils/config';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.REACT_APP_INFURA_ID, // required
    },
  },
};
const web3Modal = new Web3Modal({
  cacheProvider: false,
  providerOptions
})

export default function Header() {
  const { account, activate, deactivate } = useEthers();

  const dispatch = useDispatch()

  const handleConnectButton = () => {
    if(account) {
      disconnect()
    }
    else {
      connect()
    }
  };

  const connect = async () => {
    let provider
    try {
      provider = await web3Modal.connect()
    } catch (error) {
      console.log(error)
    }
    if(provider) {
      dispatch({
        type: config.actions.WALLET_CONNECTED,
        payload: new Web3(provider)
      })
      await activate(provider)
    }
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    deactivate()
    dispatch({
      type: config.actions.WALLET_DISCONNECTED
    })
  }

  useEffect(() => {
    web3Modal.clearCachedProvider()
  }, [])

  return (
    <header>
      <button onClick={handleConnectButton}>
        {account ? shortenAddress(account) : "Connect Wallet"}
      </button>
    </header>
  );
}
