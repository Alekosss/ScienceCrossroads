<script>
    import { onMount } from "svelte";
    import ArrowDown from "$lib/assets/Icons/ArrowDown.svelte";
    import ArrowUp from "$lib/assets/Icons/ArrowUp.svelte";

    let {
        ArrowDirectionUp = true,
        scrollTarget
    } = $props();

    let showButton = $state(false);

    onMount(() => {
        function updateButtonVisibility() {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            showButton = window.scrollY >= scrollableHeight / 2;
        }

        updateButtonVisibility();
        window.addEventListener("scroll", updateButtonVisibility, { passive: true });

        return () => window.removeEventListener("scroll", updateButtonVisibility);
    });

    function scrollToButton() {
        console.log("button clicked, scrolling to: " + scrollTarget);
        scrollTarget.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

{#if showButton}
    <div class="Scroll">
        <span>SCROLL 
            {#if ArrowDirectionUp}
                UP
            {:else}
                DOWN
            {/if}
        </span>
        <button class="ScrollButton" onclick={scrollToButton}>
            {#if ArrowDirectionUp}
                <ArrowUp/>
            {:else}   
                <ArrowDown/>
            {/if}
        </button>
    </div>
{/if}


<style>
    .Scroll {
        position: fixed;
        top: 75%;
        transform: translateY(-60%);
        right: 24px;
        z-index: 500;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 5px;
        margin: 0;

        font-family: var(--font-family);
        font-weight: 600;
    }

    .ScrollButton {
        border-radius: 50%;
        width: 75px;
        height: 75px;
        background-color: var(--secondary-color);
        cursor: pointer;
    }

    .ScrollButton:hover {
        background-color: transparent;
        color: var(--secondary-color);
        border: none;
    }

    @media (max-width: 600px) {
        .Scroll {
            right: 12px;
        }

        .ScrollButton {
            width: 60px;
            height: 60px;
        }
    }
</style>