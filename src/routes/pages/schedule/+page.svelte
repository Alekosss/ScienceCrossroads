<script>
    import ScheduleHeader from '$lib/second-page/ScheduleHeader.svelte';

    let activeFilter = $state(null);

    function filterEvents(category){
        if (activeFilter == category){
            activeFilter = null;
        }
        else {
            activeFilter = category
        }
    }

    function shouldHide(category){
        return activeFilter !== null && activeFilter !== category;
    }
</script>

<ScheduleHeader onFilter={filterEvents} 
    {activeFilter} />


<div class="day-content">
    <div class="date-line">

        <span class="date">06 MARCH</span>

        <a href="/pages/schedule/day7" class="date-arrow">&gt;</a>
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

    <div class="squares">
        {#if !shouldHide('general')}
            <div class="greetings"
                >
                <span class="greetings-time">10:00 - 11:15</span>
                <span class="xairetismoi">ΧΑΙΡΕΤΙΣΜΟΙ</span>
                <p class="greetings-letter">
                Publish or Perish - <br>
                research made into a <br>
                profession
                </p>
            </div>
        {/if}

        {#if !shouldHide('physics')}
            <div class="orange-1-0">
                <span class="orange-1-0-time">11:15 - 12:15</span>
                <p class="orange-1-0-letter">
                Nuclear Energy : <br>
                Sustainable solution <br>
                or Environmental <br>
                Threat?
                </p>
            </div>
        {/if}

        {#if !shouldHide('computer science')}
            <div class="purple-1-0">
                <span class="purple-1-0-time">11:15 - 12:15</span>
                <p class="purple-1-0-letter">
                Accountability in <br>
                Machine Learning : <br>
                Who Owns the <br>
                Mistakes ?
                </p>
            </div>
        {/if}

        {#if !shouldHide('chemistry')}
            <div class="green-0">
                <div class="green-1-0">
                    <span class="green-1-0-time">11:15 - 11:45</span>
                    <p class="green-1-0-letter">
                    Editing life
                    </p>
                </div>

                <div class="green-2-0">
                    <span class="green-2-0-time">11:45 - 12:15</span>
                    <p class="green-2-0-letter">
                    Pharmaceutical <br>
                    Ethics
                    </p>
                </div>
            </div>
        {/if}

    </div>

   
    <div class="coffee-break-1-line">
        <span class="coffee-break-1-time">12:15 - 12:45</span>
        <p class="coffee-break-1-letter">
        COFFEE BREAK 1
        </p>
    </div>
    

    <div class="squares-1">

        {#if !shouldHide('physics')}
            <div class="orange-1">
                <div class="orange-1-1">
                    <span class="orange-1-1-time">12:45 - 13:30</span>
                    <p class="orange-1-1-letter">
                    Radiation Exposure <br>
                    and Public Health
                    </p>
                </div>

                <div class="orange-2-1">
                    <span class="orange-2-1-time">13:30 - 14:15</span>
                    <p class="orange-2-1-letter">
                    Toxic and Radioactive <br>
                    Waste in Research
                    </p>
                </div>

                <div class="orange-3-1">
                    <span class="orange-3-1-time">14:15 - 14:45</span>
                    <p class="orange-3-1-letter">
                    Nuclear accidents and <br>
                    Risk Management (R)
                    </p>
                </div>
            </div>
        {/if}

        {#if !shouldHide('computer science')}
            <div class="purple-1">
                <div class="purple-1-1">
                    <span class="purple-1-1-time">12:45 - 13:45</span>
                    <p class="purple-1-1-letter">
                    Fake-news / unethical <br>
                    image & mass text <br>
                    generation by bots
                    </p>
                </div>

                <div class="purple-2-1">
                    <span class="purple-2-1-time">13:45 - 14:45</span>
                    <p class="purple-2-1-letter">
                    Debugging Bias in <br>
                    Machine Learning <br>
                    Pipelines (W)
                    </p>
                </div>
            </div>
        {/if}

        {#if !shouldHide('chemistry')}
            <div class="green-1">
                <div class="green-1-1">
                    <span class="green-1-1-time">12:45 - 13:30</span>
                    <p class="green-1-1-letter">
                    Lab - Grown Future
                    </p>
                </div>

                <div class="green-2-1">
                    <span class="green-2-1-time">13:30 - 14:45</span>
                    <p class="green-2-1-letter">
                    Clinical Trial <br>
                    simulation (W)
                    </p>
                </div>
            </div>
        {/if}

    </div>

    
    <div class="coffee-break-2">
        <div class="coffee-break-2-line">
            <span class="coffee-break-2-line-time">14:45 - 15:45</span>
            <p class="coffee-break-2-line-letter">
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

    <div class="squares-2">

        {#if !shouldHide('physics')}
            <div class="orange-2">
                <div class="orange-1-2">
                    <span class="orange-1-2-time">15:45 - 16:45</span>
                    <p class="orange-1-2-letter">
                    Space Debris and the <br>
                    Ethics of Satellite <br>
                    Proliferation
                    </p>
                </div>

                <div class="orange-2-2">
                    <span class="orange-2-2-time">16:45 - 17:45</span>
                    <p class="orange-2-2-letter">
                    Should we look up or <br>
                    down? The ethics of <br>
                    space spending
                    </p>
                </div>
            </div>
        {/if}

        {#if !shouldHide('general')}
            <div class="pink-2">
                <div class="pink-1-2">
                    <span class="pink-1-2-time">15:45 - 16:30</span>
                    <p class="pink-1-2-letter">
                    When to say no
                    </p>
                </div>

                <div class="pink-2-2">
                    <span class="pink-2-2-time">16:30 - 17:15</span>
                    <p class="pink-2-2-letter">
                    Invisible Bias in<br>
                    Science
                    </p>
                </div>

                <div class="pink-3-2">
                    <span class="pink-3-2-time">17:15 - 17:45</span>
                    <p class="pink-3-2-letter">
                    Who owns the <br>
                    consequences? (R)
                    </p>
                </div>
            </div>
        {/if}

        {#if !shouldHide('computer science')}
            <div class="purple-2">
                <div class="purple-1-2">
                    <span class="purple-1-2-time">15:45 - 16:30</span>
                    <p class="purple-1-2-letter">
                    Image Recognition (W)
                    </p>
                </div>

                <div class="purple-2-2">
                    <span class="purple-2-2-time">16:30 - 17:15</span>
                    <p class="purple-2-2-letter">
                    Data Hunger vs. <br>
                    Privacy: How much <br>
                    Is too Much
                    </p>
                </div>

                <div class="purple-3-2">
                    <span class="purple-3-2-time">17:15 - 17:45</span>
                    <p class="purple-3-2-letter">
                    Ethical red lines in <br>
                    AI products (R)
                    </p>
                </div>
            </div>
        {/if}

        {#if !shouldHide('genrel')}
            <div class="pink-end">
                <div class="pink-end-line">
                    <span class="pink-end-time">15:45 - 17:45</span>
                    <p class="pink-end-letter">
                    Treasurehunt
                    </p>
                </div>
            </div>
        {/if}
    </div>

    <div class="coffee-break-3">
        <span class="coffee-break-3-time">17:45 - 18:15</span>
        <p class="coffee-break-3-letter">
            COFFEE BREAK 2
        </p>
    </div>

    <div class="squares-3">

        {#if !shouldHide('chemistry')}
            <div class="green-3">
                <div class="green-1-3">
                    <span class="green-1-3-time">18:15 - 19:00</span>
                    <p class="green-1-3-letter">
                    Pesticides & Power
                    </p>
                </div>

                <div class="green-2-3">
                    <span class="green-2-3-time">19:00 - 20:15</span>
                    <p class="green-2-3-letter">
                    Design an Ethical <br>
                    Product vs. design an <br>
                    addictive product (W)
                    </p>
                </div>
            </div>
        {/if}

        {#if !shouldHide('physics')}
            <div class="orange-4">
                <div class="orange-1-4">
                    <span class="orange-1-4-time">18:15 - 20:15</span>
                    <p class="orange-1-4-letter">
                    Stargazing <br>
                    Night- <br>
                    Observatory (W)
                    </p>
                </div>
            </div> 
        {/if}
    </div>

    <div class="wine-party">
        <span class="wine-party-time">20:15 - 21:00</span>
        <p class="wine-party-letter">
        WINE PARTY / ΠΑΡΟΥΣΙΑΣΗ ΕΡΓΑΣΙΩΝ
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


<style>
    .day-content{

        animation: slideFromLeft 0.5s ease;
    }

    @keyframes slideFromLeft{
        from{
            transform: translateX(-100%);
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
        
       margin-top:5px;
       margin-left:20px;
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

    .wine-party{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#DD5E5E;
        border-radius:25px;
        padding:15px;

        margin-top:5px;
        margin-left:20px;
        margin-right:20px;
        height:80px;
        justify-content:center;
    }

    .wine-party-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .wine-party-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-1-4{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:175px;
        justify-content:center;
    }

    .orange-1-4-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-1-4-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-4{
        grid-column:5;
        display:flex;
        flex-direction:column;
        gap:5px;

        transform:translateX(30px);
    }

    .green-2-3{
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

        height:50px;
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

    .squares-3{
        display:grid;
        grid-template-columns:repeat(5, 230px);
        row-gap:5px;
        column-gap:5px;

        margin-left:20px;
        margin-right:20px;
        margin-top:5px;
    }

    .coffee-break-3-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .coffee-break-3-time{
        font-size:15px;
        font-weight:600;
    }

    .coffee-break-3{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        gap:15px;

        background-color:#DD5E5E;
        border-radius:25px;
        padding:15px;

        margin-top:5px;
        margin-left:20px;
        margin-right:20px;
        height:80px;
        justify-content:center;
    }

    .pink-end-line{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:233px;
        justify-content:center;
    }

    .pink-end-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-end-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-end{
        grid-column:5;
        display:flex;
        flex-direction:column;
        gap:5px;

        transform:translateX(30px);
    }

    .purple-3-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:55px;
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

        height:54px;
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

        height:55px;
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
        grid-column:3;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .pink-3-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:55px;
        justify-content:center;
    }

    .pink-3-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-3-2-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-2-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:54px;
        justify-content:center;
    }

    .pink-2-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-2-2-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-1-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#EF8FBD;
        border-radius:25px;
        padding:15px;

        height:55px;
        justify-content:center;
    }

    .pink-1-2-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .pink-1-2-time{
        font-size:15px;
        font-weight:600;
    }

    .pink-2{
        grid-column:2;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .orange-2-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:100px;
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

        height:100px;
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
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .squares-2{
        display:grid;
        grid-template-columns:repeat(5, 230px);
        row-gap:5px;
        column-gap:5px;

        margin-left:20px;
        margin-right:20px;
        margin-top:5px;
    }

    .empty-box{
        width:230px;
        height:110px;
        background-color:#DD5E5E;
        border-radius:25px;
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

        width:230px;
        justify-content:center;
    }

    .physics-experiment-break-time{
        font-size:15px;
        font-weight:600;
    }

    .coffee-break-2-line{
        width: 670px;
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

    .coffee-break-2-line-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .coffee-break-2-line-time{
        font-size:15px;
        font-weight:600;
    }

    .coffee-break-2{
        display:flex;
        flex-direction:row;
        gap:5px;

        margin-top:5px;
        margin-left:20px;
        margin-right:20px;
        height:110px;
    }

    .green-2-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;

        height:233.5px;
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
        grid-column:3;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .purple-2-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:167px;
        justify-content:center;
    }

    .purple-2-1-letter{
        font-size: 15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-2-1-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-1-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:167px;
        justify-content:center;
    }

    .purple-1-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .purple-1-1-time{
        font-size:15px;
        font-weight:600;
    }

    .purple-1{
        grid-column:2;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .orange-3-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:100px;
        justify-content:center;
    }

    .orange-3-1-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .orange-3-1-time{
        font-size:15px;
        font-weight:600;
    }

    .orange-2{
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .orange-2-1{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius:25px;
        padding:15px;

        height:100px;
        justify-content: center;
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

    .orange-1{
        grid-column:1;
        display:flex;
        flex-direction:column;
        gap:5px;
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

    .squares-1{
        display:grid;
        grid-template-columns:repeat(5, 230px);
        row-gap:5px;
        column-gap:5px;

        margin-left:20px;
        margin-right:20px;
        margin-top:5px;
    }

    .coffee-break-1-line{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        gap:10px;

        background-color:#DD5E5E;
        border-radius:25px;
        padding:15px;

        margin-top:5px;
        margin-left:20px;
        margin-right:20px;
        height:80px;
        justify-content:center;
    }

    .coffee-break-1-letter{
        font-size:15px;
        font-weight:400;
    }

    .coffee-break-1-time{
        font-size:15px;
        font-weight:600;
    }

    .green-0{
        grid-column: 3;
        display:flex;
        flex-direction:column;
        gap:5px;
        height:150px;
    }

    .green-2-0{
        grid-column:3;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;
        justify-content:center;
        height:63px;
    }

    .green-2-0-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-2-0-time{
        font-size:15px;
        font-weight:600;
    }

    .green-1-0{
        grid-column: 3;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:15px;
        height: 65px;
        justify-content:center;
    }

    .green-1-0-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align:center;
    }

    .green-1-0-time{
        font-size:15px;
        font-weight:600;
    }

    .green-0{
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .purple-1-0{
        grid-column:2;

        display:flex;
        flex-direction: column;
        align-items:center;
        gap:15px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:15px;

        height:150px;
        justify-content:center;
    }

    .purple-1-0-letter{
        font-size:15px;
        font-weight:400;
        margin:0;
        text-align: center;
    }   

    .purple-1-0-time{
        font-size: 15px;
        font-weight: 600;
    }

    .orange-1-0{
        grid-column: 1;

        display: flex;
        flex-direction: column;
        align-items:center;
        gap:15px;

        background-color:#E29B60;
        border-radius: 25px;
        padding:15px;
        height:150px;

        justify-content:center;
    }

    .orange-1-0-letter{
        font-size: 15px;
        font-weight: 400;
        margin: 0;
        text-align: center;

    }

    .orange-1-0-time{
        font-size: 15px;
        font-weight: 600;
    }

    .greetings{
        grid-column: 2;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        background-color:#EF8FBD;
        border-radius: 25px;
        padding: 15px;

    }

    .greetings-letter{
        font-size: 15px;
        font-weight: 400;
        margin: 0;

        text-align: center;
    }

    .xairetismoi{
        font-size: 15px;
        font-weight: 400;
    }

    .greetings-time{
        font-size: 15px;
        font-weight: 600;
    }

    .squares{
        display: grid;
        grid-template-columns: repeat(5, 230px);
        row-gap: 5px;
        column-gap: 5px;

        margin-left:20px;
        margin-right:20px;
        margin-top:5px;
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
        margin-left: 20px;
        margin-right: 20px;
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
        margin-left: 20px;
        margin-right: 20px;
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
        font-weight: 20px;
        color:white;
        text-decoration:none;
    }

    .date{
        font-size: 20px;
        font-weight: 100px;
        color: white;
        text-decoration: underline;
        text-decoration-thickness: 1,5px;
    }

</style>