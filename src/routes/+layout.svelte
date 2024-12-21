<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import HeaderDesktop from './HeaderDesktop.svelte';
	import Footer001 from '$lib/components/sections/footer/Footer001.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<HeaderDesktop />

<main>
	{@render children()}
</main>


<Footer001 />
