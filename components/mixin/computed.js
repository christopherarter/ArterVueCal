import moment from "moment";

export default {
	/**
	 * Caculate the days
	 * array to pass to each
	 * day component
	 */
	computedDays() {
		let computedDaysArray = [];
		if (this.view == "month") {
			for (let i = 1; i <= this.moment.daysInMonth(); i++) {
				computedDaysArray.push({
					day: i,
					dateObject: this.moment.clone().set("date", i)
				});
			}
		}
		return computedDaysArray;
	},

	/**
	 * Get the current date
	 * relative to the date
	 * context.
	 */
	currentDate() {
		return this.moment.get("date");
	},

	/**
	 * Get the difference in days
	 * to create initial offset.
	 */
	firstDayOfMonth() {
		let firstDay = this.moment.subtract(this.currentDate - 1, "days");
		return firstDay.weekday();
	},

	/**
	 * Get the current month of the date context.
	 */
	currentMonth() {
		return this.moment.get("month");
	},

	/**
	 * Get the current year of the date context.
	 */
	currentYear() {
		return this.moment.get("year");
	}
};
