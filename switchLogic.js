let day;
switch (new Date().getDay()) {
  case 0: day = "Sunday"; break;
  case 1: day = "Monday"; break;
  case 2: day = "Tuesday"; break;
  default: day = "Unknown"; console.log("Error determining day.");
}

console.log(`Today is: ${day}`);

