//recuerda que esto es el panel que va salir 
const sidebar = document.getElementById("sidebar");
const sidebar2 = document.getElementById("sidebar2");

//donde se va escribir la info
const panelTitle = document.getElementById("panel-title");
const panelDescription = document.getElementById("panel-description");

const panelTitle2 = document.getElementById("panel-title2");
const panelDescription2 = document.getElementById("panel-description2");

// lo del mapzone que es donde esta todo el mapa svg dentro
const zones = document.querySelectorAll('[id^="aula-"]');

//INFO POR ZONAS 
// relacion de cada id con cuadrado en svg que va enseñar
const mapData = {
		"aula-AS05": {
			title: "aula-AS05",
			description :"inforamcion sobre el aula-AS05"
		},

		"aula-AS06": {
			title:"aula-AS06",
			description : " informacion sobre el taller"
		},

		"aula-AS07": {
			title: "aula-AS07",
			description: "infromacion sobre la aula-AS07"
		},
		"aula-AS04": {
			title: "aula-AS04",
			description: "infromacion sobre la aula-AS07"
		},
		"aula-AS03": {
			title: "aula-AS03",
			description :"inforamcion sobre el aula-AS03"
		},
		"aula-AS02": {
			title: "aula-AS02",
			description :"inforamcion sobre el aula-AS02"
		},
		"aula-AS01": {
			title: "aula-AS01",
			description :"inforamcion sobre el aula-AS01"
		},
		"aula-NS04": {
			title: "aula-NS04",
			description: "infromacion sobre la aula-NS04"
		},
		"aula-NS03": {
			title: "aula-NS03",
			description: "infromacion sobre la aula-NS03"
		},
		"aula-NS02": {
			title: "aula-NS02",
			description: "infromacion sobre la aula-NS02"
		},
		"aula-N101": {
			title: "aula-N101",
			description: "infromacion sobre la aula-N101"
		},

};

// DETECCION DEL CLICK
//repetir para cada svg 
zones.forEach(function(zone) {

	//espera a el clicl para leer la zona
	zone.addEventListener("click", function() {

		//te busca el Id de cada elemento que clicamos 
		const zoneId = zone.id;

		//busca el id que se haya relacionado y si esta se lo guarda en el data
		const data = mapData[zoneId];

		//si no hay info lo devuelve y vuelve al principcio para buscar
		if(!data){
			return;
		}
		// cuando encuentra la informacion a actuliza el titulo y la descripcion en el panel
		panelTitle.textContent = data.title;
		panelDescription.textContent = data.description;
		//enseña otra vez el sidebar (lo abre la constante que hicimos antes)
		sidebar.classList.add("open");
		sidebar2.classList.add("open");
		mostrarFoto(zoneId);
	});

});
// cerrar el panel 
//buscar el boton para cerrar
const closeButton = document.getElementById("close-panel");
const closeButton2 = document.getElementById("close-panel2");
//si existe que cierre el sidebar al pusarlo
if(closeButton) {
	closeButton.addEventListener("click",function(){
		sidebar.classList.remove("open");
	});
}
if(closeButton2) {
	closeButton2.addEventListener("click",function(){
		sidebar2.classList.remove("open");
	});
}

//MOVERSE EN ENTRE PLANTAS
const escalera2 = document.getElementById("escalera0");

escalera2.addEventListener("click",function(){
	document.getElementById("planta0").classList.remove("activo");
	document.getElementById("planta2").classList.add("activo");

});

const fotos = {
	"aula-AS05": "FOTO_AS05.jpg",
	"aula-N101": "FOTO_N101.jpg"
};


/*FOTOS*/

const fotoAula = document.getElementById("foto-aula");

function mostrarFoto(idAula) {
	if (fotos[idAula]) {
		fotoAula.src = fotos[idAula];
		fotoAula.classList.remove("oculta");
	} else {
		fotoAula.classList.add("oculta");
	}
}