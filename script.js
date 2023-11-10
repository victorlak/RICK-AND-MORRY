let divCards = document.querySelector("#pai-card")
let urlBase = "https://rickandmortyapi.com/api/"

async function getAllPersons(){
    let personagens = await axios.get(urlBase+"character/?page=2")
    personagens = personagens.data.results

    personagens.forEach((element,index,array) => {
        divCards.innerHTML = divCards.innerHTML +`<div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <ul>
            <li>Gênero:${element.gender}</li>
            <li>Planeta:${element.origin.name}</li>
            <li>Espécie:${element.species}</li>
          </ul>
          <button type="button" class="btn btn-dark">Favoritar</button>
        </div>
      </div>`
    });
}

let personagens = getAllPersons();

