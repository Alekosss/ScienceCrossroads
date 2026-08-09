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
            <GetDirectionsButton textColor="var(--it)"/>
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
        width: 800px;
        height: 400px;
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
        width: 400px;
        height: 100px;
    }

    .MapLocationImage {
        display: block;
        align-content: center;
    }

    .MapLocationImage img{
        width: 330px;
        height: 330px;
    }

    .TitleAndDirections {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;
    }
</style>