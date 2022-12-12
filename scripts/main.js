const actors = document.querySelectorAll(".actor");

//TODO: Define onClick event handler
const handler = (event) => {
    const actorToHighlight = event.target.value;

    //Get all of the <p> for the actor
    //loop throught each element and assign a background-color of yellow
}

//TODO: ADD onCLick Listeners to each option
actors.forEach((actor) => {
    actor.addEventListener('click',handler);
});