<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";
	import { colorPick } from "$stores/color.store";

	interface Props {
		addClass?: string;
		isRight?:boolean
		[key: string]: any;
	}

	let { 
		addClass = "" ,
		isRight = false, 
		...others 
	}: Props = $props();
</script>

<section class={addClass} {...others}>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
		<div
			class="relative h-64 overflow-hidden rounded-lg sm:h-80 {isRight ? 'lg:order-last' : 'lg:order-first'} lg:h-full"
		>
			<img alt="" src="./service1.jpeg" class="absolute inset-0 h-full w-full object-cover" />
		</div>

		<div class="{isRight ? 'text-right' : ''} flex flex-col  gap-4  lg:py-24">
			<h2 class="text-3xl font-bold text-primary sm:text-4xl">Grow your audience</h2>

			<p class="text-foreground">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque
				sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
			</p>

			<div>
				<Button variant="destructive" style="background-color: {$colorPick};" on:click={() => goto('./')}>Action N° 1</Button>
			</div>
		</div>
	</div>
</section>
