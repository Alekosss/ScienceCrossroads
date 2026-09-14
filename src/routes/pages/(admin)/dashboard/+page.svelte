<script>
	import ThemeButton from "$lib/components/LayoutComponents/ThemeButton.svelte";

</script>
<div class="AdminPage">
    <div class="LeftSide">
        <ThemeButton/>
    </div>
    <div class="CenterAndBottom">
        <div class="ButtonGrid">
            <button class="Edit">
                <span>EDIT HOMEPAGE</span>
            </button>
            <button class="Edit">
                <span>EDIT SPEAKERS</span>
            </button>
            <button class="Edit">
                <span>EDIT SCHEDULE</span>
            </button>
            <button class="Edit">
                <span>EDIT SPONSORS</span>
            </button>
        </div>
        <div class="Bottom">
            <button class="GoBack">
                <span>BACK TO WEBSITE</span>
            </button>
        </div>
    </div>
</div>

<style>
    .AdminPage {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        font-family: var(--font-family);
    }

    .Bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25%;
        width: 100%;
    }

    .ButtonGrid {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2, max-content);
        column-gap: 5rem;
        width: 100%;
        height: 75%;
    }

    .CenterAndBottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 85%;
        height: 100vh;
    }

    .Edit {
        font-size: clamp(1.5vw,1.75vw,2vw);
        font-family: inherit;
        padding: 1.75rem;
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        border: 3px solid transparent;
    }

    .Edit:hover {
        border: 3px solid var(--secondary-color);
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .GoBack {
        background-color: var(--break);
        border: none;
        font-family: inherit;
        padding: 1.5rem;
        border-radius: 1.5rem;

        cursor: pointer;
    }

    .GoBack:hover {
        border: 2.5px solid var(--secondary-color);
    }

    .GoBack span {
        display: inline-block;
        transition: transform 0.2s ease-in-out;

        font-size: clamp(1vw,1.2vw,1.4vw);
        font-weight: 500;
    }

    .GoBack:hover span {
        transform: scale(1.15);
    }

    .LeftSide {
        width: 15%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid var(--secondary-color);
    }
</style>