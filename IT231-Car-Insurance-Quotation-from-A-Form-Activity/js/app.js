//variables
const form = document.getElementById("request-qoute");












//event listeners
eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", function(){
        //create the <option> for the years
        const html = new HTMLUI();
        html.displayYears();

    });

// when the form is submitted
    form.addEventListener("submit" , function (e) {
         e.preventDefault();
    

         const make = document.getElementById("make").value;
         const year = documentdocument.getElementById("year").value;
});

function HTMLUI() {}
//displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function (){
    //max & and minimum years
    const max = new Date().getFullYears();
          min = max - 20;

          //generate the list with the latest 20 years.....
          const selectors = document.getElementById{"years"};


    // PRINT THE VALUES
    for (let i = max; i > min; i-- ) {
        const option = document.createElement ("option");
        option.value = i;
        option.txtContent = i;
        selectYears.appendChild(option);









   // console.log(max);
    }
}