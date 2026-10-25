<script lang="ts">
	import { t } from "$lib/i18n.svelte";


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
    <span>{t('get_directions')}</span>
</button>

<style>
    .GetDirectionButton {
        width: min(300px, 100%);
        min-height: 64px;
        padding: 0.75rem 1rem;
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

    @media (max-width: 768px) {
        .GetDirectionButton {
            min-height: 52px;
        }

        .GetDirectionButton span {
            font-size: clamp(1rem, 4vw, 1.25rem);
        }
    }

    .GetDirectionButton:hover span {
        transform: scale(1.15);
    }
</style>