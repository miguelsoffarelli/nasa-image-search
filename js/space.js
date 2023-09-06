let URL = "https://images-api.nasa.gov/search?q=";
const input = document.getElementById('inputBuscar');
const buscar = document.getElementById('btnBuscar');
const container = document.getElementById('contenedor');

function fetchData(){
    let SEARCH_URL = URL + input.value;
    console.log(SEARCH_URL)
    fetch(SEARCH_URL)
    .then(response => response.json())
    .then(data => {showResult(data.collection)})
}

function showResult(results) {
    let htmlContentToAppend = "";
try{
    for(result of results.items) {
        console.log("entró al for");
        console.log(results.items);
        console.log(result.links[0].href);
        htmlContentToAppend += `
        <div class="card m-3 col-md-4" style="width: 20%; height: 28rem">
            <div class="m-3">
                <img class="card-img-top" src="${result.links[0].href}" class="card-img-top" alt="${result.data[0].title}">
            </div>
            <div class="card-body overflow-auto">
                <h5 class="card-title">${result.data[0].title}</h5>
                <p class="card-text">${result.data[0].description}</p>
            </div>
        </div>
        `
    }}
    catch{
        console.log("error");
    }
    container.innerHTML = htmlContentToAppend;
}

buscar.addEventListener('click', () => {
    fetchData();
});