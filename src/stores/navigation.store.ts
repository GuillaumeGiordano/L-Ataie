import { writable } from 'svelte/store';

export const isSideMenuOpen = writable(false);
export const isActiveBurger = writable(false);

export function handleOpenSideMenu() {
    isActiveBurger.update((value) => !value);
    isSideMenuOpen.update((value) => !value);
}