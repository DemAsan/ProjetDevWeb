
// var message = console.log("Bien le bonjours");
// console.log(message);

// console.error("et meerde");

// alert(" Hello ma couille");


// AFFICHE / MASQUE LE TABLEAU

const myButton = document.getElementById('boutonB');
if(myButton != null) {
    myButton.addEventListener('click', function() {
       const table = document.querySelector('table');
       if (table.style.display === 'none') {
           table.style.display = 'block';
       } else {
           table.style.display = 'none';
       }
       });
}


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