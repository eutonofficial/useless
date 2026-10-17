'use client'

import React, { useState } from 'react'

export default function HireUsModal(props: any) {
  const [copiedSol, setCopiedSol]: any = useState(false)
  const solAddress: any = '3PnBmtLsoMSDRfYhYCZj9zf71C3fxgPRcxK9K3fGm8AH'

  if (!props.isOpen) return null

  const handleVisitEuton = () => {
    window.open('https://euton.co', '_blank')
    if (props.onClose) props.onClose()
  }

  const handleCopySol = () => {
    navigator.clipboard.writeText(solAddress)
    setCopiedSol(true)
    setTimeout(() => setCopiedSol(false), 2500)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '16px'
      }}
    >
      <div
        className="win95-outset win95-modal-responsive"
        style={{
          width: '540px',
          maxWidth: '100%',
          background: '#c0c0c0',
          boxShadow: '10px 10px 30px rgba(0,0,0,0.8)'
        }}
      >
        <div className="win95-titlebar" style={{ background: 'linear-gradient(90deg, #1084d0 0%, #000080 100%)' }}>
          <span>🚀 Built by euton.co</span>
          <button
            type="button"
            className="win95-button"
            style={{ padding: '0 4px', height: '16px', fontSize: '10px' }}
            onClick={props.onClose}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '16px', fontSize: '13px', lineHeight: '1.4' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
            <span style={{ fontSize: '36px' }}>💡</span>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 'bold', color: '#000080', marginBottom: '4px' }}>
                Crafted by euton.co
              </div>
              <p style={{ margin: 0, color: '#333' }}>
                UselessOS is a parody project exploring anti-patterns and extreme over-engineering for fun.
              </p>
            </div>
          </div>

          <div
            className="win95-inset"
            style={{
              padding: '10px',
              background: '#ffffff',
              marginBottom: '14px',
              fontSize: '12px',
              borderLeft: '4px solid #1084d0'
            }}
          >
            <strong>Looking for real software engineering?</strong>
            <br />
            If you want to collaborate, build high-performance web applications, or need premium digital product engineering, check out our real services at <strong>euton.co</strong>.
          </div>

          <div
            className="win95-inset"
            style={{
              padding: '10px',
              background: '#ffffd8',
              marginBottom: '14px',
              borderLeft: '4px solid #f39c12'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontWeight: 'bold', color: '#965a00' }}>
                🪙 Still want to pay us anyway? xD
              </span>
              <span style={{ fontSize: '11px', color: '#888' }}>Solana (SOL)</span>
            </div>
            <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#444' }}>
              If you genuinely want to throw a tip at this glorious disaster of an OS:
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="text"
                readOnly
                value={solAddress}
                className="win95-inset"
                style={{
                  flex: 1,
                  padding: '4px 6px',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  background: '#fff'
                }}
              />
              <button
                type="button"
                className="win95-button"
                onClick={handleCopySol}
                style={{ fontSize: '11px', padding: '3px 8px', whiteSpace: 'nowrap' }}
              >
                {copiedSol ? '✅ Copied!' : '📋 Copy SOL'}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="win95-button"
              onClick={handleVisitEuton}
              style={{
                padding: '6px 14px',
                fontSize: '13px',
                fontWeight: 'bold',
                background: '#d4edda',
                borderColor: '#28a745',
                color: '#155724'
              }}
            >
              Need Real Software? Visit euton.co 🚀
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={props.onClose}
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              Back to UselessOS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
