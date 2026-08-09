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
        height: 150px;
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
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 38px;
        gap: 55px;

        color: var(--it);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-top: 45px;
        padding-bottom: 15px;
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
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>