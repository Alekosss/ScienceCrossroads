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

        gap: clamp(1rem, 4vw, 2rem);
        margin: 1rem;
        width: 50%;
        min-width: 0;
    }

    .BranchName {
        color: var(--it);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 100%;
        text-align: center;
    }

    .branchSlogan {
        width: 100%;
        color: var(--it);
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-align: center;
    }

    .CarouselCard {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 20px;
        width: min(100%, 60rem);
        min-height: 22rem;
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
        font-size: clamp(1.25vw,1.5vw,1.75vw);
    }

    .LogoAndSlogan {
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 1.5rem;
        width: 50%;
        min-width: 0;
    }

    .LogoAndSlogan img {
        width: 50%;
        aspect-ratio: 1;
    }

    @media (max-width: 768px) {
        .branchSlogan span {
            font-size: clamp(1rem, 4.5vw, 1.25rem);
            line-height: 1.4;
        }

        .BranchNameAndDescription {
            width: 100%;
            gap: 0.75rem;
            margin: 0;
        }

        .BranchName span {
            font-size: clamp(1.25rem, 6vw, 1.75rem);
        }
        
        .CarouselCard {
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            min-height: 0;
            padding: clamp(1rem, 5vw, 1.5rem);
            border-radius: 1.5rem;
        }

        .LogoAndSlogan {
            width: 100%;
            gap: 0.75rem;
            margin: 0;
        }

        .LogoAndSlogan img {
            width: clamp(6rem, 30vw, 9rem);
            max-height: 9rem;
            object-fit: contain;
        }

        .Description span {
            font-size: clamp(0.9375rem, 4vw, 1.125rem);
            line-height: 1.5;
            text-align: center;
        }
    }
</style>