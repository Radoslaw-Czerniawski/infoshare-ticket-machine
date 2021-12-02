const getUniqueLettersFromVisibleCities = (cities) => {
    return [...(new Set(cities.join("").toLocaleLowerCase().replace(/\s+/g, '')))].sort();
}

const addKeyboard = (ticket) => {
    const keyboardIcon = document.querySelector(".display-button");
    const keyboard = document.querySelector(".footer");
    const exitKeyboard = document.querySelector(".exit-button");
    const backspaceButton = document.querySelector(".backspace-button");
    const avalibleLettersStart = [...(new Set(ticket.cities.join("").toLocaleLowerCase().replace(/\s+/g, '')))].sort();
    const buttonsWrapper = document.querySelector(".buttons-wrapper");
    const input = document.querySelector("input");
    const event = new Event("input");

    avalibleLettersStart.forEach(letter => {
        buttonsWrapper.innerHTML += `
            <button class="button mm m-1 is-size-4" letter="${letter}">${letter}</button>
        `
    })

    const keyboardButtons = document.querySelectorAll(".buttons-wrapper button");

    keyboardButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            input.value += e.currentTarget.innerHTML;
            input.dispatchEvent(event);
        })
    });

    const disableOrEnableLettersBasedOnAvailableLetters = (letters) => {
        keyboardButtons.forEach(button => {
            if (!letters.includes(button.innerHTML)) {
                return button.setAttribute("disabled", "")
            }
            button.removeAttribute("disabled")
        });
    }

    const checkRows = () => {
        const visibleCities = [...document.querySelectorAll("tr[city]:not(.hide)")].map(row =>
            row.getAttribute("city")
        );

        const avalibleLetters = getUniqueLettersFromVisibleCities(visibleCities);

        disableOrEnableLettersBasedOnAvailableLetters(avalibleLetters);
    }

    keyboardIcon.addEventListener("click", () => {
        console.log(keyboard.classList);
        keyboard.classList.remove("hide");
        keyboardIcon.classList.add("hide");
    })

    exitKeyboard.addEventListener("click", () => {
        keyboard.classList.add("hide");
        keyboardIcon.classList.remove("hide");
    })

    backspaceButton.addEventListener("click", () => {
        input.value = input.value.slice(0, -1);
        input.dispatchEvent(event);
    })

    input.addEventListener("input", () => {
        checkRows();
    })

}

export default addKeyboard;
