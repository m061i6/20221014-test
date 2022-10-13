import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import GetEnsData from "../components/GetEnsData";
import ReadContractStatus from "../components/ReadContractStatus";
import WriteContractStatus from "../components/WriteContractStatus";

import NonSSRWrapper from "../components/NoSSRWrapper";
import { Container, Row, Col } from "react-bootstrap";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function IndexPage() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Container className="mt-4">
          <NonSSRWrapper>
            <div>
              <ConnectButton />
            </div>
            <div>
              <GetEnsData />
            </div>
            <WriteContractStatus />
            <div>
              <ReadContractStatus />
            </div>
          </NonSSRWrapper>
        </Container>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
