


var data = []; // Almacenará los datos para la exportación

// Función para agregar una fila a la tabla
function agregarFila() {
    var fecha = document.getElementById("FechaAlta").value;
    var clase = document.getElementById("Clase").value;
    var marca = document.getElementById("Marca").value;
    var modelo = document.getElementById("Modelo").value;
    var serie = document.getElementById("Serie").value;
    var sector = document.getElementById("Sector").value;
    var usuario = document.getElementById("Usuario").value;
    var estado = document.getElementById("Estado").value;

    if (clase && marca) {
        var fila = [fecha, clase, marca, modelo, serie, sector, usuario, estado];
        data.push(fila);

        var tabla = document.getElementById("miTabla");
        var newRow = tabla.insertRow(-1);

        for (var i = 0; i < fila.length; i++) {
            var cell = newRow.insertCell(i);
            cell.innerHTML = fila[i];
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

    // Función para exportar la tabla a un archivo Excel
    document.getElementById("exportarExcel").addEventListener("click", function () {
        if (data.length > 0) {
            var ws = XLSX.utils.aoa_to_sheet([["Fecha", "Clase", "Marca", "Modelo", "Serie", "Sector", "Usuario", "Estado"]].concat(data));
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "HojaK");
            XLSX.writeFile(wb, "AcFij.xlsx");
        } else {
            alert("No hay datos para exportar.");
        }
    });
