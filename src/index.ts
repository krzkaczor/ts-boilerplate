export async function greet(name: string): Promise<string> {
  return `Hello ${name}`
}

export async function main(): Promise<string> {
  return await greet('Kris')
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error('Error occured: ', e)
  process.exit(1)
})
