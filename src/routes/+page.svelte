<script>
	import Banner001 from "$lib/components/sections/banners/Banner001.svelte";
	import About001 from "$lib/components/sections/about/About001.svelte";
	import Section006 from "$lib/components/sections/sections/Section006.svelte";
	import Banner002 from "$lib/components/sections/banners/Banner002.svelte";
	import Section001 from "$lib/components/sections/sections/Section001.svelte";
	import Section003 from "$lib/components/sections/sections/Section003.svelte";
	import Section004 from "$lib/components/sections/sections/Section004.svelte";
	import Section005 from "$lib/components/sections/sections/Section005.svelte";
	import Contact001 from "$lib/components/sections/contact/Contact001.svelte";
	import Pricing001 from "$lib/components/sections/pricing/Pricing001.svelte";
	import Indicators001 from "$lib/components/sections/indicators/Indicators001.svelte";
	import Testimonial001 from "$lib/components/sections/testimonial/Testimonial001.svelte";
	import Testimonial002 from "$lib/components/sections/testimonial/Testimonial002.svelte";
	import Testimonial003 from "$lib/components/sections/testimonial/Testimonial003.svelte";
	import Auth001 from "$lib/components/sections/auth/Auth001.svelte";
	import Auth003 from "$lib/components/sections/auth/Auth003.svelte";
	import Auth002 from "$lib/components/sections/auth/Auth002.svelte";
	import Gallery from "$lib/components/sections/gallery/Gallery.svelte";

</script>


<Banner001 id="banner1" />
<!-- <Banner002 id="banner2" /> -->

<About001 id="about"/>

<Gallery id="gallery"/>

<Section006 id="advantage" />
<Section006 id="section2" isRight={true} />
<Section001 id="section4" />
<Section003 id="section5" />
<Section004 id="section6" />
<Section005 id="section7" />

<Contact001 id="contact1" />

<Pricing001 id="pricing1" />

<Indicators001 />

<Testimonial001/>
<Testimonial002/>
<Testimonial003/>

<Auth001/>
<Auth002/>
<Auth003/>





