
/* tugas 1 JS*/

console.log(33);
console.log(6);
console.log("foo");
console.log("bar");
console.log(true);
console.log(false);


/*tugas 2 JS If-else*/

var name = prompt("Please enter your name", "Harry Potter");
var job = prompt("Please enter your job", "Please type Warrior, Mage, or Priest.");
  if (name == null || name == "") {
    alert("Name can't be empty. Please refresh the page.");
}


  if (job == "warrior"){
    console.log("Hello ", job, " ", name, " you can attack with your sword!");
} else if (job == "mage") {
  console.log("Hello ", job, " ", name, " you can create magic to achieve your victory.")
} else if (job == "priest"){
  console.log("Hello ", job, " ", name, " you can heal your wounded friends.")
} else {
  alert("Job is not listed, please refresh the page.")
}
