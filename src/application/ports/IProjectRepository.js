/**
 * Port — contrato para obtener proyectos.
 * Hoy es un JSON estático, mañana puede ser una API sin tocar la UI.
 */
export const IProjectRepository = {
  /**
   * @returns {Promise<Project[]>}
   */
  getAll: async () => { throw new Error('Not implemented') },

  /**
   * @param {string} id
   * @returns {Promise<Project|null>}
   */
  getById: async (id) => { throw new Error('Not implemented') },
}