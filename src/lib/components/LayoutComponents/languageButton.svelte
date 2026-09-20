<script lang="ts">
	import { i18n } from "$lib/i18n.svelte";
    import GR from '$lib/assets/SVGs/GR.svg';
    import UK from '$lib/assets/SVGs/UK.svg';

    function toggleLanguage() {
        console.log("lang changes from: ",i18n.lang);
        if (i18n.lang === 'en') {
            i18n.lang = 'el';
        }
        else {
            i18n.lang = 'en';
        }
    }
</script>

<div class="languageButtonContainer">
    <button class="languageButton" onclick={toggleLanguage}>
        {#if i18n.lang === 'en'} 
            <img src={UK} alt="EN"/>
        {:else}
            <img src={GR} alt="GR"/>
        {/if}
    </button>
</div>

<style>
    .languageButton {
        border-radius: 2rem;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        width: auto;
        padding: 0.5rem 0.25rem;
    }

    .languageButton img {
        width: 5vw;
        height: 5vh;
    }
</style>