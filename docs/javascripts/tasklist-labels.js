// pymdownx.tasklist renders each checkbox with no accessible name; label it with its item text.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".task-list-item").forEach(function (item) {
    var input = item.querySelector(".task-list-control input");
    if (input) input.setAttribute("aria-label", item.textContent.trim());
  });
});
