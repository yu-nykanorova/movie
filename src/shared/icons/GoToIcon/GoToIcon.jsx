import React from 'react'

export const GoToIcon = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
        <svg width="18" height="18" viewBox="0 0 448 512" fill="#6100c2">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
    </div>
  )
}
