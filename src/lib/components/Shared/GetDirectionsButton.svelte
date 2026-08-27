<script lang="ts">

    const url = "https://maps.app.goo.gl/J1vp3KJMsgWzM6628";

    let {
        textColor = "Blue"
    } = $props();

    function OpenLink() {
        console.log("Button clicked. Opening window");
        window.open(url, "_blank", "noopener,noreferrer");
    }
</script>

<button class="GetDirectionButton" style="color: {textColor}" onclick={OpenLink}>
    <span>GET DIRECTIONS</span>
</button>

<style>
    .GetDirectionButton {
        width: 300px;
        height: 100px;
        border-radius: 50px;
        background-color: var(--primary-color);
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .GetDirectionButton span {
        text-align: center;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
        display: inline-block;
        transition: transform 0.2s linear;
    }

    .GetDirectionButton:hover span {
        transform: scale(1.15);
    }
</style>