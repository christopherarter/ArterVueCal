import Calendar from "./components/Calendar";
import Month from "./components/month/Month";
import Day from "./components/day/Day";
import Event from "./components/event/Event";
import EventNodeList from "./components/event/EventNodeList";
import "./calendar.scss";

const CalendarPlugin = {
	install(Vue) {
		Vue.component(Calendar.name, Calendar);
		Vue.component(Month.name, Month);
		Vue.component(Day.name, Day);
		Vue.component(Event.name, Event);
		Vue.component(EventNodeList.name, EventNodeList);
	}
};

export default CalendarPlugin;
