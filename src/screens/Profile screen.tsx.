import { useState } from 'react'

const rituals = [
  {
    id: 1,
    title: 'Morning Clarity',
    subtitle: 'Breathwork & Intention',
    duration: '12 min',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format',
    tag: 'RITUAL',
  },
  {
    id: 2,
    title: 'Deep Stillness',
    subtitle: 'Guided Meditation',
    duration: '22 min',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&h=400&fit=crop&auto=format',
    tag: 'MEDITATION',
  },
  {
    id: 3,
    title: 'Nocturne Rest',
    subtitle: 'Sleep Soundscape',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&h=400&fit=crop&auto=format',
    tag: 'SLEEP',
  },
]

const stats = [
  { label: 'Sessions', value: '47', unit: '' },
  { label: 'Streak', value: '12', unit: 'days' },
  { label: 'Hours', value: '31.5', unit: 'hrs' },
]

export default function HomeScreen() {
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="px-5 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 anim-fade-up">
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#6b6b7a', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
            Monday, Aug 3
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: '#f5f0e8', lineHeight: 1.2, marginTop: 2 }}>
            Good morning,<br />
            <em>Isabelle</em>
          </h1>
        </div>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #8a6e2a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: '#080809', fontWeight: 600 }}>I</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-6 anim-fade-up-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-3 flex flex-col items-center"
            style={{ background: '#111114', border: '1px solid #2e2e36' }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: '#c9a84c', lineHeight: 1 }}>
              {s.value}
            </span>
            {s.unit && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c9a84c', opacity: 0.6, marginTop: 1 }}>{s.unit}</span>}
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: '#6b6b7a', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Today's ritual CTA */}
      <div
        className="relative rounded-2xl overflow-hidden mb-6 anim-fade-up-3"
        style={{ height: 160 }}
      >
        <img
          src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&h=320&fit=crop&auto=format"
          alt="Scenic mountain lake at dawn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,9,0.92) 0%, rgba(8,8,9,0.5) 60%, transparent 100%)' }} />
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <span
            style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: '#c9a84c', textTransform: 'uppercase', display: 'inline-block', background: 'rgba(201,168,76,0.12)', borderRadius: 4, padding: '3px 8px', alignSelf: 'flex-start' }}
          >
            Today's Ritual
          </span>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: '#f5f0e8', lineHeight: 1.2, marginBottom: 8 }}>
              Dawn Awakening<br /><em>Sequence</em>
            </h2>
            <button
              style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d08a)', borderRadius: 20, padding: '7px 18px', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#080809', letterSpacing: '0.04em', border: 'none', cursor: 'pointer' }}
            >
              Begin · 18 min
            </button>
          </div>
        </div>
      </div>

      {/* Section label */}
      <div className="flex items-center justify-between mb-3 anim-fade-up-4">
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, color: '#f5f0e8' }}>
          Curated for You
        </h3>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#c9a84c', letterSpacing: '0.1em', cursor: 'pointer' }}>VIEW ALL</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {rituals.map((r, i) => (
          <div
            key={r.id}
            className="flex rounded-xl overflow-hidden anim-fade-up"
            style={{ background: '#111114', border: '1px solid #2e2e36', animationDelay: `${0.28 + i * 0.06}s` }}
          >
            <div style={{ width: 88, flexShrink: 0, position: 'relative' }}>
              <img src={r.image} alt={r.title} className="w-full h-full object-cover" style={{ height: 80 }} />
              <div className="absolute inset-0" style={{ background: 'rgba(8,8,9,0.2)' }} />
            </div>
            <div className="flex-1 p-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#c9a84c', letterSpacing: '0.14em' }}>{r.tag}</span>
                  <button
                    onClick={() => toggleLike(r.id)}
                    style={{ color: liked.has(r.id) ? '#c9a84c' : '#3a3a44', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={liked.has(r.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500, color: '#f5f0e8', marginTop: 2, lineHeight: 1.3 }}>{r.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#6b6b7a', marginTop: 1 }}>{r.subtitle}</p>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#c9a84c', opacity: 0.7 }}>{r.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
