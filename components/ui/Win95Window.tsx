'use client'

import React, { useState } from 'react'

export default function Win95Window(props: any) {
  const [isMinimized, setIsMinimized]: any = useState(false)
  const [isMaximized, setIsMaximized]: any = useState(false)

  const handleClose = () => {
    if (props.onCloseAttempt) {
      props.onCloseAttempt()
    } else {
      alert('Error 0xDEADBEEF: Windows cannot close this window because your time has not been sufficiently wasted.')
    }
  }

  return (
    <div
      className="win95-outset win95-window"
      style={{
        width: props.initialWidth || '100%',
        maxWidth: isMaximized ? '100%' : '100%',
        margin: '0 auto 20px auto'
      }}
    >
      <div className="div-soup-wrapper-alpha">
        <div className="div-soup-wrapper-beta">
          <div className="div-soup-wrapper-gamma">
            <div className="win95-titlebar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>{props.icon || '📁'}</span>
                <span>{props.title}</span>
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                <button
                  type="button"
                  className="win95-button"
                  style={{ padding: '0 4px', height: '18px', fontSize: '11px', lineHeight: '1' }}
                  onClick={() => setIsMinimized(!isMinimized)}
                  title="Minimize"
                >
                  _
                </button>
                <button
                  type="button"
                  className="win95-button"
                  style={{ padding: '0 4px', height: '18px', fontSize: '11px', lineHeight: '1' }}
                  onClick={() => setIsMaximized(!isMaximized)}
                  title="Maximize"
                >
                  {isMaximized ? '❐' : '□'}
                </button>
                <button
                  type="button"
                  className="win95-button"
                  style={{ padding: '0 4px', height: '18px', fontSize: '11px', lineHeight: '1', fontWeight: 'bold' }}
                  onClick={handleClose}
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {!isMinimized && (
              <div style={{ padding: '12px' }}>
                {props.children}

                <div
                  className="win95-inset"
                  style={{
                    marginTop: '12px',
                    padding: '2px 8px',
                    fontSize: '11px',
                    color: '#333',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'monospace'
                  }}
                >
                  <span>{props.statusText || 'Ready'}</span>
                  <span>SSL: 100% Insecure</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
