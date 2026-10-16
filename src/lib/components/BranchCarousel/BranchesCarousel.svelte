<script lang="ts">
    import ArrowLeft from "$lib/assets/Icons/ArrowLeft.svelte";
    import ArrowRight from "$lib/assets/Icons/ArrowRight.svelte";
    import { Branch } from "$lib/model/Branch.svelte";
    import BranchCarouselCard from "./BranchCarouselCard.svelte";
    import { t } from "$lib/i18n.svelte";

    const ACMName = "ACM AUTh Student Chapter";
    const ACM_description = t('acm_desc');
    const ACMLogoURL = "/Logos/ACM_LOGO.png";
    const ACMSlogan = "We learn and create, together!"
    const ACM = new Branch(ACMName,ACMSlogan,ACM_description,ACMLogoURL);

    const PAThName = "PATh";
    const PAThSlogan = "Follow your own PATh!";
    const PAThLogoURL = "/Logos/PATh_LOGO.png";
    const PAThDescription = t('path_desc');
    const PATh = new Branch(PAThName,PAThSlogan,PAThDescription,PAThLogoURL);

    const ReactionName = "ReAcTiON";
    const ReactionSlogan = "The Chemistry Students' Association";
    const ReactionDescription = t('reaction_desc');
    const ReactionLogoURL = "/Logos/ReAcTiON.png";
    const ReAcTiON = new Branch(ReactionName,ReactionSlogan,ReactionDescription,ReactionLogoURL);

    const branchDescriptionKeys = ["acm_desc", "path_desc", "reaction_desc"] as const;
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
        <BranchCarouselCard imageURL={Branches[index].logoURL} slogan={Branches[index].slogan} name={Branches[index].name} description={t(branchDescriptionKeys[index])}/>
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
        gap: 15rem;
        zoom: 0.6;
    }

    .Carousel {
        display: flex;
        flex-direction: column;
        align-self: center;

        gap: 3rem;

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
        margin-bottom: 0.1rem;
        gap: 5rem;
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