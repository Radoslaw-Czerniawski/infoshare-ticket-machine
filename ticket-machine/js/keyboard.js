const addKeyboard = (ticket) => {
    const keyboardIcon = document.querySelector(".display-button");
    const keyboard = document.querySelector(".footer");
    const exitKeyboard = document.querySelector(".exit-button");
    const backspaceButton = document.querySelector(".backspace-button");
    const avalibleLettersStart = [...(new Set(ticket.cities.join("").toLocaleLowerCase().replace(/\s+/g, '')))].sort();
    const buttonsWrapper = document.querySelector(".buttons-wrapper");
    const input = document.querySelector("input");

    avalibleLettersStart.forEach(letter => {
        buttonsWrapper.innerHTML += `
            <button class="button mm m-1 is-size-4" letter="${letter}">${letter}</button>
        `
    })

    const keyboardButtons = document.querySelectorAll(".buttons-wrapper button");

    keyboardButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            input.value += e.currentTarget.innerHTML;
        })
    });

    const checkRows = () => {
        let rows = [];

        (document.querySelectorAll("tr[city]:not(.hide)")).forEach(row => {
            rows.push(row.getAttribute("city"));
        });

        rows = [...(new Set(rows.join("").toLocaleLowerCase().replace(/\s+/g, '')))].sort();

        keyboardButtons.forEach(button => {
            if (!rows.includes(button.innerHTML)) {
                button.setAttribute("disabled", "")
            } else {
                button.removeAttribute("disabled")
            }
        })

        requestAnimationFrame(checkRows);

    }

    checkRows();



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
        input.value = input.value.slice(0, -1);;
    })

}

export default addKeyboard;
