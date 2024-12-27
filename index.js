const cats = ["Milo", "Otis", "Garfield"];

// Step 2: Destructive Functions
function destructivelyPrependCat(name) {
    cats.unshift(name); // Adds `name` to the beginning of the array
}

function destructivelyRemoveLastCat() {
    cats.pop(); // Removes the last cat from the array
}

function destructivelyRemoveFirstCat() {
    cats.shift(); // Removes the first cat from the array
}

// Step 3: Non-Destructive Functions
function appendCat(name) {
    return [...cats, name]; // Creates a new array with `name` added to the end
}

function prependCat(name) {
    return [name, ...cats]; // Creates a new array with `name` added to the beginning
}

function removeLastCat() {
    return cats.slice(0, -1); // Creates a new array excluding the last element
}

function removeFirstCat() {
    return cats.slice(1); // Creates a new array excluding the first element
}
function destructivelyAppendCat(name) {
    cats.push(name); // Appends a cat to the end of the `cats` array
}