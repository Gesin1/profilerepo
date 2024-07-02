const currentYear = document.getElementById("year");
const currentDay = document.getElementById("day");
const currentTime = document.getElementById("time");

const date = new Date();
const year = date.getFullYear();
const days = date.getDate();
const time = date.toLocaleTimeString();

const dayIndex = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = dayIndex[days];

currentDay.textContent = day;
currentTime.textContent = time;
currentYear.textContent = year;
