'use client'

import React, { useState, useEffect } from 'react'

export default function ClickSpeedModule(props: any) {
  const [clicks, setClicks]: any = useState(0)
  const [timeLeft, setTimeLeft]: any = useState(60)
  const [gameActive, setGameActive]: any = useState(false)
  const [showPaywall, setShowPaywall]: any = useState(false)
  const staticRecord: any = 42
  const recordHolder: any = 'SlowPoke_1998'

  useEffect(() => {
    let timer: any = null
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev: any) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && gameActive) {
      setGameActive(false)
      if (clicks > staticRecord) {
        setShowPaywall(true)
      }
    }
    return () => clearInterval(timer)
  }, [gameActive, timeLeft, clicks])

  const handleClickTarget = () => {
    props.onIncrementClicks()
    if (!gameActive && timeLeft === 60) {
      setGameActive(true)
    }
    if (timeLeft > 0) {
      const next: any = clicks + 1
      setClicks(next)
      if (next > staticRecord && !showPaywall) {
        setShowPaywall(true)
        if (props.onModuleCompleted) {
          props.onModuleCompleted(`Beat world click record with ${next} clicks`)
        }
      }
    }
  }

  const handleReset = () => {
    props.onIncrementClicks()
    setClicks(0)
    setTimeLeft(60)
    setGameActive(false)
    setShowPaywall(false)
  }

  return (
    <div style={{ padding: '4px' }}>
      <div
        className="win95-inset"
        style={{
          background: '#e6fffa',
          padding: '8px',
          marginBottom: '12px',
          borderLeft: '4px solid #008080',
          fontSize: '12px'
        }}
      >
        <strong>⚡ 1-Minute Click Speed Record Challenge:</strong>
        <br />
        Current World Record: <strong>{staticRecord} clicks</strong> (Held by: <em>{recordHolder}</em>).
        Click the button below as fast as you can in 60 seconds to break the record!
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div className="win95-inset" style={{ padding: '4px 10px', fontSize: '14px', fontWeight: 'bold' }}>
          ⏱️ Time Left: {timeLeft}s
        </div>
        <div className="win95-inset" style={{ padding: '4px 10px', fontSize: '14px', fontWeight: 'bold', color: clicks > staticRecord ? '#28a745' : '#000080' }}>
          🖱️ Your Clicks: {clicks}
        </div>
      </div>

      <button
        type="button"
        className="win95-button"
        onClick={handleClickTarget}
        style={{
          width: '100%',
          height: '90px',
          fontSize: '18px',
          fontWeight: 'bold',
          background: clicks > staticRecord ? '#d4edda' : '#c0c0c0',
          borderColor: clicks > staticRecord ? '#28a745' : '#808080'
        }}
      >
        {!gameActive && timeLeft === 60
          ? '👉 CLICK HERE TO START 1-MINUTE CHALLENGE!'
          : timeLeft > 0
          ? '💥 CLICK ME! FASTER! CLICK!'
          : 'TIME IS UP!'}
      </button>

      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          type="button"
          className="win95-button"
          onClick={handleReset}
          style={{ fontSize: '12px' }}
        >
          🔄 Try Again
        </button>
        <button
          type="button"
          className="win95-button"
          onClick={() => setShowPaywall(true)}
          style={{ fontSize: '11px', background: '#ffffd0' }}
        >
          👑 Pay to Buy #1 Spot ($49.99)
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
            <div className="win95-titlebar" style={{ background: '#b8860b' }}>
              <span>🏆 WORLD RECORD BROKEN! (PAYWALL)</span>
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
              <p>You scored <strong>{clicks} clicks</strong>, which beats the world record of {staticRecord} clicks!</p>
              <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '12px', fontSize: '12px' }}>
                ⭐ <strong>Leaderboard Submission Fee:</strong><br />
                To display your name as the new #1 Record Holder on the permanent leaderboard, a $89.99 certification fee is required.
                Otherwise, your score will be deleted from history.
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
                  💳 Pay $89.99 to Keep Record
                </button>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowPaywall(false)}
                >
                  Discard My Hard Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
