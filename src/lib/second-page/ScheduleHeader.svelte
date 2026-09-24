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
        gap: 20px;
        margin-top:30px;
    }

    .line{
        width: 250px;
        height: 2px;
        background-color: #DD5E5E;
    }

    .schedule-title h1{
        font-size: 30px;
        font-weight: 500px;
        color: #DD5E5E;
    }

    .filters{
        display:flex;
        align-items: center;
        flex-direction: row;
        gap: 100px;
        justify-content: center;

        background-color: #D9D9D9;
        border-radius: 25px;
        padding: 30px 30px;

        margin-top:50px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .filters-item{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8px;

        color:black;
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
        gap: 10px;
        margin-top: 20px;
        }

        .schedule-title h1 {
        font-size: 22px;
        text-align: center;
        }

        .line {
        width: 70px;
        }

        .filters {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 15px;

        padding: 20px 15px;

        margin-top: 30px;
        margin-left: 10px;
        margin-right: 10px;

        border-radius: 20px;
        }

        .filter-all {
        gap: 8px;
        width: 100%;
        }

        .filters-item {
        gap: 5px;
        justify-content: center;
        font-size: 13px;
        }

        .color-box {
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        }

        .show-hide {
        font-size: 12px;
        padding: 4px 8px;
        }
    }
</style>