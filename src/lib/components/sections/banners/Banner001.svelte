<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import { colorPick } from '$stores/color.store';

	interface Props {
		addClass?: string;
		[key: string]: any; 
	}

	let { 
		addClass = "" , 
		...others
	}: Props = $props();

</script>

<section class="banner background-img  {addClass}" {...others} >
	<div class="m-auto flex h-full flex-col justify-center gap-5 text-center">
		<h1  style="color: {$colorPick};" >
			<strong class="font-extrabold sm:block"> Titre </strong>
		</h1>

		<p class="slogan max-w-3xl">
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea ! "
		</p>

		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="destructive" style="background-color: {$colorPick};" on:click={() => goto('./auth/signUp')}>Action N° 1</Button>
			<Button variant="secondary">Action N° 2</Button>
		</div>
	</div>
</section>

<style lang="scss">
	.background-img {
		background-image: url('./background002.png');
		background-size: cover;
		background-position: center;
		background-color: var(--secondary-001);
		background-blend-mode: multiply;
	}
</style>
