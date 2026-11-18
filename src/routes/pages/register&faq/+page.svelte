<script lang="ts">
    import CountdownClock from "$lib/components/Shared/CountdownClock.svelte";
    import MapLocation from "$lib/components/Shared/MapLocation.svelte";
    import Qna from "$lib/components/Register&FAQ/Qna.svelte";
    import RegisterButton from "$lib/components/Shared/RegisterButton.svelte";
	import { t } from "$lib/i18n.svelte";


    let showing = $state(true);

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
        <span class="Date">06-07 {t('event_date')}</span>
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
        <Qna q={t('question_who')} a={t('answer_who')}/>
        <Qna q={t('question_exc')} a={t('answer_exc')}/>
        <Qna q={t('question_stem')} a={t('answer_stem')}/>
        <Qna q={t('question_knowledge')} a={t('answer_knowledge')}/>
        <Qna q={t('question_place')} a={t('answer_place')}/>
        <Qna q={t('question_cost')} a={t('answer_cost')}/>
        <Qna q={t('question_organizers')} a={t('answer_organizers')}/>
        <Qna q={t('question_register')} a={t('answer_register')}/>

    </div>
</div>

<style>
    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: clamp(2rem, 4vw, 3.5rem) 0;
        gap: clamp(1rem, 3vw, 2rem);
    }

    .CategoryHeader text {
        color: var(--break);
        font-size: var(--section-heading-size);
        font-style: normal;
        font-weight: 500;
        line-height: 1.25;
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

    .Date {
        color:var(--chemistry);
        zoom: 1.5;
        text-decoration: underline;
        text-align: center;
    }

    .FAQ {
        background-color: var(--secondary-color);
        border-radius: 2rem;
        margin: 0px auto;
        gap: 20px;
        padding: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        zoom: 0.75;
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
    }

    .Register span {
        color: var(--chemistry);
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        zoom: 0.85;
    }

    .Registration {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 50px;
    }

    .RegisterAndFAQ {
        font-family: var(--font-family);
        justify-self: center;
        width: 90vw;
    }

    @media (max-width: 768px) {
        .CategoryHeader text{
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

        .Countdown {
            width: 100%;
            zoom: 1;
        }

        .FAQ {
            width: 100%;
            margin: 0 auto 1.5rem;
            padding: clamp(0.875rem, 4vw, 1.25rem);
            border-radius: 1.5rem;
        }

        .LastHeader {
            text-align: center;
        }

        .LocationAndRegister {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin: 1.5rem 0;
        }

        .Location {
            width: 100%;
            zoom: 1;
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
            zoom: 1;
            max-width: 100%;
        }

        .Register :global(.RegisterButton) {
            padding: 0.75rem 1.25rem;
            border-radius: 1.5rem;
        }

        .Register :global(.RegisterButton span) {
            font-size: 1.125rem;
        }

        .Register span {
            font-size: 1.25rem;
            line-height: 1.4;
        }
    }
</style>