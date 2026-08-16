<script>
    import User from "$lib/assets/Icons/User.svelte"
    import AngledArrow from "$lib/assets/Icons/AngledArrow.svelte";
  import Instagram from "$lib/assets/Icons/Instagram.svelte";
  import Facebook from "$lib/assets/Icons/Facebook.svelte";

    let {
        textColor = "Blue"
    } = $props();
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
            <button class="IG Social">
                <Instagram/>
                <span>sciencecrossroads</span>
            </button>
            <button class="Facebook Social">
                <Facebook/>
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
        width: 550px;
        height: 390px;
        background-color: var(--it);
    }

    .Facebook span{
        display: inline-block;
        transition: transform 0.2s ease-in;
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
    
    .lineSeperator {
        width: 450px;
        height: 4.5px;
        background-color: var(--primary-color);
    }

    .Media {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        color: inherit;
        border-radius: 50px;
        padding: 15px;
    }

    .Social {
        border-radius: 50px;
        padding: 15px;
        gap: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 18px;
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
        width: 800px;
        height: 700px;
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

    .UserSVG {
        transition: transform 0.2s linear;
    }

    .UserSVG:hover {
        transform: scale(1.2);
    }
</style>