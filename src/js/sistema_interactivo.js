// Listen to the form submit event and prevent the default behavior
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reloading

  // Get the value of the "name" field and remove spaces at the beginning and end
  const names = document.getElementById("fullName").value.trim();
  // Gets the value of the "age" field and converts it to a number
  const age = parseInt(document.getElementById("age").value);

  // Field validation
  if (names === "") {
    console.error("The name field cannot be empty");
  } else if (!/^[a-zA-Z\s]+$/.test(names)) {
    console.error("The name must only contain letters and spaces");
  } else if (isNaN(age)) {
    console.error("Enter a valid age in numbers");
  } else if (age < 1 || age > 130) {
    console.error("The age must be between 1 and 130 years");
  } else {
    // Message according to age of majority
    if (age < 18) {
      alert(`Hi ${names}, You're a minor. Keep learning and enjoying coding!`);
    } else {
      alert(
        `Hi ${names}, You're of legal age. Get ready for great opportunities in programming!`
      );
    }
  }
});
