let originalError: any

export function reset() {
  console.error = originalError
}

beforeAll(() => {
  originalError = console.error
  console.error = jest.fn()
})

afterAll(() => {
  reset()
})
