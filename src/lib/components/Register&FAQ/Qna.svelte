<script>
    import ArrowDown from "$lib/assets/Icons/ArrowDown.svelte";
    import ArrowUp from "$lib/assets/Icons/ArrowUp.svelte";
    import { QuestionAnswer } from "$lib/model/QuestionAnswer.svelte";
    import { fade,slide } from "svelte/transition";


    let { q='question',a='answer' } = $props();

    let qna = $derived(new QuestionAnswer(q, a, false));

    $effect(() => {
        qna.question = q;
        qna.answer = a;
    });

    let ShowArrowUp = $state(false);

    function buttonClick() {
        qna.showing = !qna.showing;
        ShowArrowUp = !ShowArrowUp;
    }
</script>

<div class="QuestionAnswer">
    <button onclick={buttonClick} class="QuestionButton">
        <div class="Question">
            <span>{qna.question}</span>
            {#if ShowArrowUp}
                <div in:fade>
                    <ArrowUp />
                </div>
            {:else}
                <div in:fade>
                    <ArrowDown />
                </div>
            {/if}
        </div>
            {#if qna.showing}
        <div class="answer" transition:slide={{ duration: 300 }}>
            <span>{qna.answer}</span>
        </div>
    {/if}
    </button>  
</div>

<style>
    .answer {
        border-radius: 25px;
        height: 150px;
    
        color: var(--secondary-color);
    
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .answer span {
        font-size: 20px;
    }

    .Question {
        border-radius: 50px;
        height: 100px;

        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    .Question span {
        font-size: 28px;
    }

    .QuestionAnswer {
        display: flex;
        flex-direction: column;
        gap: 150px;
   }

    .QuestionButton {
        background-color: var(--primary-color);
        color: var(--chemistry);
        border-radius: 50px;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>