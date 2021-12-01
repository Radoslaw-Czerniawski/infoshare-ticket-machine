const searchTable = () => {
    const input = document.querySelector("input");
    const cityRows = [...document.querySelectorAll("tr[city]")];

    const checkRows = () => {
        cityRows.forEach(row => {
            if(!row.getAttribute("city").toLowerCase().includes(input.value.toLowerCase())) {
                row.classList.add("hide");
            } else {
                row.classList.remove("hide");
            }
        })

        requestAnimationFrame(checkRows);
    }

    checkRows();
};

export default searchTable;
