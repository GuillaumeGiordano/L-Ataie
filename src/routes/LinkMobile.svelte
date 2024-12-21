<script lang="ts">
	import { colorPick } from '$stores/color.store';

	interface Props {
		libelle: string;
		href: string;
		idSection: string;
		activeLink: string | null;
		addClass?: string;
		handleClick?: () => void;
		[key: string]: any;
	}

	let {
		libelle,
		href,
		idSection,
		addClass = '',
		activeLink,
		handleClick,
		...others
	}: Props = $props();

	function handleMouseOver(e: { currentTarget: HTMLElement }) {
		e.currentTarget.style.backgroundColor = $colorPick;
		e.currentTarget.style.color = "white";
	}

	function handleMouseOut(e: { currentTarget: HTMLElement }) {
		e.currentTarget.style.backgroundColor = activeLink === idSection ? $colorPick : 'transparent';
		e.currentTarget.style.color = $colorPick;
	}
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<a
	{href}
	class="link-nav-mobile {addClass}"
	style="
		background-color: {activeLink === idSection ? $colorPick : 'transparent'}; 
		color: {activeLink !== idSection ? $colorPick : 'white'};
		"
	onmouseover={(e) => handleMouseOver(e)}
	onmouseout={(e) => handleMouseOut(e)}
	onclick={() => handleClick && handleClick()}
	{...others}
>
	{libelle}
</a>

<style lang="scss">
	.link-nav-mobile {
		display: block;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		color: var(--foreground);
		transition:
			background-color 0.5s ease,
			color 0.5s ease;

		&:hover {
			color: var(--white);
		}
	}
</style>
