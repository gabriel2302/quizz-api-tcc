import { faker } from '@faker-js/faker/locale/en'

import { type IdGenerator } from '../protocols/services/id-generator'

export class IdGeneratorSpy implements IdGenerator {
  result: string = faker.string.uuid()

  generate (): string {
    return this.result
  }
}
