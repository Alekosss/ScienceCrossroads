<script>
    import ArrowDown from "$lib/assets/Icons/ArrowDown.svelte";
    import ArrowUp from "$lib/assets/Icons/ArrowUp.svelte";

    let {
        ArrowDirectionUp = true,
        scrollTarget
    } = $props();

    function scrollToButton() {
        console.log("button clicked, scrolling to: " + scrollTarget);
        scrollTarget.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

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


<style>
    .Scroll {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 5px;
        margin: 10px;

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
</style>