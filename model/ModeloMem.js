class ModeloMem {
    #libros = [];
  
    constructor() {
      this.#libros = [
        { "id": "1", "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "año": 1967 },
        { "id": "2", "titulo": "El señor de los anillos", "autor": "J. R. R. Tolkien", "año": 1954 },
        { "id": "3", "titulo": "1984", "autor": "George Orwell", "año": 1949 },
        { "id": "4", "titulo": "Rayuela", "autor": "Julio Cortázar", "año": 1963 },
        { "id": "5", "titulo": "Fahrenheit 451", "autor": "Ray Bradbury", "año": 1953 },
        { "id": "6", "titulo": "Crónica de una muerte anunciada", "autor": "Gabriel García Márquez", "año": 1981 },
        { "id": "7", "titulo": "El nombre de la rosa", "autor": "Umberto Eco", "año": 1980 },
        { "id": "8", "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "año": 1605 },
        { "id": "9", "titulo": "Los pilares de la Tierra", "autor": "Ken Follett", "año": 1989 },
        { "id": "10", "titulo": "El código Da Vinci", "autor": "Dan Brown", "año": 2003 }
      ];
    }
  
    obtenerLibros = async () => this.#libros;
  
    obtenerLibro = async (id) => {
      const libro = this.#libros.find(l => l.id == id);
      return libro || {};
    };
  
    guardarLibro = async (libro) => {
      const id = String(parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1);
      const nuevoLibro = {
        id,
        titulo: libro.titulo,
        autor: libro.autor,
        año: libro.año
      };
      this.#libros.push(nuevoLibro);
      return nuevoLibro;
    };
    
  
    actualizarLibro = async (id, libro) => {
      libro.id = id;
      const index = this.#libros.findIndex(l => l.id == id);
      const libroAnt = this.#libros[index];
      const libroAct = { ...libroAnt, ...libro };
      this.#libros.splice(index, 1, libroAct);
      return libroAct;
    };
  
    borrarLibro = async (id) => {
      const index = this.#libros.findIndex(l => l.id == id);
      const libro = this.#libros.splice(index, 1)[0];
      return libro;
    };
  }
  
  export default ModeloMem;
  