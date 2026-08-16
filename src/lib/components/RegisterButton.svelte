<script>
    let {
        textColor = "Blue"
    } = $props();
</script>

<a href="/pages/register&faq" class="RegisterButton" style="color:{textColor}">
    <span>REGISTER</span>
</a>

<style>
    .RegisterButton {
        border-radius: 50px;
        padding: 25px 35px;
        background-color: var(--secondary-color);
    }

    .RegisterButton span {
        font-size: 32px;
        text-align: center;
        font-style: normal;
        line-height: normal;
        text-decoration: none;

        display: inline-block;
        transition: transform 0.2s linear;
    }

    .RegisterButton:hover span {
        transform: scale(1.25);
    }
</style>