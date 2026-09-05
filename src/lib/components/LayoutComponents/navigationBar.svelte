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

    //Menu Button functionality:
    let menuShowing = $state(false);
    function toggleMenu() {
        menuShowing = !menuShowing;
    }
</script>

<nav class="NavigationBar">
    <div class="logoAndTitle">
        <div class="logo">
            <img class="plainLogo" alt="ScienceCrossroadsPlainLogo.png" src={PlainLogo}/>
        </div>
        <div class="Title">
            <span>SCIENCE CROSSROADS</span>
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
    <div class="menuButton">
        <button class="burgerButton" type="button" aria-label="Toggle navigation bar menu" aria-haspopup="true" aria-expanded={menuShowing} onclick={toggleMenu} >
            <hr/>
            <hr/>
            <hr/>
        </button>   
    </div>
    {#if menuShowing}
        <div class="MenuList">
            <a onclick={() => menuShowing = !menuShowing} href="/">HOME</a>
            <a onclick={() => menuShowing = !menuShowing} href="/pages/register&faq">REGISTER & FAQ</a>
            <a onclick={() => menuShowing = !menuShowing} href="/pages/schedule">SCHEDULE</a>
            <a onclick={() => menuShowing = !menuShowing} href="/pages/sponsors">SPONSORS</a>
            <a onclick={() => menuShowing = !menuShowing} href="/pages/speakers">SPEAKERS</a>
            <a onclick={() => menuShowing = !menuShowing} href="/pages/contact">CONTACT</a>
        </div> 
    {/if}
</nav>

<style>
    .logoAndTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        width: 25%;
    }

    .MenuList {
        display: none;
    }

    .NavigationBar {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        width: 90%;
        height: 75px;

        position: sticky;
        top: 20px;
        z-index: 1000;

        gap: 2rem;
        margin: 35px auto 0;
        border-radius: 50px;

        background-color: var(--secondary-color);
        border: 3px solid var(--primary-color);
        font-family: var(--font-family);
    }

    
    .navLinks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4%;
        width: 60%;
    }

    .navText {
        color: var(--primary-color);
        font-size: var(--NavBarText);
    }

    .navText a {
        color: inherit;
        text-decoration: none;

        display: inline-block;

        font-size: clamp(10px,1.25vw,20px);

        transition: transform 0.2s linear;
    }

    .navText a:hover{
        transform: scale(1.2);
    }

    .plainLogo {
        display: block;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
    }

    .Title span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(1.2vw,1.4vw,1.45vw);
        color: var(--primary-color);
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

    @media (max-width: 768px) {
        .burgerButton {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
            height: 90%;
            border-radius: 15px;
            gap: 2%;
            background-color: var(--secondary-color);
        }

        .burgerButton hr {
            width: 90%;
            height: 5%;
            color: var(--primary-color);
            background-color: var(--primary-color);
            border: none;
            border-radius: 10px;
        }

        .menuButton {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .MenuList {
            display: flex;
            flex-direction: column;
            justify-content: center;

            position: absolute;
            top: 100%;   /* add this */
            right: 0;
            padding: 2%;
            border-radius: 5%;
            background-color: var(--secondary-color);
        }

        .MenuList a {
            text-decoration: none;
            color: var(--primary-color);
        }
        
        .navText {
            display: none;
        }

        .NavigationBar {
            gap: 7.5%;
            justify-content: center;
            align-items: center;
        }
    }

    @media (min-width: 768px) {
        .menuButton {
            display: none;
        }
    }
</style>