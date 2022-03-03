function getAllResults(){
    let data =[] 
    fetch('http://localhost:3000/data')
        .then(r => r.json())
        // .then(r => document.querySelector("#results").innerHTML = r.content)
        .then(r => data = r)
        .catch(console.log(err))
};
function submitButton(e){
    e.preventDefault();
}


   
