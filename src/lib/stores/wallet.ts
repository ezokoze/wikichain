import { writable } from 'svelte/store';

function createWallet() {
	const { subscribe, set, update } = writable({
		address: '' as `0x${string}`,
		balance: 0,
		connected: false
	});

	return { subscribe, set, update };
}

export const wallet = createWallet();
