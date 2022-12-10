<script>
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import '../app.css';
</script>

<div class="isolate bg-white">
	<NavBar />
	<slot />
</div>
