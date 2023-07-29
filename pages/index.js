import { useWeb3 } from "@3rdweb/hooks";

export default function Home() {
  const { address, chainId, connectWallet, disconnectWallet } = useWeb3();
  return (
    <div className="connect-wallet">
      {!address && (
        <>
          <button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </button>
          <p>Click on the button above to connect to your metamask accout.</p>
          <p>You need Chrome to run this app</p>
        </>
      )}
      {address && (
        <>
          <button onClick={() => disconnectWallet()}>disconnect Wallet</button>
          <p>Address: {address}</p>
          <p>ChainId: {chainId}</p>
        </>
      )}
    </div>
  );
}
