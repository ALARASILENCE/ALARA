import { useState } from 'react'

// Official ALARA logo — exact embed of ALARA_V1_Simple.svg, unmodified.
function AlaraWordmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="300"
      viewBox="0 0 1200 300"
      style={{ width: 240, height: 60 }}
      aria-label="ALARA"
    >
      <rect width="100%" height="100%" fill="none" />
      <text
        x="600"
        y="185"
        textAnchor="middle"
        fontFamily="Avenir Next, Avenir, Helvetica Neue, Helvetica, Arial, sans-serif"
        fontSize="120"
        fontWeight="300"
        letterSpacing="14"
        fill="#D4AF37"
      >
        ALARA
      </text>
    </svg>
  )
}

const pillars = [
  {
    id: 'architecture',
    label: 'Architecture',
    lines: ['Luxury spaces.', 'Healing environments.', 'Visionary design.'],
  },
  {
    id: 'wellness',
    label: 'Wellness',
    lines: ['Longevity.', 'Care.', 'Retreat experiences.'],
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    lines: ['Human-centered AI.', 'Knowledge.', 'Decision support.'],
  },
]

interface Props {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: Props) {
  const [pressed, setPressed] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      style={{
        background: '#0f0e0c',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* ── Deep ambient warmth ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 480,
          height: 360,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'haloBreath 9s ease-in-out infinite',
        }}
      />

      {/* ── Top hairline ── */}
      <div
        style={{
          width: '100%',
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.22) 40%, rgba(212,175,55,0.22) 60%, transparent 100%)',
        }}
      />

      {/* ════════════════════════════
          HEADER
      ════════════════════════════ */}
      <div
        className="anim-fade-up flex flex-col items-center"
        style={{ paddingTop: 48, paddingBottom: 0, width: '100%', alignItems: 'center' }}
      >
        {/* Pre-label */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 8.5,
            letterSpacing: '0.38em',
            color: 'rgba(212,175,55,0.4)',
            textTransform: 'uppercase',
            margin: '0 0 20px',
          }}
        >
          AI Operating Companion
        </p>

        {/* Official ALARA SVG — untouched */}
        <AlaraWordmark />

        {/* Hairline rule */}
        <div
          style={{
            marginTop: 22,
            width: 180,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.28) 40%, rgba(212,175,55,0.28) 60%, transparent)',
          }}
        />

        {/* System Online */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 14,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: '#D4AF37',
              boxShadow: '0 0 8px rgba(212,175,55,0.8)',
              animation: 'pulse-gold 3s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 8.5,
              letterSpacing: '0.3em',
              color: 'rgba(212,175,55,0.38)',
              textTransform: 'uppercase',
            }}
          >
            System Online
          </span>
        </div>
      </div>

      {/* ════════════════════════════
          MAIN MESSAGE
      ════════════════════════════ */}
      <div
        className="anim-fade-up-2 flex flex-col items-center text-center"
        style={{ padding: '52px 32px 0', width: '100%' }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 27,
            fontWeight: 400,
            color: '#ede8df',
            lineHeight: 1.28,
            letterSpacing: '-0.01em',
            margin: '0 0 6px',
          }}
        >
          Architecture of Silence.
        </h1>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 27,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#c8ab52',
            lineHeight: 1.28,
            letterSpacing: '-0.005em',
            margin: 0,
          }}
        >
          Intelligence for Human Potential.
        </h2>

        {/* Supporting text */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12.5,
            fontWeight: 300,
            color: 'rgba(237,232,223,0.36)',
            lineHeight: 1.8,
            letterSpacing: '0.025em',
            marginTop: 20,
            maxWidth: 300,
          }}
        >
          An ecosystem where architecture, wellness and artificial intelligence become one experience.
        </p>
      </div>

      {/* ════════════════════════════
          PILLAR CARDS
      ════════════════════════════ */}
      <div
        className="anim-fade-up-3"
        style={{
          width: '100%',
          padding: '44px 24px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {pillars.map((pillar, i) => {
          const active = hovered === pillar.id
          return (
            <div
              key={pillar.id}
              className="anim-fade-up"
              onPointerEnter={() => setHovered(pillar.id)}
              onPointerLeave={() => setHovered(null)}
              style={{
                animationDelay: `${0.22 + i * 0.09}s`,
                borderRadius: 20,
                padding: '24px 26px',
                background: active
                  ? 'rgba(212,175,55,0.05)'
                  : 'rgba(255,255,255,0.022)',
                border: `1px solid ${active ? 'rgba(212,175,55,0.28)' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: active
                  ? '0 0 40px rgba(212,175,55,0.07), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.08)'
                  : '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)',
                transition: 'all 0.45s cubic-bezier(0.22,1,0.36,1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Card inner glow */}
              {active && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5) 50%, transparent)',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Pillar label */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: active ? 'rgba(212,175,55,0.75)' : 'rgba(212,175,55,0.35)',
                  margin: '0 0 14px',
                  transition: 'color 0.35s ease',
                }}
              >
                {pillar.label}
              </p>

              {/* Lines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {pillar.lines.map((line, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 16,
                      fontWeight: 400,
                      color: active
                        ? j === 0 ? '#ede8df' : 'rgba(237,232,223,0.55)'
                        : j === 0 ? 'rgba(237,232,223,0.65)' : 'rgba(237,232,223,0.3)',
                      lineHeight: 1.4,
                      letterSpacing: '0.005em',
                      margin: 0,
                      transition: `color ${0.35 + j * 0.05}s ease`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* ════════════════════════════
          CTA
      ════════════════════════════ */}
      <div
        className="anim-fade-up-4"
        style={{ width: '100%', padding: '40px 24px 44px' }}
      >
        <button
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          onPointerLeave={() => setPressed(false)}
          onClick={onStart}
          style={{
            width: '100%',
            padding: '16px 0',
            borderRadius: 14,
            background: pressed
              ? '#a8892e'
              : '#D4AF37',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            fontWeight: 500,
            color: '#0a0906',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            boxShadow: pressed
              ? 'none'
              : '0 0 0 1px rgba(212,175,55,0.2), 0 8px 40px rgba(212,175,55,0.18), 0 2px 12px rgba(0,0,0,0.5)',
            transform: pressed ? 'scale(0.977)' : 'scale(1)',
            transition: 'all 0.18s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          Enter ALARA
        </button>

        {/* Fine print */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 8.5,
            color: 'rgba(255,255,255,0.1)',
            textAlign: 'center',
            marginTop: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Private · Secure · Timeless
        </p>
      </div>

      {/* ── Bottom hairline ── */}
      <div
        style={{
          width: '100%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.1) 50%, transparent)',
          marginBottom: 0,
        }}
      />

      <style>{`
        @keyframes haloBreath {
          0%, 100% { opacity: 1; transform: translateX(-50%) scaleY(1); }
          50%       { opacity: 0.6; transform: translateX(-50%) scaleY(1.06); }
        }
      `}</style>
    </div>
  )
}
