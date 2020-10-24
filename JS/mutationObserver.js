/*
MutationObserver is a Web API provided by modern browsers for detecting
changes in the DOM.

-> MutationObserver instance is created by passing a function that would be called everytime
a mutation has occurred. The first argument is collection of all mutations which have occured in single batch.
Each mutation has its type and changes which have occurred.

*/

const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log("mutation", mutation)
    })
})

/*
observe — starts listening for changes. Takes two arguments —
the DOM node you want to observe and a settings object

disconnect — stops listening for changes

takeRecords — returns the last batch of changes before the callback has been fired.
*/

mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});

// to stop mutation observer

mutationObserver.disconnect();

// css animations example

var insertionListener = function (event) {
    // Making sure that this is the animation we want.
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: " + event.target);
    }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari
