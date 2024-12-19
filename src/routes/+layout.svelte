<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import HeaderDesktop from './HeaderDesktop.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<HeaderDesktop />

<main>
	{@render children()}
</main>

