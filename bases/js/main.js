

// Masque les dates du tableau

const btn2 = document.getElementById('boutonB');
btn2.addEventListener('click', function(){
    // voir documentation sur nth-child()
    const date = document.querySelectorAll('table td:nth-child(4)')
    .forEach(function(date) {
        date.innerHTML = '';
    })
    // Première solution
    /*
    const taille = document.getElementsByTagName('tr').length;
    for(i=1;i<taille;i++){
        document.querySelectorAll('tr')[i].lastElementChild.innerHTML = '';
    */
});




// MASQUE LE TABLEAU
// TEST 2
/*
const myButton = document.getElementById('boutonB');
if(myButton != null) {
    myButton.addEventListener('click', function() {
       const table = document.querySelector('table');
       if (table.style.display === 'none') {
           table.style.display = 'table';
       } else {
           table.style.display = 'none';
       }
       });
}
*/
/*
// TEST 2 ( affichage complet du tableau)
const myButton = document.getElementById('boutonB');
myButton.addEventListener('click', function() {
    const tbl = document.querySelector('table');
    if(tbl.style.display == 'none'){
        tbl.style.display  = 'table';
    } else {
        tbl.style.display  = 'none';
    }
});
*/

// ENLEVE LIGNE DU TABLEAU (Jquery) (tr)
/*
$('#boutonB').on('click', function() {
    $('table').find('tr').last().remove();
});
*/

// SUPPRIME UNE LIGNE DU TABLEAU 
/*
const btn = document.getElementById("boutonB");
btn.addEventListener('click', function() {
    document.querySelectorAll('table tr').deleteRow(-1);
});
*/



// ENVOIS UN MESSAGE SI ON CLICK SUR LE BOUTON
/*
const btns = document.getElementsByClassName('btn btn-primary');
btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});
*/



// var message = console.log("Bien le bonjours");
// console.log(message);

// console.error("et meerde");

// alert(" Hello ma couille");


// AFFICHE / MASQUE LE TABLEAU