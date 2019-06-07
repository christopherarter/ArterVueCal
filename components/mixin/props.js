import moment from "moment";

export default {
	month: {
		required: false,
		default: moment().month()
	},
	year: {
		required: false,
		default: moment().year()
	},
	date: {
		required: false
	},
	events: {
		type: Array,
		required: false,
		default: () => []
	},
	blackoutDates: {
		type: Array,
		required: false,
		default: () => []
	},
	view: {
		type: String,
		required: false,
		default: "month"
	}
};
