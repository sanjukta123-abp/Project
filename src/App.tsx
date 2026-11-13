import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const studioName = 'Acrylic Art School'
const whatsappNumber = '919051769135'
const currentYear = new Date().getFullYear()
const socialLinks = [
  { name: 'Facebook', href: '#!', icon: 'facebook' },
  { name: 'Instagram', href: '#!', icon: 'instagram' },
  { name: 'YouTube', href: '#!', icon: 'youtube' },
]

const testimonials = [
  {
    quote: 'She comes home with paint on her sleeves and a new story every week. We couldn’t ask for more.',
    credit: 'Sample parent testimonial',
  },
  {
    quote: 'A warm, encouraging space to try new materials, build confidence and enjoy making art.',
    credit: 'Sample student testimonial',
  },
  {
    quote: 'Step-by-step guidance makes every project feel more manageable, creative and fun.',
    credit: 'Sample family testimonial',
  },
]

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Learning', to: '/learning' },
  { label: 'Online Classes', to: '/online-classes' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Sparkle() {
  return (
    <svg aria-hidden="true" className="sparkle" viewBox="0 0 42 42" fill="none">
      <path d="M21 1c1.8 10.1 9.9 18.2 20 20-10.1 1.8-18.2 9.9-20 20C19.2 30.9 11.1 22.8 1 21 11.1 19.2 19.2 11.1 21 1Z" fill="currentColor" />
    </svg>
  )
}

function DrawingDoodle({ kind, className = '' }: { kind: 'flower' | 'pencil' | 'loop' | 'spark'; className?: string }) {
  const paths = {
    flower: 'M20 5c0 8-4 12-12 15 8 2 12 6 12 14 2-8 6-12 14-14-8-3-12-7-14-15ZM20 5v29M8 20h26',
    pencil: 'm8 31 3-9L28 5l8 8-17 17-11 3Zm3-9 8 8m-4-12 8 8M7 37c7-3 15-3 23 0',
    loop: 'M5 24c0-11 11-18 20-10 6 5 4 14-2 17-5 3-11-1-10-6 1-4 5-6 9-5 7 1 11 8 11 15',
    spark: 'M20 3c1 9 5 14 14 17-9 2-13 6-14 15-2-9-6-13-15-15C14 17 18 12 20 3ZM6 7l2 5m26 17 3 4',
  }

  return (
    <svg className={`drawing-doodle ${className}`} viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  )
}

function ColorSplash({ className = '' }: { className?: string }) {
  const gradientId = useId().replaceAll(':', '')

  return (
    <svg className={`color-splash ${className}`} viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <path className="splash-pool" d="M108 18c15-12 30-2 34 12 4 14 17 10 27 9 18-2 28 16 19 31-7 12 4 18 14 27 13 12 7 31-8 37-13 5-9 17-8 28 2 17-14 28-29 20-13-7-19 2-28 12-13 13-31 6-37-9-5-13-17-10-28-9-17 1-27-15-19-29 7-13 0-19-11-28-13-12-7-31 9-36 13-4 10-17 9-28-1-18 15-27 30-19 13 7 18 1 25-8Z" fill={`url(#${gradientId})`}/>
      <path className="splash-trail" d="M41 166c29-16 38-42 55-68 17-27 34-42 75-44" stroke="#fff9ef" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 9"/>
      <circle className="splash-dot splash-dot-one" cx="47" cy="59" r="7" fill="#dba47e"/>
      <circle className="splash-dot splash-dot-two" cx="179" cy="161" r="5" fill="#78917a"/>
      <circle className="splash-dot splash-dot-three" cx="77" cy="193" r="4" fill="#9678a5"/>
      <defs>
        <linearGradient         id={gradientId} x1="30" y1="30" x2="196" y2="196" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d9bfdc"/>
          <stop offset=".52" stopColor="#a883b7"/>
          <stop offset="1" stopColor="#e6b6a2"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'facebook') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v2.1H7v3.2h2.9V21h3.6Z" fill="currentColor" /></svg>
  }
  if (name === 'instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.7" cy="6.7" r="1.1" fill="currentColor" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 7.3a2.5 2.5 0 0 0-1.8-1.8C17.6 5.1 12 5.1 12 5.1s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 7.3c-.4 1.6-.4 4.7-.4 4.7s0 3.1.4 4.7a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.2.4 7.2.4s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.7.4-4.7s0-3.1-.4-4.7ZM10 15.1V8.9l5.3 3.1-5.3 3.1Z" fill="currentColor" /></svg>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <>
      <div className="announcement">
        <span>Make room for a little more colour</span>
        <span className="announcement-dot">✳</span>
        <Link to="/register">New term enrolments are open <span aria-hidden="true">→</span></Link>
      </div>
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <nav className="navbar navbar-expand-lg container" aria-label="Main navigation">
          <Link className="navbar-brand brand-lockup" to="/" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-name">{studioName}<small>DRAW · PAINT · CREATE</small></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon"><i /><i /></span>
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="primary-navigation">
            <div className="navbar-nav ms-auto align-items-lg-center">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link${item.to === '/online-classes' ? ' online-nav-link' : ''}${isActive ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link className="btn btn-ink nav-cta" to="/register" onClick={() => setMenuOpen(false)}>
                Join a class <ArrowIcon />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

type ChatMessage = { sender: 'assistant' | 'visitor'; text: string }

const chatTopics = [
  {
    label: 'Online classes',
    answer: 'Sanjukta teaches online art classes for international students. Tell us your time zone and what you would like to learn, and we can discuss a suitable class.',
  },
  {
    label: 'Exam preparation',
    answer: 'We offer guidance for internal school art exams and board exam preparation, from building drawing fundamentals to practicing exam-style work.',
  },
  {
    label: 'Classes & timings',
    answer: 'Classes are available for kids, teens and adults, from beginner to advanced. Weekend studio hours are Saturday 9:00–10:30 AM and Sunday 10:00–11:30 AM at Bansdroni, Garia.',
  },
]

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'assistant', text: 'Hello! I’m the Acrylic Art School automated guide. What can I help you find?' },
  ])
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const messagesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    const messageList = messagesRef.current
    if (messageList) messageList.scrollTop = messageList.scrollHeight
  }, [messages, isTyping])

  function askTopic(topic: typeof chatTopics[number]) {
    if (isTyping) return
    setMessages((current) => [...current, { sender: 'visitor', text: topic.label }])
    setIsTyping(true)
    timer.current = setTimeout(() => {
      setMessages((current) => [...current, { sender: 'assistant', text: topic.answer }])
      setIsTyping(false)
      timer.current = null
    }, 650)
  }

  const whatsappMessage = encodeURIComponent('Hello Acrylic Art School, I have a question about your classes.')

  return (
    <div className={`live-chat${isOpen ? ' chat-open' : ''}`}>
      {isOpen && (
        <section className="chat-panel" aria-label="Automated art school chat">
          <div className="chat-header">
            <span className="chat-avatar"><DrawingDoodle kind="flower" /></span>
            <div><strong>Acrylic Art School</strong><small><i /> Automated class guide · instant replies</small></div>
            <button type="button" className="chat-close" aria-label="Close chat" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chat-messages" aria-live="polite" ref={messagesRef}>
            {messages.map((message, index) => (
              <p className={`chat-message ${message.sender}`} key={`${message.sender}-${index}`}>{message.text}</p>
            ))}
            {isTyping && <p className="chat-message assistant chat-typing" aria-label="The guide is replying"><i /><i /><i /></p>}
          </div>
          <div className="chat-options">
            <span>Choose a topic</span>
            {chatTopics.map((topic) => (
              <button type="button" key={topic.label} disabled={isTyping} onClick={() => askTopic(topic)}>{topic.label}<ArrowIcon /></button>
            ))}
          </div>
          <div className="chat-human">
            <span>Need a reply from the teacher?</span>
            <a href="tel:+919051769135">Call +91 90517 69135</a>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">WhatsApp Sanjukta <ArrowIcon /></a>
          </div>
          <p className="chat-disclaimer">Automated information only — this chat is not monitored live.</p>
        </section>
      )}
      <button
        className="chat-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close automated chat' : 'Open automated class chat'}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <span className="chat-toggle-close">×</span> : <><span className="chat-toggle-icon">✎</span><span className="chat-toggle-label">Ask us</span></>}
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand-lockup" to="/">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span className="brand-name">{studioName}<small>DRAW · PAINT · CREATE</small></span>
            </Link>
            <p>Drawing, painting and hands-on art for every age and every stage.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">Explore</span>
            <Link to="/about">Our story</Link>
            <Link to="/learning">Classes</Link>
            <Link to="/online-classes">Online classes</Link>
            <Link to="/gallery">Student gallery</Link>
          </div>
          <div className="footer-links">
            <span className="footer-label">Say hello</span>
            <a href="tel:+919051769135">+91 90517 69135</a>
            <a href="https://wa.me/919051769135" target="_blank" rel="noreferrer">WhatsApp us</a>
            <Link to="/contact">Visit & contact</Link>
            <span>Bansdroni, Garia</span>
            <span>Sat 9:00–10:30 AM · Sun 10:00–11:30 AM</span>
          </div>
          <div className="footer-social">
            <span className="footer-label">Follow the colour</span>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`${social.name} profile link coming soon`}
                  title={`${social.name} profile link coming soon`}
                  onClick={(event) => event.preventDefault()}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
            <span className="social-note">Social profiles coming soon</span>
          </div>
          <Link className="footer-sticker" to="/register">
            <Sparkle />
            <span>Come make<br />something lovely</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} {studioName}. Made with a little imagination.</span>
          <span>For every age, every kind of artist.</span>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href="https://wa.me/919051769135" target="_blank" rel="noreferrer" aria-label="Chat with Acrylic Art School on WhatsApp">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2a9.87 9.87 0 0 0-8.52 14.85L2.1 22l5.3-1.39A9.94 9.94 0 1 0 12.04 2Zm0 18.1a8.17 8.17 0 0 1-4.16-1.13l-.3-.18-3.14.82.84-3.06-.2-.32A8.18 8.18 0 1 1 12.04 20.1Zm4.49-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-.1-.74-.65-1.24-1.46-1.39-1.71-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.07-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.49-.3Z" />
      </svg>
    </a>
  )
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy: string }) {
  return (
    <section className="page-intro reveal">
      <ColorSplash className="page-intro-splash" />
      <div className="container page-intro-inner">
        <DrawingDoodle kind="flower" className="intro-doodle" />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  )
}

function ArtWork({ variant, title, detail, image, alt }: { variant: string; title: string; detail: string; image: string; alt: string }) {
  return (
    <article className={`art-card art-${variant}`}>
      <div className="art-canvas">
        <img className="art-photo" src={image} alt={alt} loading="lazy" />
        <svg className="art-drawing-line" viewBox="0 0 200 150" fill="none" aria-hidden="true">
          <path d="M22 117c19-27 21-70 45-76 21-5 17 34 39 34 17 0 18-31 34-32 19-1 20 35 39 43M47 111c12-6 21-9 31-7" />
        </svg>
      </div>
      <div className="art-caption">
        <div><h3>{title}</h3><span>{detail}</span></div>
        <span className="art-arrow" aria-hidden="true"><ArrowIcon /></span>
      </div>
    </article>
  )
}

const classCards = [
  { number: '01', title: 'Pastel Drawing', age: 'Kids · Teens · Adults', level: 'Beginner to advanced', copy: 'Blend soft colour, build layers and bring expressive pastel drawings to life.', color: 'lavender', icon: '◒', image: '/images/colour-in-motion.jpg', topics: ['Colour blending', 'Layering & texture'] },
  { number: '02', title: 'Step-by-Step Drawing', age: 'Kids · Teens · Adults', level: 'Beginner to advanced', copy: 'Learn to see simple shapes, follow clear steps and draw with growing confidence.', color: 'peach', icon: '✎', image: '/images/handcraft-materials.jpg', topics: ['Shapes & proportion', 'Guided drawing'] },
  { number: '03', title: 'Oil Painting', age: 'Kids · Teens · Adults', level: 'Beginner to advanced', copy: 'Explore rich colour, brushwork and layered painting at a comfortable pace.', color: 'sage', icon: '◉', image: '/images/floral-oil-painting.jpg', topics: ['Colour mixing', 'Brush techniques'] },
  { number: '04', title: 'Pencil & Pen Sketching', age: 'Kids · Teens · Adults', level: 'Beginner to advanced', copy: 'Practice line, shading and observation with pencils, fineliners and ink.', color: 'butter', icon: '〰', image: '/images/mural-study.jpg', topics: ['Line & value', 'Observation'] },
  { number: '05', title: 'Acrylic Painting', age: 'Kids · Teens · Adults', level: 'Beginner to advanced', copy: 'Play with bold colour and versatile acrylic techniques on your own canvas.', color: 'lavender', icon: '✿', image: '/images/abstract-acrylic.jpg', topics: ['Colour & composition', 'Brush techniques'] },
  { number: '06', title: 'Handcraft & Creative Art', age: 'Kids · Teens · Adults', level: 'Beginner to advanced', copy: 'Make thoughtful, colourful things while exploring hands-on materials and ideas.', color: 'peach', icon: '✂', image: '/images/handcraft-materials.jpg', topics: ['Hands-on projects', 'Mixed materials'] },
]

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <ColorSplash className="hero-color-splash" />
        <div className="container home-hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow"><span className="eyebrow-spark">✳</span> A creative little corner for everyone</span>
              <h1>Discover your<br /><em>creative side.</em></h1>
              <p>Drawing, painting and hands-on art for every age. Learn the basics, grow your skills and find your own way to create.</p>
            <div className="hero-actions">
                <Link className="btn btn-ink" to="/learning">Explore our classes <ArrowIcon /></Link>
                <Link className="text-link" to="/about">Meet your teacher <ArrowIcon /></Link>
            </div>
              <div className="hero-note"><span className="note-avatars" aria-hidden="true"><i>✿</i><i>◒</i><i>✦</i></span><span>Kids, teens and adults<br />Beginner to advanced</span></div>
          </div>
          <div className="hero-art-wrap reveal">
            <div className="hero-art">
              <DrawingDoodle kind="flower" className="hero-flower-doodle" />
              <img className="hero-photo" src="/images/painting-brushes.jpg" alt="Paintbrushes spreading vivid paint across a canvas" fetchPriority="high" />
              <span className="hero-art-label">Make space<br />for creativity</span>
              <span className="hero-pencil" aria-hidden="true">✎</span>
              <svg className="hero-scribble" aria-hidden="true" viewBox="0 0 170 100" fill="none">
                <path d="M5 70C25 12 39 103 59 48S93 6 101 55s29 42 39 4 19-28 25-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="hero-photo-inset">
              <img src="/images/abstract-acrylic.jpg" alt="Colourful abstract painting detail" />
            </div>
            <div className="hero-sticker"><Sparkle /><span>Creativity<br />lives here</span></div>
            <span className="hero-caption">A little practice. A lot of imagination.</span>
          </div>
        </div>
        <div className="hero-bottom-line"><span>Drawing</span><i>✳</i><span>Painting</span><i>✳</i><span>Creative classes for all ages</span></div>
      </section>

      <section className="welcome-section section-pad">
        <div className="container welcome-grid reveal">
          <div className="welcome-title">
            <span className="eyebrow">A place to begin</span>
            <h2>Art is not about<br />getting it <em>right.</em></h2>
            <DrawingDoodle kind="loop" className="welcome-doodle" />
          </div>
          <div className="welcome-copy">
            <p>It’s about trying, wondering, and finding joy in the unexpected. At {studioName}, we give every student the space, tools and encouragement to discover what they can create.</p>
            <Link className="text-link" to="/learning">See how we learn <ArrowIcon /></Link>
          </div>
        </div>
        <div className="container welcome-cta reveal">
          <span>From first sketch to finished canvas</span>
          <Link className="text-link" to="/about">A little about our studio <ArrowIcon /></Link>
        </div>
        <div className="container stat-strip">
          <div><strong>All ages</strong><span>Kids, teens and adults</span></div>
          <div><strong>6 classes</strong><span>Drawing, paint and craft</span></div>
          <div><strong>All levels</strong><span>First steps to advanced</span></div>
          <div className="stat-doodle" aria-hidden="true">✳</div>
        </div>
      </section>

      <section className="classes-section section-pad">
        <ColorSplash className="classes-color-splash" />
        <div className="container">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Explore what you can learn</span><h2>Find your art<br /><em>form.</em></h2></div>
            <Link className="text-link" to="/learning">Explore all classes <ArrowIcon /></Link>
          </div>
          <div className="class-grid">
            {classCards.map((item) => (
              <article className={`class-card class-${item.color} reveal`} key={item.number}>
                <div className="class-card-image">
                  <img src={item.image} alt={`${item.title} class inspiration`} loading="lazy" />
                  <span className="class-number">{item.number}</span>
                  <span className="class-doodle" aria-hidden="true">{item.icon}</span>
                  <DrawingDoodle kind="spark" className="class-drawing-doodle" />
                </div>
                <div className="class-card-content">
                  <span className="class-level">{item.level}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="class-card-bottom">
                    <span className="class-audience">{item.age}</span>
                    <Link to="/register" aria-label={`Register for ${item.title}`}><ArrowIcon /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="special-programs section-pad">
        <ColorSplash className="program-splash" />
        <div className="container">
          <div className="section-heading reveal">
            <div><span className="eyebrow">More ways to learn with us</span><h2>Art that fits<br /><em>your world.</em></h2></div>
            <p>Join from anywhere or get focused support for your school art exams.</p>
          </div>
          <div className="program-grid">
            <article className="program-card online-program reveal">
              <span className="program-icon" aria-hidden="true">◎</span>
              <span className="eyebrow">Learn from anywhere</span>
              <h3>Online classes<br /><em>around the world.</em></h3>
              <p>Live online art classes for international students, with personal guidance from Sanjukta wherever you are.</p>
              <span className="program-tag">International students welcome</span>
              <Link className="text-link" to="/register">Ask about online classes <ArrowIcon /></Link>
              <ColorSplash className="online-splash" />
            </article>
            <article className="program-card exam-program reveal">
              <span className="program-icon" aria-hidden="true">✎</span>
              <span className="eyebrow">Structured art guidance</span>
              <h3>School &amp; board<br /><em>exam support.</em></h3>
              <p>Drawing and painting guidance for internal school exams and board exam preparation, from building fundamentals to practicing with confidence.</p>
              <span className="program-tag">Internal school exams · Board exams</span>
              <Link className="text-link" to="/register">Enquire about exam support <ArrowIcon /></Link>
              <DrawingDoodle kind="pencil" className="exam-doodle" />
            </article>
            <article className="program-card project-program reveal">
              <span className="program-icon" aria-hidden="true">✂</span>
              <span className="eyebrow">Bring your school brief</span>
              <h3>School art<br /><em>project guidance.</em></h3>
              <p>Get friendly help planning and developing school art projects. Students make their own work with guidance on ideas, materials and techniques.</p>
              <span className="program-tag">Project planning · Creative skills · All ages</span>
              <Link className="text-link" to="/register">Ask about project guidance <ArrowIcon /></Link>
              <ColorSplash className="project-splash" />
            </article>
          </div>
        </div>
      </section>

      <section className="teacher-feature section-pad">
        <div className="container teacher-feature-grid">
          <div className="teacher-feature-image reveal">
            <img src="/images/gallery-inspiration.jpg" alt="A bright art studio gallery filled with colourful framed works" loading="lazy" />
            <span className="teacher-image-note">A welcoming studio<br />for every artist</span>
          </div>
          <div className="teacher-feature-copy reveal">
            <span className="eyebrow">A little guidance makes a big difference</span>
            <h2>Learn with<br /><em>Sanjukta Patra.</em></h2>
            <p>Build your skills in a friendly, encouraging class. Sanjukta helps each student explore materials, learn step by step and find a creative style of their own.</p>
            <div className="teacher-feature-tags"><span>Kids to adults</span><span>Beginner to advanced</span></div>
            <Link className="text-link" to="/about">Get to know your teacher <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="gallery-preview section-pad">
        <div className="container">
          <div className="section-heading reveal">
            <div><span className="eyebrow">A peek at what we make</span><h2>Little works,<br /><em>big feelings.</em></h2></div>
            <Link className="text-link" to="/gallery">Visit the gallery <ArrowIcon /></Link>
          </div>
          <div className="art-grid art-grid-preview reveal">
            <ArtWork variant="one" title="Expressive acrylic colour" detail="Abstract painting · Unsplash" image="/images/abstract-acrylic.jpg" alt="Brightly coloured abstract acrylic painting with textured brush strokes" />
            <ArtWork variant="two" title="A gallery of ideas" detail="Art inspiration · Unsplash" image="/images/gallery-inspiration.jpg" alt="Framed paintings displayed together on a gallery wall" />
            <ArtWork variant="three" title="A painted face study" detail="Painted mural · Unsplash" image="/images/mural-study.jpg" alt="Colourful painted face detail on an outdoor mural" />
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <section className="home-schedule section-pad">
        <div className="container home-schedule-inner reveal">
          <div className="home-schedule-copy">
            <span className="eyebrow">Make a little time for art</span>
            <h2>Your weekend<br /><em>creative reset.</em></h2>
            <p>Join a class at our main branch in Bansdroni, Garia. Get in touch to find the right class for your age and experience.</p>
            <Link className="btn btn-ink" to="/register">Ask about a class <ArrowIcon /></Link>
          </div>
          <div className="schedule-card">
            <span className="schedule-card-label">Weekend studio hours</span>
            <div className="schedule-day"><span>Saturday</span><strong>9:00 – 10:30 <small>AM</small></strong></div>
            <div className="schedule-day"><span>Sunday</span><strong>10:00 – 11:30 <small>AM</small></strong></div>
            <div className="schedule-location"><span aria-hidden="true">⌖</span><div><small>Main branch</small><strong>Bansdroni, Garia</strong></div><a href="https://www.google.com/maps/search/?api=1&query=Bansdroni%2C%20Garia" target="_blank" rel="noreferrer" aria-label="Open Bansdroni, Garia in Google Maps"><ArrowIcon /></a></div>
          </div>
          <DrawingDoodle kind="loop" className="schedule-doodle" />
        </div>
      </section>
      <JoinBanner />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="The story behind the splatters" title={<>A studio with<br /><em>heart &amp; colour.</em></>} copy="A little school built on a big idea: everyone deserves a place to make, explore and feel proud of what they create." />
      <section className="about-story section-pad">
        <div className="container about-grid">
          <div className="teacher-art reveal" role="img" aria-label="Illustration of art teacher Sanjukta Patra in a studio">
            <span className="teacher-sun" /><span className="teacher-head" /><span className="teacher-hair" /><span className="teacher-body" /><span className="teacher-palette">● <i>●</i> ●</span><span className="teacher-caption">Sanjukta Patra<br />Art teacher</span>
          </div>
          <div className="story-copy reveal">
            <span className="eyebrow">Meet your art teacher</span>
            <h2>Hi, I’m <em>Sanjukta Patra.</em></h2>
            <p className="story-lead">Let’s discover what you can make, one little step at a time.</p>
            <p>Sanjukta welcomes kids, teens and adults to explore drawing, painting and hands-on art in a supportive studio. Whether you’re picking up a pencil for the first time or building on years of practice, there’s room to learn at your own pace.</p>
            <p>From pastel and pencil sketching to oil, acrylic and handcraft, classes make space for guided techniques as well as personal ideas — so every artist can find their own way to create.</p>
            <div className="teacher-signature">Sanjukta Patra <span>✳</span></div>
            <div className="teacher-credentials"><span>Kids · Teens · Adults</span><span>Basic to advanced</span><span>Drawing · Painting · Craft</span></div>
          </div>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="container">
          <div className="section-heading reveal"><div><span className="eyebrow">What matters here</span><h2>Room to be<br /><em>yourself.</em></h2></div><p>We care just as much about how it feels to make art as what ends up on the paper.</p></div>
          <div className="values-grid">
            <article className="reveal"><span>01</span><h3>Curiosity first</h3><p>Questions, experiments and happy accidents are always welcome.</p></article>
            <article className="reveal"><span>02</span><h3>Every voice matters</h3><p>We celebrate each artist’s ideas, pace and one-of-a-kind point of view.</p></article>
            <article className="reveal"><span>03</span><h3>Process over polish</h3><p>The trying, learning and making are every bit as special as the finished piece.</p></article>
          </div>
        </div>
      </section>
      <JoinBanner />
    </>
  )
}

function LearningPage() {
  return (
    <>
      <PageIntro eyebrow="Find your own way to make" title={<>Learn by doing.<br /><em>Grow by making.</em></>} copy="Small, supportive classes with plenty of room to experiment. Find a group that feels right for you." />
      <section className="learning-list section-pad">
        <div className="container">
          {classCards.map((item) => (
            <article className={`learning-row class-${item.color} reveal`} key={item.number}>
              <span className="learning-number">{item.number}</span>
              <DrawingDoodle kind={item.number === '02' || item.number === '04' ? 'pencil' : 'spark'} className="learning-doodle" />
              <div className="learning-title"><span className="class-age">{item.age}</span><h2>{item.title}</h2><span className="learning-level">{item.level}</span></div>
              <p>{item.copy}</p>
              <div className="learning-topics">{item.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
              <Link className="btn btn-ink" to="/register">Ask about this class <ArrowIcon /></Link>
            </article>
          ))}
          <div className="learning-note"><span className="note-spark">✳</span><p>Not sure where to start? Tell us a little about the artist and we’ll help find a happy fit.</p><Link className="text-link" to="/contact">Let’s chat <ArrowIcon /></Link></div>
        </div>
      </section>
      <section className="method-section">
        <div className="container method-grid reveal">
          <DrawingDoodle kind="pencil" className="method-doodle" />
          <div><span className="eyebrow">Our class rhythm</span><h2>Gentle guidance.<br /><em>Lots of freedom.</em></h2><p>Every session brings a new prompt, a table full of materials and the freedom to take an idea somewhere unexpected.</p></div>
          <ol className="method-steps"><li><span>01</span><div><h3>Get curious</h3><p>Meet a new idea, artist or material.</p></div></li><li><span>02</span><div><h3>Have a go</h3><p>Play, practice and discover as you go.</p></div></li><li><span>03</span><div><h3>Make it yours</h3><p>Take your own idea somewhere new.</p></div></li></ol>
        </div>
      </section>
      <JoinBanner />
    </>
  )
}

function OnlineClassesPage() {
  return (
    <>
      <PageIntro eyebrow="Art lessons, wherever you are" title={<>Create from<br /><em>anywhere.</em></>} copy="Personal online drawing and painting classes for international students, taught by Sanjukta Patra." />
      <section className="online-page-section section-pad">
        <div className="container online-page-grid">
          <div className="online-page-photo reveal">
            <img src="/images/abstract-acrylic.jpg" alt="Colourful abstract painting created with layered brush strokes" />
            <ColorSplash className="online-page-splash" />
            <span>Make art from wherever you call home</span>
          </div>
          <div className="online-page-copy reveal">
            <span className="eyebrow">One-to-one creative guidance</span>
            <h2>Art lessons with<br /><em>a personal touch.</em></h2>
            <p>Join from anywhere in the world and learn at a pace that feels right for you. We’ll talk about your time zone, interests and experience to find a suitable way to learn together.</p>
            <ul>
              <li>Drawing, pastels, sketching and painting</li>
              <li>Beginner through advanced learning</li>
              <li>Personal guidance for your creative goals</li>
              <li>International students are welcome</li>
            </ul>
            <Link className="btn btn-ink" to="/register">Enquire about online classes <ArrowIcon /></Link>
            <p className="online-note">Class availability and schedule are confirmed directly with the teacher across time zones.</p>
          </div>
        </div>
      </section>
      <section className="online-steps section-pad">
        <div className="container">
          <div className="section-heading reveal">
            <div><span className="eyebrow">Simple to get started</span><h2>Three steps to<br /><em>your next idea.</em></h2></div>
          </div>
          <div className="online-steps-grid">
            <article className="reveal"><span>01</span><h3>Tell us about you</h3><p>Share your location, time zone and what kind of art you’d like to explore.</p></article>
            <article className="reveal"><span>02</span><h3>Find a time</h3><p>We’ll follow up to discuss availability and a class time that works.</p></article>
            <article className="reveal"><span>03</span><h3>Make something</h3><p>Get your materials ready and begin learning with personal guidance.</p></article>
          </div>
        </div>
      </section>
      <JoinBanner />
    </>
  )
}

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(intervalId)
  }, [isPaused])

  const moveTo = (direction: -1 | 1) => {
    setActiveIndex((index) => (index + direction + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[activeIndex]

  return (
    <section
      className="quote-section"
      aria-label="Sample testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setIsPaused(false)
      }}
    >
      <div className="container quote-inner">
        <DrawingDoodle kind="flower" className="quote-doodle" />
        <span className="quote-mark" aria-hidden="true">“</span>
        <blockquote key={activeIndex}>{testimonial.quote}</blockquote>
        <span className="quote-credit">— {testimonial.credit}</span>
        <span className="testimonial-sample-note">Sample reviews — replace with real feedback before publishing</span>
        <div className="testimonial-controls" aria-label="Testimonial slider controls">
          <button type="button" className="testimonial-arrow" aria-label="Previous testimonial" onClick={() => moveTo(-1)}><ArrowIcon /></button>
          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.credit}
                className={`testimonial-dot${index === activeIndex ? ' active' : ''}`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button type="button" className="testimonial-arrow next" aria-label="Next testimonial" onClick={() => moveTo(1)}><ArrowIcon /></button>
        </div>
        <Sparkle />
      </div>
    </section>
  )
}

function GalleryPage() {
  const artworks = [
    { variant: 'one', title: 'Expressive acrylic colour', detail: 'Abstract painting · Unsplash', image: '/images/abstract-acrylic.jpg', alt: 'Brightly coloured abstract acrylic painting with textured brush strokes' },
    { variant: 'two', title: 'A gallery of ideas', detail: 'Art inspiration · Unsplash', image: '/images/gallery-inspiration.jpg', alt: 'Framed paintings displayed together on a gallery wall' },
    { variant: 'three', title: 'A painted face study', detail: 'Painted mural · Unsplash', image: '/images/mural-study.jpg', alt: 'Colourful painted face detail on an outdoor mural' },
    { variant: 'four', title: 'Paintbrush colour study', detail: 'Painting tools · Unsplash', image: '/images/painting-brushes.jpg', alt: 'Paintbrushes spreading bright colour onto a canvas' },
    { variant: 'five', title: 'Handcraft materials', detail: 'Creative table · Unsplash', image: '/images/handcraft-materials.jpg', alt: 'Colourful craft tools and paper arranged on a work table' },
    { variant: 'six', title: 'Colour in motion', detail: 'Abstract paint · Unsplash', image: '/images/colour-in-motion.jpg', alt: 'Swirls of vivid purple and magenta paint' },
  ]

  return (
    <>
      <PageIntro eyebrow="Made with joyful abandon" title={<>A little gallery<br />of <em>big ideas.</em></>} copy="Every piece tells a story. Here are a few favourite moments from the tables, sketchbooks and imaginations in our studio." />
      <section className="gallery-page section-pad">
        <div className="container">
          <div className="gallery-note"><span>✳</span> All kinds of making. All kinds of wonderful.</div>
          <div className="art-grid reveal">
            {artworks.map((artwork) => <ArtWork key={artwork.title} {...artwork} />)}
          </div>
          <p className="gallery-disclaimer">Free Unsplash photos shown for art inspiration; these are not student artwork.</p>
        </div>
      </section>
      <JoinBanner />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Questions, ideas, happy hellos" title={<>We’d love to<br /><em>hear from you.</em></>} copy="Find our main branch in Bansdroni, Garia, and join us for weekend drawing and painting classes. Get in touch with any questions." />
      <section className="contact-section section-pad">
        <div className="container contact-grid">
          <div className="contact-card reveal">
            <span className="eyebrow">The useful details</span>
            <h2>Come say <em>hello.</em></h2>
            <div className="contact-detail"><span className="contact-icon">✳</span><div><strong>Call or WhatsApp</strong><a href="tel:+919051769135">+91 90517 69135</a><a href="https://wa.me/919051769135" target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowIcon /></a></div></div>
            <div className="contact-detail"><span className="contact-icon">⌂</span><div><strong>Main branch</strong><p>Bansdroni, Garia</p><a href="https://www.google.com/maps/search/?api=1&query=Bansdroni%2C%20Garia" target="_blank" rel="noreferrer">Open location in Maps <ArrowIcon /></a></div></div>
            <div className="contact-detail"><span className="contact-icon">◷</span><div><strong>Weekend class timings</strong><p>Saturday · 9:00–10:30 AM</p><p>Sunday · 10:00–11:30 AM</p></div></div>
            <div className="contact-bottom-note">We usually reply within one working day <span>✿</span></div>
          </div>
          <div className="contact-side reveal">
            <div className="contact-art" aria-hidden="true"><DrawingDoodle kind="flower" className="contact-doodle" /><span className="contact-art-flower">✿</span><span className="contact-art-sun" /><span className="contact-art-vase" /></div>
            <span className="eyebrow">A good first step</span>
            <h3>Tell us about<br />your <em>artist.</em></h3>
            <p>Age, interests, questions — we’d love to hear what they’re excited to try.</p>
            <Link className="btn btn-ink" to="/register">Ask about a class <ArrowIcon /></Link>
          </div>
        </div>
      </section>
      <JoinBanner />
    </>
  )
}

function RegistrationPage() {
  const [notice, setNotice] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const values = new FormData(form)
    const message = [
      `Hello ${studioName}! I'd like to ask about registering for a class.`,
      `Artist: ${values.get('studentName')}`,
      `Age: ${values.get('studentAge')}`,
      `Parent/guardian: ${values.get('parentName')}`,
      `Phone: ${values.get('phone')}`,
      `WhatsApp number: ${values.get('whatsappPhone')}`,
      `Email: ${values.get('email')}`,
      `Location: ${values.get('location')}`,
      `Class interest: ${values.get('classInterest')}`,
      `Message: ${values.get('message') || 'No additional message'}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setWhatsappLink(whatsappUrl)
    setNotice(whatsappWindow
      ? 'Your registration details are ready in WhatsApp. Please review the message and tap Send to submit your enquiry. Email notifications are not configured yet.'
      : 'Your browser blocked the WhatsApp tab. Use the link below to continue. Email notifications are not configured yet.')
    form.reset()
  }

  return (
    <>
      <PageIntro eyebrow="Your creative adventure starts here" title={<>Let’s make<br /><em>something lovely.</em></>} copy="Tell us a little about the artist and the classes they’re curious about. We’ll be in touch to find the right fit." />
      <section className="register-section section-pad">
        <ColorSplash className="register-color-splash" />
        <div className="container register-grid">
          <div className="register-aside reveal">
            <span className="eyebrow">A few little details</span>
            <h2>Every artist<br />starts <em>somewhere.</em></h2>
            <p>There’s no experience needed and no wrong answers. Just tell us who’s ready to make.</p>
            <div className="register-aside-art"><DrawingDoodle kind="pencil" className="register-doodle" /><span>✿</span><i>✳</i><b>◒</b></div>
            <div className="register-contact"><span>Prefer a quick chat?</span><a href="https://wa.me/919051769135" target="_blank" rel="noreferrer">WhatsApp +91 90517 69135 <ArrowIcon /></a></div>
          </div>
          <form className="registration-form reveal" onSubmit={handleSubmit}>
            <div className="form-heading"><span className="eyebrow">Class enquiry</span><span className="required-note">* required</span></div>
            <div className="form-row">
              <label>Artist’s name *<input name="studentName" autoComplete="name" required placeholder="Who’s joining us?" /></label>
              <label>Artist’s age *<input name="studentAge" type="number" min="1" max="120" required placeholder="e.g. 8" /></label>
            </div>
            <label>Parent or guardian’s name *<input name="parentName" autoComplete="name" required placeholder="Your name" /></label>
            <label>Phone number *<input name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label>
            <label>WhatsApp number *<input name="whatsappPhone" type="tel" autoComplete="tel" required placeholder="+91" /></label>
            <label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
            <label>Location *<input name="location" autoComplete="address-level2" required placeholder="City, neighbourhood or area" /></label>
            <label>Which class sounds interesting? *
              <select name="classInterest" required defaultValue="">
                <option value="" disabled>Choose online or offline</option>
                <optgroup label="Offline classes · Bansdroni, Garia">
                  {classCards.map((item) => <option key={`offline-${item.number}`} value={`Offline: ${item.title}`}>{item.title}</option>)}
                  <option value="Offline: School art project guidance">School art project guidance</option>
                  <option value="Offline: School internal and board exam support">School internal and board exam support</option>
                </optgroup>
                <optgroup label="Online classes · International students">
                  {classCards.map((item) => <option key={`online-${item.number}`} value={`Online: ${item.title}`}>{item.title}</option>)}
                  <option value="Online: School art project guidance">School art project guidance</option>
                  <option value="Online: School internal and board exam support">School internal and board exam support</option>
                </optgroup>
              </select>
            </label>
            <label>Anything else we should know?<textarea name="message" rows={3} placeholder="Interests, questions, or anything you'd like us to know…" /></label>
            <div className="email-status"><span>✳</span><p>Email delivery isn’t set up yet. Submitting will open a pre-filled WhatsApp message to <strong>+91 90517 69135</strong>; you’ll need to tap Send in WhatsApp.</p></div>
            <button type="submit" className="btn btn-ink form-submit">Continue to WhatsApp <ArrowIcon /></button>
            {notice && <p className="form-notice" role="status">{notice} <a href={whatsappLink} target="_blank" rel="noreferrer">Open WhatsApp</a></p>}
            <p className="privacy-note">Your details are used only to respond to this class enquiry.</p>
          </form>
        </div>
      </section>
    </>
  )
}

function JoinBanner() {
  return (
    <section className="join-banner">
      <div className="container join-banner-inner">
        <Sparkle />
      <DrawingDoodle kind="loop" className="join-doodle" />
        <div><span className="eyebrow">Your next happy accident awaits</span><h2>Ready to make a little <em>magic?</em></h2></div>
        <Link className="btn btn-cream" to="/register">Join a class <ArrowIcon /></Link>
      </div>
    </section>
  )
}

function NotFoundPage() {
  return <PageIntro eyebrow="A little detour" title={<>This page is<br /><em>still a blank canvas.</em></>} copy="Let’s get you back to something colourful." />
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const root = document.querySelector('#root')
    if (!root) return
    root.classList.add('motion-ready')
    const elements = root.querySelectorAll<HTMLElement>([
      '.announcement',
      '.site-footer',
      'main > section',
      'main .section-heading',
      'main .class-card',
      'main .online-steps-grid > article',
      'main .art-card',
      'main .learning-row',
      'main .values-grid > article',
      'main .method-steps > li',
      'main .contact-detail',
      'main .contact-bottom-note',
      'main .teacher-art',
      'main .story-copy > *',
      'main .registration-form > *',
      'main .quote-inner > *',
      'main .join-banner-inner > *',
    ].join(', '))
    elements.forEach((element) => element.classList.add('reveal'))
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.04, rootMargin: '0px 0px -20px 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/online-classes" element={<OnlineClassesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <LiveChat />
      <WhatsAppFloat />
    </>
  )
}

export default App
