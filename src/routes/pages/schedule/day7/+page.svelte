<script>
	import { t } from '$lib/i18n.svelte';
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
            <span class="date">07 {t('event_date')}</span>
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
    
        <div class="squares-1">
            {#if !shouldHide(t('CHEMISTRY'))}
                <div class="green-1">
                    <div class="green-1-1">
                        <span class="green-1-1-time">10:00 - 11:15</span>
                        <p class="green-1-1-letter">
                        {t('plastic')}
                        </p>
                    </div>
    
                    <div class="green-2-1">
                        <span class="green-2-1-time">11:15 - 11:45</span>
                        <p class="green-2-1-letter">
                        {t('toxicBeauty')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('general'))}
                <div class="pink-1">
                    <div class="pink-1-1">
                        <span class="pink-1-1-time">10:00 - 10:45</span>
                        <p class="pink-1-1-letter">
                        {t('funding')}
                        </p>
                    </div>
    
                    <div class="pink-2-1">
                        <span class="pink-2-1-time">10:45 - 11:45</span>
                        <p class="pink-2-1-letter">
                        {t('hiddenCost')}
                        </p>
                    </div>
    
                    <div class="pink-3-1">
                        <span class="pink-3-1-time">11:45 - 12:15</span>
                        <p class="pink-3-1-letter">
                        {t('scientific')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('PHYSICS'))}
                <div class="orange-1">
                    <div class="orange-1-1">
                        <span class="orange-1-1-time">10:30 - 11:30</span>
                        <p class="orange-1-1-letter">
                        {t('scienceComm')}
                        </p>
                    </div>
    
                    <div class="orange-2-1">
                        <span class="orange-2-1-time">11:30 - 12:15</span>
                        <p class="orange-2-1-letter">
                        {t('climateChange')}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="coffee-break-1">
                <span class="coffee-break-1-time">12:15 - 12:45</span>
                <p class="coffee-break-1-letter">
                {t('coffee1')}
                </p>
            </div>
    
        <div class="squares-2">
    
            {#if !shouldHide(t('COMPUTER_SCIENCE'))}
                <div class="purple-2">
                    <div class="purple-1-2">
                        <span class="purple-1-2-time">12:45 - 13:30</span>
                        <p class="purple-1-2-letter">
                        {t('platform')}
                        </p>
                    </div>
    
                    <div class="purple-2-2">
                        <span class="purple-2-2-time">13:30 - 14:00</span>
                        <p class="purple-2-2-letter">
                        {t('game')}
                        </p>
                    </div>
    
                    <div class="purple-3-2">
                        <span class="purple-3-2-time">14:00 - 14:45</span>
                        <p class="purple-3-2-letter">
                        {t('persuasive')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('PHYSICS'))}
                <div class="orange-2">
                    <div class="orange-1-2">
                        <span class="orange-1-2-time">12:45 - 13:30</span>
                        <p class="orange-1-2-letter">
                        {t('humanHealth')}
                        </p>
                    </div>
    
                    <div class="orange-2-2">
                        <span class="orange-2-2-time">13:30 - 14:15</span>
                        <p class="orange-2-2-letter">
                        {t('climateEng')}
                        </p>
                    </div>
    
                    <div class="orange-3-2">
                        <span class="orange-3-2-time">14:15 - 14:45</span>
                        <p class="orange-3-2-letter">
                        {t('activism')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('CHEMISTRY'))}
                <div class="green-2">
                    <div class="green-1-2">
                        <span class="green-1-2-time">12:45 - 14:45</span>
                        <p class="green-1-2-letter">
                        {t('fun')}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="lunch-break-2">
                <div class="lunch-break-2-line">
                    <span class="lunch-break-2-line-time">14:45 - 15:45</span>
                    <p class="lunch-break-2-line-letter">
                    {t('lunch2')}
                    </p>
                </div>
    
                {#if !shouldHide(t('PHYSICS'))}
                    <div class="physics-experiment-break">
                        <span class="physics-experiment-break-time">14:45 - 15:45</span>
                        <p class="physics-emperiment-break-letter">
                            {t('PhysicExp')}
                        </p>
                    </div>
                {/if}
    
                <div class="empty-box"></div>
            </div>
    
        <div class="squares-3">
    
            {#if !shouldHide(t('COMPUTER_SCIENCE'))}
                <div class="purple-3">
                    <div class="purple-1-3">
                        <span class="purple-1-3-time">15:45 - 16:15</span>
                        <p class="purple-1-3-letter">
                        {t('myth')}
                        </p>
                    </div>
    
                    <div class="purple-2-3">
                        <span class="purple-2-3-time">16:15 - 17:15</span>
                        <p class="purple-2-3-letter">
                        {t('privacy')}
                        </p>
                    </div>
    
                    <div class="purple-3-3">
                        <span class="purple-3-3-time">17:15 - 17:45</span>
                        <p class="purple-3-3-letter">
                        {t('democracy')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('CHEMISTRY'))}
                <div class="green-3">
                    <div class="green-1-3">
                        <span class="green-1-3-time">15:45 - 16:30</span>
                        <p class="green-1-3-letter">
                        {t('green')}
                        </p>
                    </div>
    
                    <div class="green-2-3">
                        <span class="green-2-3-time">16:30 - 17:15</span>
                        <p class="green-2-3-letter">
                        {t('industrial')}
                        </p>
                    </div>
    
                    <div class="green-3-3">
                        <span class="green-3-3-time">17:15 - 17:45</span>
                        <p class="green-3-3-letter">
                        {t('pollution')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('PHYSICS'))}
                <div class="orange-3">
                    <div class="orange-1-3">
                        <span class="orange-1-3-time">15:45 - 16:45</span>
                        <p class="orange-1-3-letter">
                        {t('visualizing')}
                        </p>
                    </div>
    
                    <div class="orange-2-3">
                        <span class="orange-2-3-time">16:45 - 17:45</span>
                        <p class="orange-2-3-letter">
                        {t('ethicsReview')}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="coffee-break-2">
                <span class="coffee-break-2-time">17:45 - 18:15</span>
                <p class="coffee-break-2-letter">
                    {t('coffee2')}
                </p>
            </div>
    
        <div class="squares-4">
    
            {#if !shouldHide(t('COMPUTER_SCIENCE'))}
                <div class="purple-4">
                    <div class="purple-1-4">
                        <span class="purple-1-4-time">18:15 - 19:15</span>
                        <p class="purple-1-4-letter">
                        {t('graphics')}
                        </p>
                    </div>
                </div>
            {/if}
    
            <div class="green-pink-4">
    
                {#if !shouldHide(t('CHEMISTRY'))}
                    <div class="green-1-4">
                        <span class="green-1-4-time">18:15 - 19:15</span>
                        <p class="green-1-4-letter">
                        {t('water')}
                        </p>
                    </div>
    
                    <div class="green-2-4">
                        <span class="green-2-4-time">19:15 - 19:45</span>
                        <p class="green-2-4-letter">
                        {t('chem')}
                        </p>
                    </div>
                {/if}
    
                {#if !shouldHide(t('general'))}
                    <div class="green-pink-1-4">
                        <span class="green-pink-1-4-time">19:45 - 20:15</span>
                        <p class="green-pink-1-4-letter">
                        {t('teams')}
                        </p>
                    </div>
                {/if}
            </div>
    
            <div class="pink-4">
    
                {#if !shouldHide(t('general'))}
                    <div class="pink-1-4">
                        <span class="pink-1-4-time">18:15 - 19:00</span>
                        <p class="pink-1-4-letter">
                        {t('hiddenData')}
                        </p>
                    </div>
    
                    <div class="pink-2-4">
                        <span class="pink-2-4-time">19:00 - 19:45</span>
                        <p class="pink-2-4-letter">
                        {t('realistic')}
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    
            <div class="cocktail-party">
                <span class="cocktail-party-time">20:15 - 21:00</span>
                <p class="cocktail-party-letter">
                {t('closing')}
                </p>
            </div>
    
        <div class="explain-line">
            <p class="explain-line-letter">
            {t('roundtable')} <br>
            {t('workshop')}<br>
            {t('neither')}
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
        gap:7.5px;

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