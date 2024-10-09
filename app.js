//APUNTAR AL DIV
const ball = document.querySelector("div");
const massage = document.querySelector("h1");

const eightball = ()=>  {
  const x = Math.floor(Math.random() * 7);
  switch (x) {
    case 0:
      massage.innerText = "se que puedes lograrlo";
      break;
    case 1:
      massage.innerText = "ES MEJOR CORRER QUE QUEDARTE";
      break;
    case 2:
      massage.innerText = "PERO QUE LADRA NO MUERDE";
      break;
    case 3:
      massage.innerText = "PAPU";
      break;
    case 4:
      massage.innerText = "XD";
      break;
    case 5:
      massage.innerText = ":v";
      break;
    case 6:
      massage.innerText = ":/";
      break;
  }
};

ball.addEventListener("click", eightball);
