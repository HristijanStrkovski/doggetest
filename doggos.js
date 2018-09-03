const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
const promise = fetch(BREEDS_URL);
const doggos = document.querySelector(".doggos")
const img = document.createElement("img");

promise.then(function(response){
    const processingPromise = response.json();
    return processingPromise;
}).then(function(processingPromise){
    img.src = processingPromise.message;
    img.alt = "cute doggo";
    doggos.appendChild(img);
})