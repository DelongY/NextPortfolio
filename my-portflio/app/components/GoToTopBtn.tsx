'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronUp } from 'lucide-react'


const backgroundSizes = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12',
}

const iconSizes = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8',
}

interface GoToTopProps {
    threshold?: number
    position?: 'left' | 'right'
    backgroundColor?: string
    iconColor?: string
    size?: 'small' | 'medium' | 'large'
    smoothScroll?: boolean
}

const GoToTopBtn = ({
    threshold = 100,
    position = 'right',
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
    iconColor = '#ffffff',
    size = 'large',
    smoothScroll = true,
}: GoToTopProps) => {
    const [visible, setVisible] = useState(false)

    const handleScroll = useCallback(() => {
        setVisible(window.scrollY > threshold)
    }, [threshold])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    const scrollToTop = () => {
        if (smoothScroll) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            window.scrollTo(0, 0)
        }
    }

    if (!visible) return null

    return (
        <div
            className={`
                fixed z-30 transition-all duration-200 ease-out
                ${position === 'right' ? 'right-4' : 'left-4'}
                bottom-4 md:bottom-6 lg:bottom-8
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
        >
            <div className={`relative ${backgroundSizes[size]}`}>
                <button
                    onClick={scrollToTop}
                    style={{ backgroundColor }}
                    className={`
                        absolute inset-0 rounded-full
                        hover:brightness-110
                        shadow-lg hover:shadow-xl
                        transition-all duration-200
                        transform hover:scale-110 active:scale-95
                        group animate-bounce
                    `}
                    aria-label="Scroll to top"
                >
                    <ChevronUp 
                        style={{ color: iconColor }}
                        className={`
                            ${iconSizes[size]} mx-auto
                            transition-transform duration-200
                            group-hover:-translate-y-0.5
                            animate-bounce
                        `}
                    />
                </button>
            </div>
        </div>
    )
}

export default GoToTopBtn