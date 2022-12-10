<script>
	import ConnectWallet from '$lib/components/ConnectWallet/ConnectWallet.svelte';

	let navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' }
	];

	let mobileMenuOpen = false;
</script>

<div class="px-6 pt-6 lg:px-8">
	<div>
		<nav class="flex h-9 items-center justify-between" aria-label="Global">
			<div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img class="h-8" src="/logo_128.png" alt="" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					on:click={() => {
						mobileMenuOpen = true;
					}}
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
					<span class="sr-only">Open main menu</span>
					<!-- Heroicon name: outline/bars-3 -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
				{#each navigation as item}
					<a href={item.href} class="font-semibold text-gray-900 hover:text-gray-900"
						>{item.name}</a>
				{/each}
			</div>
			<ConnectWallet />
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		{#if mobileMenuOpen}
			<div role="dialog" aria-modal="true">
				<!-- on:focus={() => (mobileMenuOpen = true)} -->
				<div class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
					<div class="flex h-9 items-center justify-between">
						<div class="flex">
							<a href="#" class="-m-1.5 p-1.5">
								<span class="sr-only">Your Company</span>
								<img
									class="h-8"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt="" />
							</a>
						</div>
						<div class="flex">
							<button
								type="button"
								on:click={() => (mobileMenuOpen = false)}
								class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x-mark -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<div class="space-y-2 py-6">
								{#each navigation as item}
									<a
										href={item.href}
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										>{item.name}</a>
								{/each}
							</div>
							<div class="py-6">
								<a
									href="#"
									class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
									>Log in</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
