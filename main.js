document.addEventListener("DOMContentLoaded", function() {
    const wordList = document.getElementById("wordList");
    const transformedList = document.getElementById("transformedList");
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const transformButton = document.getElementById("transformButton");
    const revertButton = document.getElementById("revertButton");

    let words = ["apple", "grape", "banana"];

    function swapLetters(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    }

    words.forEach(word => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });

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

    let promptCount = 0;

    function promptForWord() {
        const userWord = prompt("Please enter a word (apple, grape, or banana):");
        if (userWord !== null) {
            if (userWord.toLowerCase() === "apple" || userWord.toLowerCase() === "grape" || userWord.toLowerCase() === "banana") {
                promptCount++;
                alert("Word entered: " + userWord);
                if(promptCount === 3) {
                    transformButton.disabled = false;
                }
            } else {
                alert("Please enter one of the allowed words: apple, grape, or banana");
            }
        } else {
            alert("No word entered");
        }
    }

    transformButton.disabled = true;

    setInterval(function() {
        if(promptCount < 3) {
            promptForWord();
        }
    }, 1000);
});

