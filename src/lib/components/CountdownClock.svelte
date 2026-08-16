<div class="CountdownClock">
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

    .Seperator {
        height: 40px;
        width: 1px;
        background-color: var(--it);        
        margin: 0px;
    }

    .Numbers {
        display: flex;
        height: 44px;
        padding: 7.5px 10px;
        align-items: center;
        justify-content: center;
        align-self: center;
        gap: 50px;

        color: var(--it);
        font-weight: 600;
        font-size: 20px;
        font-style: normal;
        line-height: normal;
    }

    .Numbers span {
        flex: 1;
    }

    .TimeFormat {
        height: 16px;
        display: flex;
        flex-direction: row;
        color: var(--it);
        gap: 90px;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    .TimeFormat span{
        flex: 1;

        color: var(--it);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>