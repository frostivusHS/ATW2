//import Card from "./card.js

/**
 * 
 * @param {HTMLDivElement} div 
 * @param {Card[]} cards
 * @param {Number} maxWidth
 */
function createGallery(div, cards, maxWidth) {
    
    div.innerHTML = "";
    setUpLibraryGrid(div, cards.length, maxWidth)

    for (let i = 0; i < cards.length; i++) {
        //let card = document.createElement("div");
        let wrapper = document.createElement("div");
        wrapper.classList.add("Card_Wrapper");

        let card = new Image();
        //card.src = "./images/card.png";
        card.src = cards[i].src;
        const index = i;
        card.onclick = function(event) {
            displayDetails(cards[index]);
        }
        card.classList.add("Card");
        for (let j = 0; j < cards[i].hsClasses.length; j++) {
            card.classList.add(`HsClass:${cards[i].hsClasses[j]}`)
        }
        card.classList.add(`HsSet:${cards[i].set}`);
//        console.log(`HsClass:${cards[i].hsClass}`);
        
        wrapper.append(card);
        div.append(wrapper);
    }
}

function setUpLibraryGrid(div, cardAmount, maxWidth) {
    const cardWidth = 200;
    const cardRatio = 1.43;
    const cardsPerRow = 5;
    const rows = Math.floor((cardAmount-1)/cardsPerRow) + 1;
    const cardGap = 5;

    div.style.width = `${cardsPerRow*cardWidth + (cardsPerRow-1)*cardGap}px`;
    div.style.height = `${rows*cardWidth*cardRatio + (rows-1)*cardGap}px`;
    div.style.display = "grid";
    div.style.gridTemplateColumns = `repeat(${cardsPerRow}, ${cardWidth}px)`;
    div.style.gridTemplateRows = `repeat(${rows}, ${cardWidth*cardRatio}px)`;
    div.style.gridColumnGap = `${cardGap}px`;
    div.style.gridRowGap = `${cardGap}px`;
    div.style.margin = "auto";
}

var shownClass = "All", shownSets = [true, true];
/**
 * 
 * @param {HTMLDivElement} div 
 * @param {All | Neutral | Dunter | Druid | Hunter | Mage | Paladin | Priest | Rogue | Shaman | Warlock | Warrior} hsClass 
 * @param {Boolean[]} sets Shows for each set whether it's shown or not
 */
function showClass(div, hsClass, sets) {
    const wrappers = div.getElementsByClassName("Card_Wrapper");
    let totalShown = 0;
    for (let i = 0; i < wrappers.length; i++) {
        
        let card = wrappers[i].getElementsByClassName("Card")[0];
        let hasClass = true, hasSet = false;
        if (hsClass != "All") {
            if (!card.classList.contains(`HsClass:${hsClass}`)) hasClass = false;
        }
        for (let j = 0; j < sets.length; j++) {
            if (sets[j] == true && card.classList.contains(`HsSet:${j}`)) {
                hasSet = true;
                break;
            }
        }

        if (hasClass && hasSet) {
            wrappers[i].style.display = "block";
            totalShown++;
        } else {
            wrappers[i].style.display = "none";
        }
    }
    setUpLibraryGrid(div, totalShown);
}


function loadFromFile(url) {
    $.getJSON(url, function(cards) {
        let finalCards = [];
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < cards[i].length; j++) {
                finalCards.push(cards[i][j]);
            }
        }
        createGallery(document.getElementById("gallery"), finalCards);
    })
}
//let arr = [1, 2, 3, 4, 5, 6];
// let arr = [new Card(["Priest"], "./images/card.png", 0),
//            new Card(["Druid", "Warrior"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Priest"], "./images/card.png", 0),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 1),
//            new Card(["Druid"], "./images/common.png", 0),
//            new Card(["Druid"], "./images/common.png", 0),
//            new Card(["Druid"], "./images/common.png", 0)];
// createGallery(document.getElementById("gallery"), arr);

loadFromFile("./cards.json");

//setTimeout(showClass(document.getElementById("test"), "Priest"), 100);