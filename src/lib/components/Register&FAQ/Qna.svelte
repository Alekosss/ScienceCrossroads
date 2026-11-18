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
        width: 100%;
        min-height: 100px;
        padding: 1rem;
    
        color: var(--secondary-color);
    
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .answer span {
        font-size: 1rem;
        line-height: 1.5;
    }

    .Question {
        border-radius: 50px;
        min-height: 56px;
        width: 100%;
        padding: 0.75rem 1rem;

        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .Question span {
        font-size: 1.25rem;
        line-height: 1.4;
        text-align: left;
    
    }

    .QuestionAnswer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
   }

    .QuestionButton {
        background-color: var(--primary-color);
        color: var(--chemistry);
        border-radius: 50px;
        border: none;
        cursor: pointer;
        display: flex;
        width: 100%;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Question :global(svg) {
        flex: 0 0 24px;
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px) {
        .QuestionAnswer {
            width: 100%;
            gap: 0.5rem;
        }

        .Question {
            min-height: 56px;
            border-radius: 1rem;
            padding: 0.75rem;
        }

        .Question span {
            font-size: 0.9375rem;
            line-height: 1.4;
            text-align: center;
            width: fit-content;
            width: 80%;
        }

        .answer {
            min-height: 0;
            padding: 1rem 2rem;
        }

        .answer span {
            font-size: 0.9375rem;
            line-height: 1.5;
        }
    }

</style>