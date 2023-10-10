var pokemon = [
    {
        name: "Bulbasaur",
        dex: 1,
        type: ["grass", "poison"]
    },
    {
        name: "Ivysaur",
        dex: 2,
        type: ["grass", "poison"]
    },
    {
        name: "Venusaur",
        dex: 3,
        type: ["grass", "poison"]
    },
    {
        name: "Charmander",
        dex: 4,
        type: "fire"
    },
    {
        name: "Charmeleon",
        dex: 5,
        type: "fire"
    },
    {
        name: "Charizard",
        dex: 6,
        type: ["fire", "flying"]
    },
    {
        name: "Squirtle",
        dex: 7,
        type: "water"
    },
    {
        name: "Wartortle",
        dex: 8,
        type: "water"
    },
    {
        name: "Blastoise",
        dex: 9,
        type: "water"
    }
];


var pokemonList = $('#pokemonList');
var dexorname = $('#dexorname'); 

/*
var $newItemButton = $('#newItemButton');
var $newItemForm = $('#newItemForm');
var $textInput = $('input:text');
var $removeItem = $('#removeItem');

$newItemButton.show();
$newItemForm.hide();
*/


dexorname.on('change', function () {
    pokemonList.empty();
    const selected = $(this).val();
    if (selected === "name") {
        pokemon.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
    }
    else if (selected === "dex") {
        pokemon.sort((a, b) => {
            if (a.dex < b.dex) return -1;
            if (a.dex > b.dex) return 1;
            return 0;
        });
    }
    $(pokemon).each(function (i) {
        pokemonList.append('<li>' + pokemon[i].name + '</li>');
    });
    
})



/* This Code Removes and Reapplies   the 'active' class to the button clicked*/
$('button').click(function () {
    pokemonList.empty();
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(pokemon)
        .filter(function (i) {

            pokemonList.append('<li>' + pokemon[i].name + '</li>');
        })
});



/*  These lines of code is going to allow the user to add pokemon to the list
$('#showForm').on('click', function () {
    $newItemButton.hide();
    $newItemForm.show();
    $('input:text').focus();
})

$('#removeItemButton').on('click', function () {
    $('li:last').remove();
});

$newItemForm.on('submit', function (e) {
    e.preventDefault();
    var newText = $textInput.val();
    console.log($textInput);
    $('li:last').append('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $removeItem.show();
    $textInput.val('');
});
*/
