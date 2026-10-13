'use client'

import React from 'react'

export default function CookieModal(props: any) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 19999,
        padding: '16px'
      }}
    >
      <div
        className="win95-outset"
        style={{
          width: '460px',
          maxWidth: '100%',
          background: '#c0c0c0',
          boxShadow: '6px 6px 16px rgba(0,0,0,0.6)'
        }}
      >
        <div className="win95-titlebar" style={{ background: '#000080' }}>
          <span>🍪 Cookie Notice (Mandatory)</span>
          <button
            type="button"
            className="win95-button"
            style={{ padding: '0 4px', height: '16px', fontSize: '10px' }}
            onClick={props.onAccept}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '16px', fontSize: '13px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
            <span style={{ fontSize: '36px' }}>🍪</span>
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                We Use 100% Unnecessary Cookies!
              </div>
              <p style={{ margin: 0, lineHeight: '1.4', color: '#222' }}>
                This site uses cookies to slow down your browser, measure mouse shaking, and calculate every second you waste.
                Under our non-existent privacy policy, declining is not supported.
              </p>
            </div>
          </div>

          <div
            className="win95-inset"
            style={{
              padding: '8px',
              background: '#ffffd0',
              marginBottom: '14px',
              fontSize: '11px',
              color: '#555'
            }}
          >
            By continuing, you agree that your wasted time is non-refundable.
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="win95-button"
              onClick={props.onAccept}
              style={{ padding: '6px 14px', fontWeight: 'bold' }}
            >
              ✅ Accept Cookies
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={props.onAccept}
              style={{ padding: '6px 14px', fontWeight: 'bold', background: '#d4edda', borderColor: '#28a745' }}
            >
              🎉 Also Accept Cookies (Faster)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
