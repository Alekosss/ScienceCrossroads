<script lang="ts">
	import { i18n } from "$lib/i18n.svelte";
    import GR from '$lib/assets/SVGs/GR.svg';
    import UK from '$lib/assets/SVGs/UK.svg';
    import Globe from '$lib/assets/SVGs/Globe.svg';

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
        <div class="overlay">
            <div class="languageOptions">
                <button class="Option" onclick={()=>i18n.lang = 'el'}>
                    <img src={GR} alt="GR"/> ΕΛ
                </button>
                <button class="Option" onclick={()=>i18n.lang = 'en'} >
                    <img src={UK} alt="UK"/> EN
                </button>
            </div>
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

    .overlay {
        z-index: 2000;
        position: absolute;
        background-color: rgba(0,0,0,0.8);
    }
</style>