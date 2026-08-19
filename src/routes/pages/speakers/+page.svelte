<script>
  import SpeakersGrid from "$lib/components/speakers/SpeakersGrid.svelte";

    let show = $state([true,true,true,true]);

    function ShowHideGeneral() {
        show[0] = !show[0];
    }

    function ShowHideChemistry() {
        show[1] = !show[1];
    }

    function ShowHideComputerScience() {
        show[2] = !show[2];
    }

    function ShowHidePhysics() {
        show[3] = !show[3];
    }
</script>
<div class="SpeakersPage">
    <div class="CategoryHeader">
        <hr/>   
        <span>MEET OUR SPEAKERS</span>
        <hr/>
    </div>
    <div class="ScrollToArea">
        <button class="ShowHide General" onclick={ShowHideGeneral} >
            {#if show[0]}
                HIDE
            {:else}
                SHOW
            {/if}
            GENERAL
        </button>
        <button class="ShowHide Chemistry" onclick={ShowHideChemistry} >
            {#if show[1]}
                HIDE
            {:else}
                SHOW
            {/if}
            CHEMISTRY
        </button>
        <button class="ShowHide ComputerScience" onclick={ShowHideComputerScience} >
            {#if show[2]}
                HIDE
            {:else}
                SHOW
            {/if}
            COMPUTER SCIENCE
        </button>
        <button class="ShowHide Physics" onclick={ShowHidePhysics} >
            <span>
            {#if show[3]}
                HIDE
            {:else}
                SHOW
            {/if}
            PHYSICS
            </span>
        </button>
    </div>
    <div class="Grids">
        {#if show[0]}
            <div class="SpeakerGrid General">
                <SpeakersGrid headerText="GENERAL" textColor="var(--general)"/>
            </div>
        {/if}
        {#if show[1]}
            <div class="SpeakerGrid Chemistry">
                <SpeakersGrid headerText="CHEMISTRY" textColor="var(--chemistry)"/>
            </div>
        {/if}
        {#if show[2]}
            <div class="SpeakerGrid ComputerScience">
                <SpeakersGrid headerText="COMPUTER SCIENCE" textColor="var(--it)"/>
            </div>
        {/if}
        {#if show[3]}
            <div class="SpeakerGrid Physics">
                <SpeakersGrid headerText="PHYSICS" textColor="var(--physics)"/>
            </div>
        {/if}
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

    .Chemistry {
        color: var(--chemistry);
    }

    .Chemistry:hover {
        background-color: var(--primary-color);
    }

    .ComputerScience {
        color: var(--it);
    }

    .ComputerScience:hover {
        background-color: var(--primary-color);
    }
    
    .General {
        color: var(--general);
    }

    .General:hover {
        background-color: var(--primary-color);
    }

    .Physics {
        color: var(--physics);
    }

    .Physics span {
        font-weight: 500;
    }

    .Physics:hover {
        background-color: var(--primary-color);
    }

    .ScrollToArea {
        width: 1250px;
        height: 100px;
        background-color: var(--break);
        
        display: flex;
        flex-direction: row;
        gap: 50px;
        margin: 0px 150px 25px;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
    }

    .ShowHide {
        cursor: pointer;

        font-family: var(--font-family);

        border: none;
        border-radius: 50px;
        padding: 15px 25px;
        font-size: 20px;
        font-weight: 600;
    }

    .SpeakersPage {
        font-family: var(--font-family);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>