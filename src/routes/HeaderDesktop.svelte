<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Burger from './Burger.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { isActiveBurger, isSideMenuOpen } from '$stores/navigation.store';
	import { colorPick } from '$stores/color.store';

	let activeLink: string = $state('');

	$effect(() => {
		console.log('color', $colorPick);
	});

	const sections = ['#about', '#advantage', '#service', '#step', '#testimonial', '#contact'];
	const SCROLL_MARGIN_TOP = 64; // 4rem in pixels

	function handleActiveMenu(target: EventTarget | null) {
		if (target && target instanceof HTMLElement) {
			activeLink = target.getAttribute('href') ?? '';
		}
	}

	function handleScroll() {
		let currentSection = '';
		const scrollPosition = window.scrollY + SCROLL_MARGIN_TOP;

		for (const section of sections) {
			const element = document.querySelector(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const elementTop = rect.top + window.scrollY;
				const elementBottom = rect.bottom + window.scrollY;

				if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
					currentSection = section;
					break;
				}
			}
		}
		activeLink = currentSection;
	}

	onMount(() => {
		// Set the initial active link, if necessary
		activeLink = window.location.hash || '#about';
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // To set the active link on initial load

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleOpenSideMenu() {
		isActiveBurger.update((value) => !value);
		isSideMenuOpen.update((value) => !value);
	}

	// Check current path
	const currentPath = $state($page.url.pathname);
</script>

<svelte:window on:scroll={() => handleScroll()} />

<header class="fixed-header z-30">
	<!-- LOGO -->
	<div class="flex h-full items-center">
		<a class="flex" href="/">
			<span class="sr-only">Home</span>
			<!-- <img src="./logo.png" alt="logo" class="m-2 rounded-full" width="45" height="45" /> -->
			<span class="my-auto hidden font-serif text-2xl sm:flex">LOGO</span>
		</a>
	</div>

	<!-- MENU -->
	{#if currentPath === '/'}
		<nav class="hidden h-full lg:block">
			<ul class="flex h-full items-center gap-6 text-sm">
				<li>
					<a
						class="link-nav-desktop {activeLink === '#about' ? 'active' : ''}"
						href="/#about"
						onclick={(e) => handleActiveMenu(e.target)}>Nous</a
					>
				</li>
				<li>
					<a
						class="link-nav-desktop {activeLink === '#advantage' ? 'active' : ''}"
						href="/#advantage"
						onclick={(e) => handleActiveMenu(e.target)}>Avantages</a
					>
				</li>
				<li>
					<a
						class="link-nav-desktop {activeLink === '#service' ? 'active' : ''}"
						href="/#service"
						onclick={(e) => handleActiveMenu(e.target)}>Services</a
					>
				</li>
				<li>
					<a
						class="link-nav-desktop {activeLink === '#step' ? 'active' : ''}"
						href="/#step"
						onclick={(e) => handleActiveMenu(e.target)}>Démarche</a
					>
				</li>
				<li>
					<a
						class="link-nav-desktop {activeLink === '#testimonial' ? 'active' : ''}"
						href="/#testimonial"
						onclick={(e) => handleActiveMenu(e.target)}>Témoignages</a
					>
				</li>
				<li>
					<a
						class="link-nav-desktop {activeLink === '#contact' ? 'active' : ''}"
						href="/#contact"
						onclick={(e) => handleActiveMenu(e.target)}>Contact</a
					>
				</li>
			</ul>
		</nav>
	{/if}
	<div class="flex items-center gap-4">
		<!-- FAST_LINK -->
		<div class="flex gap-2">
			<!-- <a class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/"> 06 00 00 00 00 </a> -->
			<div class="flex gap-4">
				<Button onclick={toggleMode} variant="outline" size="icon" class="rounded-full">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
				<a class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" href="/">
					Se Connecter
				</a>
			</div>
		</div>

		{#if currentPath === '/'}
			<div class="flex lg:hidden">
				<Burger clickAction={() => handleOpenSideMenu()} />
			</div>
		{/if}
	</div>
</header>

{#if currentPath === '/'}
	{#if $isSideMenuOpen}
		<!-- svelte-ignore a11y_interactive_supports_focus -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			role="button"
			class="fixed inset-0 z-40 h-screen w-screen bg-background opacity-25"
			onclick={() => handleOpenSideMenu()}
		></div>
	{/if}

	<!-- MENU_MOBILE -->
	<div
		class="fixed {$isSideMenuOpen
			? 'block'
			: 'hidden'} right-0 top-[4rem] z-50 flex h-full  flex-col justify-between border-e bg-background sm:w-[20rem]"
	>
		<div class="p-4">
			<ul class="mt-6 space-y-1">
				<li>
					<a
						href="#about"
						class="block rounded-lg px-4 py-2 text-center text-base font-medium text-primary hover:bg-gray-100 hover:text-gray-700"
						onclick={() => handleOpenSideMenu()}
					>
						Nous
					</a>
				</li>

				<li>
					<a href="./#advantage" class="link-nav-mobile" onclick={() => handleOpenSideMenu()}>
						Avantage
					</a>
				</li>

				<li>
					<a href="./#service" class="link-nav-mobile" onclick={() => handleOpenSideMenu()}>
						Service
					</a>
				</li>

				<li>
					<a href="./#step" class="link-nav-mobile" onclick={() => handleOpenSideMenu()}>
						Démarche
					</a>
				</li>

				<li>
					<a href="./#testimonial" class="link-nav-mobile" onclick={() => handleOpenSideMenu()}>
						Témoignage
					</a>
				</li>

				<li>
					<a
						href="./#contact"
						class="link-nav-mobile"
						onclick={() => handleOpenSideMenu()}
					>
						Demander un devis.
					</a>
				</li>
			</ul>
			<ColorPicker bind:hex={$colorPick} isDialog={true} />
		</div>

		<!-- FOOTER NAV -->
		<div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
			<div class="flex items-center justify-center gap-4 p-4">
				<p>Changer en mode nuit :</p>
				<label
					for="AcceptConditions"
					class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-primary transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
				>
					<input type="checkbox" id="AcceptConditions" class="peer sr-only" onclick={toggleMode} />

					<span
						class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-background transition-all peer-checked:start-6"
					></span>
				</label>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.active {
		border-bottom-color: var(--primary-001);
	}

	.link-nav-desktop {
		display: block;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		height: 2rem;
		border-bottom: 2px solid transparent;
		transition: border 0.3s ease;

		&:hover {
			border-color: var(--foreground);
		}

		&:active {
			border-color: var(--foreground);
		}
	}

	.link-nav-mobile {
		display: block;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		text-align: center;
		color: #333;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;

		&:hover {
			background-color: #f3f4f6;
			color: #4b5563;
		}
	}

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
