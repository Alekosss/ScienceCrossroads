<script>
  import SpeakersGrid from "$lib/components/speakers/SpeakersGrid.svelte";
	import { t } from "$lib/i18n.svelte";

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
        <span>{t('meetSpeakers')}</span>
        <hr/>
    </div>
    <div class="ScrollToArea">
        <button class="ShowHide General" onclick={ShowHideGeneral} >
            <text>
                {#if show[0]}
                    {t('hide')}
                {:else}
                    {t('show')}
                {/if}
                {t('GENERAL')}
            </text>
        </button>
        <button class="ShowHide Chemistry" onclick={ShowHideChemistry} >
            <text>
                {#if show[1]}
                    {t('hide')}
                {:else}
                    {t('show')}
                {/if}
                {t('CHEMISTRY')}
            </text>
        </button>
        <button class="ShowHide ComputerScience" onclick={ShowHideComputerScience} >
            <text>
                {#if show[2]}
                    {t('hide')}
                {:else}
                    {t('show')}
                {/if}
                {t('COMPUTER_SCIENCE')}
            </text>
        </button>
        <button class="ShowHide Physics" onclick={ShowHidePhysics} >
            <text>
            {#if show[3]}
                {t('hide')}
            {:else}
                {t('show')}
            {/if}
            {t('PHYSICS')}
            </text>
        </button>
    </div>
    <div class="Grids">
        {#if show[0]}
            <div class="SpeakerGrid General">
                <SpeakersGrid headerText={t('GENERAL')} textColor="var(--general)"/>
            </div>
        {/if}
        {#if show[1]}
            <div class="SpeakerGrid Chemistry">
                <SpeakersGrid headerText={t('CHEMISTRY')} textColor="var(--chemistry)"/>
            </div>
        {/if}
        {#if show[2]}
            <div class="SpeakerGrid ComputerScience">
                <SpeakersGrid headerText={t('COMPUTER_SCIENCE')} textColor="var(--it)"/>
            </div>
        {/if}
        {#if show[3]}
            <div class="SpeakerGrid Physics">
                <SpeakersGrid headerText={t('PHYSICS')} textColor="var(--physics)"/>
            </div>
        {/if}
    </div>
</div>

<style>
    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: clamp(2rem, 4vw, 3rem) 0;
        gap: 60px;
        
        color: var(--break);
        font-size: var(--section-heading-size);
        font-style: normal;
        font-weight: 500;
        line-height: 1.25;
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

    .Grids {
        width: 100%;
    }

    .Physics {
        color: var(--physics);
    }

    .Physics text {
        font-weight: 500;
    }

    .Physics:hover {
        background-color: var(--primary-color);
    }

    .ScrollToArea {
        width: auto;
        height: auto;
        background-color: var(--break);
        
        display: flex;
        flex-direction: row;
        gap: 4rem;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
    }

    .ShowHide {
        cursor: pointer;

        font-family: var(--font-family);

        border: none;
        border-radius: 50px;
        font-size: clamp(18px,20px,22px);
        padding: 1.1rem;
    }

    .ShowHide text {
        font-weight: 500;
    }

    .SpeakersPage {
        font-family: var(--font-family);
        width: 90%;
        justify-self: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        .CategoryHeader span{
            font-size: var(--section-heading-size-mobile);
            line-height: 1.25;
            width: fit-content;
            align-items: center;
            justify-content: center;
            display: flex;
        }

        .CategoryHeader {
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
            padding: clamp(1.5rem, 6vw, 2.5rem) 0 0.75rem;
            margin: 0;
        }

        .CategoryHeader hr {
            display: none;
        }

        .ScrollToArea {
            width: 100%;
            max-width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.625rem;
            padding: 0.75rem;
            border-radius: 1.25rem;
        }

        .ShowHide {
            min-width: 0;
            min-height: 44px;
            padding: 0.625rem 0.5rem;
            font-size: 0.875rem;
            line-height: 1.3;
        }

        .SpeakersPage :global(.SpeakerGrid) {
            width: 100%;
        }

        .SpeakersPage :global(.GridHeader) {
            font-size: 1.25rem;
            line-height: 1.3;
        }
    }
</style>