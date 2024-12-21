<script lang="ts">
	import { colorPick } from '$stores/color.store';

	interface Props {
		addClass?: string;
		[key: string]: any;
	}

	let { addClass = '', ...others }: Props = $props();
</script>

<section class="scroll-mt-20 px-16 {addClass}" {...others}>
	<h3 class="mb-6 ms-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">Latest News</h3>

	<div class="grid grid-cols-2">
		<div>
			<div class="relative h-64 sm:h-80 lg:h-full">
				<img
					alt=""
					src="./background002.png"
					class="absolute inset-0 h-full w-full object-cover object-top"
				/>
			</div>
		</div>

		<ol class="border-info-100 border-s-2">
			<!--First item-->
			<li>
				<div class="flex-start md:flex">
					<div
						class="bg-info-100 text-info-700 -ms-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-4 w-4"
						>
							<path
								fill-rule="evenodd"
								d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div
						class="mb-10 ms-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10"
					>
						<div class="mb-4 flex justify-between">
							<a
								href="#!"
								class="text-info hover:text-info-600 focus:text-info-600 active:text-info-700 text-sm transition duration-150 ease-in-out"
								>New Web Design</a
							>
							<a
								href="#!"
								class="text-info hover:text-info-600 focus:text-info-600 active:text-info-700 text-sm transition duration-150 ease-in-out"
								>04 / 02 / 2022</a
							>
						</div>
						<p class="mb-6 text-neutral-700 dark:text-neutral-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
							nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
							sagittis ligula in sodales vehicula.
						</p>
						<button
							type="button"
							class="bg-info hover:bg-info-600 focus:bg-info-600 active:bg-info-700 inline-block rounded px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
							data-twe-ripple-init
							data-twe-ripple-color="light"
						>
							Preview
						</button>
						<button
							type="button"
							class="border-info text-info hover:border-info-600 hover:text-info-600 focus:border-info-600 focus:text-info-600 active:border-info-700 active:text-info-700 inline-block rounded border-2 px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
							data-twe-ripple-init
						>
							See demo
						</button>
					</div>
				</div>
			</li>

			<!--Second item-->
			<li>
				<div class="flex-start md:flex">
					<div
						class="bg-info-100 text-info-700 -ms-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-4 w-4"
						>
							<path
								fill-rule="evenodd"
								d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div
						class="mb-10 ms-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10"
					>
						<div class="mb-4 flex justify-between">
							<a
								href="#!"
								class="text-info hover:text-info-600 focus:text-info-600 active:text-info-700 text-sm transition duration-150 ease-in-out"
								>21 000 Job Seekers</a
							>
							<a
								href="#!"
								class="text-info hover:text-info-600 focus:text-info-600 active:text-info-700 text-sm transition duration-150 ease-in-out"
								>12 / 01 / 2022</a
							>
						</div>
						<p class="mb-6 text-neutral-700 dark:text-neutral-200">
							Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error
							architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam
							an deleniti.
						</p>
						<button
							type="button"
							class="bg-info hover:bg-info-600 focus:bg-info-600 active:bg-info-700 inline-block rounded px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
							data-twe-ripple-init
							data-twe-ripple-color="light"
						>
							Preview
						</button>
						<button
							type="button"
							class="border-info text-info hover:border-info-600 hover:text-info-600 focus:border-info-600 focus:text-info-600 active:border-info-700 active:text-info-700 inline-block rounded border-2 px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
							data-twe-ripple-init
						>
							See demo
						</button>
					</div>
				</div>
			</li>

			<!--Third item-->
			<li>
				<div class="flex-start md:flex">
					<div
						class="bg-info-100 text-info-700 -ms-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-4 w-4"
						>
							<path
								fill-rule="evenodd"
								d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div
						class="mb-10 ms-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10"
					>
						<div class="mb-4 flex justify-between">
							<a
								href="#!"
								class="text-info hover:text-info-600 focus:text-info-600 active:text-info-700 text-sm transition duration-150 ease-in-out"
								>Awesome Employers</a
							>
							<a
								href="#!"
								class="text-info hover:text-info-600 focus:text-info-600 active:text-info-700 text-sm transition duration-150 ease-in-out"
								>21 / 12 / 2021</a
							>
						</div>
						<p class="mb-6 text-neutral-700 dark:text-neutral-200">
							Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis
							illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum
							molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
						</p>
						<button
							type="button"
							class="bg-info hover:bg-info-600 focus:bg-info-600 active:bg-info-700 inline-block rounded px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
							data-twe-ripple-init
							data-twe-ripple-color="light"
						>
							Preview
						</button>
						<button
							type="button"
							class="border-info text-info hover:border-info-600 hover:text-info-600 focus:border-info-600 focus:text-info-600 active:border-info-700 active:text-info-700 inline-block rounded border-2 px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
							data-twe-ripple-init
						>
							See demo
						</button>
					</div>
				</div>
			</li>
		</ol>
	</div>
</section>
