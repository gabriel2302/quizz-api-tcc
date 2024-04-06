import { CreateTagUseCase } from "@/data/usecases/tag/create-tag"
import { CreateTagRepositorySpy } from "../mocks"

type SutTypes = {
  sut: CreateTagUseCase
  createTagRepositorySpy: CreateTagRepositorySpy
}

const makeSut = (): SutTypes => {
  const createTagRepositorySpy = new CreateTagRepositorySpy()
  const sut = new CreateTagUseCase(createTagRepositorySpy)
  return {
    sut,
    createTagRepositorySpy
  }
}

describe('Create Tag Use Case', () => {
  it('should call CreateTagRepository with correct values', async () => {
    const { sut, createTagRepositorySpy } = makeSut()

    const params = {
      tag_name: 'any_name',
      sk_tag: 'any_sk_tag'
    }

    await sut.create(params)
    expect(createTagRepositorySpy.params).toEqual(params)
  }) 
})