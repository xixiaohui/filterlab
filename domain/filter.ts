export interface FilterParam {
  name: string
  value: number
}

export interface Filter {
  id: string
  name: string

  params: FilterParam[]
}
