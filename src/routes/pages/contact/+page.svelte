<script lang="ts">
    import Facebook from "$lib/components/Social/Facebook.svelte";
    import Instagram from "$lib/components/Social/Instagram.svelte";
    import TikTok from "$lib/components/Social/TikTok.svelte";
    import LinkedIn from "$lib/components/Social/LinkedIn.svelte";
    import Mail from "$lib/components/Social/Mail.svelte";
    import { enhance } from "$app/forms";
	import { t } from "$lib/i18n.svelte";

    let mail = $state('');
    let subject = $state('');
    let message = $state('');
    let name = $state('');

    let emptyField = $derived(!mail || !subject || !message || !name);
    let show = $state(false);
    let showWarning = $state(false);

    let formEl: HTMLFormElement;

    function isValidEmail(mail:string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.trim());
	}

    function Send() {
        show = true;
        console.log("Button clicked! " + show + ' ' + showWarning);
    }

    function goBack() {
        show = false;
    }

    const FacebookURL = "https://www.facebook.com/profile.php?id=61592636290886&rdid=ErViNhknuDdcfzTh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DC1PWhGrR%2F";
    const InstagramURL = "https://www.instagram.com/sciencecrossroads/";
    const LinkedInURL = "https://www.linkedin.com/company/science-crossroads/";
    const TikTokURL = "https://www.tiktok.com/@science.crossroad";

    function OpenInstagram() {
        console.log("Button clicked. Opening window");
        window.open(InstagramURL, "_blank", "noopener,noreferrer");
    }

    function OpenFacebook() {
        console.log("Button clicked. Opening window");
        window.open(FacebookURL, "_blank", "noopener,noreferrer");
    }

    function OpenLinkedIn() {
        console.log("Button clicked. Opening window");
        window.open(LinkedInURL, "_blank", "noopener,noreferrer");
    }

    function OpenTikTok() {
        console.log("Button clicked. Opening window");
        window.open(TikTokURL, "_blank", "noopener,noreferrer");
    }

</script>

<div class="ContactPage">
    <!--1st way to Contact-->
    <div class="CategoryHeader">
        <hr/>
        <text>{t('contact_us')}</text>
        <hr/>
    </div>
    <div class="Description">
        <text>{t('feel_free')}</text>
    </div>
    <div class="Social">
        <div class="Media IG">
            <Instagram/>
        </div>
        <div class="Media FB">
            <Facebook/>
        </div>
        <div class="Media TikTok">
            <TikTok/>
        </div>
        <div class="Media LinkedIn">
            <LinkedIn/>
        </div>
        <div class="Media Mail">
            <Mail/>
        </div>
    </div>
    <div class="Description">
        <text>{t('send')}</text>
    </div>
    <!--Mailing form-->
    <form class="MailingForm" method="POST" use:enhance bind:this={formEl}>
        <div class="AddressSubjectName">
            <div class="EmailAddress LabelInput">
                <label for="email">{t('email')}</label>
                <input 
                        type="email" 
                        id="email"
                        name="email"
                        autocomplete="email"
                        required
                        bind:value={mail} 
                        placeholder={t('mail_placeholder')}/>
            </div>
            <div class="Subject LabelInput">
                <label for="subject">{t('subject')}</label>
                <input required id="subject"name="subject" bind:value={subject} placeholder="{t('subject_placeholder')}"/>
            </div>
            <div class="Name LabelInput">
                <label for="name">{t('name')}</label>
                <input required id="name" name="name" bind:value={name} autocomplete="name" placeholder="{t('name_placeholder')}"/>
            </div>
        </div>
        <div class="Message">
            <label for="message">{t('message')}</label>
            <textarea 
            required
            id="message"
            name="message"
            bind:value={message} 
            placeholder="{t('message_placeholder')}">
            </textarea>
        </div>
        <button class="SendButton" type="button" onclick={Send}>
            <text>{t('SEND')}</text>
        </button>
        {#if show}
            <div class="overlay">
                <div class="dialog">
                    {#if emptyField}
                        {#if !mail} 
                            <span> {t('fill_mail')}</span>
                        {:else if !subject}
                            <span> {t('fill_subject')}</span>
                        {:else if !message}
                            <span>{t('fill_message')}</span>
                        {:else if !name} 
                            <span>{t('fill_name')} </span>    
                        {/if}
                        <button class="goBack" onclick={goBack}>OK</button>
                    {:else}
                        {#if !isValidEmail(mail)}
                            <span>{t('wrong_mail')}</span>
                            <button class="goBack" onclick={goBack}>OK</button>
                        {:else}
                            <span>{t('send_mail')}</span>
                            <button class="goBack" onclick={() => { 
                                show = false; 
                                formEl.requestSubmit(); 
                                }}>
                                OK
                            </button>
                        {/if}
                    {/if}    
                </div>
            </div>
        {/if}
    </form>
</div>

<style>    
    .AddressSubjectName {
        display: flex;
        flex-direction: row;
        gap: 7.5rem;
        justify-content: center;
        padding: 2rem;
        
        color: var(--primary-color);
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .AddressSubjectName input {
        background-color: var(--primary-color);
        color: var(--physics);
        height: 35px;
        width: auto;
        font-size: 1.25vw;
        border-radius: 50px;
    }
    
    .CategoryHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 160px 0;
        gap: 60px;
        
        color: var(--break);
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .CategoryHeader hr {
        width: 250px;
        background-color: var(--break);
        border: none;
        height: 2px;
        margin: 0;
    }
    
    .ContactPage {
        font-family: var(--font-family);
        width: 90%;
        justify-self: center;
        overflow: hidden;
    }

    .Description {
        color: var(--PHYSICS, #E29B60);
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
    }
    
    .dialog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        gap: 50px;
        padding: 50px 75px;
        border-radius: 25px;

        background: var(--secondary-color); 
        color: var(--primary-color);
    }

    .dialog span {
        font-size: 25px;
    }

    .LabelInput {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        font-size: clamp(1.25vw,1.5vw,1.75vw);
    }
    
    .goBack {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .MailingForm {
        justify-self: center;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: max-content;
        height: auto;

        background-color: var(--secondary-color);

        margin: 2rem 0 5rem;
        padding: 0.25rem;
        border-radius: 4rem;
    }

    .MailingForm input {
        padding-left: 1rem;
    }
    

    .Media {
        zoom: 0.7;
    }

    .Message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: clamp(1.25vw,1.5vw,1.75vw);
        gap: 10px;

        color: var(--primary-color);
    }

    .Message textarea {
        background-color: var(--primary-color);
        color: var(--physics);
        height: 10rem;
        width: 90%;
        padding: 2rem;
        font-size: 20px;
        border-radius: 50px;
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .SendButton {
        justify-self: center;
        align-self: center;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 2rem auto;

        width: auto;
        height: 70px;
        border-radius: 50px;
        background-color: var(--physics);
        border: none;
        padding: 0.5rem 1.5rem;

        cursor: pointer;
    }

    .SendButton:hover {
        background-color: var(--primary-color);
    }

    .SendButton:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .SendButton text {
        color: var(--primary-color);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        transition: transform 0.2s linear;
    }

    .SendButton:hover text{
        color: var(--physics);

        transform: scale(1.2);
    }

    .Social {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        padding: 5rem 0;
        
    }

    @media (max-width: 768px) {
        .AddressSubjectName {
            width: 90%;
            flex-direction: column;
            gap: 5vh;
        }

         .CategoryHeader text{
            font-size:  clamp(8vw,10vw,12vw);
            width: fit-content;
            align-items: center;
            justify-content: center;
            display: flex;
        }

        .CategoryHeader {
            display: flex;
            flex-direction: row;
            gap: 5%;
            padding: 0;
            margin: 25% 0;
        }

        .CategoryHeader hr {
            display: none;
        }

        .ContactPage {
            overflow-x: hidden;
        }

        .Description {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0 auto;
            padding: 0;
        }

        .Description text{
            font-size: clamp(5vw,6vw,7vw);
        }
        
        .Media {
            zoom: 0.7;
        }

        .MailingForm {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .SendButton {
            width: 40%;
        }

        .Social {
            gap: 5vw;
            zoom: 0.9;
        }
    }
</style>