let checar = document.querySelector(`input#checar`);
let icone = document.querySelector(`ion-icon.icone`);
let total = [];
let letras = ['a','b','c','d','e','f'];
let numb;
let sorte;
let aleatorio;

function acender() {
    icone.style.color = `black`; 
    icone.setAttribute('name','bulb-outline');   
    if(checar.checked) {
        for(let cont = 0;cont <= 5;cont++) {
            sorte =`${Math.floor(Math.random() * 5)}`;
            if(sorte <=2) {
                numb = `${Math.floor(Math.random() * 9)}`;
                total[cont] = numb;
            } if(sorte > 2) {
                total[cont] =`${letras[Math.floor(Math.random() * letras.length)]}`;
            }
        }
        aleatorio = `${total[0]}${total[1]}${total[2]}${total[3]}${total[4]}${total[5]}`;
        console.log(aleatorio);
        icone.style.color = `#${aleatorio}`;
        icone.setAttribute('name','bulb-sharp');
    }
}