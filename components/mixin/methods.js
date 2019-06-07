export default {
	/**
	 * Populate each day property
	 * with the event that is either
	 * starting, ending, or continuing
	 * on that given date.
	 */
	getEventsForDay(day) {
		let eventsArray = [];
		if (this.events.length > 0) {
			this.events.forEach(event => {
				if (
					day.isBetween(event.start_date, event.end_date) ||
					day.isSame(event.start_date, "day") ||
					day.isSame(event.end_date, "day")
				) {
					eventsArray.push(event);
				}
			});
		}
		return eventsArray;
	},

	/**
	 * Set date context based
	 * on props.
	 */
	initializeMoment() {
		this.localMonth = this.month;
		this.localYear = this.year;
		let vm = this;
		this.moment.set({
			year: this.year,
			month: this.month,
			date: this.date
		});
	},

	/**
	 * Add hover prop. Watch did not work
	 * for some reason.
	 */
	initializeEvents(events) {
		this.addProp(events, "hover");
	},

	addProp(items, prop) {
		items.forEach(items => {
			if (!items.hasOwnProperty(prop)) {
				this.$set(items, prop, false);
			}
		});
	},

	/**
	 * Add month to local month state.
	 */
	addMonth() {
		if (this.localMonth <= 11) {
			this.localMonth++;
		} else {
			this.localMonth = 0;
		}
	},

	/**
	 * Subtract month from local month state.
	 */
	subtractMonth() {
		if (this.localMonth == 0) {
			this.localMonth = 11;
		} else {
			this.localMonth--;
		}
	},

	/**
	 * Add year to local year state.
	 */
	addYear() {
		this.localYear++;
	},

	/**
	 * Subtract year from local year state.
	 */
	subtractYear() {
		this.localYear--;
	}
};
