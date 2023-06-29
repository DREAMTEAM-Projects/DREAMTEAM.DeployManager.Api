import { Controller } from './router-adapter.interface'
import { Request, Response } from 'express'

export const routerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const response = await controller.handle({
      body: req.body || {},
      params: req.params || {},
      query: req.query || {},
      headers: req.headers || {}
    })

    const { statusCode, headers, body } = response

    if (headers) res.set(headers)

    if (statusCode >= 200 && statusCode <= 299) {
      res.status(statusCode).json(body)
    } else {
      const error = body.message || body
      res.status(statusCode).json({error})
    }
  }
}
