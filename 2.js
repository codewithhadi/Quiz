let answers = document.getElementById("input2").value;
let submits = document.getElementById("button");

submits.addEventListener("click", () => {
  let answer = document.getElementById("input2").value;
  if (answer == "cascading stylesheet") {
    alert('correct')
    window.location.href = '3rd.html'
  } else {
    alert("Wrong try again");
  }
});