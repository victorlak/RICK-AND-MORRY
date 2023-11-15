let divCards = document.querySelector("#pai-card")
let urlBase = "https://rickandmortyapi.com/api/"
let cont = 1


async function getAllPersons(){
    let personagens = await axios.get(urlBase+"character/?page="+cont)
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

let spam = document.querySelector("#number")
let anterior = document.querySelector("#btn-ant")
let proximo = document.querySelector("#btn-prox")

function resetaCards(){
    divCards.innerHTML = ""
}


anterior.addEventListener('click',()=>{
    if(cont > 1){
    cont = cont - 1
    spam.textContent = cont
    resetaCards()
    getAllPersons()
    }
    
})
proximo.addEventListener('click',()=>{
    if(cont < 42){
    cont = cont + 1
    spam.textContent = cont
    resetaCards()
    getAllPersons()
    }
    
})








