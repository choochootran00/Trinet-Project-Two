
var pokemonList = $('#pokemonList');
var dexorname = $('#dexorname');
var tableBody = $('#tableBody');


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
    $('#tableBody').empty();
    $('.active').removeClass('active');
    $(this).addClass('active');
    var idVal = $(this).attr('id');
    /* This part is checking to see if my array of objects has a type that matches the ID of the button clicked*/
    if (idVal !== "all") {
        $(pokemon).each(function (i) {
            if (pokemon[i].type === idVal) {
                var $row = $('<tr></tr>');
                $row.append($('<td></td>').text(pokemon[i].name));
                $row.append($('<td></td>').text(pokemon[i].dex))
                $row.append($('<td></td>').text(pokemon[i].type))
                tableBody.append($row);
            }
            else if ($.isArray(pokemon[i].type)) {
                var typeArray = pokemon[i].type;
                $(typeArray).each(function (j) {
                    if (typeArray[j] === idVal) {
                        var $row = $('<tr></tr>');
                        $row.append($('<td></td>').text(pokemon[i].name));
                        $row.append($('<td></td>').text(pokemon[i].dex))
                        $row.append($('<td></td>').text(pokemon[i].type))
                        tableBody.append($row);
                    }
                })
            }
        })
    }
    else {
        appendList();
    }
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
