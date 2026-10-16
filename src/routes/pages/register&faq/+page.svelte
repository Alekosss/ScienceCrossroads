<script>
    import CountdownClock from "$lib/components/Shared/CountdownClock.svelte";
    import MapLocation from "$lib/components/Shared/MapLocation.svelte";
    import Qna from "$lib/components/Register&FAQ/Qna.svelte";
    import RegisterButton from "$lib/components/Shared/RegisterButton.svelte";
	import { t } from "$lib/i18n.svelte";


    let showing = $state(true);

    const q = "Where will the event take place?";
    const a = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";
    
    function buttonClick() {
        console.log("Before: " + showing);
        showing =! showing;
        console.log("After: " + showing);
    }
</script>

<div class="RegisterAndFAQ">
    <!--Header Text-->
    <div class="CategoryHeader">
        <hr/>
        <text>{t('DATE')}</text>
        <hr/>
    </div>
    <!--Register and more...-->
    <div class="Registration">
        <div class="Countdown">
            <CountdownClock color=var(--chemistry)/>
        </div>
        <div class="LocationAndRegister">
            <div class="Location">
                <MapLocation textColor="var(--chemistry)"/>
            </div>
            <div class="Register">
                <span>{t('seats')}</span>
                <RegisterButton textColor=var(--chemistry)/>
            </div>
        </div>
    </div>
    <!--FAQ-->

    <div class="CategoryHeader LastHeader">
        <hr/>
        <text>{t('FAQ')}</text>
        <hr/>
    </div>
    <div class="FAQ">
        <Qna q={"question 1"} a={"answer1"}/>
        <Qna/>
        <Qna/>
    </div>
</div>

<style>
    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 160px 0;
        gap: 3rem;
    }

    .CategoryHeader text {
        color: var(--break);
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
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
        zoom: 0.75;
    }

    .FAQ {
        background-color: var(--secondary-color);
        border-radius: 50px;
        margin: 0px 10rem;
        gap: 20px;
        padding: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .LastHeader {
        text-decoration: underline solid var(--break);
    }

    .LocationAndRegister {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 100px;
        margin: 50px;
    }

    .Location {
        zoom: 0.7;
    }

    .Register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        zoom: 0.8;
    }

    .Register span {
        color: var(--chemistry);
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }

    .Registration {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 50px;
    }

    .RegisterAndFAQ {
        font-family: var(--font-family);
        width: 90%;
        justify-self: center;
    }

    @media (max-width: 768px) {
        .CategoryHeader text{
            font-size:  clamp(6vw,7.5vw,9vw);
            width: fit-content;
            align-items: center;
            justify-content: center;
            display: flex;
        }

        .CategoryHeader {
            display: flex;
            flex-direction: row;
            gap: 5%;
            padding: 0;
            margin: 25% 0;
        }

        .CategoryHeader hr {
            display: none;
        }

        .Countdown {
            width: 100%;
            zoom: 0.5;
        }

        .FAQ {
            width: 80%;
            margin: auto;
            zoom: 0.65;
        }

        .LastHeader {
            zoom: 0.7;
        }

        .LocationAndRegister {
            display: flex;
            flex-direction: column;
        }

        .Location {
            zoom: 0.4;
            margin: auto;
            align-items: center;
            justify-content: center;
        }

        .Registration {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: auto;
        }

        .Register {
            zoom: 0.7;
        }
    }
</style>