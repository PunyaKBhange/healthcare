import fs from 'node:fs'
import dotenv from 'dotenv'

// Prefer a user-specified env file, then the provided Windows path, then defaults
const preferredEnvPaths = [
  process.env.FRONTEND_ENV_FILE,
  'C:\\Users\\sachin\\OneDrive\\Desktop\\frontend.local',
]

let envLoaded = false
for (const p of preferredEnvPaths) {
  if (p && fs.existsSync(p)) {
    dotenv.config({ path: p, override: true })
    envLoaded = true
    break
  }
}

if (!envLoaded) {
  dotenv.config()
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
