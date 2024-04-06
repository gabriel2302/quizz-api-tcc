export interface CreateTagRepository {
  create: (data: CreateTagRepository.Params) => Promise<CreateTagRepository.Result>
}

export namespace CreateTagRepository {
  export type Params = {
    sk_tag: string
    tag_name: string
  }

  export type Result = {
    sk_tag: string
  }
}