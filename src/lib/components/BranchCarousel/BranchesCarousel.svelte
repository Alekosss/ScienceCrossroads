<script>
    import ArrowLeft from "$lib/assets/Icons/ArrowLeft.svelte";
    import ArrowRight from "$lib/assets/Icons/ArrowRight.svelte";
    import { Branch } from "$lib/model/Branch.svelte";
    import BranchCarouselCard from "./BranchCarouselCard.svelte";

    const ACMName = "ACM AUTh Student Chapter";
    const ACM_description = "ACM Description goes here...";
    const ACMLogoURL = "/Logos/ACM_LOGO.png";
    const ACMSlogan = "We learn and create, together!"
    const ACM = new Branch(ACMName,ACMSlogan,ACM_description,ACMLogoURL);

    const PAThName = "PATh";
    const PAThSlogan = "Follow your own PATh!";
    const PAThLogoURL = "/Logos/PATh_LOGO.png";
    const PAThDescription = "[PATh description]";
    const PATh = new Branch(PAThName,PAThSlogan,PAThDescription,PAThLogoURL);

    const ReactionName = "ReAcTiON";
    const ReactionSlogan = "[ReAcTiON slogan]";
    const ReactionDescription = "[ReAcTiON description]";
    const ReactionLogoURL = "/Logos/ReAcTiON.png";
    const ReAcTiON = new Branch(ReactionName,ReactionSlogan,ReactionDescription,ReactionLogoURL);

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
    <div class="CarouselItems">
        <BranchCarouselCard imageURL={Branches[index].logoURL} slogan={Branches[index].slogan} name={Branches[index].name} description={Branches[index].description}/>
    </div>
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
        background-color: transparent;
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
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 200px;
    }

    .Carousel {
        display: flex;
        flex-direction: column;
        align-self: center;

        gap: 75px;

        width: 100%;
        height: 80vh;
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

    @media (max-width: 768px) {
        .Carousel {
            height: auto;
        }
    }

</style>