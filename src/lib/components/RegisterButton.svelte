<script>
  import { quadInOut } from "svelte/easing";
  import { fly, scale, slide } from "svelte/transition";
  import Instagram from "./Social/Instagram.svelte";

    let {
        textColor = "red"
    } = $props();

    let showOverlay = $state(false); 

    let flyDirection = $state(1);

    let steps = $state([0,1,3,4]);
    let stepIndex = $state(0);
    let mail = $state('');

    function goBack() {
        flyDirection = -1;
        console.log("Go back clicked, direction is: " + flyDirection);
        stepIndex--;
        if (stepIndex<0) {
            stepIndex=0;
            showOverlay = false;
        }

    }

    function Register() {
        showOverlay = true; //open overlay
    }

    function nextClick() {
        flyDirection = 1;
        console.log("Next clicked, direction is: " + flyDirection);
        stepIndex++;
        if (stepIndex>1) {
            stepIndex=0;
        }
    }

    function printmail() {
        console.log("the mail is: " + mail);
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
            <div class="RegistrationSteps">
                {#if stepIndex === 0}
                    <div class="MailConfirmation" out:fly={{ x: -300*flyDirection, duration:500, easing: quadInOut}} in:fly={{x: 300*flyDirection,delay:500, duration:500, easing: quadInOut }}>
                        <label for="email" id="email">Enter your email below</label>
                        <input required type="email" autocomplete="email" id="email" placeholder="mail@example.com" bind:value={mail} onblur={printmail}>
                    </div>
                {:else}
                    <div class="Info" in:fly={{x: 300*flyDirection, delay:500, duration: 500, easing: quadInOut}} out:fly={{x:-300*flyDirection, duration: 500, easing: quadInOut}}>
                        <div class="nameInfo">
                            <label for="fullName" id="fullName">Full Name</label>
                            <input required id="fullName" type="text" placeholder="John Doe"/>
                        </div>  
                        <div class=phoneInfo>
                            <label for="phoneNumber" id="phoneNumber">Phone Number</label>
                            <input required id="phoneNumber" type="number" placeholder="+3069012345"/>
                        </div>
                    </div>
                {/if}
            </div>
            <div class="progressSteps">
                {#each steps as step}
                    {#if step === stepIndex}
                        <div in:slide={{axis: 'x', duration: 200}} class="step long"></div>
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
                <button onclick={nextClick} class="ProgressButton Next">
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
        gap: 2.5vw;
        width: 100%;
    }

    .Bottom hr {
        width: 20vw;
        margin: 0px;
        border: 2.5px solid var(--primary-color);
        border-radius: 10px;
    }    
    
    .Header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: var(--primary-color);
        font-size: 30px;
        width: 100%;
        gap: 5vw;
    }
    
    .Header hr {
        height: 0px;
        width: 15vw;
        margin: 0px;
        border: 2.5px solid var(--primary-color);
        border-radius: 10px;
    }
    
    .Info {
        display: flex;
        flex-direction: column;
        gap: 5vh;
        overflow-y: auto;
    }
    
    .Info input {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        padding: 1rem;
        border-radius: 2rem;
        border: none;
    }

    .Info label{
        color: var(--primary-color);
        font-size: clamp(18px,19px,20px);
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

    .nameInfo {
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        height: auto;

        z-index: 1001;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .overlayContent {
        width: 40%;
        height: 60vh;

        background-color: var(--secondary-color);


        border-radius: 2rem;
        padding: 1rem 2rem;
        gap: 7.5vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .phoneInfo {
        display: flex;
        flex-direction: column;
        gap: 1vh;
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

    .RegistrationSteps {
        height: 20vh;
        overflow-y: auto;
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