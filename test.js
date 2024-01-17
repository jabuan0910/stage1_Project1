document.addEventListener("DOMContentLoaded", function() {
    const wordList = document.getElementById("wordList");
    const transformedList = document.getElementById("transformedList");
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const transformButton = document.getElementById("transformButton");
    const revertButton = document.getElementById("revertButton");

    let expectedWords = ["apple", "grape", "banana"];
    let words = [];

    for (let i = 0; i < expectedWords.length; i++) {
        let userWord = prompt(`Please enter the word "${expectedWords[i]}":`);
        if (userWord !== null && userWord.toLowerCase() === expectedWords[i]) {
            words.push(userWord);
        } else {
            alert(`You did not enter the word "${expectedWords[i]}". Please refresh and start again.`);
            return; // Exit the function if the wrong word is entered
        }
    }

    function swapLetters(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    }

    words.forEach(word => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });

    section1.style.display = 'block'; // Ensure section1 is visible initially

    transformButton.addEventListener("click", function () {
        const transformedWords = words.map(swapLetters);

        transformedList.innerHTML = '';
        transformedWords.forEach(word => {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            transformedList.appendChild(listItem);
        });

        section1.classList.add("hidden");
        section2.classList.remove("hidden");
        transformButton.classList.add("hidden");
        revertButton.classList.remove("hidden");
    });

    revertButton.addEventListener("click", function () {
        section1.classList.remove("hidden");
        section2.classList.add("hidden");
        transformButton.classList.remove("hidden");
        revertButton.classList.add("hidden");
    });
});
