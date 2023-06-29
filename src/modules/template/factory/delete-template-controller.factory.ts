import { PrismaClient } from '@prisma/client'
import DeleteTemplateController from '../presentation/delete-template.controller'
import TemplateRepository from '../repository/template.repository'
import DeletTemplateUseCase from '../usecase/delete/delete-template.usecase'

export const makeDeleteTemplateController = (): DeleteTemplateController => {
  const deleteTemplateUseCase = new DeletTemplateUseCase(
    new TemplateRepository(new PrismaClient())
  )

  return new DeleteTemplateController(deleteTemplateUseCase)
}
