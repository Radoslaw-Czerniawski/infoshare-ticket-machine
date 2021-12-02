const addTicket = () => {
    const addTicketButtons = [...document.querySelectorAll("button[city]")];
    const counter = document.querySelector(".container3 th:nth-child(2)");
    const ticket = {
        cities: addTicketButtons.map(city => {
            return city.getAttribute("city");
        }),
        prices: addTicketButtons.map(price => {
            return parseFloat(price.getAttribute("price"));
        }),
        ticketsAmount: new Array(50).fill(0),
        ticketsPrice: new Array(50).fill(0),
    }
    let count = 0;

    const updateDisplay = () => {
        counter.innerHTML = `${count.toFixed(2)}`;
    }


    const renderRows = (city, price, amount, id) => {
        const renderRow = (city, price, amount) => {
            return `
                <th>${city}</th>
                <th>${amount}</th>
                <th>${price}</th>
            `
        };

        const tr = document.createElement("tr")
        tr.setAttribute("id", `${id}`);
        tr.innerHTML = renderRow(city,price, amount);
        document.querySelector(".container2 table tbody").append(tr);
    };

    addTicketButtons.forEach((button, id) => {
        button.addEventListener("click", () => {
            const currentAmount = ++ticket.ticketsAmount[id];

            if (count > 100) {
                ticket.ticketsPrice[id] += ticket.prices[id] - ( 0.2 * ticket.prices[id]);
                count += ticket.prices[id] - ( 0.2 * ticket.prices[id]);
            } else {
                ticket.ticketsPrice[id] += ticket.prices[id];
                count += ticket.prices[id];
            }

            if(ticket.ticketsAmount[id] <= 1) {
                renderRows(ticket.cities[id], ticket.ticketsPrice[id].toFixed(2), ticket.ticketsAmount[id], id)
            } else {
                const amount = document.querySelector(`tr[id="${id}"] th:nth-child(2)`)
                const price = document.querySelector(`tr[id="${id}"] th:nth-child(3)`)

                amount.textContent = `${currentAmount}`;
                price.textContent = `${ticket.ticketsPrice[id].toFixed(2)}`;
            }
            updateDisplay();
        });
    });
    return ticket;
};

export default addTicket;
