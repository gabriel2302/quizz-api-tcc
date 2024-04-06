import { faker } from '@faker-js/faker/locale/en'

import { CreateTagRepository } from "@/data/protocols/repository/tag/create-tag-repository"

export class CreateTagRepositorySpy implements CreateTagRepository {
  params: CreateTagRepository.Params

  result = {
    sk_tag: faker.string.uuid()
  }

  async create(params: CreateTagRepository.Params): Promise<CreateTagRepository.Result> {
    this.params = params
    return this.result
  }
}