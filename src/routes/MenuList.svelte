<script lang="ts">
	import { handleOpenSideMenu, isSideMenuOpen } from "$stores/navigation.store";
	import ColorPicker from "svelte-awesome-color-picker";
	import LinkMobile from "./LinkMobile.svelte";
	import { colorPick } from "$stores/color.store";

	interface Props {
		activeLink: string | null;
	}

	let {
		activeLink,
	}: Props = $props();

</script>

<li>
    <LinkMobile
        libelle="Nous"
        href="#about"
        idSection="about"
        {activeLink}
        handleClick={() => $isSideMenuOpen && handleOpenSideMenu() }
    />
</li>

<li>
    <LinkMobile
        libelle="Gallerie"
        href="#galery"
        idSection="galery"
        {activeLink}
        handleClick={() => $isSideMenuOpen &&  handleOpenSideMenu()}
    />
</li>

<li>
    <LinkMobile
        libelle="Parcours"
        href="#step"
        idSection="step"
        {activeLink}
        handleClick={() => $isSideMenuOpen &&  handleOpenSideMenu()}
    />
</li>



<li>
    <LinkMobile
        libelle="Témoignage"
        href="#testimonial"
        idSection="testimonial"
        {activeLink}
        handleClick={() => $isSideMenuOpen &&  handleOpenSideMenu()}
    />
</li>

<li>
    <LinkMobile
        libelle="Contact"
        href="#contact"
        idSection="contact"
        {activeLink}
        handleClick={() => $isSideMenuOpen &&  handleOpenSideMenu()}
    />
</li>
