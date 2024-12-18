<script lang="ts">
	export let classAddSection = '';
	export let idSection: string;
	export let isRight = false;
</script>

<section id={idSection} class={classAddSection} {...$$props}>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
		<div
			class="relative h-64 overflow-hidden rounded-lg sm:h-80 {isRight ? 'lg:order-last' : 'lg:order-first'} lg:h-full"
		>
			<img alt="" src="./service1.jpeg" class="absolute inset-0 h-full w-full object-cover" />
		</div>

		<div class="{isRight ? 'text-right' : ''}  lg:py-24">
			<h2 class="text-3xl font-bold text-primary sm:text-4xl">Grow your audience</h2>

			<p class="mt-4 text-foreground">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque
				sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
			</p>

			<a href="/" class="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition">
				Get Started Today
			</a>
		</div>
	</div>
</section>
