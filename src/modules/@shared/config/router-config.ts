import { Express, Router } from 'express'
import templateRoutes from '../../template/infrastructure/api/template.routes'
import deployRoutes from '../../deploy/infrastructure/api/deploy.routes'
import teamRoutes from '../../team/infrastructure/api/team.routes'
import documentRoutes from '../../documents/infrastructure/api/document.routes'

export default (app: Express): void => {
  const router = Router()
  templateRoutes(router)
  deployRoutes(router)
  documentRoutes(router)
  teamRoutes(router)
  app.use(router)
}
