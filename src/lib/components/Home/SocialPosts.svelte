<script>
    import User from "$lib/assets/Icons/User.svelte"
    import AngledArrow from "$lib/assets/Icons/AngledArrow.svelte";
    import Instagram from "$lib/assets/Icons/Instagram.svelte";
    import Facebook from "$lib/assets/Icons/Facebook.svelte";
    import LinkedIn from "$lib/assets/Icons/LinkedIn.svelte";
    import TikTok from "$lib/assets/Icons/TikTok.svelte";

    const FacebookURL = "https://www.facebook.com/profile.php?id=61592636290886&rdid=ErViNhknuDdcfzTh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DC1PWhGrR%2F";
    const InstagramURL = "https://www.instagram.com/sciencecrossroads/";
    const LinkedInURL = "https://www.linkedin.com/company/science-crossroads/";
    const TikTokURL = "https://www.tiktok.com/@science.crossroad";

    let {
        textColor = "Blue"
    } = $props();

    function OpenInstagram() {
        console.log("Button clicked. Opening window");
        window.open(InstagramURL, "_blank", "noopener,noreferrer");
    }

    function OpenFacebook() {
        console.log("Button clicked. Opening window");
        window.open(FacebookURL, "_blank", "noopener,noreferrer");
    }

    function OpenLinkedIn() {
        console.log("Button clicked. Opening window");
        window.open(LinkedInURL, "_blank", "noopener,noreferrer");
    }

    function OpenTikTok() {
        console.log("Button clicked. Opening window");
        window.open(TikTokURL, "_blank", "noopener,noreferrer");
    }
</script>

<div class="SocialPosts">
    <div class="Header">
        <div class="HeaderText" style="color:{textColor}">
            <span>CATCH UP WITH OUR SOCIAL!</span>
        </div>
        <div class="lineSeperator"></div>
        <button class="HeaderButton">
            <div class="UserSVG">
                <User/>
            </div>
            <span class="SocialTag">@sciencecrossroads</span>
            <div class="Arrow">
                <AngledArrow/>
            </div>
        </button>
    </div>
    <div class="Carousel"></div>
    <div class="SocialMedia">
        <div class="Media">
            <button onclick={OpenInstagram} class="IG Social">
                <Instagram/>
                <span>sciencecrossroads</span>
            </button>
            <button onclick={OpenFacebook} class="Facebook Social">
                <Facebook/>
                <span>Science Crossroads</span>
            </button>
            <button onclick={OpenLinkedIn} class="LinkedIn Social">
                <LinkedIn/>
                <span>Science Crossroads</span>
            </button>
            <button onclick={OpenTikTok} class="TikTok Social">
                <TikTok/>
                <span>Science Crossroads</span>
            </button>
        </div>
    </div>
</div>

<style>
    .Arrow {
        transition: transform 0.2s linear;
    }

    .Arrow:hover {
        transform: scale(1.3);
    }

    .Carousel {
        width: 50vw;
        height: 60vh;
        background-color: var(--it);
    }

    .Facebook span{
        display: inline-block;
        transition: transform 0.2s ease-in;
    }

    .Facebook:hover span {
        transform: scale(1.15);
    }

    .Header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .HeaderButton {
        margin: 15px 0px;
        display: flex;
        flex-direction: row;
        gap: 35px;
        padding: 20px;
        align-items: center;
        
        border-radius: 50px;
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
    
    .HeaderButton:hover {
        cursor: pointer;
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    
    .HeaderText {
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 100%;
        
        margin: 20px 100px 10px;
    }

    .IG span {
        display: inline-block;
        transition: transform 0.2s ease-in;
    }

    .IG:hover span {
        transform: scale(1.15);
    }
    
    .lineSeperator {
        width: 450px;
        height: 4.5px;
        background-color: var(--primary-color);
    }

    .LinkedIn span {
        display: inline-block;
        transition: transform 0.2s ease-in;
    }

    .LinkedIn:hover span {
        transform: scale(1.15);
    }

    .Media {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        gap: 2vw;
        color: inherit;
        border-radius: 50px;
        padding: 15px;
    }

    .Social {
        border-radius: 50px;
        padding: 10px 20px;
        gap: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        cursor: pointer;
    }

    .Social:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .SocialMedia {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        width: 100%;
        gap: 50px;
        color: var(--primary-color);
    }
    
    .SocialPosts {
        width: 80%;
        height: 100%;
        border-radius: 50px;
        background-color: var(--secondary-color);
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    
    .SocialTag {
        color: inherit; 
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        transition: transform 0.2s linear;
    }
    
    .SocialTag:hover {
        transform: scale(1.15);
    }

    .TikTok span {
        display: inline-block;
        transition: transform 0.2s ease-in;
    }

    .TikTok:hover span {
        transform: scale(1.15);
    }

    .UserSVG {
        transition: transform 0.2s linear;
    }

    .UserSVG:hover {
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        .SocialPosts {
            width: 100%;
            height: auto;
            min-width: 0;
            border-radius: 1.5rem;
            padding: 0 0.75rem 1rem;
        }

        .Header {
            width: 100%;
        }

        .HeaderText {
            margin: 1.25rem 0 0.5rem;
            padding: 0 0.5rem;
            font-size: clamp(1rem, 4.5vw, 1.375rem);
        }

        .lineSeperator {
            width: min(100%, 20rem);
        }

        .HeaderButton {
            gap: 0.75rem;
            margin: 0.75rem 0;
            padding: 0.625rem 1rem;
        }

        .SocialTag {
            font-size: 1rem;
        }

        .Carousel {
            width: 100%;
            height: clamp(15rem, 65vw, 24rem);
        }

        .Media {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.5rem;
            width: 100%;
            padding: 0.75rem 0 0;
        }

        .Social span {
            display: none;
        }

        .Social {
            min-width: 0;
            min-height: 44px;
            padding: 0.625rem;
            gap: 0.5rem;
        }

        .SocialMedia {
            width: 100%;
            margin-top: 0.5rem;
        }

        .SocialMedia :global(svg) {
            width: 24px;
            height: 24px;
        }
    }
</style>