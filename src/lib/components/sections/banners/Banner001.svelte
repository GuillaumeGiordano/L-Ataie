<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section {...$$props}>
	<div class=" m-auto flex h-full flex-col justify-center gap-5 text-center">
		<h1 class="text-6xl">
			<strong class="outline-title font-extrabold text-primary sm:block"> SedonaConnect </strong>
		</h1>

		<p class="slogan max-w-3xl text-black">
			" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea ! "
		</p>

		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<Button variant="destructive" on:click={() => goto('./auth/signUp')}>S'inscrire</Button>
			<Button variant="outline">En Savoir Plus</Button>
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
	.outline-title {
		-webkit-text-stroke: 2px white;
	}
</style>
