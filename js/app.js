function DodajTablicu() {

	var Naziv = document.getElementById("naziv").value;
	var Semestar = document.getElementById("semestar").value;
	var ects = document.getElementById("ects").value;

	var btn = document.createElement('input');
	btn.type = "button";
	btn.className = "btn";
	btn.setAttribute("onclick", "Obrisi()");

	var check = document.createElement('input');
	check.type = "checkbox";
	check.setAttribute("onclick", "PromijeniBoju()");


	var table = document.getElementById("tablica");
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	cell1.innerHTML = Naziv;
	cell2.innerHTML = Semestar;
	cell3.innerHTML = ects;
	cell4.appendChild(btn);
	cell5.appendChild(check);

	document.getElementById("naziv").value = "";
	document.getElementById("semestar").value = "";
	document.getElementById("ects").value = "";


}

function Obrisi(){
	var td = event.target.parentNode;
	var tr = td.parentNode;
	tr.parentNode.removeChild(tr);
	
}
function PromijeniBoju(){
	var check = event.target;
	var td = event.target.parentNode;
	if (check.checked == true)
	{
		td.parentNode.setAttribute("style","background-color:green;");
	}
	else{
		td.parentNode.setAttribute("style","background-color:#F4C6AE;");

	}
}

function Pretrazi() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("pretraga");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablica");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}