<script>
	import ThemeButton from "$lib/components/LayoutComponents/ThemeButton.svelte";

    

    let username = $state('');
    let password = $state('');

</script>


<div class="LoginPage">
    <div class="Top">
        <ThemeButton/>
    </div>
    <div class="LoginPanelContainer">
        <div class="LoginPanel">
            <div class="Header"> 
                <span>LOG IN TO THE ADMIN CONSOLE</span>
            </div>
            <div class="Username_Password">
                <div class="Field">
                    <label for="username">Username</label>
                    <input required type="text" autocomplete="username" id="username" placeholder="username" bind:value={username}/>
                </div>
                <div class="Field">
                    <label for="password">Password</label>
                    <input required type="password" autocomplete="current-password" id="password" placeholder="password" bind:value={password}/>
                </div>
            </div>
            <div class="LoginButtonContainer">
                <button class="LoginButton">
                    <span>Login</span>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .Field {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .Field label {
        font-size: clamp(1vw, 1.5vw, 2vw);
    }

    .Header {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Header span {
        font-size: clamp(1.5vw,2vw,2.5vw);
        color: var(--break);
        font-weight: 500;
    }

    .LoginButtonContainer {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 20%;
    }

    .LoginPage {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

        align-items: center;
        justify-content: center;

        font-family: var(--font-family);
    }

    .LoginPanel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: var(--secondary-color);
        color: var(--primary-color);
        width: 70%;
        height: 85%;
        
        border-radius: 2rem;
    }

    .LoginPanelContainer {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Top {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 20%;
    }

    .Username_Password {
        height: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>