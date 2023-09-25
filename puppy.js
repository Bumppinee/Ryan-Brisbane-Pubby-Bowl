fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-C/players').then(response =>{
    return response.json()
    
  })
  .then(data =>{
    console.log(data.data.players);
    
    let data1='';

     data.data.players.map(user =>{
      data1+=` <div class="card">
      
      <img src=${user.imageUrl} width='200' alt="img">
      <p>${user.name}</p>
      <p class="category">${user.breed}</p>
      <button>Delete</button>
      </div>`
      
    })
    document.getElementById("cards").innerHTML=data1;

    div.addEventListener('click',(life)=>{
      if(life.target.tagname === "BUTTON"){
        const button = life.target;
        const card = button.parentNode;
        const cards = card.parentNode;
        if(button.textContent === 'Delete'){
          cards.removeChild(card)

        }

      }
    })

  })
  .catch (error =>{
    console.log(error)
  })