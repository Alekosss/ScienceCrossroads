<script>
	import { t } from "$lib/i18n.svelte";

    let {onFilter, activeFilter}= $props();
</script>

<div class="schedule-frame">
    <div class="schedule-title">
        <div class="line"></div>
        
        <h1>{t('schedule')}</h1>

        <div class="line"></div>
    </div>
</div>

<div class="filters">

    <div class="filter-all">

        <div class="filters-item">
            <span class="general">{t('general')}</span>
            <div class="color-box general-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter(t('general'))}>{activeFilter === t('general') ? t('show_all') : t('show_only')}</button>

    </div>


    <div class="filter-all">

        <div class="filters-item">
            <span class="physics">{t('PHYSICS')}</span>
            <div class="color-box physics-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter(t('PHYSICS'))}>{activeFilter === t('PHYSICS') ? t('show_all') : t('show_only')}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="computer-science">{t('COMPUTER_SCIENCE')}</span>
            <div class="color-box computer-science-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter(t('COMPUTER_SCIENCE'))}>{activeFilter === t('COMPUTER_SCIENCE') ? t('show_all') : t('show_only')}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="chemistry">{t('CHEMISTRY')}</span>
            <div class="color-box chemistry-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter(t('CHEMISTRY'))}>{activeFilter === t('CHEMISTRY') ? t('show_all') : t('show_only')}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="break">{t('BREAK')}</span>
            <div class="color-box break-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter(t('BREAK'))}>{activeFilter === t('BREAK') ? t('show_all') : t('show_only')}</button>

    </div>

</div>



<style>
    .schedule-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: clamp(1rem, 3vw, 2rem);
        margin-top: 1.5rem;
    }

    .line{
        width: 250px;
        height: 2px;
        background-color: var(--break);
    }

    .schedule-title h1{
        margin: 0;
        font-size: var(--section-heading-size);
        font-weight: 500;
        line-height: 1.25;
        color: var(--break);
    }

    .filters{
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        column-gap: clamp(1rem, 5vw, 6.25rem);
        row-gap: 1.25rem;
        justify-content: center;

        background-color: #D9D9D9;
        border-radius: 25px;
        padding: 1.5rem;

        width: 90%;
        margin: 3rem auto 0;
    }

    .filters-item{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8px;


        text-align: center;
        color:black;
        max-width: 100%;
    }

    

    .color-box{
        width: 15px;
        height: 15px;
    }

    .general-color{
        background-color: #EF8FBD;
    }

    .physics-color{
        background-color: #E29B60;
    }

    .computer-science-color{
        background-color: #B66DEA;
    }

    .chemistry-color{
        background-color: #1BC69B;
    }

    .break-color{
        background-color: #DD5E5E;
    }

    .filter-all{
        flex-direction:column;
        display: flex;
        align-items:center;
        gap: 20px;
        min-width: 0;
    }

    .show-hide{
        background-color: black;
        color: white;
        border: none;
        border-radius: 25px;
        padding: 0.5rem;
        
        cursor:pointer;
    }

    @media (max-width: 768px) {
        .schedule-title {
        gap: 0.75rem;
        margin: 1.5rem 0 0;
        }

        .schedule-title h1 {
        font-size: var(--section-heading-size-mobile);
        text-align: center;
        }

        .line {
        width: auto;
        flex: 1;
        max-width: 5rem;
        }

        .filters {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;

        padding: 1rem;

        width: calc(100% - 2rem);
        margin: 1.5rem auto;

        border-radius: 20px;
        }

        .session-legend {
        gap: 0.375rem 0.75rem;
        width: calc(100% - 2rem);
        margin-top: 0;
        font-size: 0.7rem;
        }

        .filter-all {
        gap: 8px;
        width: 100%;
        }

        .filters-item {
        gap: 0.375rem;
        justify-content: center;
        font-size: 0.75rem;
        line-height: 1.3;
        }

        .color-box {
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        }

        .show-hide {
        min-height: 44px;
        font-size: 0.75rem;
        padding: 0.5rem;
        }
    }
</style>