<script lang="ts">
	import { i18n } from "$lib/i18n.svelte";
    import GR from '$lib/assets/SVGs/GR.svg';
    import UK from '$lib/assets/SVGs/UK.svg';
    import Globe from '$lib/assets/SVGs/Globe.svg';
    import {slide} from 'svelte/transition';
    import { quadInOut } from "svelte/easing";
    import { onMount } from 'svelte';

    let showOptions = $state(false);

    function toggleShowOptions() {
        showOptions = !showOptions;
    }

    onMount ( () => {
        function handleKey(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                showOptions = false;
            }
        }

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    } )
</script>

<div class="languageButtonContainer">
    <button class="languageButton" onclick={toggleShowOptions}>
        <img src={Globe} alt="globe"/>
    </button>
    {#if showOptions}
        <div transition:slide={{duration:150, easing: quadInOut  }} class="languageOptions">
            <button class="Option" onclick={()=> {
                i18n.lang = 'el';
                toggleShowOptions();
            }}>
                <img src={GR} alt="GR"/> ΕΛ
            </button>
            <button class="Option" onclick={()=>
            {
                i18n.lang = 'en';
                toggleShowOptions();
            }}>
                <img src={UK} alt="UK"/> EN
            </button>
        </div>
    {/if}
</div>

<style>
    .languageButtonContainer {
        position: sticky;
        top: 6.5rem;
        z-index: 2000;
    }

    .languageButton {
        border-radius: 2rem;
        border: none;

        display: flex;
        justify-content: flex-end;
        align-items: center;


        cursor: pointer;

        width: 7vw;
        height: auto;
        padding: 0.4rem;
        transform: translateX(-40%);
    }

    .languageButton img {
        zoom: 0.7;
        transition: transform 0.2s ease-in-out;
    }

    .languageButton:hover img {
        transform: scale(1.25);
    }

    .languageOptions {
        background-color: var(--secondary-color);
        border-radius: 0.5rem;
        width: 5.5vw;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 2000;
    }

    .Option {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 5.5vw;
        height: 8vh;
        border-radius: 0.5rem;
        border: none;
        gap: 0.5rem;
        cursor: pointer;
    }

    .Option:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: 2.5px solid var(--secondary-color);
    }

    .Option img {
        width: 5vh;
        height: auto;
    }

    @media (max-width: 768px) {
        .languageButtonContainer {
            width: 20vw;
            top: 9rem;
        }

        .languageButton {
            width: 20vw;
            height: auto;
        }

        .languageOptions {
            width: 17.5vw;
            height: 10vh;
        }

       .Option img {
            width: 7.5vw;
            height: auto;
            object-fit: contain;
            flex-shrink: 0;
        }
    }
</style>