import { attendees } from "./data.js";
import { renderer } from "./renderer.js";
const inputEl = document.querySelector(".input");

renderer(attendees);

inputEl.addEventListener("keyup", (event) => {
  const term = event.target.value;

  const filter = attendees.filter((attendee) => {
    attendee.name.toLowerCase().includes(term.toLowerCase());
  });
  renderer(filter, "There is nothing here");
});
