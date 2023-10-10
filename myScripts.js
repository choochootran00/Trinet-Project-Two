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
    },
    {
        name: "Caterpie",
        dex: 10,
        type: "bug"
    },
    {
        name: "Metapod",
        dex: 11,
        type: "bug"
    },
    {
        name: "Butterfree",
        dex: 12,
        type: ["bug", "flying"]
    },
    {
        name: "Weedle",
        dex: 13,
        type: ["bug", "poison"]
    },
    {
        name: "Kakuna",
        dex: 14,
        type: ["bug", "poison"]
    },
    {
        name: "Beedrill",
        dex: 15,
        type: ["bug", "poison"]
    },
    {
        name: "Pidgey",
        dex: 16,
        type: ["normal", "flying"]
    },
    {
        name: "Pidgeotto",
        dex: 17,
        type: ["normal", "flying"]
    },
    {
        name: "Pidgeot",
        dex: 18,
        type: ["normal", "flying"]
    },
    {
        name: "Rattata",
        dex: 19,
        type: "normal"
    },
    {
        name: "Raticate",
        dex: 20,
        type: "normal"
    },
    {
        name: "Spearow",
        dex: 21,
        type: ["normal", "flying"]
    },
    {
        name: "Pikachu",
        dex: 25,
        type: "electric"
    },
    {
        name: "Mimikyu",
        dex: 778,
        type: ["ghost", "fairy"]
    },
    {
        name: "Lucario",
        dex: 448,
        type: ["steel", "fighting"]
    },
    {
        name: "Sneasel",
        dex: 215,
        type: ["dark", "ice"]
    },
    {
        name: "Tyranitar",
        dex: 248,
        type: ["rock", "dark"]
    },
    {
        name: "Diglett",
        dex: 50,
        type: "ground"
    },
    {
        name: "Gardevoir",
        dex: 282,
        type: ["psychic", "fairy"]
    },
    {
        name: "Noivern",
        dex: 715,
        type: ["flying", "dragon"]
    },
    {
        name: "Aerodactyl",
        dex: 142,
        type: ["rock", "flying"]
    }
];

var pokemonList = $('#pokemonList');
var dexorname = $('#dexorname');
var tableBody = $('#tableBody');
/*
var $newItemButton = $('#newItemButton');
var $newItemForm = $('#newItemForm');
var $textInput = $('input:text');
var $removeItem = $('#removeItem');

$newItemButton.show();
$newItemForm.hide();
*/
function alphaSort() {
    pokemon.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
    });
}

function numSort() {
    pokemon.sort((a, b) => {
        if (a.dex < b.dex) return -1;
        if (a.dex > b.dex) return 1;
        return 0;
    });
}

function appendList() {
    $(pokemon).each(function (i) {
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(pokemon[i].name));
        $row.append($('<td></td>').text(pokemon[i].dex))
        $row.append($('<td></td>').text(pokemon[i].type))
        tableBody.append($row);
    });

}
/* This sorts and displays the list of pokemon in alphabetical order*/
alphaSort();    
appendList();

/* Event listener for the alphabetical sort or numerical sort*/
dexorname.on('change', function () {
    const selected = $(this).val();
    if (selected === "name") {
        alphaSort();
    }
    else if (selected === "dex") {
        numSort();
    }

});

/* This Code Removes and Reapplies the 'active' class to the button clicked*/
$('.mybtn').click(function () {
    pokemonList.empty();
    $('.active').removeClass('active');
    $(this).addClass('active');
    var idVal = $(this).attr('id');
    /* This part is checking to see if my array of objects has a type that matches the ID of the button clicked*/
    if (idVal !== "all") {
        $(pokemon).each(function (i) {
            if (pokemon[i].type === idVal) {
                pokemonList.append('<li>' + pokemon[i].name + '</li>');
            }
            else if ($.isArray(pokemon[i].type)) {
                var typeArray = pokemon[i].type;
                $(typeArray).each(function (j) {
                    if (typeArray[j] === idVal) {
                        pokemonList.append('<li>' + pokemon[i].name + '</li>');
                    }
                })
            }
        })
    }
    else {
        appendList();
    }
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
