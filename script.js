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
          <button id = ${index} type="button" class="btn-fav btn btn-dark">Favoritar</button>
        </div>
      </div>`

      let cardsFav = []
      let BtnFavoritos =  document.querySelectorAll('.btn-fav')

      BtnFavoritos.forEach(btn => {
        btn.addEventListener('click', ()=>{
          let index = Number(btn.id)
          let card = personagens[index]

          if(btn.textContent === "Favoritar"){
            btn.textContent = "Favoritado"
            btn.classList.add('Favoritado')
          }else{
            btn.textContent = "Favoritar"
            btn.classList.remove('Favoritado')
          }

          if(localStorage.getItem("fav")!== null)
          cardsFav = JSON.parse(localStorage.getItem("fav"))
          
            let response = cardsFav.find((element,index,array)=>{
              return element.id === card.id
            })
            
            if(response === undefined)
              cardsFav.push(card)
            
              
            
          localStorage.setItem('fav',JSON.stringify(cardsFav))

          let botoesFavoritar = document.querySelectorAll(".btn-fav")

          




          /*
          if(cardsFav.length === 0){
            cardsFav.push(card)
            localStorage.setItem('cards-fav',JSON.stringify(cardsFav))
          }else{
          cardsFav.forEach((elemento,index,array)=>{
            if(card.id === elemento.id){
              console.log("ja tem");
            }else{
              cardsFav.push(card)
              localStorage.setItem('cards-fav',JSON.stringify(cardsFav))
            }
            )}
          */
        });
      });

      
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


 









