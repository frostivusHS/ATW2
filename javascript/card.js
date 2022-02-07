/**
 * 
 * @param {Neutral | Dunter | Druid | Hunter | Mage | Paladin | Priest | Rogue | Shaman | Warlock | Warrior} hsClasses[] Can be multiple with classes for multi-class cards
 * @param {String} src Should be a link to the image file
 * @param {Number} set Which set it belongs to, shown by a numbe    r
 */
function Card(hsClasses, src, set) {
    //this.cost = cost;
    this.hsClasses = hsClasses;
    this.src = src;
    this.set = set;
}