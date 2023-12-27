/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */


/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
const container = document.querySelector(".cardsContainer");
const favorites = "favorites";
const dataFav = "data-fav";
const root = document.documentElement;

function getStoredFavorites() {
    return localStorage.getItem(favorites) || "";
}

function setStoredFavorites(value) {
    localStorage.setItem(favorites, value);
}

function initializeBoxes() {
    const storedFavorites = getStoredFavorites();
    const initialItems = storedFavorites ? storedFavorites.split(', ') : [];

    initialItems.forEach(id => {
        const item = document.getElementById(id);
        if (item) {
            updateBoxState(item, true);
        }
    });
}

function updateBoxState(box, isFavorite) {
    const newState = isFavorite ? "true" : "false";
    box.setAttribute(dataFav, newState);

    if (isFavorite) {
        box.classList.add("red");
    } else {
        box.classList.remove("red");
    }
}

function addToLocalStorage(id) {
    const curValue = getStoredFavorites();
    const newValue = curValue.length === 0 ? id : `${curValue}, ${id}`;
    setStoredFavorites(newValue);
}

function callbackFn(e) {
    const box = e.target.closest(".card"); 
    
    if (box) {
        const isFavorite = box.getAttribute(dataFav) === "true";
        
        updateBoxState(box, !isFavorite);
        
        if (!isFavorite) {
            addToLocalStorage(box.id);
        } else {
            const newList = document.querySelectorAll(".card[" + dataFav + "='true']");
            const storageArr = Array.from(newList)
                .map(item => item.id)
                .join(", ");
            setStoredFavorites(storageArr);
        }
    }
}

container.addEventListener("click", callbackFn);

initializeBoxes();