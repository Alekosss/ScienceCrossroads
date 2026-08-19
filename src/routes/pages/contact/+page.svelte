<script lang="ts">
    import Facebook from "$lib/components/Social/Facebook.svelte";
    import Instagram from "$lib/components/Social/Instagram.svelte";
    import TikTok from "$lib/components/Social/TikTok.svelte";
    import LinkedIn from "$lib/components/Social/LinkedIn.svelte";
  import Mail from "$lib/components/Social/Mail.svelte";
  import { enhance } from "$app/forms";

    let mail = $state('');
    let subject = $state('');
    let content = $state('');

    let emptyField = $derived(!mail || !subject || !content);
    let show = $state(false);
    let showWarning = $state(false);

    let formEl: HTMLFormElement;

    function isValidEmail(mail:string) {
        console.log("Mail at check is: " + mail);
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
        <span>CONTACT US</span>
        <hr/>
    </div>
    <div class="Description">
        <span>Feel free to contact us in our Social if you have questions!</span>
    </div>
    <div class="Social">
        <div class="IG">
            <Instagram/>
        </div>
        <div class="FB">
            <Facebook/>
        </div>
        <div class="TikTok">
            <TikTok/>
        </div>
        <div class="LinkedIn">
            <LinkedIn/>
        </div>
        <div class="Mail">
            <Mail/>
        </div>
    </div>
    <div class="Description">
        <span>or send us an email via the following form:</span>
    </div>
    <!--Mailing form-->
    <form class="MailingForm" method="POST" use:enhance bind:this={formEl}>
        <div class="AddressAndSubject">
            <div class="EmailAddress">
                <label for="email">Email Address:</label>
                <input 
                        type="email" 
                        id="email"
                        autocomplete="email"
                        required
                        bind:value={mail} 
                        placeholder="mail@example.com"/>
            </div>
            <div class="Subject">
                <label for="subject">Subject:</label>
                <input
                required
                id="subject"
                bind:value={subject} 
                placeholder="Example Subject"/>
            </div>
        </div>
        <div class="Message">
            <label for="message">Message:</label>
            <textarea 
            required
            id="message"
            bind:value={content} 
            placeholder="Example message...">
            </textarea>
        </div>
        <button class="SendButton" type="submit" onclick={Send}>
            <text>SEND</text>
        </button>
        {#if show}
            <div class="overlay">
                <div class="dialog">
                    {#if emptyField}
                        {#if !mail} 
                            <span> please fill out your email address!</span>
                        {:else if !subject}
                            <span> please fill out the subject!</span>
                        {:else if !content}
                            <span> please fill out the message content!</span>
                        {/if}
                        <button class="goBack" onclick={goBack}>OK</button>
                    {:else}
                        {#if !isValidEmail(mail)}
                            <span> Email address is wrong. Please try again.</span>
                            <button class="goBack" onclick={goBack}>OK</button>
                        {:else}
                            <span>Send email?</span>
                            <button class="goBack" onclick={goBack}>OK</button>
                        {/if}
                    {/if}    
                </div>
            </div>
        {/if}
    </form>
</div>

<style>    
    .AddressAndSubject {
        display: flex;
        flex-direction: row;
        gap: 150px;
        justify-content: center;
        padding: 50px;
        
        color: var(--primary-color);
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .AddressAndSubject input {
        background-color: var(--primary-color);
        color: var(--physics);
        height: 35px;
        width: 300px;
        font-size: 20px;
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

    .EmailAddress {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    .goBack {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .MailingForm {
        align-self: center;
        justify-self: center;
        width: 1300px;
        height: 650px;

        background-color: var(--secondary-color);
        margin-top: 25px;
        margin-bottom: 75px;
        border-radius: 50px;
    }

    .Message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        gap: 10px;

        color: var(--primary-color);
    }

    .Message textarea {
        background-color: var(--primary-color);
        color: var(--physics);
        height: 250px;
        width: 95%;
        padding: 15px;
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
        margin: 50px;

        width: 150px;
        height: 75px;
        border-radius: 50px;
        background-color: var(--physics);
        border: none;

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
        gap: 50px;
        justify-content: center;
        align-items: center;
        padding: 100px;
    }

    .Subject {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;  
    }
</style>