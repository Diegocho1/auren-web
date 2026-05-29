import { EmailJSService }           from '@/infrastructure/email/EmailJSService'
import { StaticProjectRepository }  from '@/infrastructure/repositories/StaticProjectRepository'
import { StaticServiceRepository }  from '@/infrastructure/repositories/StaticServiceRepository'

import { sendQuoteRequest }   from '@/application/useCases/sendQuoteRequest'
import { sendContactMessage } from '@/application/useCases/sendContactMessage'
import { getProjects }        from '@/application/useCases/getProjects'
import { getServices }        from '@/application/useCases/getServices'

// ── Implementaciones concretas ──────────────────────────────────────────────
const emailService      = new EmailJSService()
const projectRepository = new StaticProjectRepository()
const serviceRepository = new StaticServiceRepository()

// ── Casos de uso con dependencias inyectadas ────────────────────────────────
export const container = {
  sendQuoteRequest:   sendQuoteRequest({ emailService }),
  sendContactMessage: sendContactMessage({ emailService }),
  getProjects:        getProjects({ projectRepository }),
  getServices:        getServices({ serviceRepository }),
}