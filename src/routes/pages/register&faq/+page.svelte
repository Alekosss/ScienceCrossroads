<script>
  import CountdownClock from "$lib/components/CountdownClock.svelte";

</script>
<div class="RegisterAndFAQ">
    <!--Header Text-->
    <div class="CategoryHeader">
        <hr/>
        <text>EVENT DATE</text>
        <hr/>
    </div>
    <!--Register and more...-->
    <div class="Registration">
        <div class="Countdown">
            <CountdownClock color=var(--chemistry)/>
        </div>
    </div>
</div>

<style>
    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 160px 0;
        gap: 60px;
    }

    .CategoryHeader text {
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

    .Countdown {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px;
    }
    
    .Registration {
        display: flex;
        flex-direction: column;
    }

    .RegisterAndFAQ {
        font-family: var(--font-family);
    }
</style>