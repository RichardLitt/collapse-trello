var _ = require('lodash');

function findLists() {
    var board = document.getElementById('board');
    var lists = board.getElementsByClassName('list');
    $.each(lists, function(index, list){
        var header = list.getElementsByTagName('h2');
        header.onClick(function(){
            header.innerHTML += 'Collapsed'
            var cards = list.getElementsByClassName('list-card');
            $.each(cards, function(index, card){
                card.hide();
            })
        })
    })
};

// function add_image() {
//     var mydiv = document.getElementsByClassName('_li');
//     var newcontent = document.createElement('div');
//     var viewportHeight = window.innerHeight;
//     var viewportWidth  = window.innerWidth;
//     // Edit the src to point to a wallpaper you, you know, like.
//     newcontent.innerHTML = '<div style="background-image:url(http://medias.photodeck.com/dda9f1be-1df9-11e1-a648-fdc95b6a7d82/acor0707_xgaplus.jpg);height:' + viewportHeight + 'px;width:' + viewportWidth + 'px;background-size:100%;"></div>';

//     while (newcontent.firstChild) {
//         mydiv[0].appendChild(newcontent.firstChild);
//     }
// };

findLists();
