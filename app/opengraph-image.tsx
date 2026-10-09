import { ImageResponse } from 'next/og'
import { projectsShipped } from '@/lib/content'

export const alt = 'EM Control Tech Solutions: websites, SEO and software that grow your business'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          color: 'white',
          background: 'linear-gradient(135deg, #2f3fc4 0%, #4d5fe8 100%)',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, letterSpacing: 6 }}>
          EM CONTROL · TECH SOLUTIONS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
            Websites and software that grow your customers, revenue and visibility.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 30, opacity: 0.9 }}>
          <div style={{ display: 'flex' }}>{projectsShipped} projects shipped</div>
          <div style={{ display: 'flex' }}>Accra, Ghana</div>
        </div>
      </div>
    ),
    size,
  )
}
