<script>
    import StatisticsButton from "$lib/components/Home/StatisticsButton.svelte";
    import CountdownClock from "$lib/components/Shared/CountdownClock.svelte";
    import MapLocation from "$lib/components/Shared/MapLocation.svelte";
    import RegisterButton from "$lib/components/Shared/RegisterButton.svelte";
    import SocialPosts from "$lib/components/Home/SocialPosts.svelte";
    import BranchesCarousel from "$lib/components/BranchCarousel/BranchesCarousel.svelte";
    import ScrollToButton from "$lib/components/Shared/ScrollToButton.svelte";
	import { t } from "$lib/i18n.svelte";

    let SloganTarget = $state();

    const amountOfW = 10;
    const amountOfSpeakers = 100;
    const amountOfSpeeches = 80;
    const AmountOfR = 15;

</script>

<div class="HomePage">
    <!--This is the Slogan of the event-->
    <div class="Slogan" bind:this={SloganTarget}>
        <text>{t('hero_title')}</text>
    </div>
    <!--This is the event description along with images of the sciences-->
    <div class="EventDescription">
        <div class="ChemistryAndOverview ScienceContent ImageLeft">
            <img src="/HomePage/Chemistry.png" alt="Chemistry Content" class="ChImage"/>
            <div class="TextContent">
                <div class="TextHeader">
                    <text>{t('event_about')}</text>
                </div>
                <div class="Description DescRight">
                    <text>{t('event_about_a')}</text>
                </div>
            </div>
        </div>
        <div class="PhysicsAndParticipants ScienceContent ImageRight">
            <div class="TextContent">
                <div class="TextHeader">
                    <text>{t('event_participant')}</text>
                </div>
                <div class="Description">
                    <text>{t('event_participant_a')}</text>
                </div>
            </div>
            <img src="/HomePage/Physics.png" alt="Physics Content" class="PhImage"/>
        </div>
        <div class="ITAndOutcomes ScienceContent ImageLeft">
            <img src="/HomePage/IT.png" alt="Physics Content" class="ITImage"/>
            <div class="TextContent">
                <div class="TextHeader">
                    <text>{t('event_gain')}</text>
                </div>
                <div class="Description DescRight">
                    <text>{t('event_gain_a')}</text>
                </div>
            </div>
        </div>
    </div>
    <!--These are the components that show the stats of the events (speakers, workshops...)-->
    <div class="ContentStatistics">
        <div class="Statistic">
            <StatisticsButton amount={amountOfW} text={t('workshops')} subpage="schedule"/>
        </div>
        <div class="Statistic">
            <StatisticsButton amount={amountOfSpeakers} text={t('speakers')} subpage="speakers"/>
        </div>
        <div class="Statistic">
            <StatisticsButton amount={amountOfSpeeches} text={t('speeches')} subpage="schedule"/>
        </div>
        <div class="Statistic">
            <StatisticsButton amount={AmountOfR} text={t('roundtables')} subpage="schedule"/>
        </div>

    </div>
    <!--Event Details (Date, Location, Registration, Social Media Posts...)-->
    <div class="CategoryHeader">
        <hr/>
        <text>{t('event_details')}</text>
        <hr/>
    </div>
    <div class="EventDetails">
        <div class="Details">
            <div class="Countdown">
                <span class="Date">06-07 {t('event_date')}</span>
                <CountdownClock color=var(--it)/>
            </div>
            <div class="MapCard">
                <MapLocation textColor="var(--it)"/>
            </div>
            <div class="RegistrationContent">
                <text>{t('seats')}</text>
                <div class="RegButton">
                    <RegisterButton textColor="var(--it)"/>
                </div>
            </div>
        </div>
        <div class=SocialMediaPosts>
            <SocialPosts textColor="var(--it)"/>
        </div>
    </div>
    <div class="CategoryHeader">
        <hr/>
        <text>{t('comitee')}</text>
        <hr/>
    </div>
    <div class="OrganizingTeam">
        <div class="OrganizingText">
            <span>{t('comitee_teams')}</span>
        </div>
        <div class="BranchesCarousel">
            <BranchesCarousel/>          
        </div>        
    </div>
</div>

<ScrollToButton ArrowDirectionUp={true} scrollTarget={SloganTarget}/>

<style>
    .BranchesCarousel {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        align-self: center;

        width: 100%;
        min-height: clamp(350px, 60vh, 500px);
    }

    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 160px 0;
        width: 100%;
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
        
    .ChemistryAndOverview {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;
    }
    
    .ChImage {
        width: 50%;
        height: auto;
        aspect-ratio: 221/147;
        object-fit: cover;
    }

    .ContentStatistics {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        width: 100%;
        row-gap: 5rem;
        margin: 4rem 0;
    }

    .Countdown {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        zoom: 0.7;
        width: 100%;
    }
    
    .Description {
        color: var(--secondary-color);
        font-size: clamp(10px,1.8vw,20px);
        font-style: normal;
        font-weight: 200;
        line-height: normal;
    }

    .DescRight {
        text-align: justify;
    }
    
    .Date {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .Details {
        zoom: 0.8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        gap: clamp(1rem,2.5rem,4rem);
    }

    .EventDescription {
        display: flex;
        flex-direction: column;
    }
        
    .EventDetails {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        overflow: hidden;
        width: 100%;
    }

    .EventDetails span {
            color: var(--it);
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: auto;
            text-underline-offset: auto;
            text-underline-position: from-font;    
        }
        
    .HomePage {
        justify-self: center;
        font-family: var(--font-family);
        width: 90%;
    }

    .ITAndOutcomes {
        margin: 4rem 0;
    }
    
    .ITImage {
        width: 50%;
        height: auto;
        aspect-ratio: 137/77;
        object-fit: cover;
    }

    .ImageLeft img {
    -webkit-mask-image:
        linear-gradient(to bottom, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to right, var(--primary-color) 60%, transparent 95%),
        linear-gradient(to left, var(--primary-color) 60%, transparent 95%);
    -webkit-mask-composite: source-in; 

    mask-image:
        linear-gradient(to bottom, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to right, var(--primary-color) 60%, transparent 95%),
        linear-gradient(to left, var(--primary-color) 60%, transparent 95%);
    mask-composite: intersect; 
    }

    .ImageRight img {
    -webkit-mask-image:
        linear-gradient(to bottom, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 65%, transparent 100%),
        linear-gradient(to right, var(--primary-color) 60%, transparent 95%),
        linear-gradient(to left, var(--primary-color) 60%, transparent 100%);
    -webkit-mask-composite: source-in; 

    mask-image:
        linear-gradient(to bottom, var(--primary-color) 70%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 65%, transparent 100%),
        linear-gradient(to right, var(--primary-color) 60%, transparent 95%),
        linear-gradient(to left, var(--primary-color) 60%, transparent 100%);
    mask-composite: intersect; 
    }

    .MapCard {
        display: flex;
        justify-content: center;
        align-items: center;
        zoom: 0.7;
        margin-left: 10%;
    }
    
    .OrganizingTeam {
        color: var(--it);
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: flex-start;
        align-items: center;
        gap: clamp(0.5rem,1rem,1.5rem);
        width: 100%;
    }

    .OrganizingText {
        font-size: 2vw;
    }

    .PhysicsAndParticipants {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 5rem 0;
    }

    .PhImage {
        width: 50%;
        height: auto;
        aspect-ratio: 884/589;
        object-fit: cover;
    }

    .RegButton {
        height: 125px;
    }

    .RegistrationContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        color: var(--secondary-color);
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        zoom: 0.75;
        color: var(--it);
    }

    .ScienceContent {
        gap: 20px;
        display: flex;
    }

    .Slogan {
        width: 100%;
        text-align: center;
        font-size: clamp(15px,3.5vw,35px);
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        padding: 75px 0px;
        color: var(--break);
    }

    .SocialMediaPosts {
        zoom: 0.6;
        width: 50%;
        justify-content: center;
        display: flex;
    }

    .TextContent {
        width: 50%;
        height: auto;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    
    .TextHeader {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--it);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: auto;
    }

    .TextHeader text {
        font-size: clamp(1.6vw,1.8vw,2vw);
        text-align: center;
    }

    .Statistic {
        zoom: 0.7;
        width: 75%;
        align-self: center;
        justify-self: center;
    }

    @media (max-width: 768px) {
        .BranchesCarousel {
            zoom: 0.3;
            height: auto;
        }

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

        .ContentStatistics {
            zoom: 0.4;
        }

        .Countdown {
            zoom: 0.75;
            margin: 0;
        }

        .ChImage {
            height: 17.5vh;
        }

        .ChemistryAndOverview {
            height: auto;
            min-height: 15vh;
        }
        
        .Description text {
            font-size: clamp(1.5vw,1.75vw,2vw);
        }        

        .Details {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px;
            padding: 0px;
        }

        .EventDetails {
            zoom: 0.9;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        .ITAndOutcomes {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .ITImage {
            height: 17.5vh;
        }

        .MapCard {
            zoom: 0.575;
            margin: auto;
        }

        .OrganizingTeam {
            font-size: clamp(3vw,4vw,5vw);
        }

        .OrganizingTeam span {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .PhysicsAndParticipants {
            height: auto;
            min-height: 15vh;
        }

        .PhImage{
            height: 17.5vh;
        }

        .RegistrationContent {
            zoom: .9;
        }

        .RegButton {
            zoom: 0.8;
        }

        .SocialMediaPosts {
            zoom: 0.5;
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .TextHeader text {
            font-size: clamp(1.5vw,2.5vw,4vw);
        }
    }
</style>
