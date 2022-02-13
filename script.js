let pastPresentFuture = document.querySelectorAll(".description");
const pastPresentFutureArr = Array.from(pastPresentFuture);
const saveButton = document.querySelectorAll(".btn")
console.log(pastPresentFutureArr)
console.log(saveButton)

//date display
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//change colour of textareas given it is past, present or future
for (i=0; i < pastPresentFutureArr.length; i++) {
    let pastPresentFutureEl = pastPresentFutureArr[i];
    let currentTime = parseInt(moment().format("k"));
    let pastPresentFutureVal = parseInt(pastPresentFutureEl.getAttribute("id"));

    if (pastPresentFutureVal == currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 present");
    } else if (pastPresentFutureVal < currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 past");
    } else if (pastPresentFutureVal > currentTime) {
        pastPresentFutureEl.setAttribute('class', "description col-md-10 future");
    }
}
// save button to save details of event to local storage
for (i=0; i < saveButton.length; i++) {
    let saveButtonEl = saveButton[i];
    saveButtonEl.addEventListener("click", function(event) {
        let buttonClassName = saveButtonEl.getAttribute("id")
        console.log(event)
        console.log(buttonClassName[buttonClassName.length-3]);
    
        let idx = buttonClassName[buttonClassName.length-2]+buttonClassName[buttonClassName.length-1];
        console.log(idx)
        if (idx[0] === "0") {
            idx = idx[1]
        }
        let eventText = document.getElementById(idx).value;

        console.log(eventText);
        localStorage.setItem("eventText", JSON.stringify(eventText));
    })
};

//recall events from local storage
function renderLastRegistered() {
    let eventText = JSON.parse(localStorage.getItem("eventText"));

    console.log(eventText);
    console.log(localStorage.getItem("eventText"))
}
renderLastRegistered();