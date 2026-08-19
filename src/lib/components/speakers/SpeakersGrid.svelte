<script lang="ts">
  import SpeakerCard from "./SpeakerCard.svelte";

    let {
        speakers = [],
        headerText = '',
        textColor = 'red'
    } = $props();

</script>

<div class="SpeakersGrid">
    <div class="GridHeader" style="color:{textColor}">
        <span>{headerText}</span>
    </div>
    <div class="Grid">
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
        <SpeakerCard/>
    </div>
</div>

<style>
    .Grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 50px;
        row-gap: 25px;
    }

    .GridHeader {
        margin-left: 10px;
        font-size: 35px;
        font-weight: 450;
    }

    .SpeakersGrid {
        background-color: var(--secondary-color);
        padding: 50px 100px;
        border-radius: 50px;
        gap: 15px;
        margin:50px;
        
        display: flex;
        flex-direction: column;
    }
</style>