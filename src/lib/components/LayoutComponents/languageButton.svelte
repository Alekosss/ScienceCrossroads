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
        width: fit-content;
        pointer-events: none;
        margin-left: 2em;
        transform: translateX(-60%);
    }

    .languageButton {
        border-radius: 2rem;
        border: none;

        display: flex;
        justify-content: flex-end;
        align-items: center;


        cursor: pointer;

        width: 8vw;
        height: auto;
        padding: 0.4rem;
        transform: none;
        pointer-events: auto;
    }

    .languageButton img {
        width: 32px;
        height: 32px;
        transition: transform 0.2s ease-in-out;
    }

    .languageButton:hover img {
        transform: scale(1.25);
    }

    .languageOptions {
        background-color: var(--secondary-color);
        border-radius: 0.5rem;
        width: 5.5vw;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 2000;
        pointer-events: auto;
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
            width: calc(100% - 2rem);
            margin: 0 auto;
            top: 6rem;
            z-index: 900;
            pointer-events: none;
        }

        .languageButton {
            width: 48px;
            height: 48px;
            padding: 0.5rem;
            transform: none;
            pointer-events: auto;
        }

        .languageOptions {
            width: 88px;
            height: auto;
            pointer-events: auto;
        }

       .Option img {
            width: 24px;
            height: 24px;
            object-fit: contain;
            flex-shrink: 0;
        }

        .Option {
            width: 88px;
            min-height: 44px;
        }
    }
</style>