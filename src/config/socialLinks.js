const {
  VITE_INSTAGRAM_URL,
  VITE_WHATSAPP_URL,
  VITE_GOOGLE_MAPS_URL,
  VITE_GOOGLE_MAPS_EMBED_URL
} = import.meta.env

const withFallback = (value, fallback = '#') => (value && value.trim()) || fallback

export const instagramUrl = withFallback(VITE_INSTAGRAM_URL)
export const whatsappUrl = withFallback(VITE_WHATSAPP_URL)
export const googleMapsUrl = withFallback(VITE_GOOGLE_MAPS_URL)
export const googleMapsEmbedUrl = withFallback(VITE_GOOGLE_MAPS_EMBED_URL, '')
