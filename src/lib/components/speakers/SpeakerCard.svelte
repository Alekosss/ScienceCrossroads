<script>
    import { blur, draw, fade, fly, scale, slide } from "svelte/transition";
    import { backInOut, circInOut, circOut, cubicOut, elasticInOut, expoInOut, linear, quadIn, quadInOut, quartInOut, quintInOut } from "svelte/easing";

    let {
        fullName = 'John Doe',
        position = 'Rank',
        imageURL = "/images/speaker.png",
        description = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    } = $props();

    let Detailed = $state(false);

    function Click() {
        Detailed = !Detailed;
    }
</script>

<button class="SpeakerCard" onclick={Click}>
    <div class="Image">
        <img src={imageURL} alt="John Doe's"/>
    </div>
    <div class="NamePosition">
        <div class="Name">
            <span>{fullName}</span>
        </div>
        <div class="Position">
            <span>{position}</span>
        </div>
    </div>
</button>

{#if Detailed}
    <div class="overlay" transition:slide={{ duration: 200, easing: quadInOut }}>
        <div class="dialog">
            <div class="Card">
                <div class="cardContent">
                    <div class="ImageAndTitle">
                    <div class="cardImage">
                        <img src={imageURL} alt="Speaker goes here"/>
                    </div>
                    <div class="Title">
                        <div class="cardName">
                            <span>{fullName}</span>
                        </div>
                        <div class="cardPosition">
                            <span>{position}</span>
                        </div>
                    </div>
                    </div>
                    <div class="Description">
                        <span>{description}</span>
                    </div>
                </div>
                <button class="OK" onclick={Click}>
                    <span>OK</span>
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    .Card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    .cardContent{
        display: grid;
        grid-template-columns: 33% 67%;
        justify-content: center;
        align-items: center;
        max-height: 500px;
    }

    .cardImage img {
        width: 300px;
        height: 300px;
    }

    .cardName{
        font-size: 36px;
        font-weight: 400;
    }

    .cardPosition {
        font-size: 24px;
        font-weight: 400;
    }

    .dialog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        gap: 50px;
        padding: 50px 75px 25px;
        border-radius: 25px;

        background: var(--secondary-color); 
        color: var(--primary-color);
    }

    .Description {
        font-size: 20px;
        max-height: 450px;
        overflow-y: auto;
    }

    .ImageAndTitle {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .Image {
        margin-top: 5px;
        justify-self: center;
        align-self: center;
    }

    .Image img {
        width:140px;
        height: 140px;
        aspect-ratio: 1;
    }

    
    .NamePosition {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 5px;
        padding: 5px 15px;
    }
    
    .Name {
        font-size: 25px;
        width: 140px;
        display: flex;
    }
    
    .OK {
        width: 125px;
        height: 50px;
        border-radius: 50px;
        border: 2px solid var(--primary-color);
        cursor: pointer;
    }

    .OK span {
        transition: transform 0.2s ease-in-out;
        display: block;
        font-size: 24px;
        font-weight: 500;
    }

    .OK:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .OK:hover span {
        transform: scale(1.3);
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 300px;
    }

    .Position {
        font-size: 20px;
    }

    .SpeakerCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12.5%;
        margin: 5px;
        width: 275x;
        height: 275px;
        padding: 0px 50px;

        background-color: var(--primary-color);
        color: var(--secondary-color);

        transition: transform 0.1s ease-in-out;
    }

    .SpeakerCard:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
</style>