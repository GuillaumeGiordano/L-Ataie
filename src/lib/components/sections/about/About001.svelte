<script lang="ts">
	interface Props {
		classAddSection: string;
		idSection: string;
	}

	let { 
		classAddSection = "" , 
		idSection,
		...others 
	}: Props = $props();

</script>

<section id={idSection} class={classAddSection} {...others}>
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="relative z-5 dark:bg-muted lg:py-16">
			<div class="relative h-64 sm:h-80 lg:h-full">
				<img alt="" src="./profil.jpg" class="absolute inset-0 h-full w-full object-cover object-top" />
			</div>
		</div>

		<div class="relative flex items-center bg-muted">
			<span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-background"></span>

			<div class="item-center lg:p-18 flex flex-col gap-10 p-8 sm:p-10">
				<h2 class="text-2xl font-bold text-primary sm:text-3xl">Notre Histoire.</h2>

				<p class=" text-foreground">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio
					deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat
					dicta.
				</p>

				<p class=" text-foreground">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio
					deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat
					dicta.
				</p>

				<h2 class="text-2xl font-bold text-primary sm:text-3xl">Les valeurs qui nous animent.</h2>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<a
						class="block rounded-xl border border-gray-100 bg-muted p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
						href="/"
					>
						<span class="inline-block rounded-lg bg-gray-50 p-3">
							<svg
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								></path>
							</svg>
						</span>

						<h2 class="mt-2 font-bold text-primary">Accountant</h2>

						<p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-foreground">Lorem ipsum dolor sit amet consectetur.</p>
					</a>

					<a
						class="block rounded-xl border border-gray-100 bg-muted p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
						href="/"
					>
						<span class="inline-block rounded-lg bg-gray-50 p-3">
							<svg
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								></path>
							</svg>
						</span>

						<h2 class="mt-2 font-bold text-primary">Accountant</h2>

						<p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-foreground">Lorem ipsum dolor sit amet consectetur.</p>
					</a>

					<a
						class="block rounded-xl border border-gray-100 bg-muted p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
						href="/"
					>
						<span class="inline-block rounded-lg bg-gray-50 p-3">
							<svg
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								></path>
							</svg>
						</span>

						<h2 class="mt-2 font-bold text-primary">Accountant</h2>

						<p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-foreground">Lorem ipsum dolor sit amet consectetur.</p>
					</a>

					<a
						class="block rounded-xl border border-gray-100 bg-muted p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
						href="/"
					>
						<span class="inline-block rounded-lg bg-gray-50 p-3">
							<svg
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								></path>
							</svg>
						</span>

						<h2 class="mt-2 font-bold text-primary">Accountant</h2>

						<p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-foreground">Lorem ipsum dolor sit amet consectetur.</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
