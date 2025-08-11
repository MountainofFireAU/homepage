export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!base) return path
  // Avoid double-prefixing
  return path.startsWith(base) ? path : `${base}${path}`
} 