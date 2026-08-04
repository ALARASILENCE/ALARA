import { useState } from 'react'

type Status = 'upcoming' | 'completed'

const sessions = [
  {
    id: 1,
    title: 'Dawn Awakening Sequence',
    guide: 'Elena Vasquez',
    time: 'Today · 7:00 AM',
    duration: '18 min',
    status: 'upcoming' as Status,
    color: '#c9a84c',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'Breathwork Immersion',
    guide: 'Marcus Chen',
    time: 'Tomorrow · 6:30 AM',
    duration: '22 min',
    status: 'upcoming' as Status,
    color: '#8a6e2a',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'Deep Stillness',
    guide: 'Amara Osei',
    time: 'Aug 1 · 8:15 AM',
    duration: '30 min',
    status: 'completed' as Status,
    color: '#3a3a44',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 4,
    title: 'Nocturne Rest',
    guide: 'Elena Vasquez',
    time: 'Jul 31 · 10:00 PM',
    duration: '45 min',
    status: 'completed' as Status,
    color: '#3a3a44',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 5,
    title: 'Alpine Silence',
    guide: 'Marcus Chen',
    time: 'Jul 29 · 7:00 AM',
    duration: '18 min',
    status: 'completed' as Status,
    color: '#3a3a44',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop&auto=format',
  },
]

export default function SessionsScreen() {
  const [filter, setFilter] = useState<Status | 'all'>('all')

  const filtered = filter === 'all' ? sessions : sessions.filter((s) => s.status === filter)

  return (
    <div className="px-5 pb-4">
      {/* Header */}
      <div className="mb-5 anim-fade-up">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: '#f5f0e8', lineHeight: 1.2 }}>
          Your<br /><em>Sessions</em>
        </h1>
      </div>

      {/* Weekly ring summary */}
      <div
        className="flex items-center gap-4 rounded-2xl p-4 mb-5 anim-fade-up-2"
        style={{ background: '#111114', border: '1px solid #2e2e36' }}
      >
        <div style={{ position: 'relative', width: 60, height: 60, flexShrink: 0 }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="24" fill="none" stroke="#2e2e36" strokeWidth="5" />
            <circle
              cx="30" cy="30" r="24"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24 * 0.74} ${2 * Math.PI * 24 * 0.26}`}
              strokeDashoffset={2 * Math.PI * 24 * 0.25}
              transform="rotate(-90 30 30)"
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: '#c9a84c' }}>74%</span>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#f5f0e8' }}>Weekly Goal</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#6b6b7a', marginTop: 2 }}>5 of 7 days completed</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#c9a84c', marginTop: 4 }}>31.5 hrs this month</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4 anim-fade-up-3">
        {(['all', 'upcoming', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: f === filter ? 600 : 400,
              color: f === filter ? '#080809' : '#6b6b7a',
              background: f === filter ? '#c9a84c' : '#111114',
              border: f === filter ? 'none' : '1px solid #2e2e36',
              cursor: 'pointer',
              textTransform: 'capitalize',
              letterSpacing: '0.04em',
            }}
          >
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Session list */}
      <div className="flex flex-col gap-3 anim-fade-up-4">
        {filtered.map((s) => (
          <div
            key={s.id}
            className="flex items-center gap-3 rounded-xl p-3"
            style={{ background: '#111114', border: `1px solid ${s.status === 'upcoming' ? 'rgba(201,168,76,0.2)' : '#2e2e36'}` }}
          >
            <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              {s.status === 'completed' && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(8,8,9,0.6)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500, color: s.status === 'completed' ? '#6b6b7a' : '#f5f0e8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.title}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#6b6b7a', marginTop: 1 }}>{s.guide}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: s.status === 'upcoming' ? '#c9a84c' : '#3a3a44', marginTop: 3 }}>{s.time} · {s.duration}</p>
            </div>
            {s.status === 'upcoming' && (
              <button
                style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #8a6e2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#080809">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
