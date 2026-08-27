<script lang="ts">
  import Footer from '$lib/components/LayoutComponents/Footer.svelte';

	import favicon from '$lib/assets/favicon.svg';

	import NavigationBar from '$lib/components//LayoutComponents/navigationBar.svelte';
	import '../app.css'

</script>

<NavigationBar/>
<!--IGNORE THIS LINE AND ERROR-->
<slot />
<!--TILL THIS POINT-->
<Footer/>