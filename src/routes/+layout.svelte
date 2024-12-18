<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import HeaderDesktop from './HeaderDesktop.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<HeaderDesktop />

<main class="bg-green">
	{@render children()}
</main>

