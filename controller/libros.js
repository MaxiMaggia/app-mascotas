import ModeloMem from '../model/ModeloMem.js';
const modelo = new ModeloMem();

class ControllerLibros {
  obtenerTodos = async (req, res) => {
    const libros = await modelo.obtenerLibros();
    res.json(libros);
  };

  obtenerPorId = async (req, res) => {
    const libro = await modelo.obtenerLibro(req.params.id);
    if (!libro.id) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libro);
  };

  guardar = async (req, res) => {
    const { titulo, autor, año } = req.body;
    if (!titulo || !autor || !año)
      return res.status(400).json({ message: 'Faltan campos: título, autor o año' });

    const nuevo = await modelo.guardarLibro({ titulo, autor, año });
    res.status(201).json(nuevo);
  };

  actualizar = async (req, res) => {
    const libro = await modelo.actualizarLibro(req.params.id, req.body);
    if (!libro.id) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libro);
  };

  borrar = async (req, res) => {
    const borrado = await modelo.borrarLibro(req.params.id);
    if (!borrado.id) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado', borrado });
  };
}

export default ControllerLibros;
