<script>
    import StatisticsButton from "$lib/components/StatisticsButton.svelte";
    import CountdownClock from "$lib/components/CountdownClock.svelte";
    import MapLocation from "$lib/components/MapLocation.svelte";
    import RegisterButton from "$lib/components/RegisterButton.svelte";
    import SocialPosts from "$lib/components/SocialPosts.svelte";
    import BranchesCarousel from "$lib/components/BranchesCarousel.svelte";
</script>

<div class="HomePage">
    <!--This is the Slogan of the event-->
    <div class="Slogan">
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
            <div class="PhysicsText">
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
            <div class="ITText">
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
        <StatisticsButton text="X+ WORKSHOPS"/>
        <StatisticsButton text="Y+ SPEAKERS" subpage="schedule"/>
        <StatisticsButton text="Z+ SPEECHES"/>
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
                <CountdownClock/>
            </div>
            <div class="MapCard">
                <MapLocation/>
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

<style>
    .BranchesCarousel {
        width: 1500px;
        height: 550px;
        margin: 25px 0px 150px;
    }

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
        
    .ChemistryAndOverview {
        display: flex;
        height: 590px;
        padding-bottom: 290px;
    }
    
    .ChImage {
        width: 887px;
        height: 590px;
        aspect-ratio: 221/147;
    }

    .ContentStatistics {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 200px;
        padding: 100px;
        margin-bottom: 100px;
    }

    .Countdown {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 650px;
    }
    
    .Description {
        color: var(--secondary-color);
        font-size: 28px;
        font-style: normal;
        font-weight: 200;
        line-height: normal;
        margin-left: 35px;
        margin-right: 35px;
    }
    
    .Date {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .Details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        width: 650px;
        height: 800px;
    }

    .EventDescription {
        display: flex;
        flex-direction: column;
        margin-bottom: 200px;
    }
        
    .EventDetails {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 250px;
        overflow: hidden;
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
        width: 959px;
        height: 539px;
        aspect-ratio: 137/77;
    }

    .ImageLeft img {
    -webkit-mask-image:
        linear-gradient(to bottom, black 60%, transparent 100%),
        linear-gradient(to top, black 60%, transparent 100%),
        linear-gradient(to right, black 60%, transparent 95%);
    -webkit-mask-composite: source-in; 

    mask-image:
        linear-gradient(to bottom, black 60%, transparent 100%),
        linear-gradient(to top, black 60%, transparent 100%),
        linear-gradient(to right, black 60%, transparent 95%);
    mask-composite: intersect; 
    }

    .ImageRight img {
    -webkit-mask-image:
        linear-gradient(to bottom, black 60%, transparent 100%),
        linear-gradient(to top, black 60%, transparent 100%),
        linear-gradient(to left, black 60%, transparent 90%);
    -webkit-mask-composite: source-in; 

    mask-image:
        linear-gradient(to bottom, black 60%, transparent 100%),
        linear-gradient(to top, black 60%, transparent 100%),
        linear-gradient(to left, black 60%, transparent 90%);
    mask-composite: intersect; 
    }

    .MapCard {
        display: flex;
        justify-content: center;
        align-items: center;
        scale: 0.8;
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
        gap: 50px;
    }

    .PhImage {
        width: 884px;
        height: 589px;
        aspect-ratio: 884/589;
    }

    .RegButton {
        height: 125px;
    }

    .RegistrationContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;

        color: var(--secondary-color);
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }

    .ScienceContent {
        gap: 20px;
        display: flex;
    }

    .Slogan {
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        padding: 75px;
        color: var(--break);
    }

    .TextContent {
        width: 950px;
        height: 590px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 130px;
        margin-right: 25px;
    }
    
    .TextHeader {
        padding: 57px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: var(--it);
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: auto;
    }
</style>