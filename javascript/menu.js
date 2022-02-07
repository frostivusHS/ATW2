function showClassDropdown() {
    document.getElementById("class_dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


const options = ["All", "Neutral", "Dunter", "Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];
const menu = document.getElementById("class_dropdown");

for (let i = 0; i < options.length; i++) {
    const c =  options[i];
    let button = document.createElement("div");
    button.classList.add("dropoption");
    button.innerText = c;
    if (c == "Dunter") button.innerText = "Demon Hunter";
    button.onclick = function(event) {
        let x = document.getElementById("class_dropbtn");
        x.innerText = c;
        if (c == "Dunter") x.innerText = "Demon Hunter";
        x.innerText = "Cards: " + x.innerText;

        shownClass = c;
        showClass(document.getElementById("gallery"), shownClass, shownSets);
        window.scrollTo(0, 0);
        //showClass(document.getElementById("gallery"), c);
    }

    menu.appendChild(button);
}

const setbuttons = document.getElementsByClassName("setbutton");

for (let i = 0; i < setbuttons.length; i++) {
    const setIndex = i;
    setbuttons[i].onclick = function() {
        setbuttons[setIndex].classList.toggle("setbuttontoggled");
        shownSets[setIndex] = !shownSets[setIndex];
        
        let anyTrue = false;
        for (let j = 0; j < setbuttons.length; j++) {
            if (shownSets[j] == true) {
                anyTrue = true;
                break;
            }
        }

        if (!anyTrue) {
            for (let j = 0; j < setbuttons.length; j++) {
                if (j != setIndex) {
                  shownSets[j] = true;
                  setbuttons[j].classList.toggle("setbuttontoggled");
                  break;
                }
            }
        }

        showClass(document.getElementById("gallery"), shownClass, shownSets);
    }
}