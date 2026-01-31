import { useMemo } from 'react'
import './HomePage.css'
import logo from '../assets/755.jpg'

// Contact button data
const contactButtons = [
    {
        id: 'phone1',
        label: 'Телефон 1',
        href: 'tel:+71234567890',
        gradient: 'from-[#c9b896] to-[#c9b896]',
        hoverGradient: 'hover:from-[#b8a88a] hover:to-[#b8a88a]',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        id: 'phone2',
        label: 'Телефон 2',
        href: 'tel:+70987654321',
        gradient: 'from-[#c9b896] to-[#c9b896]',
        hoverGradient: 'hover:from-[#b8a88a] hover:to-[#b8a88a]',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://instagram.com/your_username',
        gradient: 'from-pink-500 via-rose-500 to-orange-400',
        hoverGradient: 'hover:from-pink-400 hover:via-rose-400 hover:to-orange-300',
        external: true,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        id: 'telegram',
        label: 'Telegram канал',
        href: 'https://t.me/your_channel',
        gradient: 'from-sky-500 to-blue-600',
        hoverGradient: 'hover:from-sky-400 hover:to-blue-500',
        external: true,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
]

export default function HomePage() {
    // Stable random positions for background text
    const backgroundItems = useMemo(() => {
        return [...Array(24)].map((_, i) => ({
            id: i,
            // Grid-based positioning with randomness
            left: `${(i % 4) * 25 + Math.random() * 15}%`,
            top: `${Math.floor(i / 4) * 16.6 + Math.random() * 10}%`,
            rotation: -25 + Math.random() * 50,
            scale: 0.8 + Math.random() * 0.6,
            opacity: 0.1 + Math.random() * 0.15,
            delay: Math.random() * 2,
        }))
    }, [])

    return (
        <div className="min-h-screen bg-[#c9b896] flex items-center justify-center p-4 font-sans overflow-hidden">
            {/* Background text pattern */}
            <div className="fixed inset-0 pointer-events-none select-none">
                {backgroundItems.map((item) => (
                    <span
                        key={item.id}
                        className="absolute text-white font-bold whitespace-nowrap hidden sm:block overflow-visible"
                        style={{
                            left: item.left,
                            top: item.top,
                            transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
                            opacity: item.opacity,
                            fontSize: '1.5rem',
                            filter: 'blur(0.5px)',
                        }}
                    >
                        755_store
                    </span>
                ))}

                {/* Mobile version with fewer items and better spacing */}
                {[...Array(12)].map((_, i) => (
                    <span
                        key={`mobile-${i}`}
                        className="absolute text-white font-bold whitespace-nowrap block sm:hidden"
                        style={{
                            left: `${(i % 2) * 50 + 5 + Math.random() * 15}%`,
                            top: `${(i / 2) * 16.6 + Math.random() * 5}%`,
                            transform: `rotate(${-20 + Math.random() * 40}deg) scale(${1.0 + Math.random() * 0.5})`,
                            opacity: 0.25,
                            fontSize: '1.8rem',
                        }}
                    >
                        755_store
                    </span>
                ))}
            </div>


            {/* Glass card */}
            <div className="relative bg-white/[0.80] backdrop-blur-xl border border-[#d4c4a8] rounded-3xl p-8 md:p-12 max-w-md w-full text-center animate-[fadeIn_0.8s_ease-out]">
                {/* Avatar */}
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-lg shadow-gray-400/30 overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full h-full object-cover scale-125" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                        755
                    </h1>
                    <p className="text-gray-800 text-md">Выберите удобный способ связи</p>
                </div>

                {/* Buttons */}
                <div className="space-y-4">
                    {contactButtons.map((btn, index) => (
                        <a
                            key={btn.id}
                            href={btn.href}
                            target={btn.external ? '_blank' : undefined}
                            rel={btn.external ? 'noopener noreferrer' : undefined}
                            className={`block w-full py-4 px-6 rounded-xl bg-gradient-to-r ${btn.gradient} ${btn.hoverGradient} text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-1 animate-[slideUp_0.6s_ease-out_forwards]`}
                            style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
                        >
                            <span className="flex items-center justify-center gap-3">
                                {btn.icon}
                                {btn.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
