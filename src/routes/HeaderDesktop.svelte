<script lang="ts">
	import { ArrowBigUp, Moon, Palette, Sun, UserRound, Wrench } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/stores';
	import Burger from './Burger.svelte';
	import { handleOpenSideMenu, isSideMenuOpen } from '$stores/navigation.store';
	import { colorPick } from '$stores/color.store';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import MenuList from './MenuList.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import * as Dialog from '$lib/components/ui/dialog';
	import Logo from './Logo.svelte';

	let activeLink: string | null = $state('');
	let logoImage: HTMLImageElement;

	$effect(() => {
		logoImage = document.querySelector('img')!;
		const logoSVG = document.querySelector('img')!.children[0];
		console.log('logoSVG', logoSVG);
	});

	function handleScroll() {
		let currentSection: string | null = '';
		const SCROLL_MARGIN_TOP = 80;
		const scrollPosition = window.scrollY + SCROLL_MARGIN_TOP;
		const allSection = document.querySelectorAll('section');

		if (allSection.length === 0) return;

		for (const section of allSection) {
			const rect = section.getBoundingClientRect();
			const elementTop = rect.top + window.scrollY;
			const elementBottom = rect.bottom + window.scrollY;

			if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
				currentSection = section.getAttribute('id');
				break;
			}
		}
		activeLink = currentSection;
	}
</script>

<svelte:window on:scroll={() => handleScroll()} />

<header class="fixed-header z-30">
	<!-- LOGO -->
	<!-- <img src="./logo_v2.svg" alt="logo" class="text-background" width="45" height="45" /> -->
	<Logo />

	<!-- MENU -->
	<nav class="hidden h-full lg:block" style="color: {$colorPick};">
		<ul class="flex h-full items-center gap-6 text-sm">
			<MenuList {activeLink} />
		</ul>
	</nav>

	<div class="flex items-center gap-4">
		<div class="flex gap-2">
			<!-- <a class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/"> 06 00 00 00 00 </a> -->
			<div class="mr-14 flex gap-4 lg:mr-0">
				<Button
					onclick={toggleMode}
					variant="destructive"
					size="icon"
					class="rounded-full"
					style="background-color: {$colorPick};"
				>
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>

				<Dialog.Root>
					<Dialog.Trigger>
						<Button
							variant="destructive"
							size="icon"
							class="rounded-full"
							style="background-color: {$colorPick};"
						>
							<Palette />
						</Button>
					</Dialog.Trigger>
					<Dialog.Content class="text-center">
						<Dialog.Header>
							<Dialog.Title class="text-foreground">Choicie ta couleur?</Dialog.Title>
							<Dialog.Description></Dialog.Description>
						</Dialog.Header>

						<ColorPicker
							position="responsive"
							label=": Choisir une couleur"
							bind:hex={$colorPick}
							isDialog={false}
						/>
						<Dialog.Footer></Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>

				<Button
					variant="destructive"
					size="icon"
					class="rounded-full"
					style="background-color: {$colorPick};"
					onclick={() => goto('./')}
				>
					<UserRound />
				</Button>
			</div>
		</div>
	</div>
</header>

<div class="fixed right-0 top-2 z-75 lg:hidden">
	<Burger clickAction={() => handleOpenSideMenu()} />
</div>

<div class="fixed bottom-6 right-2 z-30">
	<Button
		variant="destructive"
		size="icon"
		style="background-color: {$colorPick};"
		onclick={() => goto('./')}
	>
		<ArrowBigUp />
	</Button>
</div>

{#if $isSideMenuOpen}
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		role="button"
		class="fixed inset-0 z-40 h-screen w-screen bg-background"
		style="opacity: 0.5;"
		onclick={() => handleOpenSideMenu()}
		transition:fade
	></div>

	<!-- MENU_MOBILE -->
	<div
		class="fixed right-0 z-40 flex h-full flex-col justify-between bg-background sm:w-[20rem]"
		transition:fly={{ x: 200, duration: 400, easing: (t) => t * (2 - t) }}
	>
		<div class="p-4 pt-16">
			<ul class="mt-6 space-y-1">
				<MenuList {activeLink} />
			</ul>
		</div>

		<!-- FOOTER NAV -->
		<div class="sticky inset-x-0 bottom-0 border-t border-gray-500">
			<div class="flex items-center justify-center gap-4 p-4">
				<ColorPicker
					position="responsive"
					label=": Choisir une couleur"
					bind:hex={$colorPick}
					isDialog={true}
				/>
			</div>

			<div class="flex items-center justify-center gap-4 p-4">
				<label
					for="AcceptConditions"
					class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-primary transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
				>
					<input type="checkbox" id="AcceptConditions" class="peer sr-only" onclick={toggleMode} />

					<span
						class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-background transition-all peer-checked:start-6"
					></span>
				</label>
				<p>: Changer en mode nuit</p>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.fixed-header {
		position: fixed;
		display: flex;
		height: 4rem;
		width: 100vw;
		align-items: center;
		justify-content: space-between;
		background-color: var(--background);
		padding: 0 1rem;
		color: var(--foreground);
		transition: padding 0.3s ease;
		box-shadow: var(--shadow-xl);

		@media screen and (min-width: 640px) {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		@media screen and (min-width: 1024px) {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>
