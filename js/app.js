function DodajTablicu() {
	var Naziv = document.getElementById("naziv").value;
	var Semestar = document.getElementById("semestar").value;
	var ects = document.getElementById("ects").value;

	var table = document.getElementById("tablica");
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML = Naziv;
	cell2.innerHTML = Semestar;
	cell3.innerHTML = ects;

	document.getElementById("naziv").value = "";
	document.getElementById("semestar").value = "";
	document.getElementById("ects").value = "";


}