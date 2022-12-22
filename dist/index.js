var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const base_url = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
let counter = 0;
function getBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${base_url}`);
        const bookList = yield response.json();
        for (let index = 0; index < bookList.length; index++) {
            counter = 0;
            let temp = document.createElement("section");
            let placement = document.querySelector(".visual");
            temp.appendChild(document.createElement('h1')).textContent = bookList[index].title;
            temp.appendChild(document.createElement('h2')).textContent = bookList[index].author;
            //tomorrow maybe create another element for vertical line.
            placement.insertBefore(temp, placement.children[index]);
            temp.style.backgroundImage = `linear-gradient(to bottom left,rgb(232, 232, 232),${bookList[index].color})`;
            temp.onclick = () => {
                if (counter == 1) {
                    this.onclick = null;
                }
                else {
                    hideBooks(bookList[index], bookList);
                    showInfo(bookList[index]);
                    counter = counter + 1;
                }
            };
        }
    });
}
function hideBooks(input, input2) {
    let backgroundVisuals = document.querySelector('.visual');
    let bookVisuals = document.querySelectorAll('section');
    for (let index = 0; index < input2.length; index++) {
        if (input2[index].id == input.id) {
            document.getElementById("bod").style.backgroundColor = "rgb(15, 15, 15)";
            bookVisuals[index].style.height = "500px";
            bookVisuals[index].style.width = "350px";
            bookVisuals[index].style.margin = "5px";
            backgroundVisuals.style.height = "100vh";
            backgroundVisuals.style.justifyContent = "center";
            backgroundVisuals.style.alignItems = "center";
        }
        else {
            bookVisuals[index].style.display = 'none';
        }
    }
}
function showInfo(input) {
    let backgroundVisuals = document.querySelector('.visual');
    let textGen = document.createElement("section");
    let boxGen = document.createElement("article");
    let reset = document.createElement("h3");
    backgroundVisuals.appendChild(textGen);
    textGen.appendChild(document.createElement('h3')).textContent = input.title;
    textGen.appendChild(document.createElement('h4')).textContent = input.author;
    textGen.appendChild(document.createElement('p')).textContent = input.plot;
    textGen.style.height = "500px";
    textGen.style.display = "flex";
    textGen.style.width = "350px";
    textGen.style.flexDirection = "column";
    textGen.style.justifyContent = "center";
    textGen.appendChild(boxGen);
    boxGen.appendChild(document.createElement('h4')).textContent = `Audience: ${input.audience}`;
    boxGen.appendChild(document.createElement('h4')).textContent = `First Published: ${input.year}`;
    boxGen.appendChild(document.createElement('h4')).textContent = `Pages: ${input.pages}`;
    boxGen.appendChild(document.createElement('h4')).textContent = `Publisher: ${input.publisher}`;
    boxGen.style.display = "flex";
    boxGen.style.backgroundColor = "rgb(39, 39, 39)";
    boxGen.style.flexDirection = "row";
    boxGen.style.flexWrap = "wrap";
    boxGen.style.fontSize = "medium";
    boxGen.style.width = "350px";
    boxGen.style.height = "70px";
    boxGen.style.margin = "0";
    boxGen.style.padding = "5px";
    boxGen.style.justifyContent = "space-between";
    boxGen.style.alignContent = "center";
    backgroundVisuals.appendChild(reset).textContent = "<=";
    reset.style.position = "absolute";
    reset.style.top = "2rem";
    reset.style.left = "2rem";
    reset.onclick = () => {
        window.location.reload();
    };
}
getBooks();
export {};
