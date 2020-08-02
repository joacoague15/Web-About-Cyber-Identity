var nivel = 1;

function ascension() {
  var money = document.getElementById('money');
  var howMuch = parseInt(money.innerHTML);
  if (howMuch > 10000) {
    howMuch -= 10000;
    money.innerHTML = howMuch;
    nivel++;
  }

  // A qué asciende
  var rankPersonal = document.getElementById('clasificacion');
  if (nivel == 2) {
    rankPersonal.innerHTML = "Avanzado";
  }
  else if (nivel == 3) {
    rankPersonal.innerHTML = "Experimentado";
  }
  else if (nivel == 4) {
    rankPersonal.innerHTML = "Maestro";
  }
  else if (nivel == 5) {
    rankPersonal.innerHTML = "Oro";
  }
  else if (nivel == 6) {
    rankPersonal.innerHTML = "Rubi";
  }
  else if (nivel == 7) {
    rankPersonal.innerHTML = "Esmeralda";
  }
  else if (nivel == 8) {
    rankPersonal.innerHTML = "Diamante";
  }
}

function investment1() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 4) {
    moneyInt += 40;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 40;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment2() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 9) {
    moneyInt += 80;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 80;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment3() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 14) {
    moneyInt += 160;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 120;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment4() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 19) {
    moneyInt += 240;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 200;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment5() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 24) {
    moneyInt += 320;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 280;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment6() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 29) {
    moneyInt += 480;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 360;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment7() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 34) {
    moneyInt += 720;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 500;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment8() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 39) {
    moneyInt += 1000;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 720;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment9() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 34) {
    moneyInt += 1400;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 1150;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment10() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 39) {
    moneyInt += 1800;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 1400;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment11() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 44) {
    moneyInt += 2400;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 2000;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}

function investment12() {
  var money = document.getElementById('money');
  var moneyInt = parseInt(money.innerHTML);
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 49) {
    moneyInt += 3200;
    money.innerHTML = moneyInt;
    money.style.color = "green";
  }
  else {
    moneyInt -= 2800;
    money.innerHTML = moneyInt;
    money.style.color = "red";
  }
}
