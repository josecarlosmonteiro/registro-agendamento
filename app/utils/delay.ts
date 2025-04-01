export async function delay(ms: number) {
  return Promise.resolve((resolve: () => void) => setTimeout(resolve, ms))
}