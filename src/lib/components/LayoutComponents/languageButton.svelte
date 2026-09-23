<script lang="ts">
	import { i18n } from "$lib/i18n.svelte";
    import GR from '$lib/assets/SVGs/GR.svg';
    import UK from '$lib/assets/SVGs/UK.svg';
    import Globe from '$lib/assets/SVGs/Globe.svg';
    import {slide} from 'svelte/transition';
    import { quadInOut } from "svelte/easing";

    let showOptions = $state(false);

    function toggleShowOptions() {
        showOptions = !showOptions;
    }
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
</style>