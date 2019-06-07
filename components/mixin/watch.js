import moment from "moment";
export default {
	/**
	 * This component uses watchers, and a 'local'
	 * state of the current date context so that
	 * it can be controlled by both internal
	 * methods, and bound directly by external
	 * properties.
	 */

	/**
	 * Watch event props to re-initalize
	 * with required props for UI logic.
	 */
	events(newEvents, oldEvents) {
		this.initializeEvents(newEvents);
	},

	localMonth(newValue, oldValue) {
		this.moment = moment(this.moment).month(newValue);
	},

	localYear(newValue, oldValue) {
		this.moment = moment(this.moment).year(newValue);
	},

	month(newValue, oldValue) {
		this.moment = moment(this.moment).month(newValue);
	},

	year(newValue, oldValue) {
		this.moment = moment(this.moment).year(newValue);
	}
};
