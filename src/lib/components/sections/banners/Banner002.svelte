<script lang="ts">
	export let classAddSection = '';
	export let idSection: string;
</script>

<section id={idSection} class={classAddSection} {...$$props}>
	<img src="./bg3.jpeg" alt="logo" class="-z-1 absolute inset-0 h-full w-full object-cover object-center" />

	<div class="mx-auto h-full lg:flex lg:h-3/4 lg:items-center lg:px-8">
		<div
			class=" rounded-2xl bg-gradient-to-r from-orange-300 via-red-400 to-pink-500 p-10 text-center shadow-2xl backdrop-blur-xl backdrop-filter"
		>
			<h1 class="text-2xl text-pink-800 text-white sm:text-5xl">
				Pour Vous Servire,
				<strong class="block text-3xl font-extrabold text-white"> Les Facilitateurs </strong>
			</h1>

			<p class="max-w-lg mt-4 sm:text-xl/relaxed">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
			</p>

			<div class="mt-8 flex flex-wrap gap-4 text-center">
				<a
					href="#contact"
					class="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow sm:w-auto"
				>
					Nous contacter.
				</a>

				<a
					href="#about"
					class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow sm:w-auto"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>
