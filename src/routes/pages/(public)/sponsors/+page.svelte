<script>

    import SponsorCard from '$lib/components/Sponsors/SponsorCard.svelte';
    import { onMount } from 'svelte';

    let highlightedSponsor = $state(null);

    const connections = [
        { from: '.diamond-circle', to: '.platinum1-circle' },
        { from: '.diamond-circle', to: '.platinum2-circle' },
        { from: '.diamond-circle', to: '.platinum3-circle' },
        { from: '.diamond-circle', to: '.platinum4-circle' },

        { from: '.platinum1-circle', to: '.gold1-circle' },
        { from: '.platinum1-circle', to: '.gold2-circle' },

        { from: '.platinum2-circle', to: '.gold3-circle' },
        { from: '.platinum2-circle', to: '.gold4-circle' },

        { from: '.platinum3-circle', to: '.gold5-circle' },
        { from: '.platinum3-circle', to: '.gold6-circle' },

        { from: '.platinum4-circle', to: '.gold7-circle' },
        { from: '.platinum4-circle', to: '.gold8-circle' },

        { from: '.gold1-circle', to: '.silver1-circle' },
        { from: '.gold1-circle', to: '.silver2-circle' },

        { from: '.gold2-circle', to: '.silver3-circle' },

        { from: '.gold3-circle', to: '.silver4-circle' },
        { from: '.gold3-circle', to: '.silver5-circle' },

        { from: '.gold4-circle', to: '.silver6-circle' },

        { from: '.gold5-circle', to: '.silver7-circle' },

        { from: '.gold6-circle', to: '.silver8-circle' },
        { from: '.gold6-circle', to: '.silver9-circle' },

        { from: '.gold7-circle', to: '.silver10-circle' },

        { from: '.gold8-circle', to: '.silver11-circle' },

        { from: '.silver1-circle', to: '.bronze1-circle' },
        { from: '.silver2-circle', to: '.bronze2-circle' },
        { from: '.silver3-circle', to: '.bronze3-circle' },
        
        { from: '.silver5-circle', to: '.bronze4-circle' },
        { from: '.silver6-circle', to: '.bronze5-circle' },
        { from: '.silver7-circle', to: '.bronze6-circle' },
        { from: '.silver8-circle', to: '.bronze7-circle' },
        { from: '.silver9-circle', to: '.bronze8-circle' }
    ];

    let selectedSponsor = $state(null);

    function goToSponsor(elementId, sponsor) {
        const element = document.getElementById(elementId);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        let highlightedSponsor = $state(null);

        setTimeout(() => {
            highlightedSponsor = null;
        }, 800);
    }

    function updateLines() {
        const container = document.querySelector('.all-circles');
        const lines = document.querySelectorAll('.connection-line');

        if (!container) return;

        const containerRect = container.getBoundingClientRect();

        lines.forEach((line) => {
            const fromSelector = line.getAttribute('data-from');
            const toSelector = line.getAttribute('data-to');

            if (!fromSelector || !toSelector) return;

            const fromElement = document.querySelector(fromSelector);
            const toElement = document.querySelector(toSelector);

            if (!fromElement || !toElement) return;

            const fromRect = fromElement.getBoundingClientRect();
            const toRect = toElement.getBoundingClientRect();

            const x1 =
                fromRect.left +
                fromRect.width / 2 -
                containerRect.left;

            const y1 =
                fromRect.top +
                fromRect.height / 2 -
                containerRect.top;

            const x2 =
                toRect.left +
                toRect.width / 2 -
                containerRect.left;

            const y2 =
                toRect.top +
                toRect.height / 2 -
                containerRect.top;

            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
        });
    }

    onMount(() => {
        updateLines();

        window.addEventListener('resize', updateLines);

        const observer = new ResizeObserver(updateLines);
        const container = document.querySelector('.all-circles');

        if (container) {
            observer.observe(container);
        }

        return () => {
            window.removeEventListener('resize', updateLines);
            observer.disconnect();
        };
    });

</script>


<div class="sponsors-map">
    <div class="all-circles">

        <svg class="graph-lines">
            {#each connections as connection}
                <line
                    class="connection-line"
                    data-from={connection.from}
                    data-to={connection.to}
                />
            {/each}
        </svg>

        <button 
            class="diamond-circle"
            onclick={() => goToSponsor('diamond-sponsor','diamond')}
        >
            <img src="/sponsors-images/diamond1.png" alt="Diamond sponsor" />
        </button>

        <button 
            class="platinum1-circle"
            onclick={() => goToSponsor('platinum1-sponsor','platinum1')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>


        <button 
            class="platinum2-circle"
            onclick={() => goToSponsor('platinum2-sponsor','platinum2')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>

        <button 
            class="platinum3-circle"
            onclick={() => goToSponsor('platinum3-sponsor','platinum3')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>

        <button 
            class="platinum4-circle"
            onclick={() => goToSponsor('platinum4-sponsor','platinum4')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>

        <button 
            class="gold1-circle"
            onclick={() => goToSponsor('gold1-sponsor','gold1')}
        >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>


        <button 
            class="gold2-circle"
            onclick={() => goToSponsor('gold2-sponsor','gold2')}
        >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>
 

       <button 
            class="gold3-circle"
            onclick={() => goToSponsor('gold3-sponsor','gold3')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>


       <button 
            class="gold4-circle"
            onclick={() => goToSponsor('gold4-sponsor','gold4')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>


       <button 
            class="gold5-circle"
            onclick={() => goToSponsor('gold5-sponsor','gold5')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>


       <button 
            class="gold6-circle"
            onclick={() => goToSponsor('gold6-sponsor','gold6')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>


       <button 
            class="gold7-circle"
            onclick={() => goToSponsor('gold7-sponsor','gold7')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

 
       <button 
            class="gold8-circle"
            onclick={() => goToSponsor('gold8-sponsor','gold8')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <button 
            class="silver1-circle"
            onclick={() => goToSponsor('silver1-sponsor','silver1')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver2-circle"
            onclick={() => goToSponsor('silver2-sponsor','silver2')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver3-circle"
            onclick={() => goToSponsor('silver3-sponsor','silver3')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver4-circle"
            onclick={() => goToSponsor('silver4-sponsor','silver4')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver5-circle"
            onclick={() => goToSponsor('silver5-sponsor','silver5')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver6-circle"
            onclick={() => goToSponsor('silver6-sponsor','silver6')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver7-circle"
            onclick={() => goToSponsor('silver7-sponsor','silver7')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver8-circle"
            onclick={() => goToSponsor('silver8-sponsor','silver8')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <button 
            class="silver9-circle"
            onclick={() => goToSponsor('silver9-sponsor','silver9')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver10-circle"
            onclick={() => goToSponsor('silver10-sponsor','silver10')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="silver11-circle"
            onclick={() => goToSponsor('silver11-sponsor','silver11')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>


       <button 
            class="bronze1-circle"
            onclick={() => goToSponsor('bronze1-sponsor','bronze1')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze2-circle"
            onclick={() => goToSponsor('bronze2-sponsor','bronze2')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze3-circle"
            onclick={() => goToSponsor('bronze3-sponsor','bronze3')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze4-circle"
            onclick={() => goToSponsor('bronze4-sponsor','bronze4')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze5-circle"
            onclick={() => goToSponsor('bronze5-sponsor','bronze5')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze6-circle"
            onclick={() => goToSponsor('bronze6-sponsor','bronze6')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze7-circle"
            onclick={() => goToSponsor('bronze7-sponsor','bronze7')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>


       <button 
            class="bronze8-circle"
            onclick={() => goToSponsor('bronze8-sponsor','bronze8')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

    </div>

</div>

<div class="sponsors-title">
    <h1>SPONSORS</h1>
</div>

<div class="diamond-info">
    <div class="diamond-line">
        <div
            class="diamond-square" 
            id="diamond-sponsor"
            class:highlighted={highlightedSponsor === 'diamond'}
        >
            <SponsorCard
                sponsorName="Diamond Sponsor"
                imageURL="/sponsors-images/diamond1.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>  
</div>

<div class="diamond-platinum-divider"></div>

<div class="platinum-info">
    <div class="platinum-line1">
        <div 
            class="platinum-square1"
            id="platinum1-sponsor"
            class:highlighted={highlightedSponsor === 'platinum1'}
        >
            <SponsorCard
                sponsorName="Platinum Sponsor 1"
                imageURL="/sponsors-images/platinum1.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="platinum-square2"
            id="platinum2-sponsor"
            class:highlighted={highlightedSponsor === 'platinum2'}
        >
           <SponsorCard
                sponsorName="Platinum Sponsor 2"
                imageURL="/sponsors-images/platinum1.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="platinum-square3"
            id="platinum3-sponsor"
            class:highlighted={highlightedSponsor === 'platinum3'}
        >
           <SponsorCard
                sponsorName="Platinum Sponsor 3"
                imageURL="/sponsors-images/platinum1.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div> 
    
    <div class="platinum-line2">
        <div 
            class="platinum-square4"
            id="platinum4-sponsor"
            class:highlighted={highlightedSponsor === 'platinum4'}
        >
           <SponsorCard
                sponsorName="Platinum Sponsor 4"
                imageURL="/sponsors-images/platinum1.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>
</div>

<div class="platinum-gold-divider"></div>

<div class="gold-info">
    <div class="gold-line1">
        <div 
            class="gold-square1"
            id="gold1-sponsor"
            class:highlighted={highlightedSponsor === 'gold1'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 1"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="gold-square2"
            id="gold2-sponsor"
            class:highlighted={highlightedSponsor === 'gold2'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 2"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="gold-square3"
            id="gold3-sponsor"
            class:highlighted={highlightedSponsor === 'gold3'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 3"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="gold-square4"
            id="gold4-sponsor"
            class:highlighted={highlightedSponsor === 'gold4'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 4"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>

    <div class="gold-line2">
        <div 
            class="gold-square5"
            id="gold5-sponsor"
            class:highlighted={highlightedSponsor === 'gold5'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 5"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="gold-square6"
            id="gold6-sponsor"
            class:highlighted={highlightedSponsor === 'gold6'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 6"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="gold-square7"
            id="gold7-sponsor"
            class:highlighted={highlightedSponsor === 'gold7'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 7"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="gold-square8"
            id="gold8-sponsor"
            class:highlighted={highlightedSponsor === 'gold8'}
        >
            <SponsorCard
                sponsorName="Gold Sponsor 8"
                imageURL="/sponsors-images/gold.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>
</div>

<div class="gold-silver-divider"></div>

<div class="silver-info">
    <div class="silver-line1">
        <div 
            class="silver-square1"
            id="silver1-sponsor"
            class:highlighted={highlightedSponsor === 'silver1'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 1"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square2"
            id="silver2-sponsor"
            class:highlighted={highlightedSponsor === 'silver2'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 2"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square3"
            id="silver3-sponsor"
            class:highlighted={highlightedSponsor === 'silver3'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 3"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square4"
            id="silver4-sponsor"
            class:highlighted={highlightedSponsor === 'silver4'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 4"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>

    <div class="silver-line2">
        <div 
            class="silver-square5"
            id="silver5-sponsor"
            class:highlighted={highlightedSponsor === 'silver5'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 5"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square6"
            id="silver6-sponsor"
            class:highlighted={highlightedSponsor === 'silver6'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 6"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square7"
            id="silver7-sponsor"
            class:highlighted={highlightedSponsor === 'silver7'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 7"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square8"
            id="silver8-sponsor"
            class:highlighted={highlightedSponsor === 'silver8'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 8"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>

    <div class="silver-line3">
        <div 
            class="silver-square9"
            id="silver9-sponsor"
            class:highlighted={highlightedSponsor === 'silver9'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 9"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square10"
            id="silver10-sponsor"
            class:highlighted={highlightedSponsor === 'silver10'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 10"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="silver-square11"
            id="silver11-sponsor"
            class:highlighted={highlightedSponsor === 'silver11'}
        >
            <SponsorCard
                sponsorName="Silver Sponsor 11"
                imageURL="/sponsors-images/silver.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>
</div>

<div class="silver-bronze-divider"></div>

<div class="bronze-info">
    <div class="bronze-line1">
        <div 
            class="bronze-square1"
            id="bronze1-sponsor"
            class:highlighted={highlightedSponsor === 'bronze1'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 1"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="bronze-square2"
            id="bronze2-sponsor"
            class:highlighted={highlightedSponsor === 'bronze2'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 2"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="bronze-square3"
            id="bronze3-sponsor"
            class:highlighted={highlightedSponsor === 'bronze3'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 3"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="bronze-square4"
            id="bronze4-sponsor"
            class:highlighted={highlightedSponsor === 'bronze4'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 4"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>

    <div class="bronze-line2">
        <div 
            class="bronze-square5"
            id="bronze5-sponsor"
            class:highlighted={highlightedSponsor === 'bronze5'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 5"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="bronze-square6"
            id="bronze6-sponsor"
            class:highlighted={highlightedSponsor === 'bronze6'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 6"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="bronze-square7"
            id="bronze7-sponsor"
            class:highlighted={highlightedSponsor === 'bronze7'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 7"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>

        <div 
            class="bronze-square8"
            id="bronze8-sponsor"
            class:highlighted={highlightedSponsor === 'bronze8'}
        >
            <SponsorCard
                sponsorName="Bronze Sponsor 8"
                imageURL="/sponsors-images/bronze.png"
                description="Η αλυσίδα εξαγόραζε μαγαζιά και παράλληλα αναπτυσσόταν. Έτσι μέχρι την εποχή εκείνη ο Μασούτης είχε προχωρήσει στην εξαγορά των σούπερ μάρκετ Μέγας Αλέξανδρος, Αφοί Μουμτζίδη τον Οκτώβριο του 1983, Ραμφόπουλος τον Απρίλιο του 1984, Σούπερ Μάρκετ Διεθνές τον Ιούνιο του 1985, Κρόνος-Αφοί Καραγιαννίδη τον Μάιο του 1993, Συν Ένα τον Απρίλιο του 1993 όλες στη Θεσσαλονίκη, Φθηνή Αγορά στην Καβάλα τον Ιούλιο του 1992, Καράογλου στη Λάρισα τον Ιούνιο του 1999 καθώς και στις Γκαγκούτης τον Ιούνιο του 1995 και Κόντρα τον Οκτώβριο του 1995 που είχαν αναπτυχθεί σε αρκετούς νομούς της Μακεδονίας."
            />
        </div>
    </div>
</div>


<style>
    .bronze-square8.highlighted {
        transform: scale(1.08);
    }

    .bronze-square8{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;
        margin-bottom:30px;

        transition: transform 0.3s ease;
    }

    .bronze-square7.highlighted {
        transform: scale(1.08);
    }

    .bronze-square7{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-square6.highlighted {
        transform: scale(1.08);
    }

    .bronze-square6{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-square5.highlighted {
        transform: scale(1.08);
    }

    .bronze-square5{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-line2{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .bronze-square4.highlighted {
        transform: scale(1.08);
    }

    .bronze-square4{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-square3.highlighted {
        transform: scale(1.08);
    }

    .bronze-square3{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-square2.highlighted {
        transform: scale(1.08);
    }

    .bronze-square2{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-square1.highlighted {
        transform: scale(1.08);
    }

    .bronze-square1{
        width:210px;
        height:200px;

        background-color: #A64D05;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .bronze-line1{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .bronze-info{
        margin-top:20px;
    }

    .silver-bronze-divider{
        height: 1px;
        width: 80%;
        background-color: var(--secondary-color);
        margin: 30px auto;
    }

    .silver-square11.highlighted {
        transform: scale(1.08);
    }

    .silver-square11{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square10.highlighted {
        transform: scale(1.08);
    }

    .silver-square10{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square9.highlighted {
        transform: scale(1.08);
    }

    .silver-square9{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-line3{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .silver-square8.highlighted {
        transform: scale(1.08);
    }

    .silver-square8{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square7.highlighted {
        transform: scale(1.08);
    }

    .silver-square7{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square6.highlighted {
        transform: scale(1.08);
    }

    .silver-square6{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square5.highlighted {
        transform: scale(1.08);
    }

    .silver-square5{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-line2{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .silver-square4.highlighted {
        transform: scale(1.08);
    }

    .silver-square4{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square3.highlighted {
        transform: scale(1.08);
    }

    .silver-square3{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square2.highlighted {
        transform: scale(1.08);
    }

    .silver-square2{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-square1.highlighted {
        transform: scale(1.08);
    }

    .silver-square1{
        width:270px;
        height:190px;

        background-color: #555353;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .silver-line1{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .silver-info{
        margin-top:20px;
    }

    .gold-silver-divider{
        height: 1px;
        width: 80%;
        background-color: var(--secondary-color);
        margin: 30px auto;
    }

    .gold-square8.highlighted {
        transform: scale(1.08);
    }

    .gold-square8{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .gold-square7.highlighted {
        transform: scale(1.08);
    }

    .gold-square7{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .gold-square6.highlighted {
        transform: scale(1.08);
    }

    .gold-square6{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }


    .gold-square5.highlighted {
        transform: scale(1.08);
    }

    .gold-square5{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .gold-line2{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .gold-square4.highlighted {
        transform: scale(1.08);
    }

    .gold-square4{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }


    .gold-square3.highlighted {
        transform: scale(1.08);
    }

    .gold-square3{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }


    .gold-square2.highlighted {
        transform: scale(1.08);
    }

    .gold-square2{
        width:240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .gold-square1.highlighted {
        transform: scale(1.08);
    }

    .gold-square1{
        width: 240px;
        height:230px;

        background-color: #8C7808;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .gold-line1{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .gold-info{
        margin-top:20px;
    }

    .platinum-gold-divider{
        height: 1px;
        width: 80%;
        background-color: var(--secondary-color);
        margin: 30px auto;
    }

    .platinum-square4.highlighted {
        transform: scale(1.08);
    }

    .platinum-square4{
        width:250px;
        height:240px;

        background-color:#500078;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }
    
    .platinum-line2{
        display:flex;
        justify-content:center;
        gap:40px;
        margin-top:20px;
    }

    .platinum-square3.highlighted {
        transform: scale(1.08);
    }

    .platinum-square3{
        width:250px;
        height:240px;

        background-color:#500078;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .platinum-square2.highlighted {
        transform: scale(1.08);
    }

    .platinum-square2{
        width:250px;
        height:240px;

        background-color:#500078;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .platinum-square1.highlighted {
        transform: scale(1.08);
    }

    .platinum-square1{
        width:250px;
        height:240px;

        background-color:#500078;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
        margin-top:15px;

        transition: transform 0.3s ease;
    }

    .platinum-line1{
        display:flex;
        justify-content:center;
        gap:40px;
    }

    .platinum-info{
        margin-top:20px;
    }

    .diamond-platinum-divider{
        height: 1px;
        width: 80%;
        background-color: var(--secondary-color);
        margin: 30px auto;
    }

    .diamond-line{
        display:flex;
        justify-content:center;
        align-items:center;

    }

    .diamond-square.highlighted {
        transform: scale(1.08);
    }

    .diamond-square{
        width:360px;
        height:250px;

        background-color:#424E91;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:6px;
        margin-top:15px;

        transition: transform 0.3s ease;

        border: none;
        cursor: pointer;
        font-family: inherit;
    }

    .sponsors-title{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:10px;
    }

    .sponsors-title h1{
        font-weight:400;
        text-decoration:underline;
        text-decoration-thickness:2px;
        text-underline-offset:6px;
    }

    .bronze8-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze8-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze8-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:65%;
        top:93%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze7-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze7-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze7-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:40%;
        top:90%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze6-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze6-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze6-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:10%;
        top:80%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze5-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze5-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze5-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:90%;
        top:7%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze4-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze4-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze4-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:73%;
        top:5%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze3-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze3-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze3-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:43%;
        top:5%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze2-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze2-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze2-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:20%;
        top:5%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .bronze1-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .bronze1-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .bronze1-circle{
        width:110px;
        height:110px;

        border-radius:50%;
        border: 7px solid #A64D05;

        overflow:hidden;

        position:absolute;
        left:18%;
        top:37%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver11-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver11-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver11-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:75%;
        top:85%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver10-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver10-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver10-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:90%;
        top:42%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver9-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver9-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver9-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:55%;
        top:78%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver8-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver8-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver8-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:30%;
        top:80%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver7-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver7-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver7-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:9%;
        top:65%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver6-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver6-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver6-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:80%;
        top:17%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver5-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver5-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver5-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:63%;
        top:10%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver4-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver4-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver4-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:53%;
        top:33%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver3-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver3-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver3-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:33%;
        top:9%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver2-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver2-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver2-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:10%;
        top:10%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .silver1-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .silver1-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .silver1-circle{
        width:130px;
        height:130px;

        border-radius:50%;
        border: 7px solid #555353;

        overflow:hidden;

        position:absolute;
        left:10%;
        top:30%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold8-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold8-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold8-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:84%;
        top:75%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold7-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold7-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold7-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:84%;
        top:53%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold6-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold6-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold6-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:40%;
        top:70%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold5-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold5-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold5-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:15%;
        top:50%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold4-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold4-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold4-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:85%;
        top:28%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold3-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold3-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold3-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:65%;
        top:23%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold2-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold2-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold2-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:43%;
        top:15%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .gold1-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .gold1-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .gold1-circle{
        width:150px;
        height:150px;

        border-radius:50%;
        border: 7px solid #8C7808;

        overflow:hidden;

        position:absolute;
        left:20.7%;
        top:19%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .platinum4-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .platinum4-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .platinum4-circle{
        width:170px;
        height:170px;

        border-radius:50%;
        border: 7px solid #500078;

        overflow:hidden;

        position:absolute;
        left:76.7%;
        top:64%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .platinum3-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .platinum3-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .platinum3-circle{
        width:170px;
        height:170px;

        border-radius:50%;
        border: 7px solid #500078;

        overflow:hidden;

        position:absolute;
        left:27%;
        top:60%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .platinum2-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .platinum2-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .platinum2-circle{
        width:170px;
        height:170px;

        border-radius:50%;
        border: 7px solid #500078;

        overflow:hidden;

        position:absolute;
        left:68%;
        top:38%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .platinum1-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .platinum1-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .platinum1-circle{
        width:170px;
        height:170px;

        border-radius:50%;
        border: 7px solid #500078;

        overflow:hidden;

        position:absolute;
        left:35%;
        top:31%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .diamond-circle img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .diamond-circle:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }

    .diamond-circle{
        width:200px;
        height:200px;

        border-radius:50%;
        border: 7px solid #424E91;

        overflow:hidden;

        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);

        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .sponsors-map{
        position:relative;
        width:100%;
        height:2000px;
    }

    .graph-lines {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: visible;
    }

    .connection-line {
        stroke: var(--secondary-color);
        stroke-width: 1px;
    }
    

    @media (max-width: 768px) {
        .sponsors-map {
            display: none;
        }

        .diamond-square {
            width: 280px;
            height: 190px;
            padding: 5px;
        }

       .platinum-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            justify-items: center;
        }

        .platinum-line1,
        .platinum-line2 {
            display: contents;
        }

        .platinum-square1,
        .platinum-square2,
        .platinum-square3,
        .platinum-square4 {
            width: 180px;
            height: 170px;
            padding: 3px;
            margin: 0;
            box-sizing: border-box;
        }

        .gold-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            justify-items: center;
        }

        .gold-line1,
        .gold-line2 {
            display: contents;
        }

        .gold-square1,
        .gold-square2,
        .gold-square3,
        .gold-square4,
        .gold-square5,
        .gold-square6,
        .gold-square7,
        .gold-square8 {
            width: 110px;
            height: 105px;
            padding: 3px;
            margin: 0;
            box-sizing: border-box;
        }

        .silver-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            justify-items: center;
        }

        .silver-line1,
        .silver-line2,
        .silver-line3 {
            display: contents;
        }

        .silver-square1,
        .silver-square2,
        .silver-square3,
        .silver-square4,
        .silver-square5,
        .silver-square6,
        .silver-square7,
        .silver-square8,
        .silver-square9,
        .silver-square10,
        .silver-square11 {
            width: 110px;
            height: 100px;
            padding: 3px;
            margin: 0;
            box-sizing: border-box;
        }

        .bronze-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            justify-items: center;
        }

        .bronze-line1,
        .bronze-line2 {
            display: contents;
        }

        .bronze-square1,
        .bronze-square2,
        .bronze-square3,
        .bronze-square4,
        .bronze-square5,
        .bronze-square6,
        .bronze-square7,
        .bronze-square8 {
            width: 110px;
            height: 105px;
            padding: 3px;
            margin: 0;
            box-sizing: border-box;
        }

        

    



    }
</style>