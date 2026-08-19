<script>
    let {
        fullName = 'John Doe',
        position = 'Rank',
        imageURL = "/images/speaker.png",
        description = "John Doe is the most renowned amongst all the John Does in the world, simply because of his name"
    } = $props();
</script>

<button class="SpeakerCard">
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

<style>
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
    }


</style>