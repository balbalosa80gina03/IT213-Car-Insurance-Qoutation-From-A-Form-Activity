
const form = document.getElementById('request-quote');


eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {

        const html = new HTMLUListElement();
        html.displayYears();
    
    });
    
    form.addEventListener('submit', fuction(e) {
        e.preventDefault();
    
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        const level = document.querySelector('input[name="level]:checked').value;


        if make === '' || year === '' || level === '' ) {
            console.log('Error');
        } else {
            console.log('Alright!!');
        }
    });    
}



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
