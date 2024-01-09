const block = document.querySelector("#block");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const btn = document.createElement("button");
const h1 = document.createElement("h1");

input1.classList = "in1";
input2.classList = "in2";
btn.classList = "btn";
h1.classList = "h1";

btn.innerHTML = "CLICK";

h1.innerHTML = "?";

btn.onclick = () => {
  if (Number(input1.value) > Number(input2.value)) {
    h1.innerHTML = input1.value;
  } else Number(h1.innerHTML) = Number(input2.value);
};

block.append(input1, input2, btn, h1);
