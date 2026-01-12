import { Filter } from '@/domain/filter'

export class FilterCatalog {
  static create(id: string): Filter {
    switch (id) {
      case 'blur':
        return {
          id: 'blur',
          name: 'Blur',
          params: [],
        }
      default:
        throw new Error(`Unknown filter: ${id}`)
    }
  }
}
