const API = "https://pokeapi.co/api/v2/pokemon/"


const get = async () => {
    const name = document.getElementById("pokemon").value;
    document.getElementById("pokemon").value = "";

    const url = API + name.toLowerCase();
    const response = await fetch(url);
    const object = await response.json();

    console.log(object);

    document.getElementById("name").innerHTML = object.name;

    let abilities = object.abilities;
    for (let i = 0; i < abilities.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(abilities[i].ability.name));
        document.querySelector("ol").appendChild(li);
    }
    
}
