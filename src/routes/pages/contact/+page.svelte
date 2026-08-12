<script>
    import Facebook from "$lib/assets/Icons/Facebook.svelte";
    import Instagram from "$lib/assets/Icons/Instagram.svelte";
    import Mail from "$lib/assets/Icons/Mail.svelte";

    let mail = $state('');
    let subject = $state('');
    let content = $state('');
    let disabled = $derived((mail==='') || (subject==='') || (content===''));

    function Test() {
        console.log("button is enabled!");
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
        <button class="Media">
            <Instagram/>
            <span>Instagram</span>
        </button>
        <button class="Media">
            <Facebook/>
            <span>Facebook</span>
        </button>
        <button class="Media">
            <Mail/>
            <span>Mail</span>
        </button>
    </div>
    <div class="Description">
        <span>or send us an email via the following form:</span>
    </div>
    <!--Mailing form-->
    <div class="MailingForm">
        <div class="AddressAndSubject">
            <div class="EmailAddress">
                <span>Email Address:</span>
                <input bind:value={mail} placeholder="Enter your email here..."/>
            </div>
            <div class="Subject">
                <span>Subject:</span>
                <input bind:value={subject} placeholder="Enter the mail subject here..."/>
            </div>
        </div>
        <div class="Message">
            <span>Message:</span>
            <input bind:value={content} placeholder="Enter the message content here..."/>
        </div>
        <button class="SendButton" disabled={disabled} onclick={Test}>
            <text>SEND</text>
        </button>
    </div>
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

    .EmailAddress {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
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

    .Media {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        align-content: center;
        justify-content: center;

        border-radius: 50px;
        width: 200px;
        height: 80px;
        background-color: var(--primary-color);
        border: 2px solid var(--secondary-color);

        color: var(--secondary-color);
    }

    .Media:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
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

    .Message input {
        background-color: var(--primary-color);
        color: var(--physics);
        height: 250px;
        width: 95%;
        font-size: 20px;
        border-radius: 50px;
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
        gap: 200px;
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