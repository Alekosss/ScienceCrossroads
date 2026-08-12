<script>
    import ArrowLeft from "$lib/assets/Icons/ArrowLeft.svelte";
    import ArrowRight from "$lib/assets/Icons/ArrowRight.svelte";
    import { Branch } from "$lib/model/Branch.svelte";

    const ACM_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nulla vel lorem lobortis volutpat. Sed vitae tempus purus. Aliquam quis ipsum lectus. Aliquam ultricies pulvinar tristique. Nulla et elit dui. Etiam luctus fermentum condimentum. Morbi eu tincidunt libero. Cras pharetra odio risus, non ornare nisl tempor eget. Duis pellentesque ipsum blandit ex tincidunt dapibus. Etiam volutpat ligula ullamcorper luctus ultricies. Curabitur rutrum urna at consequat commodo. Aliquam molestie velit quis hendrerit tempor. Sed tristique, diam in pellentesque efficitur, lacus mi fermentum nulla, non elementum purus urna vitae mi. Vivamus aliquet sodales mattis. Quisque et ornare nisl.";
    const ACMLogoURL = "$lib/assets/Logos/ACM_LOGO.png";
    const ACM = new Branch("ACM AUTh Student Chapter","We learn and create, together!",ACM_description,ACMLogoURL);

    const PAThLogoURL = "$lib/assets/Logos/PATh_LOGO.png";
    const PATh = new Branch("PATh","Follow your own PATh!","[PATh description]",PAThLogoURL);

    const ReactionLogoURL = "$lib/assets/Logos/ReAcTiON.png";
    const ReAcTiON = new Branch("ReAcTiON","[ReAcTiON slogan]","[ReAcTiON description]",ReactionLogoURL);

    let Branches = $state([ACM,PATh,ReAcTiON]);
    let index = $state(0);

    function RightArrowClick() {
        Branches[index].active = false;
        index++;
        if (index>2) {
            index=0;
        }
        Branches[index].active = true;
    }

    function LeftArrowClick() {
        Branches[index].active = false;
        index--;
        if (index<0) {
            index = 2;
        }
        Branches[index].active = true;
    }
</script>

<div class="Carousel">
    <div class="CarouselItems"></div>
    <div class="ArrowsAndIndexing">
        <button onclick={LeftArrowClick} class="Arrow">
            <ArrowLeft/>
        </button>
        <div class="Index">
            {#each Branches as branch}
                {#if branch.active} 
                    <div class="roundIndex Active"></div>
                {:else}
                    <div class="roundIndex Inactive"></div>
                {/if}
            {/each}
        </div>
        <button onclick={RightArrowClick} class="Arrow">
            <ArrowRight/>
        </button>
    </div>
</div>

<style>
    .Active {
        border: 5px solid var(--it);
    }

    .Arrow {
        transform: scale(1.75);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--secondary-color);
        background-color: var(--primary-color);
        color: var(--secondary-color);
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .Arrow:hover {
        background-color: var(--secondary-color); 
        color: var(--it);
    }


    .ArrowsAndIndexing {
        margin-top: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 200px;
    }

    .Carousel {
        width: 1550px;
        height: 550px;
        border: 10px solid var(--it);    
        align-self: center;
        justify-self: center;
        margin: 20px;
    }

    .Inactive {
        border: 2.5px solid var(--secondary-color);
    }

    .Index {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 2.5px;
    }
    
    .roundIndex {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin: 10px;
    }

</style>