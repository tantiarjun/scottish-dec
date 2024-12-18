const mongoose = require("mongoose");
// Function to format date as "11 July, 2024"
const formatDate = (date) => {
  const days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDate() - 1];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

const MantraSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  textContent: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    default: true,
  },
  lastModified: {
    type: String,
    default: formatDate(new Date()),
  },
});

const Mantra = mongoose.model("Mantra", MantraSchema);

module.exports = Mantra;
