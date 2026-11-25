<script lang="ts">
    import { getContext } from 'svelte';
	import { t } from '$lib/i18n.svelte';
    import type { ScheduleFilter } from '$lib/model/ScheduleFilter';
    import ArrowLeft from '$lib/assets/Icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/assets/Icons/ArrowRight.svelte';
    import TimeOutline from '$lib/assets/SVGs/TimeOutline.svg';

    const scheduleFilter = getContext<ScheduleFilter>('schedule-filter');

    function shouldHide(category: string) {
        return scheduleFilter.activeFilter !== null && scheduleFilter.activeFilter !== category;
    }
</script>

<div class="day7Schedule">

    <div class="day-content">
        <div class="date-line">
            <a href="/pages/schedule" class="date-arrow" aria-label="Previous day">
                <ArrowLeft />
            </a>
            <span class="date">7 {t('event_date')}</span>
            <button class="date-arrow" aria-label="Next day" disabled>
                <ArrowRight />
            </button>
        </div>

                <div class="session-legend" aria-label="Schedule event types">
            <span class="legend-item">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                </svg>
                <span>{t('roundtable')}</span>
            </span>
            <span class="legend-item">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                </svg>
                <span>{t('workshop')}</span>
            </span>
            <span class="legend-item">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5.5h16v11H9l-5 3v-14ZM8 9h8M8 13h5" />
                </svg>
                <span>{t('neither')}</span>
            </span>
        </div>        

        <div class="schedule-day-header">
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
        </div>
    
        <div class="coming-line">
            <div class="coming-info">
                <span class="coming-time">
                    <img class="clock" src={TimeOutline} alt="time"/>
                    {t('schedule-tba')}
                </span>
    
                <p class="coming-words">
                    {t('ARRIVAL')}
                </p>
            </div>
        </div>
    
        <div class="squares-1">
            {#if !shouldHide(t('CHEMISTRY'))}
                <div class="green-1">
                    <div class="green-1-1">
                        <span class="green-1-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="green-1-1-letter">
                        {t('plastic')}
                        </p>
                    </div>
    
                    <div class="green-2-1">
                        <span class="green-2-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="green-2-1-letter">
                        {t('toxicBeauty')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('general'))}
                <div class="pink-1">
                    <div class="pink-1-1">
                        <span class="pink-1-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="pink-1-1-letter">
                        {t('funding')}
                        </p>
                    </div>
    
                    <div class="pink-2-1">
                        <span class="pink-2-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="pink-2-1-letter">
                        {t('hiddenCost')}
                        </p>
                    </div>
    
                    <div class="pink-3-1">
                        <span class="pink-3-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="pink-3-1-letter">
                        {t('scientific')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('PHYSICS'))}
                <div class="orange-1">
                    <div class="orange-1-1">
                        <span class="orange-1-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="orange-1-1-letter">
                        {t('climateChange')}
                        </p>
                    </div>
    
                    <div class="orange-2-1">
                        <span class="orange-2-1-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="orange-2-1-letter">
                        {t('scienceComm')}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="coffee-break-1">
                <span class="coffee-break-1-time">
                    <img class="clock" src={TimeOutline} alt="time"/>
                    {t('schedule-tba')}
                </span>
                <p class="coffee-break-1-letter">
                {t('coffee1')}
                </p>
            </div>
    
        <div class="squares-2">
    
            {#if !shouldHide(t('COMPUTER_SCIENCE'))}
                <div class="purple-2">
                    <div class="purple-1-2">
                        <span class="purple-1-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="purple-1-2-letter">
                        {t('platform')}
                        </p>
                    </div>
    
                    <div class="purple-2-2">
                        <span class="purple-2-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="purple-2-2-letter">
                        {t('game')}
                        </p>
                    </div>
    
                    <div class="purple-3-2">
                        <span class="purple-3-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="purple-3-2-letter">
                        {t('persuasive')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('PHYSICS'))}
                <div class="orange-2">
                    <div class="orange-1-2">
                        <span class="orange-1-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="orange-1-2-letter">
                        {t('humanHealth')}
                        </p>
                    </div>
    
                    <div class="orange-2-2">
                        <span class="orange-2-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="orange-2-2-letter">
                        {t('climateEng')}
                        </p>
                    </div>
    
                    <div class="orange-3-2">
                        <span class="orange-3-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="orange-3-2-letter">
                        {t('activism')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('CHEMISTRY'))}
                <div class="green-2">
                    <div class="green-1-2">
                        <span class="green-1-2-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="green-1-2-letter">
                        {t('fun')}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="lunch-break-2">
                <div class="lunch-break-2-line">
                    <span class="lunch-break-2-line-time">
                        <img class="clock" src={TimeOutline} alt="time"/>
                        {t('schedule-tba')}
                    </span>
                    <p class="lunch-break-2-line-letter">
                    {t('lunch2')}
                    </p>
                </div>
    
                {#if !shouldHide(t('PHYSICS'))}
                    <div class="physics-experiment-break">
                        <span class="physics-experiment-break-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
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
                        <span class="purple-1-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="purple-1-3-letter">
                        {t('myth')}
                        </p>
                    </div>
    
                    <div class="purple-2-3">
                        <span class="purple-2-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="purple-2-3-letter">
                        {t('privacy')}
                        </p>
                    </div>
    
                    <div class="purple-3-3">
                        <span class="purple-3-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="purple-3-3-letter">
                        {t('democracy')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('CHEMISTRY'))}
                <div class="green-3">
                    <div class="green-1-3">
                        <span class="green-1-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="green-1-3-letter">
                        {t('green')}
                        </p>
                    </div>
    
                    <div class="green-2-3">
                        <span class="green-2-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="green-2-3-letter">
                        {t('industrial')}
                        </p>
                    </div>
    
                    <div class="green-3-3">
                        <span class="green-3-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="green-3-3-letter">
                        {t('pollution')}
                        </p>
                    </div>
                </div>
            {/if}
    
            {#if !shouldHide(t('PHYSICS'))}
                <div class="orange-3">
                    <div class="orange-1-3">
                        <span class="orange-1-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="orange-1-3-letter">
                        {t('visualizing')}
                        </p>
                    </div>
    
                    <div class="orange-2-3">
                        <span class="orange-2-3-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="orange-2-3-letter">
                        {t('ethicsReview')}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    
            <div class="coffee-break-2">
                <span class="coffee-break-2-time">
                    <img class="clock" src={TimeOutline} alt="time"/>
                    {t('schedule-tba')}
                </span>
                <p class="coffee-break-2-letter">
                    {t('coffee2')}
                </p>
            </div>
    
        <div class="squares-4">
    
            {#if !shouldHide(t('COMPUTER_SCIENCE'))}
                <div class="purple-4">
                    <div class="purple-1-4">
                        <span class="purple-1-4-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L3 18l3 3 6.2-6.2a4 4 0 0 0 5.3-5.3l-2.4 2.4-3.1-3.1 2.5-2.3ZM17 4l3 3" />
                        </svg>
                        <p class="purple-1-4-letter">
                        {t('graphics')}
                        </p>
                    </div>
                </div>
            {/if}
    
            <div class="green-pink-4">
    
                {#if !shouldHide(t('CHEMISTRY'))}
                    <div class="green-1-4">
                        <span class="green-1-4-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="green-1-4-letter">
                        {t('water')}
                        </p>
                    </div>
    
                    <div class="green-2-4">
                        <span class="green-2-4-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="green-2-4-letter">
                        {t('chem')}
                        </p>
                    </div>
                {/if}
    
                {#if !shouldHide(t('general'))}
                    <div class="green-pink-1-4">
                        <span class="green-pink-1-4-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="green-pink-1-4-letter">
                        {t('teams')}
                        </p>
                    </div>
                {/if}
            </div>
    
            <div class="pink-4">
    
                {#if !shouldHide(t('general'))}
                    <div class="pink-1-4">
                        <span class="pink-1-4-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 5.5h16v11H9l-5 3v-14Z" />
                            <path d="M8 9h8M8 13h5" />
                        </svg>
                        <p class="pink-1-4-letter">
                        {t('hiddenData')}
                        </p>
                    </div>
    
                    <!-- <div class="pink-2-4">
                        <span class="pink-2-4-time">
                            <img class="clock" src={TimeOutline} alt="time"/>
                            {t('schedule-tba')}
                        </span>
                        <svg class="session-type-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 19c.3-3 2.1-4.5 5-4.5s4.7 1.5 5 4.5M2 18c.2-2.2 1.4-3.4 3.5-3.4.9 0 1.6.2 2.2.7m8.6 0c.6-.5 1.3-.7 2.2-.7 2.1 0 3.3 1.2 3.5 3.4" />
                        </svg>
                        <p class="pink-2-4-letter">
                        {t('realistic')}
                        </p>
                    </div> -->
                {/if}
            </div>
        </div>
    
            <div class="cocktail-party">
                <span class="cocktail-party-time">
                    <img class="clock" src={TimeOutline} alt="time"/>
                    {t('schedule-tba')}
                </span>
                <p class="cocktail-party-letter">
                {t('closing')}
                </p>
            </div>
    
    </div>
</div>    

<style>
    .day7Schedule {
        width: 90%;
        justify-self: center;
    }

    .day-content {
        min-width: 0;
    }

    .clock {
        height: 1.25em;
        width: auto;
        flex: none;
    }

    .day-content > :not(.schedule-day-header):not(.date-line) {
        animation: slideFromRight 0.3s ease-out;
    }

    .day-content div:has(> [class*="-time"]) {
        box-sizing: border-box;
        min-width: 0;
        height: auto;
        min-height: 3.5rem;
        padding: clamp(0.5rem, 1vw, 0.9rem);
        gap: clamp(0.25rem, 0.7vw, 0.65rem);
    }

    .day-content [class*="-time"] {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.35em;
        font-size: clamp(0.7rem, 1vw, 0.9rem);
        font-weight: 700;
        line-height: 1.25;
        text-align: center;
        overflow-wrap: anywhere;
    }

    .day-content [class$="-letter"] {
        max-width: 100%;
        margin: 0;
        font-size: clamp(0.75rem, 1vw, 0.9rem);
        font-weight: 400;
        line-height: 1.35;
        text-align: center;
        overflow-wrap: anywhere;
        word-break: normal;
    }

    :global(.session-type-icon) {
        position: absolute;
        top: 0.4rem;
        right: 0.45rem;
        display: block;
        width: 1.1rem;
        height: 1.1rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.8;
    }

    .day-content div:has(> .session-type-icon) {
        position: relative;
        box-sizing: border-box;
        height: auto;
        min-height: 3.5rem;
        padding: clamp(0.85rem, 1.5vw, 1.1rem);
        padding-top: 1.6rem;
        gap: clamp(0.4rem, 0.8vw, 0.7rem);
        overflow: visible;
    }

    .day-content div:has(> .session-type-icon) > [class$="-letter"] {
        padding-inline: 0.15rem;
    }

    @keyframes slideFromRight{
        from{
            transform: translateX(1rem);
            opacity:0;
        }
        to{
            transform: translateX(0);
            opacity:1;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .day-content > :not(.schedule-day-header):not(.date-line) {
            animation: none;
        }
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

    /* .pink-2-4{
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
    } */

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

    .schedule-day-header {
        position: sticky;
        top: 0.5rem;
        z-index: 10;
        margin-top: 2.5rem;
        padding: 0.75rem 1rem 1rem;
        border-radius: 1.25rem;
        background: #D9D9D9;
        color: #111;
        box-shadow: 0 0.4rem 1rem rgb(0 0 0 / 10%);
    }

    .where-line{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        align-items:center;
        font-size:15px;
        font-weight: 500;
        padding: 0.75rem 0 0;
        color: inherit;
    }

    .date-line{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        width: 100%;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
    }

    .date-arrow{
        display: grid;
        width: 3rem;
        height: 3rem;
        place-items: center;
        border: 0;
        padding: 0;
        background: transparent;
        color: var(--secondary-color);
        text-decoration: none;
        cursor: pointer;
    }

    .date-arrow:disabled {
        opacity: 0.3;
        cursor: default;
    }

    .date-arrow:not(:disabled):hover {
        color: var(--break);
    }

    .date-arrow :global(svg) {
        width: 1.5rem;
        height: 1.5rem;
    }

    .date{
        padding: 0.55rem 1.1rem;
        border-radius: 999px;
        /* background: var(--break); */
        color: #fff;
        font-size: clamp(1rem, 2vw, 1.25rem);
        font-weight: 700;
        letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
        .day7Schedule {
            width: calc(100% - 2rem);
            min-width: 0;
        }

        .day-content {
            min-width: 0;
        }

        .schedule-day-header {
            top: 0;
            margin-top: 0;
            padding: 0.5rem;
            border-radius: 1rem;
        }

        .date-line {
            margin-top: 1.5rem;
        }

        .date-arrow {
            width: 2.5rem;
            height: 2.5rem;
        }

        .where-line {
            padding-top: 0.5rem;
        }

        .where-item {
            min-width: 0;
            overflow-wrap: anywhere;
        }

        .squares-1,
        .squares-2,
        .squares-3,
        .squares-4,
        .lunch-break-2 {
            margin-left: 5px;
            margin-right: 5px;
            column-gap: 3px;
        }

        .coming-line,
        .coffee-break-1,
        .coffee-break-2,
        .cocktail-party {
            margin-left: 5px;
            margin-right: 5px;
        }

        .where-line {
            font-size: 8px;
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
        /* .pink-2-4 {
            padding: 5px;
            gap: 5px;
            border-radius: 15px;
            box-sizing: border-box;
        } */

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

        .day-content div:has(> [class*="-time"]) {
            min-height: 2.75rem;
            padding: 0.5rem;
            gap: 0.3rem;
        }

        .day-content [class*="-time"] {
            font-size: 0.65rem;
        }

        .day-content [class$="-letter"] {
            font-size: 0.7rem;
            line-height: 1.3;
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

    .date-arrow:focus-visible {
        outline: 3px solid var(--secondary-color);
        outline-offset: 3px;
    }

    .coming-line {
        height: auto;
        min-height: 5rem;
    }

    @media (max-width: 768px) {
        .coming-line {
            min-height: 4rem;
        }
    }

    .day7Schedule .squares-1,
    .day7Schedule .squares-2,
    .day7Schedule .squares-3,
    .day7Schedule .squares-4 {
        row-gap: 5px;
        column-gap: 5px;
        margin-top: 5px;
    }

    .day7Schedule .squares-1 > div,
    .day7Schedule .squares-2 > div,
    .day7Schedule .squares-3 > div,
    .day7Schedule .squares-4 > div {
        min-width: 0;
        gap: 5px;
    }

    @media (max-width: 768px) {
        .day-content div:has(> .session-type-icon) {
            min-height: 2.75rem;
            padding: 0.7rem;
            padding-top: 1.35rem;
            gap: 0.4rem;
        }

        :global(.session-type-icon) {
            top: 0.25rem;
            right: 0.3rem;
            width: 0.9rem;
            height: 0.9rem;
        }

        .day7Schedule .squares-1,
        .day7Schedule .squares-2,
        .day7Schedule .squares-3,
        .day7Schedule .squares-4 {
            column-gap: 3px;
        }
    }

    .session-legend {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem 1.25rem;
        width: 90%;
        margin: 0.75rem auto 0;
        color: var(--secondary-color);
        font-size: 0.8rem;
        line-height: 1.3;
        text-align: center;
    }

    .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
    }

    .legend-item svg {
        width: 1.1rem;
        height: 1.1rem;
        flex: 0 0 auto;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.8;
    }
</style>