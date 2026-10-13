'use client'

import React, { useState } from 'react'

export default function WeekendModule(props: any) {
  const [lat, setLat]: any = useState(40)
  const [lon, setLon]: any = useState(-74)
  const [utcOffset, setUtcOffset]: any = useState(-5)
  const [loading, setLoading]: any = useState(false)
  const [result, setResult]: any = useState(null)
  const [showPaywall, setShowPaywall]: any = useState(false)

  const spinWheel = (setter: any, min: any, max: any) => {
    props.onIncrementClicks()
    const randomized: any = Math.floor(Math.random() * (max - min + 1)) + min
    setter(randomized)
  }

  const handleCalculateWeekend = async () => {
    props.onIncrementClicks()
    setLoading(true)
    setResult(null)

    try {
      const res: any = await fetch('/api/weekend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat, lon, utcOffset })
      })
      const data: any = await res.json()
      setResult(data)
      if (props.onModuleCompleted) {
        props.onModuleCompleted(`Checked weekend status (${data.detectedDay})`)
      }
    } catch (err: any) {
      alert('Error checking date: ' + err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '4px' }}>
      <div
        className="win95-inset"
        style={{
          background: '#f9f0ff',
          padding: '8px',
          marginBottom: '12px',
          borderLeft: '4px solid #800080',
          fontSize: '12px'
        }}
      >
        <strong>📅 Check The Weekend:</strong>
        <br />
        Spin the 3 wheels to pick your location coordinates, then click the button to check if today is Saturday or Sunday.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
        <div className="win95-inset" style={{ padding: '6px', textAlign: 'center', background: '#fafafa' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Latitude</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0', color: '#000080' }}>{lat}°</div>
          <button
            type="button"
            className="win95-button"
            style={{ width: '100%', fontSize: '11px' }}
            onClick={() => spinWheel(setLat, -90, 90)}
          >
            🎰 Spin Lat
          </button>
        </div>

        <div className="win95-inset" style={{ padding: '6px', textAlign: 'center', background: '#fafafa' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Longitude</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0', color: '#000080' }}>{lon}°</div>
          <button
            type="button"
            className="win95-button"
            style={{ width: '100%', fontSize: '11px' }}
            onClick={() => spinWheel(setLon, -180, 180)}
          >
            🎰 Spin Lon
          </button>
        </div>

        <div className="win95-inset" style={{ padding: '6px', textAlign: 'center', background: '#fafafa' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Timezone</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0', color: '#000080' }}>UTC {utcOffset >= 0 ? `+${utcOffset}` : utcOffset}</div>
          <button
            type="button"
            className="win95-button"
            style={{ width: '100%', fontSize: '11px' }}
            onClick={() => spinWheel(setUtcOffset, -12, 14)}
          >
            🎰 Spin UTC
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button
          type="button"
          className="win95-button"
          onClick={() => setShowPaywall(true)}
          style={{ width: '100%', fontSize: '11px', background: '#ffffd0' }}
        >
          📍 Type City Name Manually Instead of Spinning Dials ($29.99)
        </button>
      </div>

      <button
        type="button"
        className="win95-button"
        disabled={loading}
        onClick={handleCalculateWeekend}
        style={{ width: '100%', padding: '6px', fontSize: '13px', fontWeight: 'bold' }}
      >
        {loading ? '📡 CHECKING SATELLITE (PLEASE WAIT)...' : '📅 CHECK IF TODAY IS WEEKEND'}
      </button>

      {result && (
        <div className="win95-inset" style={{ padding: '10px', background: '#fff', marginTop: '12px' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: result.isWeekend ? '#28a745' : '#c82333', marginBottom: '4px' }}>
            {result.isWeekend ? '🏖️ YES, IT IS THE WEEKEND!' : '💼 NO, IT IS A REGULAR WORKDAY!'}
          </div>
          <div style={{ fontSize: '12px', color: '#333' }}>
            Today is: <strong>{result.detectedDay}</strong>
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
            <div className="win95-titlebar" style={{ background: '#800080' }}>
              <span>📍 MANUAL LOCATION INPUT PAYWALL</span>
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
              <p>Annoyed by spinning 3 random dials to guess your geographic coordinates?</p>
              <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '12px', fontSize: '12px' }}>
                🗺️ <strong>Normal Human Input Pass ($29.99):</strong><br />
                Allows you to simply type &quot;New York&quot; or &quot;London&quot; in a normal text box instead of spinning casino prize wheels.
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
                  💳 Unlock Textbox ($29.99)
                </button>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowPaywall(false)}
                >
                  Keep Spinning Wheels
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
