<script>

    import SponsorCard from '$lib/components/Sponsors/SponsorCard.svelte';

    let highlightedSponsor = $state(null);

    let selectedSponsor = $state(null);

    function goToSponsor(elementId, sponsor) {
        const element = document.getElementById(elementId);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        highlightedSponsor = sponsor;

        setTimeout(() => {
            highlightedSponsor = null;
        }, 800);
    }
</script>


<div class="sponsors-map">
    <div class="all-circles">

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

        <div class="line-diamond-platinum1"></div>

        <button 
            class="platinum2-circle"
            onclick={() => goToSponsor('platinum2-sponsor','platinum2')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>

        <div class="line-diamond-platinum2"></div>

        <button 
            class="platinum3-circle"
            onclick={() => goToSponsor('platinum3-sponsor','platinum3')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>

        <div class="line-diamond-platinum3"></div>

        <button 
            class="platinum4-circle"
            onclick={() => goToSponsor('platinum4-sponsor','platinum4')}
        >
            <img src="/sponsors-images/platinum1.png" alt="Platinum sponsor" />
        </button>

        <div class="line-diamond-platinum4"></div>

        <button 
            class="gold1-circle"
            onclick={() => goToSponsor('gold1-sponsor','gold1')}
        >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

        <div class="line-platinum1-gold1"></div>

        <button 
            class="gold2-circle"
            onclick={() => goToSponsor('gold2-sponsor','gold2')}
        >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum1-gold2"></div> 

       <button 
            class="gold3-circle"
            onclick={() => goToSponsor('gold3-sponsor','gold3')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum2-gold3"></div> 

       <button 
            class="gold4-circle"
            onclick={() => goToSponsor('gold4-sponsor','gold4')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum2-gold4"></div> 

       <button 
            class="gold5-circle"
            onclick={() => goToSponsor('gold5-sponsor','gold5')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum3-gold5"></div>

       <button 
            class="gold6-circle"
            onclick={() => goToSponsor('gold6-sponsor','gold6')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum3-gold6"></div>

       <button 
            class="gold7-circle"
            onclick={() => goToSponsor('gold7-sponsor','gold7')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum4-gold7"></div>
 
       <button 
            class="gold8-circle"
            onclick={() => goToSponsor('gold8-sponsor','gold8')}
       >
            <img src="/sponsors-images/gold.png" alt="Gold sponsor" />
        </button>

       <div class="line-platinum4-gold8"></div>

       <button 
            class="silver1-circle"
            onclick={() => goToSponsor('silver1-sponsor','silver1')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold1-silver1"></div>

       <button 
            class="silver2-circle"
            onclick={() => goToSponsor('silver2-sponsor','silver2')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold1-silver2"></div>

       <button 
            class="silver3-circle"
            onclick={() => goToSponsor('silver3-sponsor','silver3')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold2-silver3"></div>

       <button 
            class="silver4-circle"
            onclick={() => goToSponsor('silver4-sponsor','silver4')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold3-silver4"></div>

       <button 
            class="silver5-circle"
            onclick={() => goToSponsor('silver5-sponsor','silver5')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold3-silver5"></div>

       <button 
            class="silver6-circle"
            onclick={() => goToSponsor('silver6-sponsor','silver6')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold4-silver6"></div>

       <button 
            class="silver7-circle"
            onclick={() => goToSponsor('silver7-sponsor','silver7')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold5-silver7"></div>

       <button 
            class="silver8-circle"
            onclick={() => goToSponsor('silver8-sponsor','silver8')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold6-silver8"></div>

       <button 
            class="silver9-circle"
            onclick={() => goToSponsor('silver9-sponsor','silver9')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold6-silver9"></div>

       <button 
            class="silver10-circle"
            onclick={() => goToSponsor('silver10-sponsor','silver10')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold7-silver10"></div>

       <button 
            class="silver11-circle"
            onclick={() => goToSponsor('silver11-sponsor','silver11')}
       >
            <img src="/sponsors-images/silver.png" alt="Silver sponsor" />
        </button>

       <div class="line-gold8-silver11"></div>

       <button 
            class="bronze1-circle"
            onclick={() => goToSponsor('bronze1-sponsor','bronze1')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver1-bronze1"></div>

       <button 
            class="bronze2-circle"
            onclick={() => goToSponsor('bronze2-sponsor','bronze2')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver2-bronze2"></div>

       <button 
            class="bronze3-circle"
            onclick={() => goToSponsor('bronze3-sponsor','bronze3')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver3-bronze3"></div>

       <button 
            class="bronze4-circle"
            onclick={() => goToSponsor('bronze4-sponsor','bronze4')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver4-bronze4"></div>

       <button 
            class="bronze5-circle"
            onclick={() => goToSponsor('bronze5-sponsor','bronze5')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver5-bronze5"></div>

       <button 
            class="bronze6-circle"
            onclick={() => goToSponsor('bronze6-sponsor','bronze6')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver6-bronze6"></div>

       <button 
            class="bronze7-circle"
            onclick={() => goToSponsor('bronze7-sponsor','bronze7')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver7-bronze7"></div>

       <button 
            class="bronze8-circle"
            onclick={() => goToSponsor('bronze8-sponsor','bronze8')}
       >
            <img src="/sponsors-images/bronze.png" alt="Bronze sponsor" />
        </button>

       <div class="line-silver8-bronze8"></div>
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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        width:280px;
        height:180px;

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
        background-color: white;
        margin: 30px auto;
    }

    .silver-square11.highlighted {
        transform: scale(1.08);
    }

    .silver-square11{
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        width:310px;
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
        background-color: white;
        margin: 30px auto;
    }

    .gold-square8.highlighted {
        transform: scale(1.08);
    }

    .gold-square8{
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        width:340px;
        height:200px;

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
        background-color: white;
        margin: 30px auto;
    }

    .platinum-square4.highlighted {
        transform: scale(1.08);
    }

    .platinum-square4{
        width:370px;
        height:210px;

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
        width:370px;
        height:210px;

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
        width:370px;
        height:210px;

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
        width:370px;
        height:210px;

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
        background-color: white;
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
        width:400px;
        height:220px;

        background-color:#424E91;
        border-radius:15px;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:5px;
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

    .line-silver8-bronze8{
        position:absolute;
        width:105px;
        height:1px;
        background-color:white;

        left:67%;
        top:89%;
        transform:rotate(-42deg);
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

    .line-silver7-bronze7{
        position:absolute;
        width:140px;
        height:1px;
        background-color:white;

        left:31%;
        top:85.5%;
        transform:rotate(42deg);
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

    .line-silver6-bronze6{
        position:absolute;
        width:163px;
        height:1px;
        background-color:white;

        left:5%;
        top:72.7%;
        transform:rotate(86deg);
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

    .line-silver5-bronze5{
        position:absolute;
        width:135px;
        height:1px;
        background-color:white;

        left:81.8%;
        top:12%;
        transform:rotate(-45deg);
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

    .line-silver4-bronze4{
        position:absolute;
        width:73px;
        height:1px;
        background-color:white;

        left:66.2%;
        top:7.1%;
        transform:rotate(-30deg);
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

    .line-silver3-bronze3{
        position:absolute;
        width:67px;
        height:1px;
        background-color:white;

        left:36.5%;
        top:7%;
        transform:rotate(-30deg);
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

    .line-silver2-bronze2{
        position:absolute;
        width:77px;
        height:1px;
        background-color:white;

        left:13%;
        top:7%;
        transform:rotate(-35deg);
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

    .line-silver1-bronze1{
        position:absolute;
        width:70px;
        height:1px;
        background-color:white;

        left:12.5%;
        top:33.5%;
        transform:rotate(45deg);
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

    .line-gold8-silver11{
        position:absolute;
        width:105px;
        height:1px;
        background-color:white;

        left:77%;
        top:80.5%;
        transform:rotate(-48deg);
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

    .line-gold7-silver10{
        position:absolute;
        width:89px;
        height:1px;
        background-color:white;

        left:84.6%;
        top:47.2%;
        transform:rotate(-60deg);
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

    .line-gold6-silver9{
        position:absolute;
        width:165px;
        height:1px;
        background-color:white;

        left:43.3%;
        top:74%;
        transform:rotate(35deg);
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

    .line-gold6-silver8{
        position:absolute;
        width:115px;
        height:1px;
        background-color:white;

        left:31.5%;
        top:75%;
        transform:rotate(-48deg);
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

    .line-gold5-silver7{
        position:absolute;
        width:160px;
        height:1px;
        background-color:white;

        left:7.5%;
        top:57.7%;
        transform:rotate(-68deg);
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

    .line-gold4-silver6{
        position:absolute;
        width:83px;
        height:1px;
        background-color:white;

        left:80.3%;
        top:22.2%;
        transform:rotate(-115deg);
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

    .line-gold3-silver5{
        position:absolute;
        width:105px;
        height:1px;
        background-color:white;

        left:61.3%;
        top:16.2%;
        transform:rotate(-100deg);
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

    .line-gold3-silver4{
        position:absolute;
        width:140px;
        height:1px;
        background-color:white;

        left:55%;
        top:28%;
        transform:rotate(-45deg);
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

    .line-gold2-silver3{
        position:absolute;
        width:65px;
        height:1px;
        background-color:white;

        left:36.2%;
        top:11.7%;
        transform:rotate(30deg);
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

    .line-gold1-silver2{
        position:absolute;
        width:111px;
        height:1px;
        background-color:white;

        left:12%;
        top:14.5%;
        transform:rotate(43deg);
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

    .line-gold1-silver1{
        position:absolute;
        width:140px;
        height:1px;
        background-color:white;

        left:11.7%;
        top:24.9%;
        transform:rotate(-52deg);
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

    .line-platinum4-gold8{
        position:absolute;
        width:80px;
        height:1px;
        background-color:white;

        left:78.3%;
        top:69.7%;
        transform:rotate(55deg);
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

    .line-platinum4-gold7{
        position:absolute;
        width:80px;
        height:1px;
        background-color:white;

        left:78.5%;
        top:58.4%;
        transform:rotate(-58deg);
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

    .line-platinum3-gold6{
        position:absolute;
        width:137px;
        height:1px;
        background-color:white;

        left:30%;
        top:65.3%;
        transform:rotate(40deg);
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

    .line-platinum3-gold5{
        position:absolute;
        width:125px;
        height:1px;
        background-color:white;

        left:17.5%;
        top:54.8%;
        transform:rotate(40deg);
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

    .line-platinum2-gold4{
        position:absolute;
        width:198px;
        height:1px;
        background-color:white;

        left:71.5%;
        top:32.8%;
        transform:rotate(-33deg);
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

    .line-platinum2-gold3{
        position:absolute;
        width:125px;
        height:1px;
        background-color:white;

        left:62.8%;
        top:30.3%;
        transform:rotate(79deg);
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

    .line-platinum1-gold2{
        position:absolute;
        width:175px;
        height:1px;
        background-color:white;

        left:34.5%;
        top:22.8%;
        transform:rotate(-65deg);
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

    .line-platinum1-gold1{
        position:absolute;
        width:180px;
        height:1px;
        background-color:white;

        left:23%;
        top:24.7%;
        transform:rotate(40deg);
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

    .line-diamond-platinum4{
        position:absolute;
        width:379px;
        height:1px;
        background-color:white;

        left:53%;
        top:58.3%;
        transform:rotate(31deg);
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

    .line-diamond-platinum3{
        position:absolute;
        width:267px;
        height:1px;
        background-color:white;

        left:31%;
        top:55%;
        transform:rotate(-25deg);
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

    .line-diamond-platinum2{
        position:absolute;
        width:210px;
        height:1px;
        background-color:white;

        left:54%;
        top:44%;
        transform:rotate(-35deg);
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

    .line-diamond-platinum1{
        position:absolute;
        width:267px;
        height:1px;
        background-color:white;

        left:35%;
        top:40.27%;
        transform:rotate(55deg);
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
        background-color:black;
        width:100%;
        height:2000px;
    }

</style>