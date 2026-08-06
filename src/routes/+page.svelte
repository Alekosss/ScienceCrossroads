<div class="HomePage">
    <div class="CategoryHeader">
        <text>INSPIRED BY SCIENCE, GUIDED BY ETHICS</text>
    </div>
    <div class="EventDescription">
        <div class="ChemistryAndOverview ScienceContent">
            <img src="/img/location" alt="Chemistry Content" class="ChImage"/>
            <div class="TextContent">
                <div class="TextHeader">
                    <text>WHAT IS THE EVENT ABOUT?</text>
                </div>
                <div class="Description">
                    <text>Science Crossroads is two-day conference dedicated to exploring the role of ethics across the sciences, highlighting the moral questions that shape contemporary research and scientific practice. In a time of rapid technological change and complex global challenges, the event offers an interdisciplinary space to reflect on how science can advance responsibly and in the service of the common good.</text>
                </div>
            </div>
        </div>
        <div class="PhysicsAndParticipants ScienceContent">
            <div class="PhysicsText">
                <div class="TextHeader">
                    <text>WHO WILL BE PARTICIPATING?</text>
                </div>
                <div class="Description">
                    <text>The conference will bring together distinguished university professors, renowned experts, and leading authorities from a range of disciplines, and will be open to a wider audience within and beyond the academic community. Through keynote lectures, panel discussions, and open dialogue, participants will exchange ideas and explore the ethical dimensions of scientific work from multiple perspectives.</text>
                </div>
            </div>
            <img src="/img/location" alt="Physics Content" class="PhImage"/>
        </div>
        <div class="ITAndOutcomes ScienceContent">
            <img src="/img/location" alt="Physics Content" class="ITImage"/>
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
</div>

<style>
    .HomePage {
        font-family: var(--font-family);
    }

    .CategoryHeader {
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        padding: 75px;
        color: var(--break);
    }

    .ScienceContent {
        gap: 20px;
        display: flex;
    }
    .EventDescription {
        display: flex;
        flex-direction: column;
    }

    .ChImage {
        width: 887px;
        height: 590px;
        aspect-ratio: 221/147;
    }

    .PhImage {
        width: 884px;
        height: 589px;
        aspect-ratio: 884/589;
    }

    .ITImage {
        width: 959px;
        height: 539px;
        aspect-ratio: 137/77;
    }

    .ChemistryAndOverview {
        display: flex;
        height: 590px;
        padding-bottom: 290px;
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

    .Description {
        color: var(--secondary-color);
        font-size: 28px;
        font-style: normal;
        font-weight: 200;
        line-height: normal;
        margin-left: 35px;
        margin-right: 35px;
    }

</style>