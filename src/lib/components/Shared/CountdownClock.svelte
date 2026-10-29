<script>
	import { t } from '$lib/i18n.svelte';
	import { onDestroy, onMount } from 'svelte';

	let { color = 'red' } = $props();

	let targetDate = new Date('2027-03-06T09:00:00+02:00').getTime();
	let currentDate = $state(Date.now());

	let difference = $derived(targetDate - currentDate);

	// :1000->get seconds, :60->get minutes, :60->get hours, :24->get days
	let Days = $derived(Math.floor(difference / 1000 / 60 / 60 / 24));
	let Hours = $derived(Math.floor((difference / 1000 / 60 / 60) % 24));
	let Minutes = $derived(Math.floor(((difference / 1000 / 60) % 60) % 24));
	let Seconds = $derived(Math.floor((((difference / 1000) % 60) % 60) % 24));

	/** @type {ReturnType<typeof setInterval>} */
	let interval;

	onMount(() => {
		interval = setInterval(() => {
			currentDate = Date.now();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div
	class="CountdownClock"
	style="--countdown-accent: {color}"
	role="timer"
	aria-label={`${Days} ${t('days')}, ${Hours} ${t('hours')}, ${Minutes} ${t('minutes')}, ${Seconds} ${t('seconds')}`}
>
	<div class="TimeUnit">
		<span class="Value">{Days}</span>
		<span class="Label">{t('days')}</span>
	</div>
	<div class="TimeUnit">
		<span class="Value">{Hours}</span>
		<span class="Label">{t('hours')}</span>
	</div>
	<div class="TimeUnit">
		<span class="Value">{Minutes}</span>
		<span class="Label">{t('minutes')}</span>
	</div>
	<div class="TimeUnit">
		<span class="Value">{Seconds}</span>
		<span class="Label">{t('seconds')}</span>
	</div>
</div>

<style>
	.CountdownClock {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		align-items: center;
		width: min(650px, 100%);
		max-width: 100%;
		min-height: 112px;
		padding: 0.75rem;
		background-color: var(--secondary-color);
		border: 1px solid color-mix(in srgb, var(--countdown-accent) 45%, transparent);
		border-radius: 1.5rem;
		box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 12%);
	}

	.TimeUnit {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		min-width: 0;
		color: var(--primary-color);
	}

	.TimeUnit + .TimeUnit {
		border-left: 1px solid color-mix(in srgb, var(--primary-color) 20%, transparent);
	}

	.Value {
		color: var(--countdown-accent);
		font-size: clamp(1.5rem, 4vw, 2.25rem);
		font-variant-numeric: tabular-nums;
		font-weight: 600;
		line-height: 1.1;
	}

	.Label {
		color: color-mix(in srgb, var(--primary-color) 75%, transparent);
		font-size: 0.6875rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		line-height: 1.3;
		text-align: center;
	}

	@media (max-width: 768px) {
		.CountdownClock {
			min-height: 5.5rem;
			padding: 0.625rem 0.25rem;
			border-radius: 1.25rem;
		}

		.TimeUnit {
			gap: 0.2rem;
		}

		.Value {
			font-size: clamp(1.25rem, 6vw, 1.75rem);
		}

		.Label {
			font-size: clamp(0.5rem, 2.3vw, 0.6875rem);
			letter-spacing: 0.04em;
		}
	}
</style>
