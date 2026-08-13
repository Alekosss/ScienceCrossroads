<script>
    let {
        imageURL = "$lib/image-location", 
        slogan = "Branch slogan", 
        name = "Branch name", 
        description = "Branch description" 
    } = $props();
</script>

<div class="CarouselCard">
    <div class="LogoAndSlogan">
        <div class="branchImage">
            <img src={imageURL} alt="Logo.png"/>
        </div>
        <div class="branchSlogan">
            <span>{slogan}</span>
        </div>
    </div>
    <div class="BranchNameAndDescription">
        <div class="BranchName">
            <span>{name}</span>
        </div>
        <div class="Description">
            <span>{description}</span>
        </div>
    </div>
</div>

<style>
    .BranchNameAndDescription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 75px;
        margin: 15px;
        width: 350px;
    }

    .BranchName {
        color: var(--it);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: max-content;
    }

    .branchSlogan {
        color: var(--it);
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: max-content;
    }

    .CarouselCard {
        justify-self: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 20px;
        width: 750px;
        height: 350px;

        background-color: var(--secondary-color);
        border-radius: 50px;
    }

    .Description {
        color: var(--primary-color);
        width: 300px;
        height: 150px;
    }

    .Description span {
        display: block;
        height: 150px;
        width: 300px;
    }

    .LogoAndSlogan {
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 50px;
        width: 300px;
    }

    .LogoAndSlogan img {
        width: 200px;
        height: 200px;
        aspect-ratio: 1;
    }

</style>