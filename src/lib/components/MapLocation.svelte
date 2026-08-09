<script>
    import GetDirectionsButton from "$lib/components/GetDirectionsButton.svelte"
    import Location from "$lib/assets/ComponentAssets/Location.png"
</script>

<div class="MapLocation">
    <div class="TitleAndDirections">
        <div class="KedeaText">
            <text>Aristotle University's Research Administration Center (KEDEA)</text>
        </div>
        <div class="Directions">
            <GetDirectionsButton width="280px" height="80px" textColor="var(--it)"/>
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
        width: 640px;
        height: 320px;
        margin: 20px;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    .MapLocation text {
        color: var(--primary-color);
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        display: flex;
        width: 300px;
        height: 100px;
    }

    .MapLocationImage {
        display: block;
        align-content: center;
    }

    .MapLocationImage img{
        width: 280px;
        height: 280px;
        max-width: 280px;
        max-height: 280px;
    }

    .TitleAndDirections {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
</style>