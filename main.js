//Escribe aquí tú código
var listCity = ['Arequipa', 'Tacna','Moquegua','Lima'];
var listStore = ['Mall Aventura Plaza', 'Parque Lambramani', 'Pepito'];
var listEmployee = ['Luchito', 'Pepito','Wasaberto'];
var listSale = [];
var _name = "";
var _list = [];

$(document).ready(initApp);

function initApp()
{
	updateSelect('city',listCity);
	updateSelect('store',listStore);
	updateSelect('employee',listEmployee);
	$('#form_store').submit(submitFormStore);
}
function updateSelect(_name,_list)
{
	var select = document.getElementById(_name);
	for (var i = 0; i < _list.length; i++) {
		select.innerHTML += '<option value="' + i + '">' + _list[i] + '</option>';
	}
}
function submitFormStore(event){
	var sale = $('#sale').val();
	listSale[parseFloat(sale)];
	updateSaleEmployee();
	event.preventDefault();
	return;
}
function updateSaleEmployee(){
	for(var i= 0; i < listSale.length; i++){
		listEmployee[i].push(listSale[i]);
	}
}