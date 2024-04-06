import { type CreateTagRepository } from '@/data/protocols/repository/tag/create-tag-repository'
import { type IdGenerator } from '@/data/protocols/services/id-generator'
import { type CreateTag } from '@/domain/protocols/tag'

export class CreateTagUseCase implements CreateTag {
  constructor (
    private readonly createTagRepository: CreateTagRepository,
    private readonly idGenerator: IdGenerator
  ) {}

  async create (data: CreateTag.Params): Promise<CreateTag.Result> {
    const skTag = this.idGenerator.generate()

    const tag = await this.createTagRepository.create({
      sk_tag: skTag,
      tag_name: data.tag_name
    })

    return {
      sk_tag: tag.sk_tag
    }
  }
}
