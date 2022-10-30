import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

export const Navbar = ({ web3Handler, account, explorerURL }) => {
  return (
    <nav className="navbar fixed-top mx-3">
      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={logo} />
        <img src={logo} className="App-logo" alt="logo" />
        Crypto Poncho
      </a>

      {account ? (
        <a
          href={`${explorerURL}/address/${account}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button nav-button btn-sm mx-4"
        >
          {account.slice(0, 5) + "..." + account.slice(38, 42)}
        </a>
      ) : (
        <button onClick={web3Handler} className="button nav-button btn-sm mx-4">
          Connect Wallet
        </button>
      )}
    </nav>
  );
};
