<script lang="ts">
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
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-3xl font-bold text-primary sm:text-4xl">Quels sont nos avantages ?</h2>
		<p class="mt-4 text-foreground">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum cupiditate?
			Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis minima aliquid tempora. Obcaecati, autem.
		</p>
	</div>

	<div class="mt-4 gap-6 md:flex">
		<article class="group">
			<img
				alt=""
				src="./avantage1.webp"
				class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
			/>

			<div class="p-4">
				<a href="/">
					<h3 class="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
				</a>

				<p class="mt-2 line-clamp-3 text-sm/relaxed text-foreground">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
					temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
					voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
				</p>
			</div>
		</article>

		<article class="group">
			<img
				alt=""
				src="./avantage2.webp"
				class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
			/>

			<div class="p-4">
				<a href="/">
					<h3 class="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
				</a>

				<p class="mt-2 line-clamp-3 text-sm/relaxed text-foreground">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
					temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
					voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
				</p>
			</div>
		</article>

		<article class="group">
			<img
				alt=""
				src="./avantage3.webp"
				class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
			/>

			<div class="p-4">
				<a href="/">
					<h3 class="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
				</a>

				<p class="mt-2 line-clamp-3 text-sm/relaxed text-foreground">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
					temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
					voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
				</p>
			</div>
		</article>
	</div>
</section>
