let ans = "";
let display = document.querySelector(".display");
let input = document.querySelectorAll(".operator");
input.forEach((operator) => {
  operator.addEventListener("click", () => {
    const op = operator.getAttribute("id");
    if (op != "=" && op != "CE" && op != "Backspace" && op != "%") {
      ans += op;
      display.innerText = ans;
    } else if (op === "CE") {
      ans = "";
      display.innerText = ans;
    } else if (op === "Backspace") {
      ans = ans.slice(0, -1);
      display.innerText = ans;
    } else if (op === "%") {
      ans = ans * 0.01;
      display.innerText = ans;
    } else {
      display.innerText = eval(ans);
    }
  });
});