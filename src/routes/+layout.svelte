<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';

	// import favicon from '$lib/assets/favicon.svg';

	import NavigationBar from '$lib/components/navigationBar.svelte';
	import '../app.css'

</script>

<NavigationBar/>
<!--IGNORE THIS LINE AND ERROR-->
<slot />
<!--TILL THIS POINT-->
<Footer/>