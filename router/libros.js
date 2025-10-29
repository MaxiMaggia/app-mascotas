import { Router } from 'express';
import ControllerLibros from '../controller/libros.js';

class RouterLibros {
  #router = Router();
  #controller = new ControllerLibros();

  config() {
    this.#router.get('/', this.#controller.obtenerTodos);
    this.#router.get('/:id', this.#controller.obtenerPorId);
    this.#router.post('/', this.#controller.guardar);
    this.#router.put('/:id', this.#controller.actualizar);
    this.#router.delete('/:id', this.#controller.borrar);
    return this.#router;
  }
}

export default RouterLibros;
