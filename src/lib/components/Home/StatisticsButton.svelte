<script>
    let {
        text = "Statistic Button",
        subpage = ""
    } = $props();

    function clickHandler() {
        console.log(subpage);
        window.location.href = '/pages/'+{subpage};
    }
</script>

<a href="/pages/{subpage}" class="Statistic">
    <span class="TextContent">{text}</span>
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
        padding: 30px 40px;

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