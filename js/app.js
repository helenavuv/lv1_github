function DodajTablicu() {

	var Naziv = document.getElementById("naziv").value;
	var Semestar = document.getElementById("semestar").value;
	var ects = document.getElementById("ects").value;
	var btn = document.createElement('input');
	btn.type = "button";
	btn.className = "btn";
	btn.setAttribute("onclick", "Obrisi()");


	var table = document.getElementById("tablica");
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = Naziv;
	cell2.innerHTML = Semestar;
	cell3.innerHTML = ects;
	cell4.appendChild(btn);

	document.getElementById("naziv").value = "";
	document.getElementById("semestar").value = "";
	document.getElementById("ects").value = "";


}

function Obrisi(){
	var td = event.target.parentNode;
	var tr = td.parentNode;
	tr.parentNode.removeChild(tr);
	
}