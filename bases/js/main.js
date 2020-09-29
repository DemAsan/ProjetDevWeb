// console.log('Mon message');
// console.error('Mon message erreur');
//document.addEventListener('click', function() {
//    alert('MESSAGE');
//});

/*
const bouton = document.getElementsByClassName("boutonB")
const btns = document.getElementsByClassName("buttonB")
btns[0].addEvenlister('click', function() {
    alert("Message");
})
*/
//
// autre façon de faire

const monButun = document.getElementById('boutonB');
if (monButun != null) {
    monButun.addEventListener('click', function() {
        const table = document.querySelector('table');
        table.style.display = "none";
        alert("test");
    });
}

