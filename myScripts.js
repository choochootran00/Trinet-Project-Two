
var pokemonList = $('#pokemonList');
var dexorname = $('#dexorname');
var tableBody = $('#tableBody');

function alphaSort() {
    pokemon.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
    })
};
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
$(pokemon).each(function (i) {
    var $row = $('<tr></tr>');
    $row.append($('<td></td>').text(pokemon[i].name));
    $row.append($('<td></td>').text(pokemon[i].dex))
    $row.append($('<td></td>').text(pokemon[i].type))
    tableBody.append($row);
});
/* Event listener for the alphabetical sort or numerical sort*/
dexorname.on('change', function () {
    $('#tableBody').empty();
    var idVal = $('.active').attr('id');
    const selected = $(this).val();
    if (selected === "name") {
        alphaSort();
    }

    else if (selected === "dex") {
        numSort();
    }
    $(pokemon).each(function (i) {
        if (pokemon[i].type === idVal) { // If the ID of the button clicked is a pokemons type, add it to a new row
            var $row = $('<tr></tr>');
            $row.append($('<td></td>').text(pokemon[i].name));
            $row.append($('<td></td>').text(pokemon[i].dex))
            $row.append($('<td></td>').text(pokemon[i].type))
            tableBody.append($row);
        }
        else if ($.isArray(pokemon[i].type)) { // Dual types are stored in a nested array. If the type of a pokemon is an array
            var typeArray = pokemon[i].type;
            $(typeArray).each(function (j) { // Loop through the nested array and check if the type is found 
                if (typeArray[j] === idVal) {
                    var $row = $('<tr></tr>');
                    $row.append($('<td></td>').text(pokemon[i].name));
                    $row.append($('<td></td>').text(pokemon[i].dex))
                    $row.append($('<td></td>').text(pokemon[i].type))
                    tableBody.append($row);
                }
            })
        }
        else if (idVal === "all") { // If the button clicked was "Show All", no need to filter, display all pokemon 
            appendList();
            return false // break the loop
        }
    })
});

/*Button Event Listener for Pokemon Types*/
$('.mybtn').click(function () {
    $('#tableBody').empty(); // Clearing Out Table Rows
    $('.active').removeClass('active'); // removing the active class from the buttons
    $(this).addClass('active'); // reapplies the 'active' class to the button that was pressed 
    var idVal = $(this).attr('id');

    /*Filtering the pokemon types*/
    $(pokemon).each(function (i) {
        if (pokemon[i].type === idVal) { // If the ID of the button clicked is a pokemons type, add it to a new row
            var $row = $('<tr></tr>'); 
            $row.append($('<td></td>').text(pokemon[i].name));
            $row.append($('<td></td>').text(pokemon[i].dex))
            $row.append($('<td></td>').text(pokemon[i].type))
            tableBody.append($row);
        }
        else if ($.isArray(pokemon[i].type)) { // Dual types are stored in a nested array. If the type of a pokemon is an array
            var typeArray = pokemon[i].type;
            $(typeArray).each(function (j) { // Loop through the nested array and check if the type is found 
                if (typeArray[j] === idVal) {
                    var $row = $('<tr></tr>');
                    $row.append($('<td></td>').text(pokemon[i].name));
                    $row.append($('<td></td>').text(pokemon[i].dex))
                    $row.append($('<td></td>').text(pokemon[i].type))
                    tableBody.append($row);
                }
            })
        }
        else if (idVal === "all") { // If the button clicked was "Show All", no need to filter, display all pokemon 
            appendList();
            return false // break the loop
        }
        })
});


// Get the modal and buttons
var modal = $('#myModal');
var openModal = $('#showForm');
var closeBtn = $('#closeModal');


// When the Open Modal button is clicked
$(openModal).click(function () {
    $("#myModal").css("display", "block");
});

// When the Close button is clicked
$("#closeModal").click(function () {
    $("#myModal").css("display", "none");
});

// When the user clicks outside the modal, close it
$(window).click(function (event) {
    if (event.target == document.getElementById('myModal')) {
        $("#myModal").css("display", "none");
    }
});
