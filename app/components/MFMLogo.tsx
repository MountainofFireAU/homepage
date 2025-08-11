import React from 'react'

interface MFMLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
  showText?: boolean
  className?: string
}

const MFMLogo: React.FC<MFMLogoProps> = ({ 
  size = 'md', 
  variant = 'default', 
  showText = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl'
  }

  const logoColors = {
    default: 'bg-white text-mfm-primary border-mfm-primary',
    white: 'bg-mfm-primary text-white border-white',
    dark: 'bg-mfm-dark text-white border-mfm-secondary'
  }

  const textColors = {
    default: 'text-mfm-primary',
    white: 'text-white',
    dark: 'text-mfm-dark'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className={`
        ${sizeClasses[size]} 
        flex items-center justify-center 
        relative
        overflow-hidden
      `}>
        <img 
          src="/images/icons/mfm-logo.png" 
          alt="MFM Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text */}
      {showText && (
        <div className={`${textColors[variant]}`}>
          <h1 className={`${textSizeClasses[size]} font-bold leading-tight`}>
            MFM Australia
          </h1>
          <p className={`text-xs ${variant === 'white' ? 'text-mfm-secondary' : 'text-mfm-secondary'} leading-tight`}>
            Mountain of Fire & Miracles
          </p>
        </div>
      )}
    </div>
  )
}

export default MFMLogo 