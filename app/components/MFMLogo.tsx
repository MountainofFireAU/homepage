import React from 'react'
import { withBasePath } from '../lib/basePath'

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

  const textColors = {
    default: 'text-mfm-primary',
    white: 'text-white',
    dark: 'text-mfm-dark'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}> 
        <img 
          src={withBasePath('/images/icons/mfm-logo.png')}
          alt="MFM Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className={`${textColors[variant]}`}>
          <h1 className={`${textSizeClasses[size]} font-bold leading-tight`}>
            MFM Australia
          </h1>
          <p className="text-xs text-mfm-secondary leading-tight">
            Mountain of Fire & Miracles
          </p>
        </div>
      )}
    </div>
  )
}

export default MFMLogo