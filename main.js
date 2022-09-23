const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados:[
        "Html",
        "CSS"
    ],
    aprobarcurso(cursito){
        this.cursosAprobados.push(cursito);
    },
};

natalia.cursosAprobados.push("JS");