// SETUP
const form = document.querySelector('form');
const btn1 = document.getElementById('button1');
const filler = document.querySelector("#result");

// Bind event listeners
form.addEventListener('submit', searchResults);
btn1.addEventListener('click', getAllResults);

function searchResults(e){
    e.preventDefault();
    filler.innerHTML = "";
    const cohort = e.target.input.value;
    fetch(`http://localhost:3000/data/cohort/${cohort}`)
        .then(res => res.json())
        .then(res => {
            let newList = document.createElement('li');
            let addLink = document.createElement('a');
            addLink.href = `${res.url}`;
            addLink.textContent = res.name;
            newList.appendChild(addLink);
            filler.append(newList);
        });
};

function getAllResults(e){
    e.preventDefault()
    filler.innerHTML = "";
    fetch('http://localhost:3000/data') 
    .then(res => res.json())
    .then(res => {
            // let data = [];
            res.forEach(element => {
                // console.log(element.name);
                // data.push(element.name);
                let newList = document.createElement('li');
                let addLink = document.createElement('a');
                addLink.href = `${element.url}`;
                addLink.textContent = element.name;
                newList.appendChild(addLink);
                filler.append(newList);
            });
            // console.log(data);
            // document.querySelector("#result").innerHTML = data;

        });
        // .then(res => {
        //     // console.log(res[0].name);
        //     data = res;
        //     console.log(data);
        // })
};
