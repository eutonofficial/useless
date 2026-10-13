'use client'

import React, { useState, useEffect } from 'react'

const ALPHABET: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('')

export default function KeyboardHell(props: any) {
  const [shuffledKeys, setShuffledKeys]: any = useState(ALPHABET)
  const [shuffleTick, setShuffleTick]: any = useState(0)
  const [showPaywall, setShowPaywall]: any = useState(false)

  useEffect(() => {
    const copy: any = [...ALPHABET]
    for (let i: any = copy.length - 1; i > 0; i--) {
      const j: any = Math.floor(Math.random() * (i + 1))
      const temp: any = copy[i]
      copy[i] = copy[j]
      copy[j] = temp
    }
    setShuffledKeys(copy)
  }, [shuffleTick])

  const handleKeyPress = (char: any) => {
    props.onIncrementClicks()
    const nextName: any = props.currentName + char
    props.onNameChange(nextName)
    setShuffleTick((prev: any) => prev + 1)

    if (nextName.length >= 3 && props.onModuleCompleted) {
      props.onModuleCompleted(`Typed name: ${nextName}`)
    }
  }

  const handleBackspace = () => {
    props.onIncrementClicks()
    props.onNameChange(props.currentName.slice(0, -1))
    setShuffleTick((prev: any) => prev + 1)
  }

  const handleClear = () => {
    props.onIncrementClicks()
    props.onNameChange('')
    setShuffleTick((prev: any) => prev + 1)
  }

  return (
    <div style={{ padding: '4px' }}>
      <div
        className="win95-inset"
        style={{
          background: '#fff0e6',
          padding: '8px',
          marginBottom: '12px',
          borderLeft: '4px solid #cc3300',
          fontSize: '12px'
        }}
      >
        <strong>⌨️ Type Your Name:</strong>
        <br />
        Normal keyboard is disabled. Click the letter buttons below to enter your name. Buttons shuffle positions after every click.
      </div>

      <div style={{ marginBottom: '10px' }}>
        <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
          Your Name:
        </div>
        <div
          className="win95-inset"
          style={{
            padding: '8px',
            fontSize: '18px',
            fontFamily: 'Comic Sans MS, cursive',
            color: '#000080',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#ffffff'
          }}
        >
          <span>{props.currentName || <span style={{ color: '#aaa', fontStyle: 'italic' }}>[Click buttons below to spell your name...]</span>}</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              type="button"
              className="win95-button"
              onClick={handleBackspace}
              style={{ fontSize: '11px', padding: '2px 6px' }}
              title="Backspace"
            >
              ⌫ Delete Letter
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={handleClear}
              style={{ fontSize: '11px', padding: '2px 6px' }}
              title="Clear all"
            >
              🗑️ Clear Name
            </button>
          </div>
        </div>
      </div>

      <div
        className="win95-inset"
        style={{
          padding: '8px',
          background: '#808080',
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 1fr)',
          gap: '4px'
        }}
      >
        {shuffledKeys.map((char: any, index: any) => (
          <button
            key={index}
            type="button"
            className="win95-button"
            onClick={() => handleKeyPress(char)}
            style={{
              padding: '6px 2px',
              fontSize: '13px',
              fontFamily: 'monospace',
              minWidth: '28px',
              backgroundColor: char === ' ' ? '#e8e8e8' : '#c0c0c0'
            }}
          >
            {char === ' ' ? '␣' : char}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          type="button"
          className="win95-button"
          onClick={() => {
            props.onIncrementClicks()
            setShuffleTick((prev: any) => prev + 1)
          }}
          style={{ fontSize: '11px' }}
        >
          🔀 Shuffle Buttons
        </button>
        <button
          type="button"
          className="win95-button"
          onClick={() => setShowPaywall(true)}
          style={{ fontSize: '11px', background: '#ffffd0' }}
        >
          🔒 Stop Shuffling ($49.99)
        </button>
      </div>

      {showPaywall && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '16px'
          }}
        >
          <div className="win95-outset" style={{ width: '420px', background: '#c0c0c0', padding: '12px' }}>
            <div className="win95-titlebar" style={{ background: '#cc3300' }}>
              <span>🔒 KEYBOARD STABILIZER PAYWALL</span>
              <button
                type="button"
                className="win95-button"
                style={{ padding: '0 4px', height: '16px', fontSize: '10px' }}
                onClick={() => setShowPaywall(false)}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '14px 0', fontSize: '13px' }}>
              <p>Tired of letter buttons flying around randomly every time you type?</p>
              <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '12px', fontSize: '12px' }}>
                💎 <strong>Keyboard Pro License:</strong><br />
                - Permanently freezes keys in standard QWERTY order<br />
                - Unlocks physical keyboard spacebar<br />
                - $49.99 one-time convenience fee
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => {
                    setShowPaywall(false)
                    if (props.onTriggerHireUs) props.onTriggerHireUs()
                  }}
                  style={{ background: '#d4edda', fontWeight: 'bold' }}
                >
                  💳 Pay $49.99 to Freeze Keys
                </button>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowPaywall(false)}
                >
                  Keep Suffering for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
