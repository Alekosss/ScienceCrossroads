<script>
  import SpeakerCard from "$lib/components/speakers/SpeakerCard.svelte";
  import SpeakersGrid from "$lib/components/speakers/SpeakersGrid.svelte";

</script>
<div class="SpeakersPage">
    <div class="CategoryHeader">
        <hr/>   
        <span>MEET OUR SPEAKERS</span>
        <hr/>
    </div>
    <div class="ScrollToArea"></div>
    <div class="SpeakerGridTest">
        <SpeakersGrid headerText="GENERAL" textColor="var(--general)"/>
    </div>
</div>

<style>
    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px 0;
        gap: 60px;
        
        color: var(--break);
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .CategoryHeader hr {
        width: 250px;
        background-color: var(--break);
        border: none;
        height: 2px;
        margin: 0;
    }

    .ScrollToArea {
        width: 1250px;
        height: 200px;
        margin: 0px 150px 25px;
        border-radius: 50px;
        background-color: purple;
    }

    .SpeakersPage {
        font-family: var(--font-family);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>