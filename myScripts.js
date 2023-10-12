
var pokemonList = $('#pokemonList');
var dexorname = $('#dexorname');
var tableBody = $('#tableBody');
var myForm = $('#myForm');

// Alphabetical Sort Function
function alphaSort() {
    pokemon.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
    })
};
// Numerical Sort Function
function numSort() {
    pokemon.sort((a, b) => {
        if (a.dex < b.dex) return -1;
        if (a.dex > b.dex) return 1;
        return 0;
    })
};
function appendList() {
    $(pokemon).each(function (i) {
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(pokemon[i].name));
        $row.append($('<td></td>').text(pokemon[i].dex))
        $row.append($('<td></td>').text(pokemon[i].type))
        tableBody.append($row);
    })
};

/* This sorts and displays the list of pokemon in alphabetical order*/
alphaSort();    
appendList();

/*Event Listener to sort alphabetically or Numerically*/
dexorname.on('change', function () {
    $('#tableBody').empty(); // Clear out the Table
    const selected = $(this).val(); //  get the value of the selected option
    if (selected === "name") { 
        alphaSort(); // If the value is "name", sort alphabetically
    }

    else if (selected === "dex") {
        numSort(); // If the value is "dex", sort numerically
    }
    var active = $('.active');
    $(active).click(); // Afterwards, update the DOM by 'clicking' a button to reset
});

/*Button Event Listener for Pokemon Types*/
$('.mybtn').click(function () {
    
    $('#tableBody').empty(); // Clearing Out Table Rows
    $('.active').removeClass('active'); // removing the active class from the buttons
    $(this).addClass('active'); // reapplies the 'active' class to the button that was pressed 
    var idVal = $('.active').attr('id'); // Create a variable that contains the id of the active class

    /*Filtering the pokemon types*/
    $(pokemon).each(function (i) {
        if (pokemon[i].type === idVal) { // If the ID of the button clicked is a pokemons type, add it to a new row
            var $row = $('<tr></tr>');
            $row.append($('<td></td>').text(pokemon[i].name));
            $row.append($('<td></td>').text(pokemon[i].dex)) // Appending values
            $row.append($('<td></td>').text(pokemon[i].type))
            tableBody.append($row); // Finally, append the row to our table
        }
        else if ($.isArray(pokemon[i].type)) { // Dual types are stored in a nested array. If the type of a pokemon is an array then...
            var typeArray = pokemon[i].type;
            $(typeArray).each(function (j) { // Loop through the nested array 
                if (typeArray[j] === idVal) { // If the type value is the same to what we are looking for...
                    var $row = $('<tr></tr>');
                    $row.append($('<td></td>').text(pokemon[i].name));
                    $row.append($('<td></td>').text(pokemon[i].dex)) // Append those values to their columns
                    $row.append($('<td></td>').text(pokemon[i].type))
                    tableBody.append($row); // Append our row to the table
                }
            })
        }
        else if (idVal === "all") { // If the button clicked was "Show All", no need to filter, display all pokemon 
            appendList();
            return false // break the loop
        }
    });
});

// Get the modal and buttons
var modal = $('.modal');
var openModal = $('#showForm');
var closeBtn = $('.close');

// When the Open Modal button is clicked
$(openModal).click(function () {
    $("#myModal").css("display", "block");
    $('#pokemonName').focus();
});

// When the Close button is clicked
$(closeBtn).click(function () {
    $(modal).css("display", "none");
});

// When the user clicks outside the modal, close it
$(window).click(function (event) {
    if (event.target == document.getElementById('myModal')) {
        $(modal).css("display", "none");
    }
});

$(window).click(function (event) {
    if (event.target == document.getElementById('removeModal')) {
        $(modal).css("display", "none");
    }
});

// When the User clicks the submit button
$('#mySubmit').click(function () {
    var pokemonName = $('#pokemonName').val();
    var pokemonDex = $('#pokemonDex').val();
    var pokemonType1 = $('#pokemonType1').val().toLowerCase();
    var pokemonType2 = $('#pokemonType2').val().toLowerCase();
    var myObject = {};

    // If required entry are empty, form and modal acts normally and waits for input
    if (pokemonName === '' || pokemonDex === '' || pokemonType1 === '') {
        return true
    }
    // If all required entry fields are present, prevent default and perform this code
    else {
        event.preventDefault();
        if (pokemonType2) { // If there are two pokemon types, create an array
            myObject = {
                name: pokemonName,
                dex: pokemonDex,
                type: [pokemonType1, pokemonType2]
            }
        }
        else { // Otherwise, just place singular pokemon type into my pokemon object
            myObject = {
                name: pokemonName,
                dex: pokemonDex,
                type: pokemonType1
            };
        }
        // Push the object into my pokemon array and close the modal
        pokemon.push(myObject);
        $(closeBtn).click();
    }
    // Reset the Form afterwards
    myForm[0].reset();
    var active = $('.active');
    $(active).click(); // CLICKS whatever button has the active class
});


/*Modal Code for the Removing function */
// Get the variable names for modal and modal buttons
var removeButton = $('#removeItemButton');
var removeForm = $('#myRemoveForm');

/* If the Remove button is clicked */
$(removeButton).click(function () {
    $(removeModal).css("display", "block");
    $('#pokemonToRemove').focus();
});
$('#removeSubmit').click(function () {
    event.preventDefault(); // prevent default
    var pokemonToRemove = $('#pokemonToRemove').val().toLowerCase(); // creating variable

    $(pokemon).each(function (i) {
        if (pokemon[i].name.toLowerCase() === pokemonToRemove) { // if the name of the pokemon to remove exists at the i index...
            pokemon.splice(i, 1); // remove that pokemon from the array
            return false // break loop
        };
    });

    $(closeRemoveBtn).click(); // close modal
    $('.active').click(); // refresh the page by clicking a button with the "active" class 
});


