const searchTable = () => {
    const input = document.querySelector("input");
    const cityRows = [...document.querySelectorAll("tr[city]")];

    const checkRows = () => {
        cityRows.forEach(row => {
            showOrHideRowBasedOnSearchInput(row);
        })
    }

    const showOrHideRowBasedOnSearchInput = (row) => {
        if(!doesCityNameContainSearchedValue(row.getAttribute("city"))) {
            return row.classList.add("hide");
        }
        row.classList.remove("hide");
    }

    const doesCityNameContainSearchedValue = (city) => city.toLowerCase().replace(/\s+/g, '').includes(input.value.toLowerCase())

    input.addEventListener("input", () => {
        checkRows();
    });
};

export default searchTable;
