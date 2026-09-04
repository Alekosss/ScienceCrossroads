<script>
    let {onFilter, activeFilter}= $props();
</script>

<div class="schedule-frame">
    <div class="schedule-title">
        <div class="line"></div>
        
        <h1>EVENT SCHEDULE</h1>

        <div class="line"></div>
    </div>
</div>

<div class="filters">
    <div class="filter-all">

        <div class="filters-item">
            <span class="general">General</span>
            <div class="color-box general-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter('general')}>{activeFilter === 'general' ? 'Hide' : 'Show'}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="physics">Physics</span>
            <div class="color-box physics-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter('physics')}>{activeFilter === 'physics' ? 'Hide' : 'Show'}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="computer-science">Computer Science</span>
            <div class="color-box computer-science-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter('computer science')}>{activeFilter === 'computer science' ? 'Hide' : 'Show'}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="chemistry">Chemistry</span>
            <div class="color-box chemistry-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter('chemistry')}>{activeFilter === 'chemistry' ? 'Hide' : 'Show'}</button>

    </div>
    
    <div class="filter-all">

        <div class="filters-item">
            <span class="break">Break</span>
            <div class="color-box break-color"></div>
        </div>

        <button class="show-hide" onclick={() => onFilter('break')}>{activeFilter === 'break' ? 'Hide' : 'Show'}</button>
        
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
        padding: 5px 5px;
        
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