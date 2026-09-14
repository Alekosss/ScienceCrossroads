<script>
	import Moon from "$lib/assets/Icons/Moon.svelte";
	import Sun from "$lib/assets/Icons/Sun.svelte";
	import { onMount } from "svelte";

    
    /*variable that stores 0 or 1 (true/false). If true, it means that the user wants dark theme
    otherwise the user wants light theme.In any case, when the variable changes, it rerenders 
    the colors since it is reactive*/    
    let isDark = $state(false);

    onMount(() => {
        /*check saved preference. If this is the first time visiting it saves the prefered value.
        Otherwise is saved the last saved theme based on the button*/
        const saved = localStorage.getItem('theme'); 
        //checks the theme color of the system and decides on the webpage theme.
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        //
        if (saved) {
            isDark = (saved === 'dark');
        } else {
            isDark = prefersDark;
        }
        /*removes or adds the ".dark" class on the page. If it's added the colors switch
        to the dark theme choices. Otherwise it falls back on to the "root" defaults.*/
        document.documentElement.classList.toggle('dark', isDark);
    });

    function ChangeTheme() {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }


</script>

<button class="ThemeButton" onclick={ChangeTheme}>
    {#if isDark}
        <Moon/>
    {:else}
        <Sun/>
    {/if}
</button>

<style>
    .ThemeButton {
        border: none;
        background: none;
        color: inherit;
        cursor: pointer;

        display: inline-block;

        transition: transform 0.2s linear;
    }

    .ThemeButton:hover {
        transform: scale(1.2);
    }
</style>