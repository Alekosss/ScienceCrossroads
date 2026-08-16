<script>
    import Instagram from "$lib/assets/Icons/Instagram.svelte";
    import Facebook from "$lib/assets/Icons/Facebook.svelte";
    import TikTok from "$lib/assets/Icons/TikTok.svelte";
    import Mail from "$lib/assets/Icons/Mail.svelte";
    import LinkedIn from "$lib/assets/Icons/LinkedIn.svelte";

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
        <span>CONTACT</span>
        <hr/>
    </div>
    <div class="SocialMedia">
        <button onclick={OpenInstagram} class="Media">
            <Instagram/>
            <span>sciencecrossroads</span>
        </button>
        <button onclick={OpenFacebook} class="Media">
            <Facebook/>
            <span>Science Crossroads</span>
        </button>
        <button onclick={OpenLinkedIn} class="Media">
            <LinkedIn/>
            <span>Science Crossroads</span>
        </button>
        <button onclick={OpenTikTok} class="Media">
            <TikTok/>
            <span>Science Crossroads</span>
        </button>
        <button onclick={OpenGmail} class="Media">
            <Mail/>
            <span>sciencecrossroads.auth@gmail.com</span>
        </button>
    </div>
    <div class="Bottom">
        <hr/>
    </div>
</div>

<style>
    .Bottom hr{
        width: 1700px;
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
    }

    .Media {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;

        gap: 15px;
        border-radius: 50px;
        background-color: var(--secondary-color);
        padding: 10px 20px;
        cursor: pointer;

        color: var(--primary-color);
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .Media:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .Media span {
        display: inline-block;
        transition: transform 0.2s linear;
    }

    .Media:hover span {
        transform: scale(1.15);
    }

    .SocialMedia {
        display: flex;
        flex-direction: row;
        gap: 60px;
        padding: 20px;
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
    }

    .Top hr {
        width: 725px;
        height: 5px;
        background-color: var(--primary-color);
        border: none;
        margin: 0px;
        border-radius: 10px;
    }

    .Top span{
        width: 150px;
    }
</style>