var keyWords = [
  "Father",
  "father",
  "Papa",
  "papa",
  "Papi",
  "papi",
  "Daddy",
  "daddy",
  "Dad",
  "dad"
];
for (var i = 0; i < keyWords.length; i++) {
  document.body.innerHTML = document.body.innerHTML
    .replace(new RegExp(keyWords[i], "g"), "Peter Bakke");
}