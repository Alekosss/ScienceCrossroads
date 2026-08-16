<script>
    import { QuestionAnswer } from "$lib/model/QuestionAnswer.svelte";
    import { slide } from "svelte/transition";


    let { 
        qna = new QuestionAnswer("Question 1","Answer 1",false)
    } = $props();

    function buttonClick() {
        console.log("click! " + qna.showing);
        qna.showing = !qna.showing;
        console.log("after: " + qna.showing);
    }
</script>

<div class="QuestionAnswer">
    <button onclick={buttonClick} class="QuestionButton">
        <div class="Question">
            <span>{qna.question}</span>
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
        width: 1000px;
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