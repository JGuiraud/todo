var list = [];
var answer = confirm ("Avez-vous des choses à faire aujourd'hui ?");


if (answer) {
  list.push(prompt("veuillez entrer une tache à faire"))
} if (confirm ("avez vous autre chose à faire aujourd'hui ?")) {
  list.push(prompt("veuillez entrer une tache à faire"))
}


else {
  alert("Merci, bonne journée");

}

alert(list);

var supTache = confirm("Souhaitez-vous supprimer une tâche ?")

if (supTache) {
  var numberSup = prompt("quelle tâche Souhaitez-vous supprimer ? Indiquer le chiffre correspondant à sa position dans le tableau. 1 étant le début.");
}   list.slice((numberSup-1), 1);

/* impossible de supprimer dans list | */



console.log(list);
