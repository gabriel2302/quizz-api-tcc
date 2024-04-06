import { type TagModel } from '@/domain/models/tag'
import { faker } from '@faker-js/faker/locale/en'

export const mockTag: TagModel = {
  sk_tag: faker.string.uuid(),
  tag_name: faker.lorem.word(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  D_E_L_E_T_: ''
}
