<script>
    import StatisticsButton from "$lib/components/Home/StatisticsButton.svelte";
    import CountdownClock from "$lib/components/Shared/CountdownClock.svelte";
    import MapLocation from "$lib/components/Shared/MapLocation.svelte";
    import RegisterButton from "$lib/components/Shared/RegisterButton.svelte";
    import SocialPosts from "$lib/components/Home/SocialPosts.svelte";
    import BranchesCarousel from "$lib/components/BranchCarousel/BranchesCarousel.svelte";
    import ScrollToButton from "$lib/components/Shared/ScrollToButton.svelte";
	import AdminButton from "$lib/components/Home/AdminButton.svelte";

    let SloganTarget = $state();
</script>

<div class="HomePage">
    <div class="Admin">
        <AdminButton/>
    </div>
    <!--This is the Slogan of the event-->
    <div class="Slogan" bind:this={SloganTarget}>
        <text>INSPIRED BY SCIENCE, GUIDED BY ETHICS</text>
    </div>
    <!--This is the event description along with images of the sciences-->
    <div class="EventDescription">
        <div class="ChemistryAndOverview ScienceContent ImageLeft">
            <img src="/HomePage/Chemistry.png" alt="Chemistry Content" class="ChImage"/>
            <div class="TextContent">
                <div class="TextHeader">
                    <text>WHAT IS THE EVENT ABOUT?</text>
                </div>
                <div class="Description">
                    <text>Science Crossroads is two-day conference dedicated to exploring the role of ethics across the sciences, highlighting the moral questions that shape contemporary research and scientific practice. In a time of rapid technological change and complex global challenges, the event offers an interdisciplinary space to reflect on how science can advance responsibly and in the service of the common good.</text>
                </div>
            </div>
        </div>
        <div class="PhysicsAndParticipants ScienceContent ImageRight">
            <div class="TextContent">
                <div class="TextHeader">
                    <text>WHO WILL BE PARTICIPATING?</text>
                </div>
                <div class="Description">
                    <text>The conference will bring together distinguished university professors, renowned experts, and leading authorities from a range of disciplines, and will be open to a wider audience within and beyond the academic community. Through keynote lectures, panel discussions, and open dialogue, participants will exchange ideas and explore the ethical dimensions of scientific work from multiple perspectives.</text>
                </div>
            </div>
            <img src="/HomePage/Physics.png" alt="Physics Content" class="PhImage"/>
        </div>
        <div class="ITAndOutcomes ScienceContent ImageLeft">
            <img src="/HomePage/IT.png" alt="Physics Content" class="ITImage"/>
            <div class="TextContent">
                <div class="TextHeader">
                    <text>WHAT IS TO BE GAINED FROM THE EVENT?</text>
                </div>
                <div class="Description">
                    <text>Attendees will gain valuable insights into the responsibilities, challenges, and principles that guide ethical practice in the sciences today. The conference aims to foster critical thinking, interdisciplinary collaboration, and a deeper understanding of how science can contribute to society with integrity and responsibility.</text>
                </div>
            </div>
        </div>
    </div>
    <!--These are the components that show the stats of the events (speakers, workshops...)-->
    <div class="ContentStatistics">
        <StatisticsButton text="X+ WORKSHOPS" subpage="schedule"/>
        <StatisticsButton text="Y+ SPEAKERS" subpage="speakers"/>
        <StatisticsButton text="Z+ SPEECHES" subpage="schedule"/>
    </div>
    <!--Event Details (Date, Location, Registration, Social Media Posts...)-->
    <div class="CategoryHeader">
        <hr/>
        <text>EVENT DETAILS</text>
        <hr/>
    </div>
    <div class="EventDetails">
        <div class="Details">
            <div class="Countdown">
                <span class="Date">06-07 MARCH</span>
                <CountdownClock color=var(--it)/>
            </div>
            <div class="MapCard">
                <MapLocation textColor="var(--it)"/>
            </div>
            <div class="RegistrationContent">
                <text>LIMITED SEATS, BOOK YOURS NOW!</text>
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
        <text>ORGANIZING COMITEE</text>
        <hr/>
    </div>
    <div class="OrganizingTeam">
        <div class="OrganizigText">
            <span>OUR ORGANIZING TEAM IS CONSITEED OF THE FOLLOWING STUDENT TEAMS</span>
        </div>
        <div class="BranchesCarousel">
            <BranchesCarousel/>          
        </div>        
    </div>
</div>

<ScrollToButton ArrowDirectionUp={true} scrollTarget={SloganTarget}/>

<style>
    .Admin {
        margin-top: 4rem;
        transform: translateX(-57.5%);
        transition: transform 0.275s ease-in-out;
        width: fit-content;
    }

    .Admin:hover {
        transform: translateX(0%);
    }

    .BranchesCarousel {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        align-self: center;

        width: 100%;
        height: 550px;
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
    }
    
    .ChImage {
        width: 50%;
        height: auto;
        aspect-ratio: 221/147;
        object-fit: cover;
    }

    .ContentStatistics {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 5%;
        margin: 15% 0px 10%;
    }

    .Countdown {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        zoom: 0.7;
        margin-left: 10%;
        width: 100%;
    }
    
    .Description {
        color: var(--secondary-color);
        font-size: clamp(10px,1.8vw,20px);
        font-style: normal;
        font-weight: 200;
        line-height: normal;
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
        font-family: var(--font-family);
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
        linear-gradient(to right, var(--primary-color) 60%, transparent 95%);
    -webkit-mask-composite: source-in; 

    mask-image:
        linear-gradient(to bottom, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to right, var(--primary-color) 60%, transparent 95%);
    mask-composite: intersect; 
    }

    .ImageRight img {
    -webkit-mask-image:
        linear-gradient(to bottom, var(--primary-color) 60%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 65%, transparent 100%),
        linear-gradient(to left, var(--primary-color) 60%, transparent 100%);
    -webkit-mask-composite: source-in; 

    mask-image:
        linear-gradient(to bottom, var(--primary-color) 70%, transparent 100%),
        linear-gradient(to top, var(--primary-color) 65%, transparent 100%),
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
        justify-content: center;
        align-items: center;
        gap: clamp(1rem,2.5rem,4rem);
        width: 100%;
    }

    .PhysicsAndParticipants {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
        margin-right: 25px;
    }
    
    .TextHeader {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--it);
        font-size: clamp(20px,24px,28px);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: auto;
    }

    .TextHeader text {
        font-size: clamp(15px,2vw,30px);
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
            zoom: 1.1;
        }

        .RegButton {
            zoom: 0.8;
        }

        .SocialMediaPosts {
            zoom: 0.5;
            align-items: center;
            justify-content: center;
            display: flex;
            width: 100%;
        }

        .TextHeader text {
            font-size: clamp(1.5vw,2.5vw,4vw);
        }
    }
</style>
