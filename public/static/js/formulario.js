let departamentos = ["Clinicas","Roffo", "Lanari", "Tisio", "Agronomia", "Arquitectura", "Pellegrini", "CBC", "Deportes", "Derecho", "Economicas", "Exactas", "Farmacia", "Ingenieria", "Medicina", "Nacional", "Dosuba", "Odontologia", "Psicologia", "Rojas", "Rectorado", "Sociales", "Veterinaria", "Filosofia", "Jubilados"];
      let distritos = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77"];

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
            Recorrer(combobox2, distritos.slice(0, 15));
            break;
          case "Roffo":
            Recorrer(combobox2, distritos.slice(15, 17));
            break;
          case "Lanari":
            Recorrer(combobox2, distritos.slice(17, 19));
            break;
          case "Tisio":
            Recorrer(combobox2, distritos.slice(19, 20));
            break;
          case "Agronomia":
            Recorrer(combobox2, distritos.slice(20, 21));
            break;
          case "Arquitectura":
            Recorrer(combobox2, distritos.slice(21, 23));
            break;
          case "Pellegrini":
            Recorrer(combobox2, distritos.slice(23, 24));
            break;
          case "CBC":
            Recorrer(combobox2, distritos.slice(24, 34));
            break;
          case "Deportes":
            Recorrer(combobox2, distritos.slice(34, 35));
            break;
          case "Derecho":
            Recorrer(combobox2, distritos.slice(35, 37));
            break;
          case "Economicas":
            Recorrer(combobox2, distritos.slice(37, 39));
            break;
          case "Exactas":
            Recorrer(combobox2, distritos.slice(39, 41));
            break;
          case "Farmacia":
            Recorrer(combobox2, distritos.slice(41, 42));
            break;
          case "Ingenieria":
            Recorrer(combobox2, distritos.slice(42, 45));
            break;
          case "Medicina":
            Recorrer(combobox2, distritos.slice(45, 49));
            break;
          case "Nacional":
            Recorrer(combobox2, distritos.slice(49, 50));
            break;
          case "Dosuba":
            Recorrer(combobox2, distritos.slice(50, 52));
            break;
          case "Odontologia":
            Recorrer(combobox2, distritos.slice(52, 54));
            break;
          case "Psicologia":
            Recorrer(combobox2, distritos.slice(54, 56));
            break;
          case "Rojas":
            Recorrer(combobox2, distritos.slice(56, 57));
            break;
          case "Rectorado":
            Recorrer(combobox2, distritos.slice(57, 66));
            break;
          case "Sociales":
            Recorrer(combobox2, distritos.slice(66, 68));
            break;
          case "Veterinaria":
            Recorrer(combobox2, distritos.slice(68, 70));
            break;
          case "Filosofia":
            Recorrer(combobox2, distritos.slice(70, 74));
            break;
          case "Jubilados":
            Recorrer(combobox2, distritos.slice(74, 76));
            break;
          default:
            break;
        }
      });