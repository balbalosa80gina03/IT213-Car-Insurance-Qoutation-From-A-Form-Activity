






document.addEventListener('DOMContentLoaded', function() {

    const html = new HTMLUListElement();
    html.displayYears();

});





function HTMLUI() {}


HTMLUI.prototype.displayYears = function() {

    const max = new Date().getFullYears(),
          min = max - 20;

    const selectYears = document.getElementById('year');



    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent =i;
        selectYears.appendChild(option);
    }
}
