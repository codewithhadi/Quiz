let answer = document.getElementById("input").value;
let submit = document.getElementById("btn");

submit.addEventListener("click", () => {
  let answer = document.getElementById("input").value;
  if (answer == "hyper text markup language" || answer == 'markup language') {
    alert('correct')
    window.location.href = '2nd.html'
  } else {
    alert("Wrong try again");
  }
});