
const form = document.getElementById('request-quote');

const html = new HTMLUI();

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {

        
        html.displayYears();
    
    });
    
    form.addEventListener('submit', fuction(e) {
        e.preventDefault();
    
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        const level = document.querySelector('input[name="level]:checked').value;


        if make === '' || year === '' || level === '' ) {
            html.displayError('All the fields are mandatory');

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


HTMLUI.prototype.displayError = function(message) {

    const div = document.createdElement('div');
    div.classList = 'error';

    div.innerHTML = '
        <p>${message}</p>
    ';

    form.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        document.querySelector('.error').remove();
    },3000);
}