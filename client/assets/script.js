const { findByName } = require("../../server/model/model");

// SETUP
const btn = document.getElementById('button1');
const button2 = document.getElementById('button2');



// Bind event listeners
btn.addEventListener('click', getAllResults);

button2.addEventListener('click', getOneResult );

// function getAllResults(){
//     let data = "" 
    // fetch('http://localhost:3000/data') 
    //     .then(res => res.json())
    //     .then(res => document.querySelector("#results").innerHTML = res)
    //     .then(res => {
    //         console.log(json[0]);
    //         // data = res;
    //         // console.log(data);
    //         // console.log(res)
    //     })
        function getAllResults(e){
            e.preventDefault()
            fetch('http://localhost:3000/data') 
                .then(res => res.text())
                .then(res => document.querySelector("#results").innerHTML = res)
                .then(res => {
                  
                    data = res;
                    console.log(data);
                    console.log(res)
                })


        .catch(console.log(err))
};

// function redirect(event) {
//     event.preventDefault();
//     fetch(`http://localhost:3000/data`)
//       .then(resp => resp.text())
//       .then(function(text){
//         if(text === "No result found"){
//           document.getElementById('log').innerHTML = text
//         }else{
//           window.location.replace(text);
//         }
//       }
//       )
    
//   }

function getOneResult(){
    fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then((data) => {
            let resources = data;
            console.log(data);
            resources.map(function(resource){
            let li = document.createElement("ul")
            let name = document.createElement("li");
            name.innerHTML = `${resource.name}`;
            li.appendChild(name);
            
            });
        });
        ul.appendChild(li);
};

// function getOneResult(){
//     fetch('http://localhost:3000/data')
//         .then(res => res.text())
//         .then(findByName => document.getElementById('result').innerHTML = findByName)
        
// }

