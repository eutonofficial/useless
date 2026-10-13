'use client'

import React, { useRef, useEffect, useState } from 'react'

export default function CertificateModal(props: any) {
  const canvasRef: any = useRef(null)
  const [copied, setCopied]: any = useState(false)
  const [fakeSignature, setFakeSignature]: any = useState('0xDEADBEEFCAFE0000000000000000000000000000000000000000000000000000')
  const [showPaywall, setShowPaywall]: any = useState(false)

  useEffect(() => {
    fetch('/api/certificate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: props.userName,
        secondsWasted: props.secondsWasted,
        clicksCount: props.clicksCount,
        mouseKm: props.mouseKm,
        badges: props.badges
      })
    })
      .then((res: any) => res.json())
      .then((data: any) => {
        if (data.signature) setFakeSignature(data.signature)
      })
      .catch(() => {})
  }, [props.userName, props.secondsWasted, props.clicksCount, props.mouseKm, props.badges])

  useEffect(() => {
    const canvas: any = canvasRef.current
    if (!canvas) return
    const ctx: any = canvas.getContext('2d')
    if (!ctx) return

    const w: any = canvas.width
    const h: any = canvas.height

    ctx.fillStyle = '#fffdf0'
    ctx.fillRect(0, 0, w, h)

    ctx.strokeStyle = '#c5a059'
    ctx.lineWidth = 14
    ctx.strokeRect(15, 15, w - 30, h - 30)

    ctx.strokeStyle = '#800000'
    ctx.lineWidth = 3
    ctx.strokeRect(26, 26, w - 52, h - 52)

    ctx.fillStyle = '#c5a059'
    const corners: any = [[35, 35], [w - 35, 35], [35, h - 35], [w - 35, h - 35]]
    corners.forEach(([cx, cy]: any) => {
      ctx.beginPath()
      ctx.arc(cx, cy, 10, 0, Math.PI * 2)
      ctx.fill()
    })

    ctx.textAlign = 'center'
    ctx.fillStyle = '#800000'
    ctx.font = 'bold 28px "Comic Sans MS", "Comic Neue", cursive'
    ctx.fillText('OFFICIAL CERTIFICATE OF WASTED TIME™', w / 2, 75)

    ctx.fillStyle = '#444'
    ctx.font = 'italic 15px Georgia, serif'
    ctx.fillText('This strictly meaningless credential certifies that', w / 2, 110)

    ctx.fillStyle = '#000080'
    ctx.font = 'bold 36px "Comic Sans MS", "Comic Neue", cursive'
    ctx.fillText(props.userName?.trim() || 'ANONYMOUS PROCRASTINATOR', w / 2, 160)

    ctx.strokeStyle = '#000080'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(w / 2 - 220, 172)
    ctx.lineTo(w / 2 + 220, 172)
    ctx.stroke()

    ctx.fillStyle = '#333'
    ctx.font = '14px Georgia, serif'
    ctx.fillText('has courageously endured, without coercion or legitimate rationale,', w / 2, 205)
    ctx.fillText('the excruciating digital torture of UselessOS Enterprise Edition.', w / 2, 226)

    const minutes: any = Math.floor(props.secondsWasted / 60)
    const secs: any = props.secondsWasted % 60
    const timeFormatted: any = `${minutes}m ${secs}s`

    ctx.font = 'bold 15px "Courier New", monospace'
    ctx.fillStyle = '#000'
    ctx.fillText(`⏱️ SQUANDERED DURATION: ${timeFormatted}`, w / 2, 275)
    ctx.fillText(`🖱️ UNNECESSARY CLICKS: ${props.clicksCount} registered clicks`, w / 2, 305)
    ctx.fillText(`🏃 MOUSE VECTOR TRAVEL: ${(props.mouseKm).toFixed(3)} km across desktop`, w / 2, 335)

    const sealX: any = w - 120
    const sealY: any = h - 110
    ctx.beginPath()
    ctx.arc(sealX, sealY, 48, 0, Math.PI * 2)
    ctx.fillStyle = '#b30000'
    ctx.fill()
    ctx.lineWidth = 3
    ctx.strokeStyle = '#ffd700'
    ctx.stroke()

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 11px Arial, sans-serif'
    ctx.fillText('CERTIFIED', sealX, sealY - 8)
    ctx.fillText('100% POINTLESS', sealX, sealY + 8)

    ctx.textAlign = 'left'
    ctx.fillStyle = '#777'
    ctx.font = '10px monospace'
    ctx.fillText(`CRYPTOGRAPHIC PROOF: ${fakeSignature.slice(0, 48)}...`, 40, h - 50)
    ctx.fillText('VERIFIED AT useless.euton.co | POWERED BY euton.co', 40, h - 35)
  }, [props.userName, props.secondsWasted, props.clicksCount, props.mouseKm, props.badges, fakeSignature])

  const handleDownload = () => {
    props.onIncrementClicks()
    const canvas: any = canvasRef.current
    if (!canvas) return
    const link: any = document.createElement('a')
    link.download = `Certificate-Of-Wasted-Time-${props.userName || 'Anonymous'}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleCopyBrag = () => {
    props.onIncrementClicks()
    const bragText: any = `🏆 I am thrilled to announce that I have officially received my Enterprise Certificate of Wasted Time™ from UselessOS (https://useless.euton.co)!\n\n` +
      `📊 Official Telemetry Verified:\n` +
      `- Time Squandered: ${Math.floor(props.secondsWasted / 60)}m ${props.secondsWasted % 60}s\n` +
      `- Unnecessary Clicks: ${props.clicksCount}\n` +
      `- Kinetic Mouse Travel: ${props.mouseKm.toFixed(3)} km\n` +
      `- Cryptographic Proof: ${fakeSignature.slice(0, 18)}...\n\n` +
      `Try it yourself: https://useless.euton.co\n` +
      `Built with pride by the team at euton.co #UselessOS #euton #OverEngineering`

    navigator.clipboard.writeText(bragText)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleShareLinkedIn = () => {
    props.onIncrementClicks()
    handleCopyBrag()
    const shareUrl: any = encodeURIComponent('https://useless.euton.co')
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank', 'width=600,height=600')
  }

  return (
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
        zIndex: 10000,
        padding: '16px'
      }}
    >
      <div className="win95-outset" style={{ maxWidth: '850px', width: '100%', background: '#c0c0c0' }}>
        <div className="win95-titlebar">
          <span>📜 Official Diploma Conferral - Certificate of Wasted Time™</span>
          <button
            type="button"
            className="win95-button"
            style={{ padding: '0 4px', height: '16px', fontSize: '10px' }}
            onClick={props.onClose}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '12px', textAlign: 'center' }}>
          <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
            <canvas
              ref={canvasRef}
              width={760}
              height={440}
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="win95-button"
              onClick={handleDownload}
              style={{ padding: '8px 16px', fontSize: '14px', background: '#d4edda', borderColor: '#28a745' }}
            >
              💾 Download Diploma (.PNG)
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={handleShareLinkedIn}
              style={{ padding: '8px 16px', fontSize: '14px', background: '#0a66c2', color: '#ffffff' }}
            >
              🔗 Share to LinkedIn
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={handleCopyBrag}
              style={{ padding: '8px 16px', fontSize: '14px' }}
            >
              {copied ? '✅ Copied to Clipboard!' : '📋 Copy Brag Text'}
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={() => setShowPaywall(true)}
              style={{ padding: '8px 16px', fontSize: '14px', background: '#ffffd0' }}
            >
              ✏️ Edit Custom Achievements & Title ($99.99)
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={props.onClose}
              style={{ padding: '8px 16px', fontSize: '14px' }}
            >
              Dismiss
            </button>
          </div>
        </div>
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
              <span>✏️ DIPLOMA CUSTOMIZATION PAYWALL</span>
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
              <p>The standard certificate is 100% free, but custom honors require enterprise clearance.</p>
              <div className="win95-inset" style={{ padding: '8px', background: '#ffffd0', marginBottom: '12px', fontSize: '12px' }}>
                🎓 <strong>Diploma Customizer Pack ($99.99):</strong><br />
                - Edit your official job title to &quot;Senior Executive Procrastinator&quot;<br />
                - Add fake gold foil badges and custom seals<br />
                - Change certificate font from Comic Sans to Papyrus
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
                  💳 Pay $99.99 to Customize
                </button>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowPaywall(false)}
                >
                  Keep Standard Diploma
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
