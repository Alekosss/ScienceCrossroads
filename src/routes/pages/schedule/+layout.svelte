<script lang="ts">
	import { setContext } from 'svelte';
	import PlainLogo from '$lib/assets/PlainLogo.png';
	import type { ScheduleFilter } from '$lib/model/ScheduleFilter';
	import ScheduleHeader from '$lib/second-page/ScheduleHeader.svelte';

	let { children } = $props();
	let activeFilter = $state<string | null>(null);

	function filterEvents(category: string) {
		activeFilter = activeFilter === category ? null : category;
	}

	setContext<ScheduleFilter>('schedule-filter', {
		get activeFilter() {
			return activeFilter;
		},
		filterEvents
	});
</script>

<svelte:head>
	<link rel="icon" href={PlainLogo} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="schedule-layout">
	<ScheduleHeader onFilter={filterEvents} {activeFilter} />
	{@render children()}
</div>

<style>
	.schedule-layout {
		width: 100%;
		margin-inline: auto;
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
	}

	:global(button) {
		font-family: inherit;
	}
</style>
