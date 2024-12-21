<script lang="ts">
	import { colorPick } from '$stores/color.store';

	interface Props {
		addClass?: string;
		[key: string]: any;
	}

	let { addClass = '', ...others }: Props = $props();
</script>

<section class="scroll-mt-20 px-16 {addClass}" {...others}>
	<div class="grid grid-cols-2 ">

        <div>
            <div class="relative h-64 sm:h-80 lg:h-full">
                <img alt="" src="./background002.png" class="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
        </div>
		<ol class="dark:border-primary-500 border-s-2 border-primary">
			<!--First item-->
			<li>
				<div class="flex-start flex items-center">
					<div
						class="dark:bg-primary-500 -ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"
					></div>
					<h4 class="-mt-2 text-xl font-semibold" style="color: {$colorPick};">Title of section 1</h4>
				</div>
				<div class="mb-6 ms-6 pb-6">
					<a
						href="#!"
						class="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-sm text-primary transition duration-150 ease-in-out"
						>4 February, 2022</a
					>
					<p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<button
						type="button"
						class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
						data-twe-ripple-init
						data-twe-ripple-color="light"
					>
						Read more
					</button>
				</div>
			</li>

			<!--Second item-->
			<li>
				<div class="flex-start flex items-center">
					<div
						class="dark:bg-primary-500 -ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"
					></div>
					<h4 class="-mt-2 text-xl font-semibold" style="color: {$colorPick};">Title of section 2</h4>
				</div>
				<div class="mb-6 ms-6 pb-6">
					<a
						href="#!"
						class="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-sm text-primary transition duration-150 ease-in-out"
						>12 January, 2022</a
					>
					<p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
					<button
						type="button"
						class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
						data-twe-ripple-init
						data-twe-ripple-color="light"
					>
						Read more
					</button>
				</div>
			</li>

			<!--Third item-->
			<li>
				<div class="flex-start flex items-center">
					<div
						class="dark:bg-primary-500 -ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary"
                        style="background-color: {$colorPick};"
					></div>
					<h4 class="-mt-2 text-xl font-semibold" style="color: {$colorPick};">Title of section 3</h4>
				</div>
				<div class="mb-6 ms-6 pb-6">
					<a
						href="#!"
						class="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-sm text-primary transition duration-150 ease-in-out"
						>27 December, 2021</a
					>
					<p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
						voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
						occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
						mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
						expedita distinctio.
					</p>
					<button
						type="button"
						class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
						data-twe-ripple-init
						data-twe-ripple-color="light"
					>
						Read more
					</button>
				</div>
			</li>
		</ol>
	</div>
</section>
