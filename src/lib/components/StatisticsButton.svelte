<script>
    let {text = "Statistic Button"} = $props();
</script>

<button class="StatisticButton">
    <span class="ButtonText">{text}</span>
</button>

<style>
    .StatisticButton {
        /*Button formatting*/
        background-color: var(--secondary-color);
        width: 350px;
        height: 100px;
        border-radius: 50px;

        /*Text formatting for the button*/
        color: var(--IT, #B66DEA);
        font-family: var(--font-family);
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .StatisticButton:hover {
        cursor: pointer;
    }

    .ButtonText {
        display: inline-block;
        transition: transform 0.2s linear;
    }

    .StatisticButton:hover .ButtonText {
        transform: scale(1.2);
    }
    
</style>