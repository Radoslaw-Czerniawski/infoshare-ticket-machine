import searchTable from "./search.js";
import addTicket from "./addToCart.js";
import addKeyboard from "./keyboard.js";
const createTable = () => {
    const button = document.querySelector(".button");

    const renderRows = (cities) => {
        return cities.map((user, id)  => {
            return `
            <tr city="${user.city}">
                <th>${id+1}</th>
                <th>
                    <div class="is-flex is-justify-content-space-between">
                        <span>${user.city}</span>
                        <button href="#" city="${user.city}" price="${(user.distance * 4.2).toFixed(2)}" class="button ml-4 is-small is-rounded is-primary is-outlined">Add to cart</button>
                    </div>
                </th>
                <td>${user.distance}</th>
            </tr>
            `
        }).join("\n");
    };
    const renderTable = (users) => {
        const table = `
        <table class="table is-fullwidth is-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>City</th>
                    <th>Ticket-machine distance</th>
                </tr>
            </thead>
            <tbody>
                ${renderRows(users)}
            </tbody>
        </table>
        `;

        const div = document.createElement("div");
        div.innerHTML = table;
        document.querySelector(".container").append(div);
    };

    window.addEventListener("load", () => {
        fetch("../data/cities.json")
            .then((res) => res.json())
            .then((data) => {
                data.sort((a, b) => a.distance - b.distance);
                renderTable(data);
                button.remove();
                searchTable();
                addKeyboard(addTicket());
            })
    });
};

export default createTable;
