import React from 'react'

interface LeadershipPhotoProps {
  name: string
  initials: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const LeadershipPhoto: React.FC<LeadershipPhotoProps> = ({ 
  name, 
  initials, 
  size = 'lg',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-24 h-24 text-xl',
    lg: 'w-32 h-32 text-3xl',
    xl: 'w-48 h-48 text-5xl'
  }

  return (
    <div className={`${className}`}>
      {/* Photo Placeholder with Gradient Background */}
      <div className={`
        ${sizeClasses[size]} 
        bg-gradient-to-br from-mfm-primary to-mfm-dark
        rounded-full 
        flex items-center justify-center 
        mx-auto mb-4
        shadow-lg
        border-4 border-mfm-secondary
        relative
        overflow-hidden
      `}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-mfm-secondary/20 to-transparent"></div>
        
        {/* Initials */}
        <span className={`
          ${sizeClasses[size].split(' ')[2]} 
          font-bold text-white relative z-10
        `}>
          {initials}
        </span>
        
        {/* Decorative Ring */}
        <div className="absolute inset-2 border-2 border-mfm-secondary/30 rounded-full"></div>
      </div>
      
      {/* Photo Credit/Note */}
      <p className="text-xs text-gray-500 text-center mt-2">
        Official photo to be updated
      </p>
    </div>
  )
}

export default LeadershipPhoto 