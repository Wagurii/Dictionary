const meaningElement = document.getElementById("meaning");
const searchButton = document.getElementById("search");
const inputField = document.getElementById("input");

async function fetchingData(word) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then(response => response.json());

    if (result.title) {
      meaningElement.innerText = "Meaning: N/A";
    } else {
      const meaning = result[0].meanings[0].definitions[0].definition;
      meaningElement.innerHTML = `Meaning <br><br>${meaning} `;

      
    }
  } catch (error) {
    console.error('Error');
  }
}

searchButton.addEventListener("click", () => {
  const word = inputField.value.trim();
  if (word) {
    fetchingData(word);
  } else {
    meaningElement.innerText = "Please enter a word";
  }
});
