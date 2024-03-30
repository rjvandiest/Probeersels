// fetch("data.txt").then((response) => {
//     return response.text();
// }).then((data) => {
//     const myData = JSON.parse(data);
//     console.log(myData[1].city);
// }).catch((error) => {
//    console.error("Failed to get data: " , error); 
// })

let char_list = document.querySelector("#char_list");

for (let i = 1; i < 200; i++) {

    fetch(`https://swapi.dev/api/people/${i}/`).then((response) => {
        return response.text();
    }).then((data) => {
        const myData = JSON.parse(data);

        let tr = document.createElement("tr");
        tr.innerHTML =
                `
                <td>${i}</td>
                <td>${myData.name}</td>
                <td>${myData.height}</td>
                <td>${myData.hair_color}</td>`;

        char_list.appendChild(tr);
    }).catch((error) => {
    console.error("something went wrong: " , error); 
    })

}