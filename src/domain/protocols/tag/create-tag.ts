export interface CreateTag {
  create: (data: CreateTag.Params) => Promise<CreateTag.Result>
}

export namespace CreateTag {
  export type Params = {
    tag_name: string
  }
  export type Result = {
    sk_tag: string
  }
}
