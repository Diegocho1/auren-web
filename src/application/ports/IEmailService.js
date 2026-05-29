/**
 * Port — contrato que debe cumplir cualquier servicio de email.
 * La capa de aplicación solo conoce esta forma, nunca EmailJS directamente.
 */
export const IEmailService = {
  /**
   * @param {Object} payload
   * @param {string} payload.fromName
   * @param {string} payload.fromEmail
   * @param {string} payload.projectType
   * @param {string} payload.description
   * @returns {Promise<{ success: boolean, error?: string }>}
   */
  sendQuote: async (payload) => { throw new Error('Not implemented') },

  /**
   * @param {Object} payload
   * @param {string} payload.fromName
   * @param {string} payload.fromEmail
   * @param {string} payload.message
   * @returns {Promise<{ success: boolean, error?: string }>}
   */
  sendContact: async (payload) => { throw new Error('Not implemented') },
}