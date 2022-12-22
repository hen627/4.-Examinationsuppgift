import { books } from "./interface";

const base_url = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
let counter: number = 0;

async function getBooks() {
    const response = await fetch(`${base_url}`);
    const bookList: books = await response.json();
    


for (let index = 0; index < bookList.length; index++) {
    counter = 0;
    let temp: HTMLElement = document.createElement("section");
    let placement: Element = document.querySelector(".visual");
    temp.appendChild(document.createElement('h1')).textContent= bookList[index].title;
    temp.appendChild(document.createElement('h2')).textContent= bookList[index].author;
    //tomorrow maybe create another element for vertical line.
    placement.insertBefore(temp, placement.children[index]);
    temp.style.backgroundImage = `linear-gradient(to bottom left,rgb(232, 232, 232),${bookList[index].color})`;
    temp.onclick = () => {
        if (counter ==1){
            this.onclick=null;
        }
        else{
        hideBooks(bookList[index],bookList);
        showInfo(bookList[index]);
        counter = counter +1;
        }
    }
}

}

function hideBooks(input,input2){
    let backgroundVisuals: HTMLElement = document.querySelector('.visual');
    let bookVisuals: NodeListOf<HTMLElement> = document.querySelectorAll('section');


    
    for (let index = 0; index < input2.length; index++) {
        if (input2[index].id == input.id){
        document.getElementById("bod").style.backgroundColor = "rgb(15, 15, 15)";
        bookVisuals[index].style.height = "500px"; 
        bookVisuals[index].style.width = "350px";
        bookVisuals[index].style.margin = "5px";
        backgroundVisuals.style.height = "100vh";
        backgroundVisuals.style.justifyContent ="center";
        backgroundVisuals.style.alignItems = "center";
        }
        else{
        bookVisuals[index].style.display ='none';  
        }
    
    }
    }

function showInfo(input){
    let backgroundVisuals: HTMLElement = document.querySelector('.visual');
    let textGen: HTMLElement = document.createElement("section");
    let boxGen: HTMLElement = document.createElement("article");
    let reset: HTMLElement = document.createElement("h3");



    backgroundVisuals.appendChild(textGen);
    textGen.appendChild(document.createElement('h3')).textContent= input.title;
    textGen.appendChild(document.createElement('h4')).textContent= input.author;
    textGen.appendChild(document.createElement('p')).textContent= input.plot;
    textGen.style.height ="500px";
    textGen.style.display ="flex";
    textGen.style.width ="350px";
    textGen.style.flexDirection = "column";
    textGen.style.justifyContent = "center";
    textGen.appendChild(boxGen);
    boxGen.appendChild(document.createElement('h4')).textContent= `Audience: ${input.audience}`;
    boxGen.appendChild(document.createElement('h4')).textContent= `First Published: ${input.year}`;
    boxGen.appendChild(document.createElement('h4')).textContent= `Pages: ${input.pages}`;
    boxGen.appendChild(document.createElement('h4')).textContent= `Publisher: ${input.publisher}`;
    boxGen.style.display = "flex";
    boxGen.style.backgroundColor = "rgb(39, 39, 39)";
    boxGen.style.flexDirection = "row";
    boxGen.style.flexWrap = "wrap";
    boxGen.style.fontSize = "medium";
    boxGen.style.width ="350px";
    boxGen.style.height ="70px";
    boxGen.style.margin ="0";
    boxGen.style.padding ="5px";
    boxGen.style.justifyContent ="space-between";
    boxGen.style.alignContent ="center";
    backgroundVisuals.appendChild(reset).textContent = "<="
    reset.style.position = "absolute";
    reset.style.top = "2rem";
    reset.style.left = "2rem";

    reset.onclick = () => {
        window.location.reload();
    }





    







    
}


getBooks(); 
