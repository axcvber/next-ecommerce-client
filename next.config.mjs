// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    domains: ['tailwindui.com', 'res.cloudinary.com'],
  },
}

export default withPlaiceholder(config)
