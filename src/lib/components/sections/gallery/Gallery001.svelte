<script lang="ts">
	import { colorPick } from '$stores/color.store';

	interface Props {
		addClass?: string;
		[key: string]: any;
	}

	let { addClass = '', ...others }: Props = $props();
</script>

<section class="scroll-mt-20 {addClass}" {...others}>
	<div class="mx-auto max-w-lg text-center">
		<h2 class="text-3xl font-bold sm:text-4xl" style="color: {$colorPick};">Ma gallerie</h2>

		<p class="slogan">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
			nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
		</p>
	</div>

	<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
		<div class="-m-1 flex flex-wrap md:-m-2">
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
					/>
				</div>
			</div>
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
					/>
				</div>
			</div>
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
					/>
				</div>
			</div>
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
					/>
				</div>
			</div>
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
					/>
				</div>
			</div>
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
					/>
				</div>
			</div>
		</div>
	</div>

</section>
