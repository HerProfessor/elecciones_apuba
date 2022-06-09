module.exports = function cuantasUrnas (opcion){

    let numSede = {
        0  : ['Clínicas', 1, 12, ['Urna', 'Lista_03', 'Lista_08', 'Lista_22','Blanco', 'Nulo']],
        1  : ['Roffo', 12, 15, ['Urna', 'Lista_01', 'Lista_07', 'Blanco', 'Nulo']],
        2  : ['Lanari', 15, 18, ['Urna', 'Lista_10', 'Blanco', 'Nulo']],
        3  : ['Vaccarezza', 18, 19, ['Urna', 'Lista_74', 'Blanco', 'Nulo']],
        4  : ['Agronomía', 19, 20, ['Urna', 'Lista_12', 'Blanco', 'Nulo']],
        5  : ['Arquitectura', 20, 22, ['Urna', 'Lista_33', 'Blanco', 'Nulo']],
        6  : ['Pellegrini', 22, 23, ['Urna', 'Lista_10', 'Blanco', 'Nulo']],
        7  : ['CBC', 23, 33, ['Urna', 'Lista_33', 'Blanco', 'Nulo']],
        8  : ['Deportes', 33, 35, ['Urna', 'Lista_12', 'Blanco', 'Nulo']],
        9  : ['Derecho', 35, 36, ['Urna', 'Lista_01', 'Blanco', 'Nulo']],
        10  : ['Económicas', 36, 38, ['Urna', 'Lista_10', 'Blanco', 'Nulo']],
        11  : ['Exactas', 38, 40, ['Urna', 'Lista_05', 'Blanco', 'Nulo']],
        12  : ['Farmacia', 40, 41, ['Urna', 'Lista_01', 'Blanco', 'Nulo']],
        13  : ['Ingeniería', 41, 45, ['Urna', 'Lista_15', 'Blanco', 'Nulo']],
        14  : ['Medicina', 45, 49, ['Urna', 'Lista_74', 'Blanco', 'Nulo']],
        15  : ['Nacional Buenos Aires', 49, 50, ['Urna', 'Lista_10', 'Blanco', 'Nulo']],
        16  : ['Dosuba', 50, 51, ['Urna', 'Lista_23', 'Blanco', 'Nulo']],
        17  : ['Odontología', 51, 52 ['Urna', 'Lista_10', 'Blanco', 'Nulo']],
        18  : ['Psicología', 52, 54, ['Urna', 'Lista_12', 'Blanco', 'Nulo']],
        19  : ['Rojas', 54, 55, ['Urna', 'Lista_33', 'Blanco', 'Nulo']],
        20  : ['Rectorado', 55, 74, ['Urna', 'Lista_03', 'Lista_09','Blanco', 'Nulo']],
        21  : ['Sociales', 74, 76, ['Urna', 'Lista_09', 'Lista_22','Blanco', 'Nulo']],
        22  : ['Veterinaria', 76, 78, ['Urna', 'Lista_06', 'Lista_10','Blanco', 'Nulo']],
        23  : ['Filosofía', 78, 82, ['Urna', 'Lista_501', 'Blanco', 'Nulo']]
    };
    return numSede[opcion] || 'not found';
}