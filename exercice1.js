let monDiv = document.createElement('div');
let monDiv2 = document.createElement('div');
let viewport = document.getElementById('viewport');

monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";
monDiv2.innerHTML = "Div numéro 2"

viewport.appendChild(monDiv);
viewport.appendChild(monDiv2);

monDiv2.style.backgroundColor = "red";
monDiv2.style.width = "100" + "px";
monDiv2.style.height = "100" + "px";

document.getElementById('aSupprimer').remove();







