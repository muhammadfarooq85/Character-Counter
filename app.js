console.log("hello From Character Counter...");

const textInput = document.getElementById("textInput");
const totalChars = document.getElementById("totalChars");
const totalWds = document.getElementById("totalWords");
const totalSents = document.getElementById("totalSentences");

textInput.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  const totalCharacters = inputValue.length;
  const totalWords = inputValue
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0).length;
  const totalSentences = inputValue
    .split(/[.!?]+/)
    .filter(sentence => sentence.trim().length > 0).length;
  totalChars.innerText = totalCharacters;
  totalWds.innerText = totalWords;
  totalSents.innerText = totalSentences;
});
