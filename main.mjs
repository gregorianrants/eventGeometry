import groupEvents from "./groupEvents.mjs";
import {timePeriod} from "./groupEvents.mjs";

let events = [
    new timePeriod(10, 13.5),
    new timePeriod(10.5, 11.5),
    new timePeriod(13, 14),
    new timePeriod(16, 17),
    new timePeriod(15.5, 16.5),
    new timePeriod(21,23)
]


console.log(JSON.stringify(groupEvents(events),null,1))
