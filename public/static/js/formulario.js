let departamentos = ["Clinicas","Roffo", "Lanari", "Tisio", "Agronomia", "Arquitectura", "Pellegrini", "CBC", "Deportes", "Derecho", "Economicas", "Exactas", "Farmacia", "Ingenieria", "Medicina", "Nacional Bs As", "Dosuba", "Odontologia", "Psicologia", "Rojas", "Rectorado", "Sociales", "Veterinaria", "FIlosofia", "Jubilados"];
      let distritos = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52"];

      let combobox1 = document.getElementById("combobox1");
      let combobox2 = document.getElementById("combobox2");

      function Recorrer(combobox, valores) {
        combobox2.innerHTML = "";
        for (let index of valores) {
          combobox.innerHTML += `
                <option>${index}</option>
                `;
        }
      }

      function llenarDepar() {
        Recorrer(combobox1, departamentos);
      }
      llenarDepar();

      combobox1.addEventListener("change", (e) => {
        let dato = e.target.value;

        switch (dato) {
          case "Clinicas":
            Recorrer(combobox2, distritos.slice(0, 6));
            break;
          case "Roffo":
            Recorrer(combobox2, distritos.slice(7, 15));
            break;
          case "Dosuba":
            Recorrer(combobox2, distritos.slice(16, 17));
            break;
          default:
            break;
        }
      });