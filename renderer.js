export const renderer = (attendees, fallbackMessage = "No results") => {
  const tbodyEl = document.querySelector(".table-body");
  const alertEl = document.querySelector(".alert");

  tbodyEl.innerHTML = "";

  if (attendees.length) {
    alertEl.classList.remove("alert_visible");

    attendees.forEach((attendee) => {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td>${attendee.id}</td>
        <td>${attendee.name}</td>
        <td>${attendee.surname}</td>
        <td>${attendee.age}</td>`;

      tbodyEl.appendChild(tableRow);
    });
  } else {
    alertEl.classList.add("alert_visible");
    alertEl.innerText = fallbackMessage;
  }
};
