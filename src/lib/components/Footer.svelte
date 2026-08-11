<script>
  import Instagram from "$lib/assets/Icons/Instagram.svelte";
  import Facebook from "$lib/assets/Icons/Facebook.svelte";
  import TikTok from "$lib/assets/Icons/TikTok.svelte";
  import Mail from "$lib/assets/Icons/Mail.svelte";

</script>
<div class="Footer">
    <div class="Top">
        <hr/>
        <span>CONTACT</span>
        <hr/>
    </div>
    <div class="SocialMedia">
        <div class="Media">
            <Instagram/>
            <span>sciencecrossroads</span>
        </div>
        <div class="Media">
            <Facebook/>
            <span>Science Crossroads</span>
        </div>
        <div class="Media">
            <TikTok/>
            <span>TikTok</span>
        </div>
        <div class="Media">
            <Mail/>
            <span>sciencecrossroads.auth@gmail.com</span>
        </div>
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
        gap: 5px;

        color: var(--primary-color);
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        transition: transform 0.2s linear;
    }

    .Media:hover {
        transform: scale(1.15);
    }

    .SocialMedia {
        display: flex;
        flex-direction: row;
        gap: 100px;
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