const actors = document.querySelectorAll(".actor");

//Handler Helpers
const reset = () => {
    //Reset any highlighted to stanza titles
    let actorTitles = document.querySelectorAll(".stanza-title");
    actorTitles.forEach((title) => {
        title.style = "font-weight: normal; background-color: none;"
    });
    //Reset any highlighted to stanzas
    let actorStanzas = document.querySelectorAll(".stanza");
    actorStanzas.forEach((title) => {
        title.style = "background-color: none;"
    });
}
//TODO: Define onClick event handler
const handler = (event) => {
    const actorToHighlight = event.target.value;
    if (actorToHighlight == "") {
        reset();
        return false;
    }
    reset();
    //Get all of the <p> for the actor's stanza title
    let actorTitles = document.querySelectorAll(`.${actorToHighlight} .stanza-title`);
    //loop throught each element 
    actorTitles.forEach((title) => {
        //bold and highlight each element
        title.style = "font-weight: bold; background-color: lightgreen;";
    });

    //Get all stanzas
    let actorStanzas = document.querySelectorAll(`.${actorToHighlight} .stanza`);
    actorStanzas.forEach((stanza) => {
        stanza.style = "background-color: lightgreen;";
    });

    return true;
}

//TODO: ADD onCLick Listeners to each option
actors.forEach((actor) => {
    actor.addEventListener('click', handler);
});