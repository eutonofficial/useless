'use client'

import React, { useState } from 'react'

export default function EvenOddModule(props: any) {
  const [inputValue, setInputValue]: any = useState('4')
  const [loading, setLoading]: any = useState(false)
  const [loadingStep, setLoadingStep]: any = useState('')
  const [resultData, setResultData]: any = useState(null)
  const [showPaywall, setShowPaywall]: any = useState(false)

  const handleVerify = async () => {
    props.onIncrementClicks()
    const num: any = Number(inputValue)

    if (isNaN(num)) {
      alert('Please enter a valid number.')
      return
    }

    if (num > 1000 || num < 0) {
      setShowPaywall(true)
      return
    }

    setLoading(true)
    setResultData(null)
    setLoadingStep('Checking 1,000 if-conditions one by one...')

    const t1: any = setTimeout(() => {
      setLoadingStep('Waiting for server confirmation...')
    }, 800)

    const t2: any = setTimeout(() => {
      setLoadingStep('Almost done checking...')
    }, 1600)

    try {
      const res: any = await fetch('/api/even-odd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: num })
      })
      const data: any = await res.json()
      clearTimeout(t1)
      clearTimeout(t2)
      setResultData(data)
      if (props.onModuleCompleted) {
        props.onModuleCompleted(`Checked if ${num} is ${data.result}`)
      }
    } catch (err: any) {
      alert('Connection error: ' + err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '4px' }}>
      <div
        className="win95-inset"
        style={{
          background: '#ffffe0',
          padding: '8px',
          marginBottom: '12px',
          borderLeft: '4px solid #ff8800',
          fontSize: '12px',
          lineHeight: '1.4'
        }}
      >
        <strong>⚠️ NOTICE: NUMBERS &gt; 1,000 REQUIRE PAID UPGRADE!</strong>
        <br />
        Free tier only supports numbers <strong>0 to 1,000</strong>.
        Numbers 1,001 and higher are locked behind our Enterprise Paywall.
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
        <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Enter a number:</label>
        <input
          type="number"
          className="win95-inset"
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
          style={{ width: '90px', padding: '4px', fontSize: '14px', fontFamily: 'monospace' }}
        />
        <button
          type="button"
          className="win95-button"
          onClick={handleVerify}
          disabled={loading}
          style={{ backgroundColor: loading ? '#ddd' : '#c0c0c0', touchAction: 'manipulation' }}
        >
          {loading ? '⏳ Checking...' : '⚡ Check Even / Odd'}
        </button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button
          type="button"
          className="win95-button"
          onClick={() => setShowPaywall(true)}
          style={{ fontSize: '11px', background: '#ffffd0', width: '100%' }}
        >
          💎 Unlock Numbers &gt; 1,000 (Enterprise Plus $999/mo)
        </button>
      </div>

      {loading && (
        <div className="win95-inset" style={{ padding: '8px', background: '#000', color: '#00ff00', fontFamily: 'monospace', fontSize: '12px' }}>
          <div className="blink">&gt; {loadingStep}</div>
          <div style={{ height: '6px', background: '#333', marginTop: '6px' }}>
            <div style={{ height: '100%', width: '70%', background: '#00ff00', transition: 'width 2s' }} />
          </div>
        </div>
      )}

      {resultData && !loading && (
        <div className="win95-inset" style={{ padding: '10px', background: '#ffffff', marginTop: '8px' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: resultData.isEven ? '#008000' : '#800080', marginBottom: '6px' }}>
            🎉 RESULT: {resultData.queryNumber} IS {resultData.result}!
          </div>
          <div style={{ fontSize: '11px', color: '#555', fontFamily: 'monospace' }}>
            <div>Status: Checked through manual if-branches</div>
            <div>Server time spent: 2.5 seconds</div>
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
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <div className="win95-outset win95-modal-responsive" style={{ width: '420px', maxWidth: '100%', padding: '16px', background: '#c0c0c0' }}>
            <div className="win95-titlebar" style={{ background: 'darkred' }}>
              <span>🚨 4-DIGIT INTEGER PAYWALL</span>
              <button
                type="button"
                className="win95-button"
                style={{ padding: '0 4px', height: '16px', fontSize: '10px' }}
                onClick={() => setShowPaywall(false)}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '12px 0', fontSize: '13px' }}>
              <p>You requested number <strong>{inputValue}</strong>, which exceeds the free community ceiling (0 to 1,000).</p>
              <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '10px', fontSize: '12px' }}>
                💎 <strong>Upgrade to Enterprise Plus:</strong><br />
                - Unlocks numbers 1,001 through 9,999<br />
                - Dedicated server to divide by 2<br />
                - 24/7 pager duty support
              </div>
              <div style={{ textAlign: 'right', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => {
                    setShowPaywall(false)
                    if (props.onTriggerHireUs) props.onTriggerHireUs()
                  }}
                >
                  💳 Upgrade ($999/mo)
                </button>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowPaywall(false)}
                >
                  Stay on Free Tier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
