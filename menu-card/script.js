fetch("data.json")
.then(function(response){
     return response.json();
})

.then(function(data){
    let output="";
    let placeholder = document.querySelector("#main");
    for(let i of data){
        output +=`
            <div class="card">
                <img src="${i.image}" alt="biriyani">
                <div class="card-content">
                    <h5>${i.tag}</h5>
                    <h3>${i.price}</h3>
                    <h4>${i.name}</h4>      
                    <p>${i.rating}</p>
                </div>  
            </div> `;
    }
    placeholder.innerHTML=output;

})