<script lang="ts">
	import { handleOpenSideMenu } from "$stores/navigation.store";
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
        handleClick={() => handleOpenSideMenu()}
    />
</li>

<li>
    <LinkMobile
        libelle="Avantage"
        href="#advantage"
        idSection="advantage"
        {activeLink}
        handleClick={() => handleOpenSideMenu()}
    />
</li>

<li>
    <LinkMobile
        libelle="Service"
        href="#service"
        idSection="service"
        {activeLink}
        handleClick={() => handleOpenSideMenu()}
    />
</li>

<li>
    <LinkMobile
        libelle="Témoignage"
        href="#testimonial"
        idSection="testimonial"
        {activeLink}
        handleClick={() => handleOpenSideMenu()}
    />
</li>

<li>
    <LinkMobile
        libelle="Contact"
        href="#contact"
        idSection="contact"
        {activeLink}
        handleClick={() => handleOpenSideMenu()}
    />
</li>
