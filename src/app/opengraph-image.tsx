import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'eDojo - Tech Lab digitale'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(45deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          fontSize: 48,
          fontWeight: 'bold',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              marginBottom: 20,
              background: 'linear-gradient(45deg, #ef4444, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            eDojo
          </div>
          
          <div
            style={{
              fontSize: 36,
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            Tech Lab digitale
          </div>
          
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '800px',
              opacity: 0.9,
            }}
          >
            Accompagniamo le aziende nel percorso di trasformazione digitale
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 