// Izveidot funkciju, kura pievienos jaunu atslēgu ar vērtību objektam</li>
// Izveidot funkciju, kura dzēsīs atslēgu (un tās vērtību) no objekta</li>
// Izveidot funkciju, kura izdrukās visas objekta atslēgas un to vērtības</li>
var objekts = {
    vards:'Rita', 
    uzvards:'Avotiņa'
};

function render() {                               // Masīva printēšanas funkcija
    let div = document.getElementById("rezultats");    // Iegūst HTML elementu ar id 'result' un pievieno to mainīgajam
    div.innerHTML = JSON.stringify(objekts);         // Atrastajā elementā ievieto masīvu
  }

function pievienot() { 
    let atslega= document.getElementById("pievienot_atslega").value;                                                 
    let vertiba = document.getElementById("pievienot_vertiba").value;       // Atrod dokumentā elementu ar norādīto id, iegūst tā vērtību un pievieno mainīgajam
    objekts[atslega]  =vertiba
                                                                      //
     render();                                                             // Tiek izsaukta render() funkcija, kas atjauno izprintēto masīvu
  }

 function nonemt(){
    let atslega= document.getElementById("pievienot_atslega").value; 
     delete objekts[atslega]
     render();
 } 
