let answers = document.getElementById("input3").value;
let submits = document.getElementById("buttonn");

submits.addEventListener("click", () => {
  let answer = document.getElementById("input3").value;
  if (answer == "javascript") {
 alert('correct')
 window.location.href = 'index.html'
  } else {
    alert("Wrong try again");
  }
});