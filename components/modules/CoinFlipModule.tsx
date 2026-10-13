'use client'

import React, { useState } from 'react'

export default function CoinFlipModule(props: any) {
  const [entropyCount, setEntropyCount]: any = useState(0)
  const [coords, setCoords]: any = useState([])
  const [lastPos, setLastPos]: any = useState(null)
  const [flipping, setFlipping]: any = useState(false)
  const [coinResult, setCoinResult]: any = useState(null)
  const [showPaywall, setShowPaywall]: any = useState(false)
  const [paywallReason, setPaywallReason]: any = useState('')

  const TARGET_ENTROPY: any = 300

  const handleMouseMoveArea = (e: any) => {
    if (entropyCount >= TARGET_ENTROPY) return

    const cur: any = { x: e.clientX, y: e.clientY }
    if (lastPos) {
      const dx: any = cur.x - lastPos.x
      const dy: any = cur.y - lastPos.y
      const dist: any = Math.sqrt(dx * dx + dy * dy)
      if (dist > 8) {
        setEntropyCount((prev: any) => Math.min(TARGET_ENTROPY, prev + 1))
        setCoords((prev: any) => [...prev.slice(-100), cur])
        setLastPos(cur)
      }
    } else {
      setLastPos(cur)
    }
  }

  const handleFlip = async () => {
    props.onIncrementClicks()
    if (entropyCount < TARGET_ENTROPY) return

    setFlipping(true)
    setCoinResult(null)

    try {
      const res: any = await fetch('/api/entropy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ coordinates: coords })
      })
      const data: any = await res.json()
      setCoinResult(data)
      if (props.onModuleCompleted) {
        props.onModuleCompleted(`Flipped a coin (${data.coinOutcome}) after 300 mouse shakes`)
      }
    } catch (err: any) {
      alert('Error flipping coin: ' + err)
    } finally {
      setFlipping(false)
    }
  }

  const handleResetEntropy = () => {
    props.onIncrementClicks()
    setEntropyCount(0)
    setCoords([])
    setCoinResult(null)
  }

  const triggerPaywall = (reason: any) => {
    props.onIncrementClicks()
    setPaywallReason(reason)
    setShowPaywall(true)
  }

  const percent: any = Math.floor((entropyCount / TARGET_ENTROPY) * 100)

  return (
    <div style={{ padding: '4px' }}>
      <div
        className="win95-inset"
        style={{
          background: '#e6f2ff',
          padding: '8px',
          marginBottom: '12px',
          borderLeft: '4px solid #000080',
          fontSize: '12px'
        }}
      >
        <strong>🌀 Charge The Coin:</strong>
        <br />
        To flip a coin, you must shake your mouse inside the box below <strong>300 times</strong> to build up energy.
      </div>

      <div
        className="win95-inset"
        onMouseMove={handleMouseMoveArea}
        style={{
          height: '110px',
          background: entropyCount >= TARGET_ENTROPY ? '#d4edda' : '#fff0f5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: entropyCount >= TARGET_ENTROPY ? 'default' : 'crosshair',
          border: entropyCount >= TARGET_ENTROPY ? '2px solid #28a745' : '2px dashed #dc3545',
          marginBottom: '10px'
        }}
      >
        <span style={{ fontSize: '24px' }}>
          {entropyCount >= TARGET_ENTROPY ? '🔋' : '⚡'}
        </span>
        <div style={{ fontSize: '13px', fontWeight: 'bold', marginTop: '4px' }}>
          {entropyCount >= TARGET_ENTROPY
            ? '✅ COIN FULLY CHARGED! READY TO FLIP.'
            : 'SHAKE YOUR MOUSE HERE TO CHARGE THE COIN'}
        </div>
        <div style={{ fontSize: '11px', color: '#666' }}>
          Shakes completed: {entropyCount} / {TARGET_ENTROPY} ({percent}%)
        </div>
      </div>

      <div className="win95-inset" style={{ height: '18px', background: '#e0e0e0', marginBottom: '12px', padding: '1px' }}>
        <div
          style={{
            height: '100%',
            width: `${percent}%`,
            background: 'linear-gradient(90deg, #000080 0%, #1084d0 100%)',
            transition: 'width 0.1s'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <button
          type="button"
          className="win95-button"
          disabled={entropyCount < TARGET_ENTROPY || flipping}
          onClick={handleFlip}
          style={{
            flex: 1,
            backgroundColor: entropyCount >= TARGET_ENTROPY ? '#c0c0c0' : '#e0e0e0',
            fontWeight: 'bold',
            color: entropyCount >= TARGET_ENTROPY ? '#000' : '#888'
          }}
        >
          {flipping ? '🪙 FLIPPING COIN...' : '🪙 FLIP COIN'}
        </button>
        <button
          type="button"
          className="win95-button"
          onClick={handleResetEntropy}
          title="Reset counter"
        >
          🗑️ Reset
        </button>
      </div>

      <div style={{ display: 'flex', gap: '6px' }}>
        <button
          type="button"
          className="win95-button"
          onClick={() => triggerPaywall('SEE_OUTCOME_PREDICTION')}
          style={{ flex: 1, fontSize: '11px', background: '#ffffd0' }}
        >
          🔮 See Outcome Beforehand ($19.99)
        </button>
        <button
          type="button"
          className="win95-button"
          onClick={() => triggerPaywall('SKIP_300_SHAKES')}
          style={{ flex: 1, fontSize: '11px', background: '#ffffd0' }}
        >
          ⚡ Skip 300 Shakes ($29.99)
        </button>
      </div>

      {coinResult && (
        <div className="win95-inset" style={{ padding: '10px', background: '#fff', marginTop: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '4px' }}>
            {coinResult.coinOutcome === 'HEADS' ? '👑' : '🦅'}
          </div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#000080' }}>
            IT LANDED ON: {coinResult.coinOutcome}!
          </div>
        </div>
      )}

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
            <div className="win95-titlebar" style={{ background: '#000080' }}>
              <span>🪙 COIN FLIP CHEAT PAYWALL</span>
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
              {paywallReason === 'SEE_OUTCOME_PREDICTION' ? (
                <>
                  <p>Want to know whether the coin will land on Heads or Tails before doing the physical shakes?</p>
                  <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '12px', fontSize: '12px' }}>
                    🔮 <strong>Oracle Pass ($19.99):</strong><br />
                    Spoil the future outcome of an entirely meaningless 50/50 probability event.
                  </div>
                </>
              ) : (
                <>
                  <p>Is your wrist hurting from shaking the mouse 300 times?</p>
                  <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '12px', fontSize: '12px' }}>
                    ⚡ <strong>Carpal Tunnel Relief Pass ($29.99):</strong><br />
                    Instantly fills the shake counter to 300 without moving a muscle.
                  </div>
                </>
              )}
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
                  💳 Pay Now
                </button>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowPaywall(false)}
                >
                  Keep Shaking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
