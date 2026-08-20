<script>
  import { quadInOut } from "svelte/easing";
  import { scale, slide } from "svelte/transition";

    let {
        textColor = "red"
    } = $props();

    let showOverlay = $state(false); 

    let steps = $state([0,1,3,4]);
    let stepIndex = $state(0);
    let mail = $state('');

    function goBack() {
        showOverlay = false;
    }

    function Register() {
        showOverlay = true; //open overlay
    }
</script>

<button class="RegisterButton" onclick={Register} style="color:{textColor}">
    <span>REGISTER</span>
</button>

{#if showOverlay}
    <div class="overlay"> 
        <div transition:slide={{ duration: 200, easing: quadInOut }} class="overlayContent">
            <div class="Header">
                <hr/>
                <span>REGISTER!</span>
                <hr/>
            </div>
            <div class="MailConfirmation">
                <label for="email" id="email">Enter your email below</label>
                <input required type="email" autocomplete="email" id="email" placeholder="mail@example.com">
            </div>
            <div class="progressSteps">
                {#each steps as step}
                    {#if step === stepIndex}
                        <div class="step long"></div>
                    {:else}
                        <div class="step short"></div>
                    {/if}
                {/each}
            </div>
            <div class="Bottom">
                <hr/>
                <button onclick={goBack} class="ProgressButton Previous">
                    <span>BACK</span>
                </button>
                <button class="ProgressButton Next">
                    <span>NEXT</span>
                </button>
                <hr/>
            </div>
        </div>
    </div>
{/if}


<style>
    .Bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .Bottom hr {
        height: 0px;
        width: 200px;
        margin: 0px;
        border: 2.5px solid var(--primary-color);
        border-radius: 10px;
    }

    .Header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
        color: var(--primary-color);
        font-size: 30px;
    }
    
    .Header hr {
        height: 0px;
        width: 220px;
        margin: 0px;
        border: 2.5px solid var(--primary-color);
        border-radius: 10px;
    }

    .MailConfirmation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    .MailConfirmation label {
        color: var(--primary-color);
    }

    .MailConfirmation input {
        width: 250px;
        height: 20px;
        border-radius: 25px;
        padding: 20px;
    }

    .ProgressButton {
        padding: 10px 25px;
        border-radius: 50px;
        font-size: 20px;
        cursor: pointer;
    }

    .ProgressButton span {
        display: block;
        transition: transform 0.2s ease-in-out;
    }

    .ProgressButton:hover {
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .ProgressButton:hover span {
        transform: scale(1.2);
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);

        z-index: 1001;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .overlayContent {
        width: 750px;
        height: 500px;

        background-color: var(--secondary-color);


        border-radius: 50px;
        gap: 100px;
        padding: 50px;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

    .progressSteps {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    
    .RegisterButton {
        border-radius: 50px;
        padding: 25px 35px;
        background-color: var(--secondary-color);
        cursor: pointer;
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
        transform: scale(1.2);
    }

    .step {
        background-color: var(--primary-color);
        border-radius: 20px;
        height: 15px;
    }

    .short {
        width: 15px;
    }

    .long {
        width: 60px;
    }

</style>