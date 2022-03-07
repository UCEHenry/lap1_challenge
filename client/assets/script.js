// SETUP
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');

// Bind event listeners
btn1.addEventListener('click', getAllResults);
btn2.addEventListener('click', getOneResult);

function getAllResults(e){
    e.preventDefault()
    fetch('http://localhost:3000/data') 
    .then(res => res.json())
    .then(res => {
            let data = [];
            res.forEach(element => {
                console.log(element.name);
                data.push(element.name);
            });
            console.log(data);
            document.querySelector("#result").innerHTML = data;

        });
        // .then(res => {
        //     // console.log(res[0].name);
        //     data = res;
        //     console.log(data);
        // })
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
        .then(data => {
            let resources = data;
            console.log(data);

            resources.map(function(resource) {
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

