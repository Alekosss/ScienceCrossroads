<script>
	import ThemeButton from "$lib/components/LayoutComponents/ThemeButton.svelte";
    
</script>
<div class="AdminPage">
    <div class="ToolsLeft">
        <ThemeButton/>
    </div>
    <div class="Header">
        <hr/>
        <span>SELECT THE PART OF THE WEBSITE YOU WISH TO EDIT</span>
        <hr/>
    </div>
    <div class="ButtonGrid">
        <button class="Edit">
            <span>HOMEPAGE</span>
        </button>
        <button class="Edit">
            <span>SPEAKERS</span>
        </button>
        <button class="Edit">
            <span>SCHEDULE</span>
        </button>
        <button class="Edit">
            <span>SPONSORS</span>
        </button>
            <button class="Edit">
            <span>SOCIAL MEDIA LINKS</span>
        </button>
        <button class="Edit">
            <span>EVENT DATE</span>
        </button>
    </div>
    <div class="Bottom">
        <a href="/pages/" class="GoBack">
            <span>BACK TO WEBSITE</span>
        </a>
        <button class="AddCredentials">
            <span>ADD LOGIN CREDENTIALS</span>
        </button>
    </div>
</div>

<style>
    .AdminPage {
        font-family: var(--font-family);

        display: grid;
        grid-template-columns: 10% 90%;
        grid-template-rows: 20% 60% 20%;
        height: 100vh;
        width:100vw;
    }

    .Bottom {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ButtonGrid {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(3, max-content);
        column-gap: 5rem;
    }

    .Edit {
        padding: 1.75rem;
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        border: 3px solid transparent;

        background-color: var(--secondary-color);
        color: var(--primary-color);
    }

    .Edit:hover {
        border: 3px solid var(--secondary-color);
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .Edit span {
        display: inline-block;
        transition: transform 0.15s ease-in-out;

        font-size: clamp(1.5vw,1.75vw,2vw);
        font-family: inherit;
    }

    .Edit:hover span {
        transform: scale(1.15);
    }

    .GoBack {
        background-color: var(--break);
        border: none;
        font-family: inherit;
        padding: 1.5rem;
        border-radius: 1.5rem;

        cursor: pointer;
        color: var(--primary-color);
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

    .Header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .Header span {
        font-size: clamp(2vw,2.25vw,2.5vw);
        color: var(--break);
    }

    .ToolsLeft {
        display: flex;
        justify-content: center;
        align-items: center;

        grid-row: span 3;

        border-right: 2px solid var(--secondary-color);
    }
</style>