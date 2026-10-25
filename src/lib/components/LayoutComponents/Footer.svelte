<script>
    import Instagram from "$lib/assets/Icons/Instagram.svelte";
    import Facebook from "$lib/assets/Icons/Facebook.svelte";
    import TikTok from "$lib/assets/Icons/TikTok.svelte";
    import Mail from "$lib/assets/Icons/Mail.svelte";
    import LinkedIn from "$lib/assets/Icons/LinkedIn.svelte";
	import { t } from "$lib/i18n.svelte";

    const GmailURL = "https://mail.google.com";
    const FacebookURL = "https://www.facebook.com/profile.php?id=61592636290886&rdid=ErViNhknuDdcfzTh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DC1PWhGrR%2F";
    const InstagramURL = "https://www.instagram.com/sciencecrossroads/";
    const LinkedInURL = "https://www.linkedin.com/company/science-crossroads/";
    const TikTokURL = "https://www.tiktok.com/@science.crossroad";

    function OpenInstagram() {
        window.open(InstagramURL, "_blank", "noopener,noreferrer");
    }

    function OpenFacebook() {
        window.open(FacebookURL, "_blank", "noopener,noreferrer");
    }

    function OpenLinkedIn() {
        window.open(LinkedInURL, "_blank", "noopener,noreferrer");
    }

    function OpenTikTok() {
        window.open(TikTokURL, "_black", "noopener,noreferrer");
    }

    function OpenGmail() {
        window.open(GmailURL, "_blank", "noopener,noreferrer");
    }

</script>
<div class="Footer">
    <div class="Top">
        <hr/>
        <span>{t('nav_contact')}</span>
        <hr/>
    </div>
    <div class="SocialMedia">
        <button onclick={OpenInstagram} class="Media">
            <div class="SVG">
                <Instagram/>
            </div>
            <span>sciencecrossroads</span>
        </button>
        <button onclick={OpenFacebook} class="Media">
            <div class="SVG">
                <Facebook/>
            </div>
            <span>Science Crossroads</span>
        </button>
        <button onclick={OpenLinkedIn} class="Media">
            <div class="SVG">
                <LinkedIn/>
            </div>
            <span>Science Crossroads</span>
        </button>
        <button onclick={OpenTikTok} class="Media">
            <div class="SVG">
                <TikTok/>
            </div>
            <span>Science Crossroads</span>
        </button>
        <button onclick={OpenGmail} class="Media">
            <div class="SVG">
                <Mail/>
            </div>
            <span>sciencecrossroads.auth@gmail.com</span>
        </button>
    </div>
    <div class="Bottom">
        <hr/>
    </div>
</div>

<style>
    .Bottom hr{
        width: 0;
        height: 5px;
        background-color: var(--primary-color);
        border-radius: 10px;
        border: none;
        margin-bottom: 10px;
    }
    
    .Footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: var(--font-family);

        background-color: var(--secondary-color);
        border-radius: 50px;

        width: 90%;
        height: 20vh;
        padding: 1%;
        margin: 2rem auto 1rem;
    }

    .Media {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;

        border-radius: 50px;
        background-color: var(--secondary-color);
        cursor: pointer;

        color: var(--primary-color);
        font-size: clamp(10px,1.25vw,14px);
        font-style: normal;
        font-weight:300;
        line-height: normal;
        padding: 0 1rem;

        gap: 0.2rem;
        zoom: 0.8;
    }

    .Media:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .SVG {
        transform: scale(0.7);
    }

    .Media span {
        display: inline-block;
        transition: transform 0.2s linear;
        font-weight: 600;
    }

    .Media:hover span {
        transform: scale(1.1);
    }

    .SocialMedia {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5%;
        padding-top: 1%;
        width: 100%;
    }

    .Top {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;

        color: var(--primary-color);
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        width: 100%;
    }

    .Top hr {
        width: 30vw;
        height: 5px;
        background-color: var(--primary-color);
        border: none;
        margin: 0px;
        border-radius: 10px;
    }

    .Top span{
        width: auto;
        text-align: center;
    }

    @media (max-width: 768px) {

        .Footer {
            height: auto;
            width: calc(100% - 2rem);
            padding: 1rem;
            border-radius: 1.5rem;
        }

        .Media {
            zoom: 1;
            display: flex;
            flex: 0 0 44px;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            padding: 0;
        }

        .Media span {
            display: none;
        }

        .SVG {
            width: 24px;
            height: 24px;
            transform: none;
        }

        .SVG :global(svg) {
            width: 24px;
            height: 24px;
        }

        .SocialMedia {
            justify-content: center;
            gap: 0.5rem;
            flex-wrap: wrap;
            padding: 0.5rem 0;
        }

        .Top {
            gap: 0.5rem;
            margin: 0 0 0.5rem;
        }

        .Top hr {
            width: auto;
            flex: 1;
            height: 2px;
        }

        .Top span{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(1.25rem, 5vw, 1.75rem);
            white-space: nowrap;
        }
    }
</style>