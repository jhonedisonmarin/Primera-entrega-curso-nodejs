let cursos = [{
        id: '1',
        nombre: 'Introduccion Node.JS',
        alias: 'n', 
        duracion: '32 Horas',
        valor: '$780.000'
    },
    {
        id: '2',
        nombre: 'Ingles Basico',
        alias: 'i', 
        duracion: '64 Horas',
        valor: '$1.280.000'
    },
    {
        id: '3',
        nombre: 'Matematicas Avanzadas',
        alias: 'm', 
        duracion: '140 Horas',
        valor: '$1.500.000'
    },    
    {
        id: '4',
        nombre: 'Programacion Avanzada',
        alias: 'p', 
        duracion: '120 Horas',
        valor: '$1.480.000'
    }
];

const matricula = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('inscribir','Inscribirme en un curso', matricula)
    .argv;

module.exports = {
    argv,
    cursos,
    matricula
};
