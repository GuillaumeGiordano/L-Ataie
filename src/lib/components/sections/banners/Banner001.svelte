<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section {...$$props}>
	<div class="m-auto flex h-full flex-col justify-center gap-5 text-center">
		<h1>
			<strong class="font-extrabold sm:block"> Titre </strong>
		</h1>

		<p class="slogan max-w-3xl">
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea ! "
		</p>

		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="destructive" on:click={() => goto('./auth/signUp')}>Action N° 1</Button>
			<Button variant="outline">Action N° 2</Button>
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
