import { Express, Router } from 'express'
import templateRoutes from '../../template/infrastructure/api/template.routes'
import deployRoutes from '../../deploy/infrastructure/api/deploy.routes'

export default (app: Express): void => {
  const router = Router()
  templateRoutes(router)
  deployRoutes(router)
  app.use(router)
}
