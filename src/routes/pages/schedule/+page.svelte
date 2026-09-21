<script lang="ts">
	import { t } from '$lib/i18n.svelte';
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

<div class="schedulePage">

    
    <ScheduleHeader onFilter={filterEvents} 
        {activeFilter} />
    
    
    <div class="day-content">
        <div class="date-line">
    
            <span class="date">06 {t('event_date')}</span>
    
            <a href="/pages/schedule/day7" class="date-arrow">&gt;</a>
        </div>
    
        <div class="where-line">
            <div class="where-item">
                <span class="amphitheater1">{t('AMPH')} 1</span>
            </div>
    
            <div class="where-item">
                <span class="amphitheater2">{t('AMPH')} 2</span>
            </div>
    
            <div class="where-item">
                <span class="amphitheater3">{t('AMPH')} 3</span>
            </div>
    
            <div class="where-item">
                <span class="foyer">{t('FOYER')}</span>
            </div>
    
            <div class="where-item">
                <span class="outside-kedea">{t('OUTSIDE_KEDEA')}</span>
            </div>
        </div>
    
        <div class="coming-line">
            <div class="coming-info">
                <span class="coming-time">9:00 - 10:00</span>
    
                <p class="coming-words">
                {t('ARRIVAL')}
                </p>
            </div>
        </div>
    
        <div class="squares">
            {#if !shouldHide('general')}
                <div class="greetings"
                    >
                    <span class="greetings-time">10:00 - 11:15</span>
                    <span class="xairetismoi">{t('GREET')}</span>
                    <p class="greetings-letter">
                    {t('publish')} <br>
                    {t('research')} <br>
                    {t('profession')}
                    </p>
                </div>
            {/if}
    
            {#if !shouldHide('physics')}
                <div class="orange-1-0">
                    <span class="orange-1-0-time">11:15 - 12:15</span>
                    <p class="orange-1-0-letter">
                    {t('nuclear')}<br>
                    {t('sustain')} <br>
                    {t('enviroment')} <br>
                    {t('threat')}
                    </p>
                </div>
            {/if}
    
            {#if !shouldHide('computer science')}
                <div class="purple-1-0">
                    <span class="purple-1-0-time">11:15 - 12:15</span>
                    <p class="purple-1-0-letter">
                    {t('accountability')} <br>
                    {t('machine')} <br>
                    {t('who')} <br>
                    {t('mistakes')}
                    </p>
                </div>
            {/if}
    
            {#if !shouldHide('chemistry')}
                <div class="green-0">
                    <div class="green-1-0">
                        <span class="green-1-0-time">11:15 - 11:45</span>
                        <p class="green-1-0-letter">
                        {t('editing')}
                        </p>
                    </div>
    
                    <div class="green-2-0">
                        <span class="green-2-0-time">11:45 - 12:15</span>
                        <p class="green-2-0-letter">
                        {t('pharm')} <br>
                        {t('eth')}
                        </p>
                    </div>
                </div>
            {/if}
    
        </div>
    
       
        <div class="coffee-break-1-line">
            <span class="coffee-break-1-time">12:15 - 12:45</span>
            <p class="coffee-break-1-letter">
            {t('coffee1')}
            </p>
        </div>
        
    
        <div class="squares-1">
    
            {#if !shouldHide('physics')}
                <div class="orange-1">
                    <div class="orange-1-1">
                        <span class="orange-1-1-time">12:45 - 13:30</span>
                        <p class="orange-1-1-letter">
                        {t('radiation')} <br>
                        {t('public_health')}
                        </p>
                    </div>
    
                    <div class="orange-2-1">
                        <span class="orange-2-1-time">13:30 - 14:15</span>
                        <p class="orange-2-1-letter">
                        {t('toxic')} <br>
                        {t('waste')}
                        </p>
                    </div>
    
                    <div class="orange-3-1">
                        <span class="orange-3-1-time">14:15 - 14:45</span>
                        <p class="orange-3-1-letter">
                        {t('nucAcc')} <br>
                        {t('Risk')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('computer science')}
                <div class="purple-1">
                    <div class="purple-1-1">
                        <span class="purple-1-1-time">12:45 - 13:45</span>
                        <p class="purple-1-1-letter">
                        {t('fake')} <br>
                        {t('image')} <br>
                        {t('gen')}
                        </p>
                    </div>
    
                    <div class="purple-2-1">
                        <span class="purple-2-1-time">13:45 - 14:45</span>
                        <p class="purple-2-1-letter">
                        {t('debug')} <br>
                        {t('machineL')} <br>
                        {t('pipeline')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('chemistry')}
                <div class="green-1">
                    <div class="green-1-1">
                        <span class="green-1-1-time">12:45 - 13:30</span>
                        <p class="green-1-1-letter">
                        {t('lab')}
                        </p>
                    </div>
    
                    <div class="green-2-1">
                        <span class="green-2-1-time">13:30 - 14:45</span>
                        <p class="green-2-1-letter">
                        {t('clinical')} <br>
                        {t('sim')}
                        </p>
                    </div>
                </div>
            {/if}
    
        </div>
    
        
        <div class="coffee-break-2">
            <div class="coffee-break-2-line">
                <span class="coffee-break-2-line-time">14:45 - 15:45</span>
                <p class="coffee-break-2-line-letter">
                {t('coffee2')}
                </p>
            </div>
    
            <div class="physics-experiment-break">
                <span class="physics-experiment-break-time">14:45 - 15:45</span>
                <p class="physics-emperiment-break-letter">
                {t('PhysicExp')}
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
                        {t('space')}<br>
                        {t('ethSat')} <br>
                        {t('prof')}
                        </p>
                    </div>
    
                    <div class="orange-2-2">
                        <span class="orange-2-2-time">16:45 - 17:45</span>
                        <p class="orange-2-2-letter">
                        {t('look')} <br>
                        {t('down')} <br>
                        {t('spaceSpend')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('general')}
                <div class="pink-2">
                    <div class="pink-1-2">
                        <span class="pink-1-2-time">15:45 - 16:30</span>
                        <p class="pink-1-2-letter">
                        {t('when')}
                        </p>
                    </div>
    
                    <div class="pink-2-2">
                        <span class="pink-2-2-time">16:30 - 17:15</span>
                        <p class="pink-2-2-letter">
                        {t('inv')}
                        </p>
                    </div>
    
                    <div class="pink-3-2">
                        <span class="pink-3-2-time">17:15 - 17:45</span>
                        <p class="pink-3-2-letter">
                        {t('cons')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('computer science')}
                <div class="purple-2">
                    <div class="purple-1-2">
                        <span class="purple-1-2-time">15:45 - 16:30</span>
                        <p class="purple-1-2-letter">
                        {t('rec')}
                        </p>
                    </div>
    
                    <div class="purple-2-2">
                        <span class="purple-2-2-time">16:30 - 17:15</span>
                        <p class="purple-2-2-letter">
                        {t('data')} <br/>
                        {t('hunger')}
                        </p>
                    </div>
    
                    <div class="purple-3-2">
                        <span class="purple-3-2-time">17:15 - 17:45</span>
                        <p class="purple-3-2-letter">
                        {t('red')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide('genrel')}
                <div class="pink-end">
                    <div class="pink-end-line">
                        <span class="pink-end-time">15:45 - 17:45</span>
                        <p class="pink-end-letter">
                        {t('treasure')}
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
</div>


<style>
    .day-content{

        animation: slideFromLeft 0.5s ease;
    }

    .schedulePage {
        width: 90%;
        justify-self: center;
        
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

        color:black;
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
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;
        
        margin-top: 5px;
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
    }

    .purple-3-2{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 7.5px;

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
        gap:4px;

        background-color:#B66DEA;
        border-radius:25px;
        padding:4px;

        height:84px;
        box-sizing:border-box;
        flex-shrink:0;
        justify-content:center;
    }

    .purple-2-2-letter{
        font-size:15px;
        line-height:1.1;
        font-weight:400;
        margin:0;
        text-align:center;
        overflow-wrap:anywhere;
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
        gap: 7.5px;

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
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;

        
        
        margin-top: 5px;
    }

    .empty-box{
        grid-column: 5;

        width: 100%;
        min-height:110px;
        height:100%;

        background-color:#DD5E5E;
        border-radius:25px;

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
        min-height:110px;
        box-sizing:border-box;
    }

    .physics-experiment-break-time{
        font-size:15px;
        font-weight:600;
    }

    .coffee-break-2-line{
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
        min-height:110px;
        box-sizing:border-box;
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
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        column-gap: 5px;
        align-items: stretch;

        margin-top: 5px;
        min-height: 110px;
        height: auto;
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
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 5px;
        column-gap: 5px;

        
        
        margin-top: 5px;
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
        height:auto;
    }

    .green-2-0{
        grid-column:3;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;

        background-color:#1BC69B;
        border-radius:25px;
        padding:10px;
        justify-content:center;
        gap:8px;
        height:80px;
        flex-shrink:0;
        box-sizing:border-box;
    }

    .green-2-0-letter{
        font-size:15px;
        line-height:1.1;
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
        flex-shrink:0;
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
        font-weight: 20px;
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

    @media (max-width:768px){
        .squares,
        .squares-1,
        .squares-2,
        .squares-3,
        .coffee-break-2 {
            margin-left: 5px;
            margin-right: 5px;
            column-gap: 3px;
        }

        .where-line,
        .coming-line,
        .coffee-break-1-line,
        .coffee-break-3,
        .wine-party {
            margin-left: 5px;
            margin-right: 5px;
        }

        .where-line {
        font-size: 8px;
        padding: 8px 2px;
        border-radius: 15px;
        }

        .squares span,
        .squares p,
        .squares-1 span,
        .squares-1 p,
        .squares-2 span,
        .squares-2 p,
        .squares-3 span,
        .squares-3 p,
        .coffee-break-2 span,
        .coffee-break-2 p {
            font-size: 9px;
            line-height: 1.2;
        }

        .squares > div,
        .squares-1 > div,
        .squares-2 > div,
        .squares-3 > div {
            min-width: 0;
        }

        .orange-1-0,
        .purple-1-0,
        .green-1-0,
        .green-2-0,
        .orange-1-1,
        .orange-2-1,
        .orange-3-1,
        .purple-1-1,
        .purple-2-1,
        .green-1-1,
        .green-2-1,
        .orange-1-2,
        .orange-2-2,
        .pink-1-2,
        .pink-2-2,
        .pink-3-2,
        .purple-1-2,
        .purple-2-2,
        .purple-3-2,
        .pink-end-line,
        .green-1-3,
        .green-2-3,
        .orange-1-4,
        .greetings {
            padding: 5px;
            gap: 5px;
            border-radius: 15px;
            box-sizing: border-box;
        }

        .coffee-break-2-line,
        .physics-experiment-break {
            padding: 5px;
            gap: 5px;
            border-radius: 15px;
        }

        .empty-box {
        border-radius: 15px;
        }

        .coming-line,
        .coffee-break-1-line,
        .coffee-break-3,
        .wine-party {
            padding: 8px;
            gap: 5px;
            border-radius: 15px;
        }

        .coming-line span,
        .coming-line p,
        .coffee-break-1-line span,
        .coffee-break-1-line p,
        .coffee-break-3 span,
        .coffee-break-3 p,
        .wine-party span,
        .wine-party p {
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

        .squares p,
        .squares-1 p,
        .squares-2 p,
        .squares-3 p {
            overflow-wrap: break-word;
            word-break: normal;
        }

        .pink-1-2,
        .pink-2-2,
        .pink-3-2,
        .purple-1-2,
        .purple-2-2,
        .purple-3-2 {
            padding: 4px;
            gap: 3px;
        }

        .pink-1-2 p,
        .pink-2-2 p,
        .pink-3-2 p,
        .purple-1-2 p,
        .purple-2-2 p,
        .purple-3-2 p {
            font-size: 8px;
            line-height: 1.1;
        }

        .pink-1-2 span,
        .pink-2-2 span,
        .pink-3-2 span,
        .purple-1-2 span,
        .purple-2-2 span,
        .purple-3-2 span {
            font-size: 8px;
        }

        .green-2-0 {
            height: 80px;
        }

        .orange-2-2 {
            height: 145px;
        }

        .pink-1-2,
        .purple-1-2 {
            height: 90px;
        }

        .pink-2-2,
        .purple-2-2 {
            min-height: 90px;
            height: auto;
        }

        .pink-3-2,
        .purple-3-2 {
            height: 60px;
        }

        .orange-3-1 {
            height: 129px;
        }

        .green-2-1 {
            height:234px;
        }

        .pink-end-line {
            height:250px;
        }

        .green-1-3 {
            height:70px;
        }

        .green-2-3 {
            height: 100px;
        }

    }
</style>