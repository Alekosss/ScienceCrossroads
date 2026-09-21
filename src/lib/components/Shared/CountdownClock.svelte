<script>
	import { t } from "$lib/i18n.svelte";
  import { onDestroy, onMount } from "svelte";

    let {
        color = "red"
    } = $props();

    let targetDate = new Date("2027-03-06T09:00:00+02:00").getTime();
    let currentDate = $state(Date.now());

    let difference = $derived(targetDate - currentDate);

    // :1000->get seconds, :60->get minutes, :60->get hours, :24->get days
    let Days = $derived(Math.floor(difference/1000/60/60/24));
    let Hours = $derived(Math.floor(difference/1000/60/60%24));
    let Minutes= $derived(Math.floor(difference/1000/60%60%24));
    let Seconds = $derived(Math.floor(difference/1000%60%60%24));

      /** @type {ReturnType<typeof setInterval>} */
    let interval;
    
    onMount( () => {
        interval = setInterval( () => {
            currentDate = Date.now();   
        },1000);
    });

    onDestroy( () => {
        clearInterval(interval);
    });

</script>

<div class="CountdownClock" style="color: {color}">
    <div class="Numbers">
        <span>{Days}</span>
        <div class="Seperator"></div>
        <span>{Hours}</span>
        <div class="Seperator"></div>
        <span>{Minutes}</span>
        <div class="Seperator"></div>
        <span>{Seconds}</span>
    </div>
    <div class="TimeFormat">
        <span>{t('days')}</span>
        <span>{t('hours')}</span>
        <span>{t('hours')}</span>
        <span>{t('seconds')}</span>
    </div>
</div>

<style>
    .CountdownClock {
        display: grid;
        grid-template-rows: 2fr 1fr;
        justify-content: center;
        align-items: center;
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