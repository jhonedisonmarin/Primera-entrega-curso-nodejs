const {obtenerPromedio, argv, cursos, matricula} = require ('./datos')
let {id, nombre,cedula} = argv

if(id){
    let estudianteCurso = cursos.find(function(cursoEst ) {return cursoEst.id == id});
        
    if(estudianteCurso){

        if(Number.isInteger(id)){

            console.log('Curso Encontrado'); 
            console.log('Matricula realizada');
            const fs = require('fs');

            let crearArchivo = (argv) => {
                texto = 'El estudiante: ' + nombre + '.\n ' +
                'Con cedula: ' + cedula + '. \n ' + 
                'Se ha matriculado en el curso: Identificador Curso: '+estudianteCurso.id+' | Nombre: '+estudianteCurso.nombre+' | Duracion: '+estudianteCurso.duracion+' | Valor: '+estudianteCurso.valor;
                fs.writeFile('matricula.txt', texto, (err) => {
                    if (err) throw (err)
                    console.log('Se ha creado el archivo - matricula.txt')
            
                });
            }
            crearArchivo (argv);

        } else{
            if(id){
                console.log('RECUERDA QUE LOS DATOS DEL INTERESADO DEBEN ESCRIBIRSE INMEDIATAMENTE DESPUES DEL SIGNO IGUAL "=". NO DEBEN HABER ESPACIOS.');
                console.log('id Ingresado: -i= ');
            }
        };

    }
    else{
        console.log('Curso No Encontrado');
        console.log('Ha ingresado un id que no corresponde a ningun curso');
        imprimeCursos();   
    };
} else {
    console.log('LISTA DE CURSOS')
    imprimeCursos();   
};

function imprimeCursos() {
    setTimeout(function () {
        let textoCurso = 'Identificador Curso: ' + cursos[0].id + ' | Nombre: ' + cursos[0].nombre + ' | Duracion: ' + cursos[0].duracion + ' | Valor: ' + cursos[0].valor;
        console.log(textoCurso);
    }, 2000);
    setTimeout(function () {
        let textoCurso = 'Identificador Curso: ' + cursos[1].id + ' | Nombre: ' + cursos[1].nombre + ' | Duracion: ' + cursos[1].duracion + ' | Valor: ' + cursos[1].valor;
        console.log(textoCurso);
    }, 4000);
    setTimeout(function () {
        let textoCurso = 'Identificador Curso: ' + cursos[2].id + ' | Nombre: ' + cursos[2].nombre + ' | Duracion: ' + cursos[2].duracion + ' | Valor: ' + cursos[2].valor;
        console.log(textoCurso);
    }, 6000);
    setTimeout(function () {
        let textoCurso = 'Identificador Curso: ' + cursos[3].id + ' | Nombre: ' + cursos[3].nombre + ' | Duracion: ' + cursos[3].duracion + ' | Valor: ' + cursos[3].valor;
        console.log(textoCurso);
    }, 8000);
}
