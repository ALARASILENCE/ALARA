import { useState } from 'react'

const categories = ['All', 'Mind', 'Body', 'Rest', 'Ritual']

const items = [
  {
    id: 1,
    title: 'Alpine Silence',
    cat: 'Mind',
    duration: '18 min',
    level: 'Deep',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=600&fit=crop&auto=format',
    tall: true,
  },
  {
    id: 2,
    title: 'Stillwater Flow',
    cat: 'Body',
    duration: '30 min',
    level: 'Active',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&h=300&fit=crop&auto=format',
    tall: false,
  },
  {
    id: 3,
    title: 'Golden Hour',
    cat: 'Ritual',
    duration: '8 min',
    level: 'Gentle',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop&auto=format',
    tall: false,
  },
  {
    id: 4,
    title: 'Nocturnal',
    cat: 'Rest',
    duration: '45 min',
    level: 'Passive',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=600&fit=crop&auto=format',
    tall: true,
  },
  {
    id: 5,
    title: 'Breath of Stone',
    cat: 'Mind',
    duration: '15 min',
    level: 'Moderate',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=300&fit=crop&auto=format',
    tall: false,
  },
  {
    id: 6,
    title: 'Morning Ember',
    cat: 'Ritual',
    duration: '10 min',
    level: 'Gentle',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&h=300&fit=crop&auto=format',
    tall: false,
  },
]

export default function DiscoverScreen() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? items : items.filter((i) => i.cat === activeCategory)

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-5 mb-5 anim-fade-up">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: '#f5f0e8', lineHeight: 1.2 }}>
          Discover<br />
          <span className="gold-shimmer">Experiences</span>
        </h1>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 px-5 mb-5 overflow-x-auto anim-fade-up-2" style={{ scrollbarWidth: 'none', paddingBottom: 2 }}>
        {categories.map((cat) => {
          const active = cat === activeCategory
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex-none rounded-full transition-all duration-200"
              style={{
                padding: '7px 16px',
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: active ? 600 : 400,
                letterSpacing: '0.04em',
                color: active ? '#080809' : '#6b6b7a',
                background: active ? 'linear-gradient(90deg, #c9a84c, #e8d08a)' : '#111114',
                border: active ? 'none' : '1px solid #2e2e36',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Masonry-style grid */}
      <div className="px-5 grid grid-cols-2 gap-3 anim-fade-up-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ height: item.tall ? 220 : 150, background: '#111114' }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,9,0.88) 0%, rgba(8,8,9,0.1) 60%)' }} />
            <div className="absolute inset-0 p-3 flex flex-col justify-between">
              <span
                style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.14em', color: '#c9a84c', background: 'rgba(8,8,9,0.5)', padding: '2px 6px', borderRadius: 3, alignSelf: 'flex-start' }}
              >
                {item.cat.toUpperCase()}
              </span>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500, color: '#f5f0e8', lineHeight: 1.3 }}>{item.title}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c9a84c', opacity: 0.8, marginTop: 2 }}>{item.duration} · {item.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
