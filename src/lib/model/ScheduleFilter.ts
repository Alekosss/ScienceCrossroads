export type ScheduleFilter = {
	activeFilter: string | null;
	filterEvents: (category: string) => void;
};
