let menu = document.querySelector('.menu');
let sidebar = document.querySelector('.bottomLeft');

menu.addEventListener('click', () => {
    sidebar.classList.toggle("clicked");
})



const timeline = document.querySelector(".timeline");
const numberOfDots = 20; 
const startDate = new Date(2024, 8, 15);

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  const date = new Date(startDate);
  date.setDate(date.getDate() + i);
  dot.setAttribute("data-date", date.toDateString()); 

  timeline.appendChild(dot);
}



const datesContainer = document.getElementById("datesContainer");
const numberOfDates = 13; // Adjust this for more or fewer dates
const startDate1 = new Date(2024, 9, 18); // Start date (e.g., October 18, 2024)

for (let i = 0; i < numberOfDates; i++) {
  const date = new Date(startDate);
  date.setDate(date.getDate() + i);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  const dateLabel = document.createElement("div");
  dateLabel.classList.add("date-label");
  dateLabel.textContent = formattedDate;

  datesContainer.appendChild(dateLabel);
}