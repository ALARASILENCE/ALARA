import { useState } from 'react'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import SessionsScreen from './screens/SessionsScreen'
import ProfileScreen from './screens/ProfileScreen'

type Tab = 'home' | 'discover' | 'sessions' | 'profile'

const tabs: { id: Tab; label: string; icon: JSX.Element }[] = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    id: 'discover',
    label: 'Discover',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'sessions',
    label: 'Sessions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
]

export default function App() {
  const [started, setStarted] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('home')

  const screens: Record<Tab, JSX.Element> = {
    home: <HomeScreen />,
    discover: <DiscoverScreen />,
    sessions: <SessionsScreen />,
    profile: <ProfileScreen />,
  }

  return (
    <div
      style={{ background: '#050505', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(0px, 2vw, 24px)' }}
    >
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: 'min(390px, 100vw)',
          height: 'min(844px, 100svh)',
          borderRadius: 'clamp(0px, 4vw, 48px)',
          background: '#0a0a0a',
          boxShadow: '0 0 0 1px #1e1e22, 0 60px 140px rgba(0,0,0,0.95), 0 0 80px rgba(201,168,76,0.04)',
          overflow: 'hidden',
        }}
      >
        {/* Status bar */}
        <div className="flex-none flex items-center justify-between px-7 pt-3 pb-1" style={{ minHeight: 44, zIndex: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#3a3a44', letterSpacing: '0.04em' }}>9:41</span>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#1a1a1e', border: '1px solid #2e2e36' }} />
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ width: 4, height: 4 + i * 1.5, background: i === 3 ? '#c9a84c' : '#2e2e36', borderRadius: 1 }} />
            ))}
            <div style={{ width: 14, height: 8, border: '1px solid #2e2e36', borderRadius: 2, marginLeft: 3, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '2px 4px 2px 2px', background: '#c9a84c', borderRadius: 1 }} />
            </div>
          </div>
        </div>

        {/* Screen */}
        {!started ? (
          <div key="welcome" className="flex-1 overflow-y-auto anim-fade-up" style={{ scrollbarWidth: 'none' }}>
            <WelcomeScreen onStart={() => setStarted(true)} />
          </div>
        ) : (
          <>
            <div key={activeTab} className="flex-1 overflow-y-auto anim-fade-up" style={{ scrollbarWidth: 'none' }}>
              {screens[activeTab]}
            </div>

            {/* Bottom nav */}
            <div
              className="flex-none"
              style={{ background: 'linear-gradient(to top, #0a0a0a 80%, transparent)', paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
              <div
                className="mx-4 my-2 flex items-center justify-around rounded-2xl px-2 py-1"
                style={{ background: '#111114', border: '1px solid #1e1e22' }}
              >
                {tabs.map((tab) => {
                  const active = tab.id === activeTab
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200"
                      style={{
                        color: active ? '#c9a84c' : '#3a3a44',
                        background: active ? 'rgba(201,168,76,0.07)' : 'transparent',
                        minWidth: 60,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {tab.icon}
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.04em' }}>
                        {tab.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
