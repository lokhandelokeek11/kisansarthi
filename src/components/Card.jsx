import React from 'react'

const Card = ({
  children,
  className = '',
  padding = 'p-6',
  hover = true,
  onClick,
  ...props
}) => {
  const baseStyles = `bg-white rounded-2xl shadow-lg ${padding}`

  const hoverStyles = hover ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer' : ''

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
