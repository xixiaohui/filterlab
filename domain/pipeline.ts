import { Filter } from './filter'

export interface Pipeline {
  id: string
  filters: Filter[]
}
