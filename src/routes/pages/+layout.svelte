<script lang="ts">
  	import Footer from '$lib/components/LayoutComponents/Footer.svelte';
	import PlainLogo from '$lib/assets/PlainLogo.png';
	import NavigationBar from '$lib/components/LayoutComponents/navigationBar.svelte';
	import LanguageButton from '$lib/components/LayoutComponents/languageButton.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={PlainLogo	} />
</svelte:head>

<NavigationBar/>
<LanguageButton/>
{@render children()}
<Footer/>