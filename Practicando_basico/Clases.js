class Curso {
    constructor(ptitulo) {
        this.titulo = ptitulo
    }

    decirCurso () {
        console.log("El curso es: " + this.titulo)
    }

    anunciarCurso() {
        console.log("Vienen nuevos Cursos, sigueme")
    }

}

let curso = new Curso("43 profesional");
curso.decirCurso();
curso.anunciarCurso()

