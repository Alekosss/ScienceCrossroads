<script>
    import ScheduleHeader from '$lib/second-page/ScheduleHeader.svelte';

    let activeFilter = $state(null);

    function filterEvents(category) {
        if (activeFilter == category) {
            activeFilter = null;
        } else {
            activeFilter = category;
        }
    }

    function shouldHide(category) {
        return activeFilter !== null && activeFilter !== category;
    }
</script>

<div class="day7Schedule">

    
    <ScheduleHeader
        onFilter={filterEvents}
        {activeFilter}
    />
    
    <div class="day-content">
        <div class="date-line">
            <a href="/pages/schedule" class="date-arrow">&lt;</a>
            <span class="date">07 MARCH</span>
        </div>
    
        <div class="where-line">
            <div class="where-item">
                <span class="amphitheater1">AMPHITHEATER 1</span>
            </div>
    
            <div class="where-item">
                <span class="amphitheater2">AMPHITHEATER 2</span>
            </div>
    
            <div class="where-item">
                <span class="amphitheater3">AMPHITHEATER 3</span>
            </div>
    
            <div class="where-item">
                <span class="foyer">FOYER</span>
            </div>
    
            <div class="where-item">
                <span class="outside-kedea">OUTSIDE KEDEA</span>
            </div>
        </div>
    
        <div class="coming-line">
            <div class="coming-info">
                <span class="coming-time">9:00 - 10:00</span>
    
                <p class="coming-words">
                    ΠΡΟΣΕΛΕΥΣΗ - ΕΓΓΡΑΦΕΣ
                </p>
            </div>
        </div>
    
        <div class="squares-1">
            {#if !shouldHide('chemistry')}
                <div class="green-1">
                    <div class="green-1-1">
                        <span class="green-1-1-time">10:00 - 11:15</span>
                        <p class="green-1-1-letter">
                        Pastic Age
                        </p>
                    </div>
    
                    <div class="green-2-1">
                        <span class="green-2-1-time">11:15 - 11:45</span>
                        <p class="green-2-1-letter">
                        Toxic beuty (R)
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('general')}
                <div class="pink-1">
                    <div class="pink-1-1">
                        <span class="pink-1-1-time">10:00 - 10:45</span>
                        <p class="pink-1-1-letter">
                        Funding Science
                        </p>
                    </div>
    
                    <div class="pink-2-1">
                        <span class="pink-2-1-time">10:45 - 11:45</span>
                        <p class="pink-2-1-letter">
                        The hidden cost of <br>
                        Research <br>
                        Infrastructure
                        </p>
                    </div>
    
                    <div class="pink-3-1">
                        <span class="pink-3-1-time">11:45 - 12:15</span>
                        <p class="pink-3-1-letter">
                        Can Scientific <br>
                        Progress be <br>
                        environmentally <br>
                        sustainable? (R)
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('physics')}
                <div class="orange-1">
                    <div class="orange-1-1">
                        <span class="orange-1-1-time">10:30 - 11:30</span>
                        <p class="orange-1-1-letter">
                        Science <br>
                        communication <br>
                        sprint (W)
                        </p>
                    </div>
    
                    <div class="orange-2-1">
                        <span class="orange-2-1-time">11:30 - 12:15</span>
                        <p class="orange-2-1-letter">
                        Climate change <br>
                        vs Climate <br>
                        Crisis (W)
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="coffee-break-1">
                <span class="coffee-break-1-time">12:15 - 12:45</span>
                <p class="coffee-break-1-letter">
                COFFEE BREAK 1
                </p>
            </div>
    
        <div class="squares-2">
    
            {#if !shouldHide('computer science')}
                <div class="purple-2">
                    <div class="purple-1-2">
                        <span class="purple-1-2-time">12:45 - 13:30</span>
                        <p class="purple-1-2-letter">
                        Platform Power: <br>
                        Gatekeepers of Digital <br>
                        Public Space
                        </p>
                    </div>
    
                    <div class="purple-2-2">
                        <span class="purple-2-2-time">13:30 - 14:00</span>
                        <p class="purple-2-2-letter">
                        Who is the Game <br>
                        Master? (R)
                        </p>
                    </div>
    
                    <div class="purple-3-2">
                        <span class="purple-3-2-time">14:00 - 14:45</span>
                        <p class="purple-3-2-letter">
                        Persuasive Design, <br>
                        Dark Patterns and <br>
                        Manipulation
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('physics')}
                <div class="orange-2">
                    <div class="orange-1-2">
                        <span class="orange-1-2-time">12:45 - 13:30</span>
                        <p class="orange-1-2-letter">
                        Climate Change and <br>
                        Human Health
                        </p>
                    </div>
    
                    <div class="orange-2-2">
                        <span class="orange-2-2-time">13:30 - 14:15</span>
                        <p class="orange-2-2-letter">
                        Climate Engineering: <br>
                        should we "fix" the <br>
                        planet?
                        </p>
                    </div>
    
                    <div class="orange-3-2">
                        <span class="orange-3-2-time">14:15 - 14:45</span>
                        <p class="orange-3-2-letter">
                        Activism and Science <br>
                        in the climate crisis <br>
                        (R)
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('chemistry')}
                <div class="green-2">
                    <div class="green-1-2">
                        <span class="green-1-2-time">12:45 - 14:45</span>
                        <p class="green-1-2-letter">
                        Fun Workshop <br>
                        (chemistry)
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="lunch-break-2">
                <div class="lunch-break-2-line">
                    <span class="lunch-break-2-line-time">14:45 - 15:45</span>
                    <p class="lunch-break-2-line-letter">
                    LUNCH BREAK 2
                    </p>
                </div>
    
                <div class="physics-experiment-break">
                    <span class="physics-experiment-break-time">14:45 - 15:45</span>
                    <p class="physics-emperiment-break-letter">
                    Physics Experiments (W)
                    </p>
                </div>
    
                <div class="empty-box"></div>
            </div>
    
        <div class="squares-3">
    
            {#if !shouldHide('computer science')}
                <div class="purple-3">
                    <div class="purple-1-3">
                        <span class="purple-1-3-time">15:45 - 16:15</span>
                        <p class="purple-1-3-letter">
                        Is Anonymization a <br>
                        Myth? (R)
                        </p>
                    </div>
    
                    <div class="purple-2-3">
                        <span class="purple-2-3-time">16:15 - 17:15</span>
                        <p class="purple-2-3-letter">
                        Privacy by Design for <br>
                        Mobile Apps (W)
                        </p>
                    </div>
    
                    <div class="purple-3-3">
                        <span class="purple-3-3-time">17:15 - 17:45</span>
                        <p class="purple-3-3-letter">
                        Democracy in <br>
                        Innovation (R)
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('chemistry')}
                <div class="green-3">
                    <div class="green-1-3">
                        <span class="green-1-3-time">15:45 - 16:30</span>
                        <p class="green-1-3-letter">
                        Green Chemistry
                        </p>
                    </div>
    
                    <div class="green-2-3">
                        <span class="green-2-3-time">16:30 - 17:15</span>
                        <p class="green-2-3-letter">
                        Industrial Wste
                        </p>
                    </div>
    
                    <div class="green-3-3">
                        <span class="green-3-3-time">17:15 - 17:45</span>
                        <p class="green-3-3-letter">
                        Pollution Crisis <br>
                        simulation (W)
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('physics')}
                <div class="orange-3">
                    <div class="orange-1-3">
                        <span class="orange-1-3-time">15:45 - 16:45</span>
                        <p class="orange-1-3-letter">
                        Visualizing <br>
                        Climate Data <br>
                        (W)
                        </p>
                    </div>
    
                    <div class="orange-2-3">
                        <span class="orange-2-3-time">16:45 - 17:45</span>
                        <p class="orange-2-3-letter">
                        Ethics review <br>
                        board - Debate <br>
                        (W)
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="coffee-break-2">
                <span class="coffee-break-2-time">17:45 - 18:15</span>
                <p class="coffee-break-2-letter">
                    COFFEE BREAK 2
                </p>
            </div>
    
        <div class="squares-4">
    
            {#if !shouldHide('computer science')}
                <div class="purple-4">
                    <div class="purple-1-4">
                        <span class="purple-1-4-time">18:15 - 19:15</span>
                        <p class="purple-1-4-letter">
                        Graphics Design <br>
                        tutorial: Designing <br>
                        against dark patterns <br>
                        (W)
                        </p>
                    </div>
                </div>
            {/if}
    
            <div class="green-pink-4">
    
                {#if !shouldHide('chemistry')}
                    <div class="green-1-4">
                        <span class="green-1-4-time">18:15 - 19:15</span>
                        <p class="green-1-4-letter">
                        Water Reuse
                        </p>
                    </div>
    
                    <div class="green-2-4">
                        <span class="green-2-4-time">19:15 - 19:45</span>
                        <p class="green-2-4-letter">
                        Chemistry & <br>
                        marketing & fear (R)
                        </p>
                    </div>
                {/if}
    
                {#if !shouldHide('general')}
                    <div class="green-pink-1-4">
                        <span class="green-pink-1-4-time">19:45 - 20:15</span>
                        <p class="green-pink-1-4-letter">
                        Teams / Sponsors
                        </p>
                    </div>
                {/if}
            </div>
    
            <div class="pink-4">
    
                {#if !shouldHide('general')}
                    <div class="pink-1-4">
                        <span class="pink-1-4-time">18:15 - 19:00</span>
                        <p class="pink-1-4-letter">
                        Hidden Data
                        </p>
                    </div>
    
                    <div class="pink-2-4">
                        <span class="pink-2-4-time">19:00 - 19:45</span>
                        <p class="pink-2-4-letter">
                        Realistic <br>
                        dilemmas on <br>
                        codes of ethics <br>
                        (R)
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    
            <div class="cocktail-party">
                <span class="cocktail-party-time">20:15 - 21:00</span>
                <p class="cocktail-party-letter">
                CLOSING / COCKTAIL PARTY
                </p>
            </div>
    
        <div class="explain-line">
            <p class="explain-line-letter">
            (R) = ROUNDTABLE (SPECIALISTS + AUDIENCE FORUM) <br>
            (W) = WORKSHOP <br>
            NEITHER = TALK
            </p>
        </div>
    </div>
</div>    

<style>
    .day7Schedule {
        width: 90%;
        justify-self: center;
    }

    .day-content{
        animation: slideFromRight 0.5s ease;
    }

    @keyframes slideFromRight{
        from{
            transform: translateX(100%);
            opacity:0;
        }
        to{
            transform: translateX(0%);
            opacity:1;
        }
    }

    .explain-line{
       display:flex;
       flex-direction:column;
       gap:15px;

       background-color:#ADF8F6;
       border-radius:25px;
       padding:15px;
       color:black;
        
       margin-top:5px;
       margin-bottom:5px;
       
       width:500px;
       height:50px;
       justify-content:conter;
    }

    .explain-line-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:left;
    }

    .cocktail-party{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#DD5E5E;
        border-radius:25px;
        padding:15px;

        margin-top:5px;
        
        
        height:80px;
        justify-content:center;
    }

    .cocktail-party-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .cocktail-party-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-2-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:80px;
        justify-content:center;
    }

    .pink-2-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-2-4-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-1-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:70px;
        justify-content:center;
    }

    .pink-1-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-1-4-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-4{
        grid-column:3;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .green-pink-1-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:60px;
        justify-content:center;
    }

    .green-pink-1-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-pink-1-4-time{
        font-size:15px;
        font-weight:600;
    }

    .green-2-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:60px;
        justify-content:center;
    }

    .green-2-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-2-4-time{
        font-size:15px;
        font-weight:600;
    }

    .green-1-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:90px;
        justify-content:center;
    }

    .green-1-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-1-4-time{
        font-size:15px;
        font-weight:600;
    }

    .green-pink-4{
         grid-column:2;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .purple-1-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:90px;
        justify-content:center;
    }

    .purple-1-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-1-4-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-4{
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .squares-4{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;

        
        
        margin-top: 5px;
    }

    .coffee-break-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .coffee-break-2-time{
        font-size:15px;
        font-weight:600;
    }

    .coffee-break-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        gap:15px;

        background-color:#DD5E5E;
        border-radius:25px;
        padding:15px;

        margin-top:5px;
        
        
        height:80px;
        justify-content:center;
    }

    .orange-2-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:119px;
        justify-content:center;
    }

    .orange-2-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-2-3-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-1-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:125px;
        justify-content:center;
    }

    .orange-1-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-1-3-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-3{
        grid-column:3;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .green-3-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:60px;
        justify-content:center;
    }

    .green-3-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-3-3-time{
        font-size:15px;
        font-weight:600;
    }

    .green-2-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:69px;
        justify-content:center;
    }

    .green-2-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-2-3-time{
        font-size:15px;
        font-weight:600;
    }

    .green-1-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:80px;
        justify-content:center;
    }

    .green-1-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-1-3-time{
        font-size:15px;
        font-weight:600;
    }

    .green-3{
        grid-column:2;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .purple-3-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:60px;
        justify-content:center;
    }

    .purple-3-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-3-3-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-2-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:90px;
        justify-content:center;
    }

    .purple-2-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-2-3-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-1-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:60px;
        justify-content:center;

    }

    .purple-1-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-1-3-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-3{
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .squares-3{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;

        
        
        margin-top: 5px;
    }

    .empty-box{
        background-color:#DD5E5E;
        border-radius:25px;

        grid-column: 5;
        width: 100%;
        box-sizing: border-box;
    }

    .physics-experiment-break{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        gap:10px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        grid-column: 4;
        justify-content:center;
    }

    .physics-experiment-break-time{
        font-size:15px;
        font-weight:600;
    }

    .lunch-break-2-line{
        grid-column: 1 / 4;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        gap:15px;
        justify-content:center;

        background-color:#DD5E5E;
        border-radius:25px;
        padding:15px;
       
    }

    .lunch-break-2-line-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .lunch-break-2-line-time{
        font-size:15px;
        font-weight:600;
    }

    .lunch-break-2{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        column-gap: 5px;

        
        
        margin-top:5px;
    }

    .green-1-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:290px;
        justify-content:center;
    }

    .green-1-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-1-2-time{
        font-size:15px;
        font-weight:600;
    }

    .green-2{
        grid-column:5;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .orange-3-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:65px;
        justify-content:center;
    }

    .orange-3-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-3-2-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-2-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:85px;
        justify-content:center;
    }

    .orange-2-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-2-2-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-1-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:70px;
        justify-content:center;
    }

    .orange-1-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-1-2-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-2{
        grid-column:2;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .purple-3-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:90px;
        justify-content:center;
    }

    .purple-3-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-3-2-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-2-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:60px;
        justify-content:center;
    }

    .purple-2-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-2-2-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-1-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height: 70px;
        justify-content:center;
    }

    .purple-1-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-1-2-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-2{
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .squares-2{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;

        
        
        margin-top: 5px;
    }

    .coffee-break-1{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 10px;

        background-color:#DD5E5E;
        border-radius: 25px;
        padding: 10px;

        margin-top: 5px;
        
        
        height:90px;
        justify-content:center;
    }

    .coffee-break-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .coffee-break-1-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-2-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:144px;
        justify-content:center;
    }

    .orange-2-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-2-1-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-1-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:100px;
        justify-content:center;
        margin-top:40px;
    }

    .orange-1-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-1-1-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-1{
        grid-column:3;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .pink-3-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:100px;
        justify-content:center;
    }

    .pink-3-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-3-1-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-2-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:100px;
        justify-content:center;
    }

    .pink-2-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-2-1-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-1-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:50px;
        justify-content:center;
    }

    .pink-1-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-1-1-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-1{
        grid-column:2;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .green-2-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:50px;
        justify-content:center;
    }

    .green-2-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-2-1-time{
        font-size:15px;
        font-weight:600;
    }

    .green-1-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:100px;
        justify-content:center;
    }

    .green-1-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-1-1-time{
        font-size:15px;
        font-weight:600;
    }

    .green-1{
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .squares-1{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;

        
        
        margin-top: 5px;
    }

    .coming-line{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 10px;

        background-color:#DD5E5E;
        border-radius: 25px;
        padding: 10px;

        margin-top: 10px;
        
        
        height:90px;
        justify-content:center;
    }

    .coming-words{
        font-size: 15px;
        font-weight: 400;
    }

    .coming-time{
        font-size: 15px;
        font-weight: 600;
    }

    .where-item{
        text-align: center;
    }

    .where-line{

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items:center;

        font-size:15px;
        font-weight: 15px;

        background-color: #D9D9D9;
        border-radius: 25px;
        padding: 10px 10px;

        margin-top: 60px;
        
        

        color:black;
    }

    .date-line{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 55px;
    }

    .date-arrow{
        border: none;
        background: none;
        font-size: 20px;
        font-weight: 20;
        color: var(--secondary-color);
        text-decoration:none;
    }

    .date{
        font-size: 20px;
        font-weight: 100px;
        color: var(--secondary-color);
        text-decoration: underline;
        text-decoration-thickness: 1,5px;
    }

    @media (max-width: 768px) {
        .squares-1,
        .squares-2,
        .squares-3,
        .squares-4,
        .lunch-break-2 {
            margin-left: 5px;
            margin-right: 5px;
            column-gap: 3px;
        }

        .where-line,
        .coming-line,
        .coffee-break-1,
        .coffee-break-2,
        .cocktail-party {
            margin-left: 5px;
            margin-right: 5px;
        }

        .where-line {
            font-size: 8px;
            padding: 8px 2px;
            border-radius: 15px;
        }

        .squares-1 span,
        .squares-1 p,
        .squares-2 span,
        .squares-2 p,
        .squares-3 span,
        .squares-3 p,
        .squares-4 span,
        .squares-4 p,
        .lunch-break-2 span,
        .lunch-break-2 p {
            font-size: 9px;
            line-height: 1.2;
        }

        .squares-1 > div,
        .squares-2 > div,
        .squares-3 > div,
        .squares-4 > div {
            min-width: 0;
        }

        .green-1-1,
        .green-2-1,
        .pink-1-1,
        .pink-2-1,
        .pink-3-1,
        .orange-1-1,
        .orange-2-1,

        .purple-1-2,
        .purple-2-2,
        .purple-3-2,
        .orange-1-2,
        .orange-2-2,
        .orange-3-2,
        .green-1-2,

        .purple-1-3,
        .purple-2-3,
        .purple-3-3,
        .green-1-3,
        .green-2-3,
        .green-3-3,
        .orange-1-3,
        .orange-2-3,

        .purple-1-4,
        .green-1-4,
        .green-2-4,
        .green-pink-1-4,
        .pink-1-4,
        .pink-2-4 {
            padding: 5px;
            gap: 5px;
            border-radius: 15px;
            box-sizing: border-box;
        }

        .lunch-break-2-line,
        .physics-experiment-break {
            padding: 5px;
            gap: 5px;
            border-radius: 15px;
        }

        .empty-box {
            border-radius: 15px;
        }

        .coming-line,
        .coffee-break-1,
        .coffee-break-2,
        .cocktail-party {
            padding: 8px;
            gap: 5px;
            border-radius: 15px;
        }

        .coming-line span,
        .coming-line p,
        .coffee-break-1 span,
        .coffee-break-1 p,
        .coffee-break-2 span,
        .coffee-break-2 p,
        .cocktail-party span,
        .cocktail-party p {
            font-size: 11px;
        }

        .explain-line {
            width: auto;
            height: auto;
            margin-left: 5px;
            margin-right: 5px;
        }

        .explain-line-letter {
            font-size: 10px;
        }

        .pink-3-1 {
            height: 129px;
        }

        .purple-1-2,
        .orange-1-2 {
            height:93px;
        }

        .purple-2-2 {
            height: 93px;
        }

        .purple-3-2 {
            height: 93.5px;
        }

        .orange-2-2 {
            height: 111px;
        }

        .orange-3-2 {
            height: 75px;
        }

        .purple-1-3 {
            height: 70px;
        }

        .green-3-3,
        .purple-3-3 {
            height: 70px;
        }

        .purple-2-3 {
            height: 100px;
        }

        .green-1-3 {
            height: 90px;
        }

        .green-2-3 {
            height: 80px;
        }

    }
</style>