<script lang="ts">
	import Input001 from '$lib/components/form/input/Input001.svelte';

	export let classAddSection = '';
	export let idSection: string;
</script>

<section id={idSection} class={classAddSection} {...$$props}>
	<div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
		<div class="lg:col-span-2 lg:py-12">
			<div class="max-w-lg mx-auto text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
				<h2 class="text-3xl font-bold text-primary sm:text-4xl">Demander Un Devis</h2>

				<p class="mt-4 text-foreground"></p>
			</div>

			<div class="mt-8">
				<a href="/" class="text-2xl font-bold text-primary"> 0151 475 4450 </a>

				<address class="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
			</div>
		</div>

		<div class="rounded-lg bg-muted p-8 shadow-lg lg:col-span-3 lg:p-12">
			<form action="#" class="space-y-4">
				<div>
					<label class="sr-only" for="name">Name</label>
					<input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" />
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label class="sr-only" for="email">Email</label>
						<input
							class="w-full rounded-lg border-gray-200 p-3 text-sm"
							placeholder="Email address"
							type="email"
							id="email"
						/>
					</div>

					<div>
						<label class="sr-only" for="phone">Phone</label>
						<input
							class="w-full rounded-lg border-gray-200 p-3 text-sm"
							placeholder="Phone Number"
							type="tel"
							id="phone"
						/>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
					<div>
						<label
							for="Option1"
							class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
							tabindex="0"
						>
							<input class="sr-only" id="Option1" type="radio" tabindex="-1" name="option" />

							<span class="text-sm"> Option 1 </span>
						</label>
					</div>

					<div>
						<label
							for="Option2"
							class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
							tabindex="0"
						>
							<input class="sr-only" id="Option2" type="radio" tabindex="-1" name="option" />

							<span class="text-sm"> Option 2 </span>
						</label>
					</div>

					<div>
						<label
							for="Option3"
							class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
							tabindex="0"
						>
							<input class="sr-only" id="Option3" type="radio" tabindex="-1" name="option" />

							<span class="text-sm"> Option 3 </span>
						</label>
					</div>
				</div>

				<div>
					<Input001 />
				</div>

				<div>
					<label class="sr-only" for="message">Message</label>

					<textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows="8" id="message"
					></textarea>
				</div>

				<div class="mt-4">
					<button
						type="submit"
						class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
					>
						Send Enquiry
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
