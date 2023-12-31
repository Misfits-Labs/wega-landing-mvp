import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { localhost, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygonMumbai, localhost],
  [alchemyProvider({ apiKey: import.meta.env.VITE_RPC_PROVIDER_ALCHEMY as string }), publicProvider()]
);
const projectId = '4de34cf36a8dde49678a0bfcb3928492';
const { wallets } = getDefaultWallets({
  appName: 'Wega - Play Together Own Together',
  projectId,
  chains
});

const connectors = connectorsForWallets([
  ...wallets,
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export default wagmiConfig;

export { chains }

