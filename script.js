function disableBtn() {
    document.getElementById("btn").disabled = true;
}

function enableBtn() {
    document.getElementById("btn").disabled = false;
}

async function fetchData() {
    disableBtn();
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        console.log(data);

        const img = document.querySelector("#img");
        img.setAttribute("src", data.results[0].picture.large);

        const name = document.querySelector("#api1");
        name.innerText = data.results[0].name.first;

        const age = document.querySelector("#api2");
        age.innerText = data.results[0].registered.age;

        const mail = document.querySelector("#api3");
        mail.innerText = data.results[0].email;

        const location = document.querySelector("#api4");
        location.innerText = data.results[0].location.city;

        const phone = document.querySelector("#api5");
        phone.innerText = data.results[0].phone;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    enableBtn();
}

fetchData();




function refresh() {
    fetchData()
}

