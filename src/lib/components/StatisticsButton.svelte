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
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
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
</style>