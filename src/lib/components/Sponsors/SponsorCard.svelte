<script>
    let {
        sponsorName = 'Diamond Sponsor 1',
        imageURL = '/sponsors-images/diamond1.png',
        description = 'Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας.'
    } = $props();

    let Detailed = $state(false);

    function Click() {
        Detailed = !Detailed;
    }
</script>

<button
    class="sponsor-card"
    type="button"
    onclick={Click}
>
    <img src={imageURL} alt={sponsorName} />
</button>

{#if Detailed}
    <div class="overlay">
        <div class="sponsor-dialog">
            <div class="sponsor-content">

                <div class="sponsor-image">
                    <img src={imageURL} alt={sponsorName} />
                </div>

                <div class="sponsor-text">
                    <h2>{sponsorName}</h2>

                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <button
                class="OK"
                type="button"
                onclick={Click}
            >
                <span>OK</span>
            </button>
        </div>
    </div>
{/if}

<style>
    .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0px 300px;
}

.sponsor-dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 50px;
    padding: 50px 75px 25px;
    border-radius: 25px;

    background: var(--secondary-color);
    color: var(--primary-color);
}

.sponsor-content {
    display: grid;
    grid-template-columns: 33% 67%;
    justify-content: center;
    align-items: center;
    max-height: 500px;
}

.sponsor-image img {
    width: 300px;
    height: 300px;
    object-fit: contain;
}

.sponsor-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sponsor-text h2 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
}

.sponsor-text p {
    font-size: 20px;
    margin: 0;

    max-height: 450px;
    overflow-y: auto;
}

.OK {
    width: 125px;
    height: 50px;

    border-radius: 50px;
    border: 2px solid var(--primary-color);

    cursor: pointer;
}

.OK span {
    transition: transform 0.2s ease-in-out;
    display: block;
    font-size: 24px;
    font-weight: 500;
}

.OK:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

.OK:hover span {
    transform: scale(1.3);
}

.sponsor-card {
    width: 100%;
    height: 100%;

    border: none;
    background: none;
    padding: 0;

    cursor: pointer;

    transition: transform 0.3s ease;
}

.sponsor-card:hover {
    transform: scale(1.05);
}

.sponsor-card img {
    width: 94%;
    height: 94%;
    object-fit: contain;

    border-radius:15px;
}

</style>