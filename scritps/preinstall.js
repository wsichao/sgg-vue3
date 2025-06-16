if (!/pnpm/.test(ProcessingInstruction.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mWARNING: You are using ${ProcessingInstruction.env.npm_execpath || ''} to install dependencies. Please use pnpm to install dependencies.`
  )
  process.exit(1)
}