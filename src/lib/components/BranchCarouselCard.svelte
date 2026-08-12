<script>
    let imageURL = "$lib/image-location";
    let slogan = "Branch slogan";
    let name = "Branch name";
    let description = "Branch description";
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
    .CarouselCard {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>