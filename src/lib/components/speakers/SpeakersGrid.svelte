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
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        align-items: center;
        justify-items: center;
        justify-content: center;
        column-gap: 1.5vw;
        row-gap: 5vh;
        width:  auto;
        height: auto;
    }

    .GridHeader {
        font-size: clamp(30px,32.5px,35px);
        font-weight: 600;
    }

    .SpeakersGrid {
        background-color: var(--secondary-color);
        border-radius: 3rem;
        gap: 1rem;
        margin: 2rem auto;
        padding: 1rem 0;
        width: 90%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        .Grid {
            display: flex;
            flex-direction: column;
        }

        .GridHeader {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 0.5rem;
        }

        .SpeakersGrid {
            padding: 0px;
        }
    }
</style>