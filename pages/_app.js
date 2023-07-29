import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import "../styles/global.css";

const supportedChainIds = [11155111];
const connectors = {
  injected: {},
};

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />;
    </ThirdwebWeb3Provider>
  );
}
