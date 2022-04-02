let departamentos = ["Lambayeque","Lima", "Trujillo"];
      let distritos = ["Chiclayo","Santa Victoria","La Victoria","Pimentel","Satelite","Surco","San Martin","Chosica","Jorge Chaves","Agustino","La Molina","Puente Piedra","Jesus De Maria","Metro","Sona Trujillo","Huanchaco"];

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
          case "Lambayeque":
            Recorrer(combobox2, distritos.slice(0, 5));
            break;
          case "Lima":
            Recorrer(combobox2, distritos.slice(5, 12));
            break;
          case "Trujillo":
            Recorrer(combobox2, distritos.slice(12, 17));
            break;
          default:
            break;
        }
      });