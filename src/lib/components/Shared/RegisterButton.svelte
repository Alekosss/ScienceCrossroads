<script lang="ts">
    import { t } from "$lib/i18n.svelte";
    import { quadInOut } from "svelte/easing";
    import { fly, slide } from "svelte/transition";
    import { onMount} from 'svelte';

    let {
        textColor = "red"
    } = $props();

    let showOverlay = $state(false); 

    let flyDirection = $state(1);

    let steps = $state([0,1,2,3,4]);
    let stepIndex = $state(0);

    let mail = $state('');
    let fullName = $state('');
    let phoneNumber = $state('');

    let userInfo = $derived([mail,fullName,phoneNumber]);

    let userCode = $state("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function goBack() {
        flyDirection = -1;
        stepIndex--;
        if (stepIndex<0) {
            stepIndex=0;
            showOverlay = false;
        }
    }

    function Register() {
        showOverlay = true; //open overlay
    }

    let emptyMailWarning = $state(false);
    let formatMailWarning = $state(false);
    let emptyNameWarning = $state(false);
    let numberInName = $state(false);
    let emptyPhoneNumber = $state(false);
    let lettersInNumber = $state(false);
    let formatPhoneNumber = $state(false);
    let alreadyRegistered = $state(false);
    let wrongCodeWarning = $state(false);

    let submitError = $state('');
    let submitting = $state(false);
    let wait = $state(false);

    async function submitRegistration() {
        submitting = true;
        submitError = '';

        const registrationData = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({fullName, mail, phoneNumber })
        });

        const registrationDataJSON = await registrationData.json();
        if (registrationDataJSON.success) {
            console.log("REGISTERED SUCCESSFULLY");
        }

        submitting = false;
        showOverlay = false;

        fullName ='';
        phoneNumber='';
        userCode='';
        mail='';
        stepIndex=0;
    }

    async function nextClick() {
        flyDirection = 1;
        if (stepIndex === 0) { //email checks
            if (!mail) {
                emptyMailWarning = true;
            }
            else if (!emailRegex.test(mail)) {
                formatMailWarning = true;
            }
            else { //email field is not empty and 
                wait = true;

                //check if email is already registered on the registrations tab
                
                const verifyMail = await fetch('/api/checkMail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mail })
                });
                
                const verifyMailJSON = await verifyMail.json();
                if (verifyMailJSON.registered) {
                    alreadyRegistered = true;
                }
                else { //not registered
                    //check if 6 digit code has been generated for this mail
                    const verifyCode = await fetch('/api/checkOTP', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({mail})
                    });

                    const verifyCodeJSON = await verifyCode.json();
                    if (!verifyCodeJSON.generated) { //code has not been generated, mail is new.
                        //generate,store,send code
                        const generateCode = await fetch('/api/otp', {
                            method: 'POST',
                            headers: {'Content-Type' : 'application/json'},
                            body: JSON.stringify({mail})
                        });

                        const generateCodeJSON = await generateCode.json();
                        if (generateCodeJSON.success) {
                            console.log("6 digit code has been generated for: ",mail);
                        }
                    }       
                    stepIndex++;                 
                    }
                    wait=false;
            }
        }
        else if (stepIndex === 1) {
            const verifyData = await fetch('/api/verifyOTP', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({mail,userCode})
            });
            const verifyDataJSON = await verifyData.json();
            //check if verificatio code is the same
            if (verifyDataJSON.matches) {
                //code entered is same as generated!
                stepIndex++;
            }
            else {
                wrongCodeWarning = true;
            }
        }
        else if (stepIndex === 2) { //Name checks
            if (!fullName.trim()) {
                emptyNameWarning = true;
            }
            else if (/\d/.test(fullName)) {
                numberInName = true;
            }
            else {
                stepIndex++;
            }
        }
        else if (stepIndex === 3) {
            if (!phoneNumber.trim()) {
                emptyPhoneNumber = true;
            }
            else if (/\p{L}/u.test(phoneNumber))
                lettersInNumber = true;
            else if ( !(phoneNumber.trim().length===10 || phoneNumber.trim().length===13) ) {
                formatPhoneNumber = true;
            }
            else {
                stepIndex++;
            }
        }
        else if (stepIndex === 4) {
            submitRegistration();
        }
    }

    function printmail() {
        console.log("the mail is: " + mail);
    }

    onMount( () => {
        function handleKey(event : KeyboardEvent) {
            if (event.key === 'Escape' && showOverlay) {
                goBack();
            }
            else if (event.key === 'Enter') {
                nextClick();
            }
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    } )
</script>

<button class="RegisterButton" onclick={Register} style="color:{textColor}">
    <span>{t('register_button')}</span>
</button>

{#if showOverlay}
    <div class="overlay"> 
        <div transition:slide={{ duration: 150, easing: quadInOut }} class="overlayContent">
            <div class="Header">
                <hr/>
                <span>{t('register_button')}!</span>
                <hr/>
            </div>
            <div class="RegistrationSteps">
                {#if stepIndex === 0}
                    <div class="MailConfirmation LabelInput" out:fly={{ x: -300*flyDirection, duration:150, easing: quadInOut}} in:fly={{x: 300*flyDirection,delay:150, duration:150, easing: quadInOut }}>
                        <label for="email">{t('email')}</label>
                        <input required type="email" autocomplete="email" id="email" placeholder="mail@example.com" bind:value={mail} onblur={printmail}>
                    </div>
                    {#if emptyMailWarning}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('fill_mail')}</span>
                                <button class="WarningButton" onclick={()=>emptyMailWarning=false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {:else if formatMailWarning}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('mail_wrong')}</span>
                                <button class="WarningButton" onclick={()=>formatMailWarning=false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {:else if alreadyRegistered}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('mail_registered')}</span>
                                <button class="WarningButton" onclick={() => alreadyRegistered = false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {/if}
                {:else if stepIndex === 1}
                        <div class="code LabelInput" in:fly={{x: 300*flyDirection, delay:150, duration: 150, easing: quadInOut}} out:fly={{x:-300*flyDirection, duration: 150, easing: quadInOut}}>
                            <label for="confirmationCode">{t('code')} <br/>{t('sent')}</label>
                            <input required id="confirmationCode" type="text" placeholder="000000" bind:value={userCode}/>
                        </div>
                        {#if wrongCodeWarning}
                            <div class="Warning">
                                <div class="WarningContent">
                                    <span>{t('wrong_code')}</span>
                                    <button class="WarningButton" onclick={()=>wrongCodeWarning=false}>
                                        <span>OK</span>
                                    </button>
                                </div>
                            </div>
                        {/if}
                {:else if stepIndex === 2}
                    <div class="Info LabelInput" in:fly={{x: 300*flyDirection, delay:150, duration: 150, easing: quadInOut}} out:fly={{x:-300*flyDirection, duration: 150, easing: quadInOut}}>
                        <label for="fullName">{t('full')}</label>
                        <input required id="fullName" type="text" placeholder="John Doe" autocomplete="name" bind:value={fullName}/>
                    </div>
                    {#if emptyNameWarning}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('enter_name')}</span>
                                <button class="WarningButton" onclick={()=>emptyNameWarning=false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {:else if numberInName} 
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('no_numbers')}</span>
                                <button class="WarningButton" onclick={()=>numberInName=false} >
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {/if}
                {:else if stepIndex === 3}
                    <div class="phoneInfo LabelInput"  in:fly={{x: 300*flyDirection, delay:150, duration: 150, easing: quadInOut}} out:fly={{x:-300*flyDirection, duration: 150, easing: quadInOut}}>
                        <label for="phoneNumber">{t('phone')}</label>
                        <input required id="phoneNumber" type="text" placeholder="+3069012345" autocomplete="tel" bind:value={phoneNumber}/>
                    </div>
                    {#if emptyPhoneNumber}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('enter_phone')}</span>
                                <button class="WarningButton" onclick={()=>emptyPhoneNumber=false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {:else if lettersInNumber}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('wrong_phone')}</span>
                                <button class="WarningButton" onclick={()=>lettersInNumber=false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {:else if formatPhoneNumber}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{t('wrong_digits')}</span>
                                <button class="WarningButton" onclick={()=>formatPhoneNumber=false}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {/if}
                {:else}  <!--stepIndex=4-->
                    <div class="Confirmation" in:fly={{x: 300*flyDirection, delay:150, duration: 150, easing: quadInOut}}>
                        <ul>
                            {#each userInfo as info }
                                <li>
                                    <span>{info}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    {#if submitError}
                        <div class="Warning">
                            <div class="WarningContent">
                                <span>{submitError}</span>
                                <button class="WarningButton" onclick={() => submitError = ''}>
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    {/if}
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
                    <!--TEXT CHOICE-->
                    {#if stepIndex}
                        <span>{t('back')}</span>
                    {:else}
                        <span>{t('exit')}</span>
                    {/if}
                </button>
                <button onclick={nextClick} class="ProgressButton Next" disabled={submitting}>
                    {#if stepIndex === 4}
                        <span>{submitting ? t('submitting') : t('submit')}</span>
                    {:else if wait} 
                        <span>{wait ? t('wait') : t('next')}</span>
                    {:else}
                        <span>{t('next')}</span>
                    {/if}
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
    
    .Confirmation {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border-radius: 1rem;    
        overflow: hidden;
    }

    .Confirmation ul {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        list-style: none;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 2vh;
        padding: 1.5rem;
    }

    .Confirmation li::before {
        content: "→";
    }

    .Confirmation li {
        font-size: clamp(1.5vw,1.7vw,1.9vw);
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
        width: 21.45vw;
        margin: 0px;
        border: 2.5px solid var(--primary-color);
        border-radius: 10px;
    }
    
    .Info {
        display: flex;
        flex-direction: column;
        gap: 5vh;
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

    .LabelInput {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }

    .LabelInput label {
        color: var(--primary-color);
        font-size: clamp(2.5vw,3vw,3.5vw);
    }

    .long {
        width: 60px;
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

    .overlay input {
        width: 100%;
        height: 2vh;
        border-radius: 1rem;
        padding: 1.5rem;
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .overlayContent {
        width: 50vw;
        height: 90vh;

        background-color: var(--secondary-color);


        border-radius: 2rem;
        padding: 1rem 2rem;
        gap: 12vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .phoneInfo {
        display: flex;
        flex-direction: column;
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
        height: 30vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .step {
        background-color: var(--primary-color);
        border-radius: 20px;
        height: 15px;
    }

    .short {
        width: 15px;
    }

    .Warning {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        height: auto;

        z-index: 1100;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .WarningContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 3.5rem;
        background-color: var(--secondary-color);
        padding: 3rem 5rem 1.5rem;
        border-radius: 2rem;
    }

    .WarningContent span {
        color: var(--primary-color);
        font-size: 2vw;
    }

    .WarningButton {
        background-color: var(--secondary-color);
        border-radius: 2rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    .WarningButton:hover {
        background-color: var(--primary-color);
    }

    .WarningButton:hover span {
        color: var(--secondary-color);
    }

    @media (max-width: 768px) {
        .Confirmation ul {
            zoom: 2.8;
        }

        .LabelInput {
            width: 75%;
        }

        .LabelInput label {
            font-size: clamp(8vw,8.5vw,9vw);
            text-align: center;
        }

        .overlayContent {
            width: 110vw;
            height: 65vh;
            gap: 7vh;
        }
        
        .RegistrationSteps {
            width: 100%;
        }

        .WarningContent {
            width: 70vw;
            height: 30vh;
        }

        .WarningContent span {
            font-size: clamp(6vw,6.5vw,7vw);
        }
    }
</style>