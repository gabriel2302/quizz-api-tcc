import { type CreateTagRepository } from '@/data/protocols/repository/tag/create-tag-repository'
import { type CreateTag } from '@/domain/protocols/tag'

export class CreateTagUseCase implements CreateTag {
  constructor (private readonly tagRepository: CreateTagRepository) {}

  async create (data: CreateTag.Params): Promise<CreateTag.Result> {
    const tag = await this.tagRepository.create(data)

    return {
      sk_tag: tag.sk_tag
    }
  }
}
