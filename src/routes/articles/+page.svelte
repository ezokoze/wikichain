<script>
	import Article from '$lib/components/Article/Article.svelte';
	export let data;
	let articles = data.articles;
	console.log('articles', articles);
</script>

<div class="container mx-auto">
	<div class="flex justify-evenly">
		<div class="w-5/12">
			{#each articles as article}
				<Article {...article} />
				<div class="separator" />
			{/each}
		</div>
		<div class="w-3/12 h-screen bg-slate-500">Test</div>
	</div>
</div>

<style>
	.separator {
		border-bottom: 1px solid #d1d1d1;
	}
</style>
