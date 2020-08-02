function newId() {
  var names = ["Alexia", "Scott", "Carbin", "Wils", "Kai", "Thadd", "Sanya", "Kaela", "Jaleah", "Aryan", "Jaden", "Drick", "Cayeden", "Xavis", "Koba", "Edam", "Marwin", "Anahi", "Lucira"];
  var lastNames = ["Muliere", "Israelachvili", "Weinshenker", "Mezzenga", "Sloss", "Lamphear", "Coy", "Deknis", "Zei", "Tanowitz", "Wakeling", "Whilley", "Ventura", "Fazzone", "Sanger", "Farver", "Kishlansky"];
  var namesLength = names.length;
  var lastNamesLength = lastNames.length;
  var newName = document.getElementById('newName');
  var newLastName = document.getElementById('newLastName');

  newName.innerHTML = names[Math.floor(Math.random() * (namesLength - 0) - 0)];
  newLastName.innerHTML = lastNames[Math.floor(Math.random() * (lastNamesLength - 0) - 0)];
}
