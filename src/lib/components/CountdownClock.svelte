<script>
    let {
        color = "red"
    } = $props();
</script>

<div class="CountdownClock" style="color: {color}">
    <div class="Numbers">
        <span>MM</span>
        <div class="Seperator"></div>
        <span>DD</span>
        <div class="Seperator"></div>
        <span>HH</span>
        <div class="Seperator"></div>
        <span>MM</span>
    </div>
    <div class="TimeFormat">
        <span>MONTHS</span>
        <span>DAYS</span>
        <span>HOURS</span>
        <span>MINUTES</span>
    </div>
</div>

<style>
    .CountdownClock {
        display: grid;
        grid-template-rows: 2fr 1fr;
        justify-content: center;
        width: 650px;
        height: 100px;
        background-color: var(--secondary-color);
        border-radius: 50px;
    }

    .Numbers {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .Numbers span {
        font-size: 30px;
        width: 136px;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Seperator {
        height: 40px;
        width: 2px;
        margin: 0px;
        background-color: currentColor;
    }

    .TimeFormat {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .TimeFormat span {
        width: 137.5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>