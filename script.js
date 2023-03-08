import { renderer } from "./renderer.js";
const inputEl = document.querySelector("input");

renderer(attendees);

inputEl.addEventListener("input", (event) => {
  const result = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(event.target.value.toLowerCase())
  );

  renderer(result);
});

