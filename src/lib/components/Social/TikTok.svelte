<script>
    import TikTok from "$lib/assets/Icons/TikTok.svelte"

    const TikTokURL = "https://www.tiktok.com/@science.crossroad";

    function OpenTikTok() {
        console.log("Button clicked. Opening window");
        window.open(TikTokURL, "_blank", "noopener,noreferrer");
    }

</script>
<button onclick={OpenTikTok} class="Media">
    <TikTok/>
    <span>sciencecrossroads</span>
</button>

<style>
    .Media {
        cursor: pointer;

        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
        align-content: center;
        justify-content: center;

        border-radius: 50px;
        width: auto;
        padding: 1rem;
        height: 80px;
        background-color: var(--primary-color);
        border: 2px solid var(--secondary-color);

        color: var(--secondary-color);
    }

    .Media:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }

    .Media span {        
        font-size: 18px;
        text-align: center;
        font-style: normal;
        line-height: normal;
        text-decoration: none;

        display: inline-block;
        transition: transform 0.2s linear;
    }

    .Media:hover span {
        transform: scale(1.3);

    }

    @media (max-width: 768px) {
        .Media span {
            display: none;
        }
    }
</style>