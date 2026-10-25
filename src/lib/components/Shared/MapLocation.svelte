<script>
    import GetDirectionsButton from "$lib/components/Shared/GetDirectionsButton.svelte"
    import Location from "$lib/assets/ComponentAssets/Location.png"
	import { t } from "$lib/i18n.svelte";

    let {
        textColor = "blue"
    } = $props();
</script>

<div class="MapLocation">
    <div class="TitleAndDirections">
        <div class="KedeaText">
            <text>{t('kedea')}</text>
        </div>
        <div class="Directions">
            <GetDirectionsButton textColor={textColor}/>
        </div>
    </div>
    <div class="MapLocationImage">
        <img src={Location} alt="Map Location"/> 
    </div>
</div>

<style>

    .MapLocation {
        background-color: var(--secondary-color);
        border-radius: 50px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        width: min(800px, 100%);
        min-height: 400px;
        padding: 1.5rem;
        box-sizing: border-box;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    .MapLocation text {
        color: var(--primary-color);
        text-align: center;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        display: flex;
        width: 100%;
    }

    .MapLocationImage {
        display: block;
        align-content: center;
    }

    .MapLocationImage img{
        width: min(330px, 100%);
        height: auto;
    }

    .TitleAndDirections {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;
        min-width: 0;
    }

    @media (max-width: 768px) {
        .MapLocation {
            flex-direction: column;
            min-height: 0;
            gap: 1rem;
            padding: 1.25rem;
            border-radius: 1.5rem;
        }

        .MapLocation text {
            height: auto;
            justify-content: center;
            font-size: clamp(1.25rem, 5vw, 1.75rem);
        }

        .MapLocationImage {
            width: 100%;
            text-align: center;
        }

        .MapLocationImage img {
            max-height: 16rem;
            object-fit: contain;
        }

        .TitleAndDirections {
            width: 100%;
            gap: 1rem;
        }
    }
</style>