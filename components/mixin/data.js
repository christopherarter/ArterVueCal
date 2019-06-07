import moment from "moment";
export default () => {
	return {
		moment: moment(),
		localMonth: "",
		localYear: "",
		dayLabels: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		localWeek: ""
	};
};
