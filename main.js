//Escribe aquí tú código
var listCity = ['Arequipa', 'Tacna','Moquegua','Lima'];
var listStore = ['Mall Aventura Plaza', 'Parque Lambramani', 'Pepito'];
var listEmployee = ['Luchito', 'Pepito','Wasaberto'];
var listSale = [];
var listEmployeeSale = [];
var listStoreEmployee = [];
var listCityStore = [];
$(document).ready(initApp);

function employee(_name, _sale){
	this.name = _name;
	this.sale = _sale;
}
function store(_name,_employee){
	this.name = _name;
	this.employee= _employee;
}
function city(_name,_store){
	this.name = _name;
	this.store= _store;
}
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
		select.innerHTML += '<option value="' + _list[i] + '">' + _list[i] + '</option>';
	}
}
function submitFormStore(event){
	var _city = new city();
	var _store = new store();
	var _employee = new employee();
	_employee.name = $('#employee').val();
	_employee.sale = $('#sale').val();
	_store.name = $("#store").val();
	_store.employee = _employee;
	_city.name = $("#city").val();
	_city.store = _store;
	listEmployeeSale.push(_employee);
	listStoreEmployee.push(_store);
	listCityStore.push(_city);
	var sales = 0;
	var resultEmployee = 0;
	var listReportEmployee = document.getElementById("report_employee");
	var listReportStore = document.getElementById("report_store");
	var listReportCity = document.getElementById("report_city");
			if(listEmployeeSale.length > 0 ){
		listReportEmployee.innerHTML = ' ';
		}
	for(var i = 0; i < listEmployeeSale.length; i++)
	{
		sales += parseFloat(listEmployeeSale[i].sale);
		listReportEmployee.innerHTML += '<li>'+  listEmployeeSale[i].name + ' ' + listEmployeeSale[i].sale + '</li>';

		if(listStoreEmployee.length > 0 ){
		listReportStore.innerHTML = ' ';
		}
		for(var x=0; x < listStoreEmployee.length; x++){
			listReportStore.innerHTML += '<li>'+  listStoreEmployee[x].name + ' ' + listStoreEmployee[x].employee.sale + '</li>';
		if(listCityStore.length > 0 ){
		listReportCity.innerHTML = ' ';
		}
		for(var y=0; y < listCityStore.length; y++){
			listReportCity.innerHTML += '<li>'+  listCityStore[y].name + ' ' + listCityStore[y].store.employee.sale + '</li>';
		}
		}
	}
	var reportSales = document.getElementById("monto_total");
	reportSales.innerHTML = sales;
	event.preventDefault();
	return;
}