let detailsScreen = document.getElementById("cardDetailsScreens");
detailsScreen.onclick = function(event) {
    detailsScreen.style.display = "None";
}

/**
 * 
 * @param {Card} card 
 */
function displayDetails(card) {
    detailsScreen.style.display = "Block";
    document.getElementById("showcasedCard").src = card.src;

    let info = document.getElementById("showcasedInfo");

    info.innerHTML = "";
    info.innerHTML += "<p1> <i> Extra Card Details: </i> </p1> <br>";
    
    let moreDetails = false;

    if (card.tokens !== undefined) {
        moreDetails = true;
        info.innerHTML += "<p2>Tokens: </p2> <br>";
        for (let i = 0; i < card.tokens.length; i++) {
            let img = new Image();
            img.src = card.tokens[i];
            img.classList.add("token");
            info.append(img);
        }
    }

    if (card.keywords !== undefined) {
        moreDetails = true;
        info.innerHTML += "<br> <p2>Keywords: </p2> <br></br>";
        for (let i = 0; i < card.keywords.length; i++) {
            let img = new Image();
            img.src = card.keywords[i];
            img.classList.add("keyword");
            info.append(img);
        }
    }

    if (!moreDetails) {
        info.innerHTML += "<p1>None</p1>";
    }
}