<script>
    import Facebook from "$lib/assets/Icons/Facebook.svelte"

    const FacebookURL = "https://www.facebook.com/profile.php?id=61592636290886&rdid=ErViNhknuDdcfzTh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DC1PWhGrR%2F";

    function OpenFacebook() {
        console.log("Button clicked. Opening window");
        window.open(FacebookURL, "_blank", "noopener,noreferrer");
    }

</script>
<button onclick={OpenFacebook} class="Media">
    <Facebook/>
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
        transform: scale(1.3);

    }
</style>