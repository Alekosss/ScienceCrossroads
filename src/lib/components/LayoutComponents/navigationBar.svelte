<script>
    import {onMount} from 'svelte';
    import PlainLogo from '$lib/assets/PlainLogo.png'
    import Moon from '$lib/assets/Icons/Moon.svelte'
    import Sun from '$lib/assets/Icons/Sun.svelte'

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

    <nav class="NavigationBar">
        <div class="logoAndTitle">
            <div class="logo">
                <img class="plainLogo" alt="ScienceCrossroadsPlainLogo.png" src={PlainLogo}/>
            </div>
        
            <div class="Title navText">
                SCIENCE CROSSROADS
            </div>
        </div>
        <button class="ThemeButton" onclick={ChangeTheme}>
            {#if isDark}
                <Moon/>
            {:else}
                <Sun/>
            {/if}
        </button>
        <div class="navLinks navText">
            <a href="/">HOME</a>
            <a href="/pages/register&faq">REGISTER & FAQ</a>
            <a href="/pages/schedule">SCHEDULE</a>
            <a href="/pages/sponsors">SPONSORS</a>
            <a href="/pages/speakers">SPEAKERS</a>
            <a href="/pages/contact">CONTACT</a>
        </div>  
    </nav>

<style>
    .NavigationBar {
        width: 1820px;
        height: 80px;

        position: sticky;
        top: 20px;
        z-index: 1000;
        align-items: center;
        display: flex;

        gap: 120px;
        margin: 35px auto 0;
        padding-left: 10px;
        border-radius: 50px;

        background-color: var(--secondary-color);
        border: 3px solid var(--primary-color);
    }

    .logoAndTitle {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .plainLogo {
        width: 60px;
        height: 60px;
    }

    .Title {
        color: var(--primary-color);
    }

    .navText {
        color: var(--primary-color);
        font-family: var(--font-family);
        font-size: var(--NavBarText);
    }

    .navText a {
        color: inherit;
        text-decoration: none;

        display: inline-block;

        transition: transform 0.2s linear;

        padding: 25px;
    }

    .navText a:hover{
        transform: scale(1.2);
    }

    .ThemeButton {
        border: none;
        background: none;
        cursor: pointer;

        display: inline-block;

        transition: transform 0.2s linear;
    }

    .ThemeButton:hover {
        transform: scale(1.2);
    }
</style>