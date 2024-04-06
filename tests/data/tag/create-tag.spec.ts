import { CreateTagUseCase } from '@/data/usecases/tag/create-tag'
import { CreateTagRepositorySpy, IdGeneratorSpy } from '../mocks'

type SutTypes = {
  sut: CreateTagUseCase
  createTagRepositorySpy: CreateTagRepositorySpy
  idGeneratorSpy: IdGeneratorSpy
}

const makeSut = (): SutTypes => {
  const createTagRepositorySpy = new CreateTagRepositorySpy()
  const idGeneratorSpy = new IdGeneratorSpy()

  const sut = new CreateTagUseCase(createTagRepositorySpy, idGeneratorSpy)
  return {
    sut,
    createTagRepositorySpy,
    idGeneratorSpy
  }
}

describe('Create Tag Use Case', () => {
  it('should call IdGenerator', async () => {
    const { sut, idGeneratorSpy } = makeSut()
    const generateSpy = jest.spyOn(idGeneratorSpy, 'generate')

    await sut.create({ tag_name: 'any_name' })

    expect(generateSpy).toHaveBeenCalled()
  })

  it('should call CreateTagRepository with correct values', async () => {
    const { sut, createTagRepositorySpy, idGeneratorSpy } = makeSut()

    const params = {
      tag_name: 'any_name'
    }

    idGeneratorSpy.result = 'any_sk_tag'

    await sut.create(params)
    expect(createTagRepositorySpy.params).toEqual({
      sk_tag: 'any_sk_tag',
      tag_name: 'any_name'
    })
  })

  it('should throw if CreateTagRepository throws', async () => {
    const { sut, createTagRepositorySpy } = makeSut()
    jest.spyOn(createTagRepositorySpy, 'create').mockRejectedValueOnce(new Error())
    const promise = sut.create({ tag_name: 'any_name' })
    await expect(promise).rejects.toThrow()
  })

  it('should throw if IdGenerator throws', async () => {
    const { sut, idGeneratorSpy } = makeSut()

    jest.spyOn(idGeneratorSpy, 'generate').mockImplementationOnce(() => {
      throw new Error()
    })

    const promise = sut.create({ tag_name: 'any_name' })
    await expect(promise).rejects.toThrow()
  })
})
