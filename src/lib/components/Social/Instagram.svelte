<script>
    import Instagram from "$lib/assets/Icons/Instagram.svelte";

    const InstagramURL = "https://www.instagram.com/sciencecrossroads/";

    function OpenInstagram() {
        console.log("Button clicked. Opening window");
        window.open(InstagramURL, "_blank", "noopener,noreferrer");
    }

</script>

<button onclick={OpenInstagram} class="Media">
    <Instagram/>
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
        width: 300px;
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
        transform: scale(1.2);

    }
</style>