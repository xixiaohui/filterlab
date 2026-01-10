
export class FilterExecutionError extends Error {
  constructor(filterId: string) {
    super(`Failed to apply filter: ${filterId}`)
  }
}