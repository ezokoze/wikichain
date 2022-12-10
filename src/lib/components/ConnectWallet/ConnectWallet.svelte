<script lang="ts">
	import Button from '$lib/layout/buttons/Button.svelte';
	import {
		configureChains,
		connect,
		createClient,
		disconnect,
		fetchBalance,
		getAccount,
		InjectedConnector,
		mainnet
	} from '@wagmi/core';
	import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
	import { alchemyProvider } from '@wagmi/core/providers/alchemy';
	// import { wallet } from '$lib/stores/wallet';

	let balance: any;

	const { chains, provider } = configureChains(
		[mainnet],
		[alchemyProvider({ apiKey: 'A_kmxXLW8oR7ot5VEGBQYpMD9WxyQtHb' })]
	);

	// Set up connectors
	export const client = createClient({
		autoConnect: true,
		provider,
		connectors: [new MetaMaskConnector({ chains })]
	});

	let { address, isConnected } = getAccount();

	const connectWallet = async () => {
		await connect({
			chainId: chains[0].id,
			connector: new InjectedConnector()
		});
		({ address, isConnected } = getAccount());
	};

	const disconnectWallet = async () => {
		await disconnect();
		({ address, isConnected } = getAccount());
	};

	const getBalance = () => {
		if (!isConnected) return;

		balance = fetchBalance({
			address: address as any
		});
	};

	if (isConnected) {
		getBalance();
	}
</script>

<Button on:click={() => (isConnected ? disconnectWallet() : connectWallet())}>
	{#if isConnected}
		{address?.slice(0, 4)}...{address?.slice(38, 42)}
		{#await balance}
			Loading...
		{:then balance}
			({balance?.formatted.slice(0, 4)} ETH)
		{/await}
	{/if}

	{#if !isConnected}
		Connect Wallet
	{/if}
</Button>
