import { useState } from 'react'

const achievements = [
  { icon: '🌅', label: '7-Day Dawn', earned: true },
  { icon: '🧘', label: 'Deep Mind', earned: true },
  { icon: '🌊', label: 'Flow State', earned: true },
  { icon: '🌙', label: '30-Day Rest', earned: false },
  { icon: '⚡', label: 'Energized', earned: false },
  { icon: '🏔', label: 'Summit', earned: false },
]

const settings = [
  { label: 'Notifications', value: 'Daily 7:00 AM' },
  { label: 'Language', value: 'English' },
  { label: 'Membership', value: 'Alara Gold' },
  { label: 'Privacy', value: 'Manage' },
]

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="pb-4">
      {/* Hero area */}
      <div
        className="relative px-5 pb-6 pt-2 mb-5"
        style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.06) 0%, transparent 100%)' }}
      >
        <div className="flex flex-col items-center text-center anim-fade-up">
          {/* Avatar */}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <div
              style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c 0%, #8a6e2a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 3px #111114, 0 0 0 5px rgba(201,168,76,0.3)' }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: '#080809', fontWeight: 600 }}>I</span>
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 22, height: 22, borderRadius: '50%', background: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #080809' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#080809">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#080809" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: '#f5f0e8' }}>
            Isabelle Laurent
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#6b6b7a', marginTop: 2 }}>Member since March 2024</p>

          {/* Gold badge */}
          <div
            className="flex items-center gap-1.5 mt-3 rounded-full px-3 py-1"
            style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#c9a84c">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#c9a84c', letterSpacing: '0.1em' }}>ALARA GOLD</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 grid grid-cols-3 gap-2 mb-5 anim-fade-up-2">
        {[
          { label: 'Sessions', value: '47' },
          { label: 'Streak', value: '12d' },
          { label: 'Badges', value: '3' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: '#111114', border: '1px solid #2e2e36' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: '#c9a84c' }}>{s.value}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: '#6b6b7a', marginTop: 2, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="px-5 mb-5 anim-fade-up-3">
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: '#f5f0e8', marginBottom: 12 }}>
          Achievements
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="rounded-xl p-3 flex flex-col items-center gap-1"
              style={{
                background: a.earned ? 'rgba(201,168,76,0.08)' : '#111114',
                border: `1px solid ${a.earned ? 'rgba(201,168,76,0.25)' : '#2e2e36'}`,
                opacity: a.earned ? 1 : 0.45,
              }}
            >
              <span style={{ fontSize: 22 }}>{a.icon}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 9, color: a.earned ? '#c9a84c' : '#6b6b7a', textAlign: 'center', letterSpacing: '0.06em' }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="px-5 anim-fade-up-4">
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: '#f5f0e8', marginBottom: 12 }}>
          Settings
        </h3>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #2e2e36', background: '#111114' }}>
          {/* Dark mode toggle */}
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid #2e2e36' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#f5f0e8' }}>Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                width: 42,
                height: 24,
                borderRadius: 12,
                background: darkMode ? 'linear-gradient(90deg, #c9a84c, #e8d08a)' : '#2e2e36',
                position: 'relative',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.25s',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 3,
                  left: darkMode ? 21 : 3,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: darkMode ? '#080809' : '#6b6b7a',
                  transition: 'left 0.25s',
                }}
              />
            </button>
          </div>

          {settings.map((s, i) => (
            <div
              key={s.label}
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: i < settings.length - 1 ? '1px solid #2e2e36' : 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#f5f0e8' }}>{s.label}</span>
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#6b6b7a' }}>{s.value}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a3a44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <button
          className="w-full mt-3 rounded-xl py-3"
          style={{ background: '#111114', border: '1px solid #2e2e36', fontFamily: 'var(--font-body)', fontSize: 13, color: '#c0443a', cursor: 'pointer', letterSpacing: '0.04em' }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
