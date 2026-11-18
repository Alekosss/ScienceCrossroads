<script lang="ts">
    import { onMount } from 'svelte';
    
    let {
        amount = 0,
        text = '',
        subpage = ''
    } = $props();

    let count = $state(0);
    let counterElement: HTMLAnchorElement;

    async function animateCounter() {
        while (count < amount) {
            await sleep(0.05);
            count++;
        }
    }

    function sleep(seconds : number) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    onMount(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                observer.disconnect(); // Run only once
                animateCounter();
            }
        }, { threshold: 0.1 });

        if (counterElement) {
            observer.observe(counterElement);
        }

        return () => observer.disconnect();
    });
</script>

<a href="/pages/{subpage}" class="Statistic" bind:this={counterElement}>
    <span class="TextContent">{count + '+ ' + text}</span>
</a>

<style>
   .TextContent {
        color: var(--it);
        font-size: clamp(1.5vw,2vw,2.5vw);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
        text-align: center;
   }

   .Statistic {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--secondary-color);
        border-radius: 50px;
        padding: 35px 40px;

        text-decoration: none;
   }

   .Statistic span {
        transition: transform 0.2s ease-in;
        display: inline-block;
   }

   .Statistic:hover span {
        transform: scale(1.15);
   }

   @media (max-width: 768px) {
        .TextContent {
            font-size: clamp(5vw,5.5vw,6vw);
        }
   }
</style>