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
    .branchImage {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .BranchNameAndDescription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 75px;
        margin: 15px;
        width: 50%;
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
        width: 100%;
        color: var(--it);
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: max-content;
    }

    .CarouselCard {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 20px;
        width: 60%;
        height: 60vh;
        box-sizing: border-box;

        background-color: var(--secondary-color);
        border-radius: 50px;
        margin: 0 auto;
    }

    .Description {
        color: var(--primary-color);
        width: 100%;
    }

    .Description span {
        display: block;
        width: 100%;
    }

    .LogoAndSlogan {
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 50px;
        width: 50%;
    }

    .LogoAndSlogan img {
        width: 50%;
        aspect-ratio: 1;
    }
</style>