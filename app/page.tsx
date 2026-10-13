'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Win95Window from '@/components/ui/Win95Window'
import EvenOddModule from '@/components/modules/EvenOddModule'
import CoinFlipModule from '@/components/modules/CoinFlipModule'
import WeekendModule from '@/components/modules/WeekendModule'
import KeyboardHell from '@/components/modules/KeyboardHell'
import CertificateModal from '@/components/modules/CertificateModal'
import ClickSpeedModule from '@/components/modules/ClickSpeedModule'
import CookieModal from '@/components/ui/CookieModal'
import HireUsModal from '@/components/ui/HireUsModal'
import { initCursedConsoleErrors, logClickError } from '@/lib/cursedConsoleErrors'

export default function Home() {
  const [currentStage, setCurrentStage]: any = useState(1)
  const [secondsWasted, setSecondsWasted]: any = useState(0)
  const [clicksCount, setClicksCount]: any = useState(0)
  const [mouseKm, setMouseKm]: any = useState(0)
  const [lastMousePos, setLastMousePos]: any = useState(null)
  const [badges, setBadges]: any = useState([])
  const [userName, setUserName]: any = useState('PLAYER ONE')
  const [showCertificate, setShowCertificate]: any = useState(false)
  const [showCookieNotice, setShowCookieNotice]: any = useState(true)
  const [showHireUsModal, setShowHireUsModal]: any = useState(false)
  const [startMenuOpen, setStartMenuOpen]: any = useState(false)
  const [soundEnabled, setSoundEnabled]: any = useState(true)

  const [stepDone, setStepDone]: any = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  })

  useEffect(() => {
    initCursedConsoleErrors()

    const timer: any = setInterval(() => {
      setSecondsWasted((prev: any) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleGlobalMouseMove: any = (e: any) => {
      if (lastMousePos) {
        const dx: any = e.clientX - lastMousePos.x
        const dy: any = e.clientY - lastMousePos.y
        const distancePx: any = Math.sqrt(dx * dx + dy * dy)
        const distanceKm: any = (distancePx * 0.000264583) / 1000
        setMouseKm((prev: any) => prev + distanceKm)
      }
      setLastMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [lastMousePos])

  const playRetroBeep = (freq: any = 440) => {
    if (!soundEnabled) return
    try {
      const audioCtx: any = new (window.AudioContext || (window as any).webkitAudioContext)()
      const osc: any = audioCtx.createOscillator()
      const gain: any = audioCtx.createGain()
      osc.type = 'square'
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08)
      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.start()
      osc.stop(audioCtx.currentTime + 0.08)
    } catch (_) {}
  }

  const handleGlobalClick = () => {
    const nextClicks: any = clicksCount + 1
    setClicksCount(nextClicks)
    logClickError(nextClicks)
    playRetroBeep(520)
  }

  const handleModuleCompleted = (badge: any, stepNum: any) => {
    playRetroBeep(880)
    setBadges((prev: any) => (prev.includes(badge) ? prev : [...prev, badge]))
    setStepDone((prev: any) => ({ ...prev, [stepNum]: true }))
  }

  const formatTimer = (totalSec: any) => {
    const mins: any = Math.floor(totalSec / 60)
    const secs: any = totalSec % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleNextStage = () => {
    handleGlobalClick()
    if (!stepDone[currentStage] && currentStage < 6) {
      const proceed: any = confirm(
        `Wait! You haven't finished Step ${currentStage} yet. Are you sure you want to skip to Step ${currentStage + 1}?`
      )
      if (!proceed) return
    }

    if (currentStage < 6) {
      setCurrentStage((prev: any) => prev + 1)
    } else {
      setShowCertificate(true)
    }
  }

  const handlePrevStage = () => {
    handleGlobalClick()
    if (currentStage > 1) {
      setCurrentStage((prev: any) => prev - 1)
    }
  }

  const stepLabels: any = [
    'Step 1: Enter Name',
    'Step 2: Even or Odd',
    'Step 3: Flip a Coin',
    'Step 4: Is It Weekend?',
    'Step 5: 1-Min Click Race',
    'Step 6: Get Certificate'
  ]

  return (
    <div
      onClick={handleGlobalClick}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '50px'
      }}
    >
      <div className="marquee-container">
        <div className="marquee-text">
          ⚠️ WELCOME TO USELESS.EUTON.CO ⚠️ CONSOLE CORRUPTION ENGINE ARMED ⚠️ POWERED BY EUTON.CO ⚠️ COMPLETE ALL STEPS OR PAY TO CHEAT ⚠️ ALL TESTS PASS ⚠️ ZERO SEMICOLONS ⚠️ NO REFUNDS ⚠️
        </div>
      </div>

      <main className="cursed-desktop-container" style={{ flex: 1, maxWidth: '1380px' }}>
        <div
          className="win95-outset"
          style={{
            paddingTop: '27px',
            paddingBottom: '9px',
            paddingLeft: '34px',
            paddingRight: '12px',
            marginBottom: '19px',
            marginTop: '7px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '38px' }}>💩</span>
            <div>
              <div style={{ fontSize: '21px', fontWeight: 'bold', color: '#000080' }}>
                UselessOS™ | <a href="https://useless.euton.co" style={{ color: '#000080', textDecoration: 'none' }}>useless.euton.co</a>
              </div>
              <div style={{ fontSize: '12px', color: '#555' }}>
                <em>&quot;A satire anti-pattern experiment by <a href="https://euton.co" target="_blank" rel="noreferrer" style={{ color: '#1084d0', fontWeight: 'bold' }}>euton.co</a>&quot;</em>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="win95-button"
              onClick={(e: any) => {
                e.stopPropagation()
                window.open('https://euton.co', '_blank')
              }}
              style={{
                background: '#d4edda',
                borderColor: '#28a745',
                color: '#155724',
                fontWeight: 'bold'
              }}
            >
              Need Real Software? Visit euton.co 🚀
            </button>
            <Link
              href="/contributors"
              className="win95-button"
              style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}
            >
              🤝 Write Bad Code?
            </Link>
            <button
              type="button"
              className="win95-button"
              onClick={(e: any) => {
                e.stopPropagation()
                setSoundEnabled(!soundEnabled)
              }}
            >
              {soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF'}
            </button>
            <button
              type="button"
              className="win95-button"
              onClick={(e: any) => {
                e.stopPropagation()
                handleGlobalClick()
                setShowCertificate(true)
              }}
              style={{
                background: '#ffd700',
                borderColor: '#b8860b',
                fontWeight: 'bold',
                padding: '6px 16px'
              }}
            >
              🎓 Open Certificate
            </button>
          </div>
        </div>

        <div
          className="win95-outset"
          style={{
            paddingTop: '16px',
            paddingBottom: '8px',
            paddingLeft: '22px',
            paddingRight: '11px',
            marginBottom: '23px',
            background: '#e0e0e0'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080' }}>
              📍 Progress: Step {currentStage} of 6 ({Math.floor((currentStage / 6) * 100)}% Completed)
            </span>
            <span style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>
              Time Wasted: {formatTimer(secondsWasted)}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '5px' }}>
            {stepLabels.map((name: any, idx: any) => {
              const stepNum: any = idx + 1
              const isActive: any = currentStage === stepNum
              const isDone: any = stepDone[stepNum]

              let btnClass: any = 'pipeline-step-locked'
              if (isActive) btnClass = 'pipeline-step-active'
              else if (isDone) btnClass = 'pipeline-step-completed'

              return (
                <button
                  key={idx}
                  type="button"
                  className={`win95-button ${btnClass}`}
                  onClick={(e: any) => {
                    e.stopPropagation()
                    handleGlobalClick()
                    setCurrentStage(stepNum)
                  }}
                  style={{
                    fontSize: '11px',
                    textAlign: 'left',
                    padding: '5px 8px 3px 6px',
                    margin: '1px 3px'
                  }}
                >
                  {isDone ? '✅ ' : isActive ? '👉 ' : '🔒 '}
                  {name}
                </button>
              )
            })}
          </div>
        </div>

        <div style={{ margin: '7px 42px 19px 5px' }}>
          {currentStage === 1 && (
            <Win95Window
              title="Step 1: Enter Your Name"
              icon="⌨️"
              statusText="Step 1 of 6 | Type 3 letters to continue"
            >
              <div style={{ padding: '8px 4px 12px 14px' }}>
                <KeyboardHell
                  currentName={userName}
                  onNameChange={setUserName}
                  onIncrementClicks={handleGlobalClick}
                  onModuleCompleted={(b: any) => handleModuleCompleted(b, 1)}
                  onTriggerHireUs={() => setShowHireUsModal(true)}
                />
              </div>
            </Win95Window>
          )}

          {currentStage === 2 && (
            <Win95Window
              title="Step 2: Check If Number Is Even Or Odd"
              icon="🧮"
              statusText="Step 2 of 6 | Numbers 0 to 1,000 supported"
            >
              <div style={{ padding: '14px 6px 8px 18px' }}>
                <EvenOddModule
                  onModuleCompleted={(b: any) => handleModuleCompleted(b, 2)}
                  onIncrementClicks={handleGlobalClick}
                  onTriggerHireUs={() => setShowHireUsModal(true)}
                />
              </div>
            </Win95Window>
          )}

          {currentStage === 3 && (
            <Win95Window
              title="Step 3: Shake Mouse & Flip A Coin"
              icon="🌀"
              statusText="Step 3 of 6 | Shake mouse 300 times or pay to skip"
            >
              <div style={{ padding: '9px 19px 15px 5px' }}>
                <CoinFlipModule
                  onModuleCompleted={(b: any) => handleModuleCompleted(b, 3)}
                  onIncrementClicks={handleGlobalClick}
                  onTriggerHireUs={() => setShowHireUsModal(true)}
                />
              </div>
            </Win95Window>
          )}

          {currentStage === 4 && (
            <Win95Window
              title="Step 4: Check If Today Is The Weekend"
              icon="🛰️"
              statusText="Step 4 of 6 | Spin dials or pay for manual input"
            >
              <div style={{ padding: '18px 8px 10px 22px' }}>
                <WeekendModule
                  onModuleCompleted={(b: any) => handleModuleCompleted(b, 4)}
                  onIncrementClicks={handleGlobalClick}
                  onTriggerHireUs={() => setShowHireUsModal(true)}
                />
              </div>
            </Win95Window>
          )}

          {currentStage === 5 && (
            <Win95Window
              title="Step 5: 1-Minute Click Speed Record"
              icon="🖱️"
              statusText="Step 5 of 6 | Break 42 clicks or pay for #1 rank"
            >
              <div style={{ padding: '12px 16px 14px 8px' }}>
                <ClickSpeedModule
                  onModuleCompleted={(b: any) => handleModuleCompleted(b, 5)}
                  onIncrementClicks={handleGlobalClick}
                  onTriggerHireUs={() => setShowHireUsModal(true)}
                />
              </div>
            </Win95Window>
          )}

          {currentStage === 6 && (
            <Win95Window
              title="Step 6: Get Your Certificate"
              icon="🎓"
              statusText="Step 6 of 6 | Final diploma conferral"
            >
              <div style={{ textAlign: 'center', padding: '34px 12px 20px 28px' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏆</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#800000', marginBottom: '8px' }}>
                  CONGRATULATIONS, {userName || 'FRIEND'}!
                </div>
                <p style={{ maxWidth: '600px', margin: '0 auto 16px auto', fontSize: '13px' }}>
                  You survived all steps! Your clicks were tracked, your mouse shakes counted, and your time gloriously wasted.
                </p>
                <button
                  type="button"
                  className="win95-button"
                  onClick={() => setShowCertificate(true)}
                  style={{
                    fontSize: '16px',
                    padding: '10px 24px',
                    background: '#ffd700',
                    borderColor: '#b8860b'
                  }}
                >
                  📜 View & Download My Certificate
                </button>
              </div>
            </Win95Window>
          )}

          <div
            className="win95-outset"
            style={{
              padding: '12px 18px 8px 24px',
              marginTop: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <button
              type="button"
              className="win95-button"
              onClick={handlePrevStage}
              disabled={currentStage === 1}
              style={{
                fontSize: '13px',
                padding: '5px 14px 4px 10px'
              }}
            >
              ⬅️ Previous Step
            </button>

            <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#555' }}>
              {stepDone[currentStage]
                ? '✅ Step completed! You can go to the next step.'
                : '⏳ Complete this step or click next to skip.'}
            </span>

            <button
              type="button"
              className="win95-button"
              onClick={handleNextStage}
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                padding: '6px 18px 5px 12px',
                background: currentStage === 6 ? '#ffd700' : '#c0c0c0'
              }}
            >
              {currentStage === 6 ? '🎓 My Certificate ➔' : 'Next Step ➔'}
            </button>
          </div>
        </div>

        {badges.length > 0 && (
          <div
            className="win95-outset"
            style={{
              marginTop: '22px',
              marginBottom: '14px',
              paddingTop: '15px',
              paddingBottom: '8px',
              paddingLeft: '28px',
              paddingRight: '12px',
              background: '#f0f0f0'
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', color: '#000080' }}>
              🏅 Completed Tasks ({badges.length}):
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {badges.map((b: any, i: any) => (
                <span
                  key={i}
                  className="win95-inset"
                  style={{
                    padding: '3px 8px',
                    fontSize: '11px',
                    background: '#e6ffe6',
                    borderColor: '#28a745',
                    fontFamily: 'monospace'
                  }}
                >
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer
        className="win95-outset"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '36px',
          background: '#c0c0c0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2px 8px',
          zIndex: 8888
        }}
      >
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className="win95-button"
            onClick={(e: any) => {
              e.stopPropagation()
              handleGlobalClick()
              setStartMenuOpen(!startMenuOpen)
            }}
            style={{
              fontWeight: 'bold',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '2px 8px'
            }}
          >
            <span style={{ fontSize: '16px' }}>🪟</span>
            <span>Start</span>
          </button>

          {startMenuOpen && (
            <div
              className="win95-outset"
              style={{
                position: 'absolute',
                bottom: '34px',
                left: 0,
                width: '240px',
                background: '#c0c0c0',
                padding: '4px',
                boxShadow: '4px 4px 10px rgba(0,0,0,0.5)'
              }}
              onClick={(e: any) => e.stopPropagation()}
            >
              <div
                style={{
                  background: 'linear-gradient(180deg, #000080 0%, #1084d0 100%)',
                  color: '#fff',
                  padding: '6px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  marginBottom: '4px'
                }}
              >
                UselessOS 95 Menu
              </div>

              <button
                type="button"
                className="win95-button"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  marginBottom: '4px',
                  fontSize: '11px',
                  background: '#d4edda',
                  color: '#155724',
                  fontWeight: 'bold'
                }}
                onClick={() => {
                  setStartMenuOpen(false)
                  window.open('https://euton.co', '_blank')
                }}
              >
                💼 Need Real Software? (euton.co)
              </button>

              <Link
                href="/contributors"
                className="win95-button"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  marginBottom: '4px',
                  fontSize: '11px',
                  textDecoration: 'none',
                  color: '#000',
                  fontWeight: 'bold'
                }}
                onClick={() => setStartMenuOpen(false)}
              >
                🤝 Write Bad Code? (Contributors)
              </Link>

              {stepLabels.map((name: any, idx: any) => (
                <button
                  key={idx}
                  type="button"
                  className="win95-button"
                  style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '2px', fontSize: '11px' }}
                  onClick={() => {
                    setCurrentStage(idx + 1)
                    setStartMenuOpen(false)
                  }}
                >
                  🚀 Go to {name}
                </button>
              ))}

              <hr style={{ margin: '4px 0', border: '1px inset #808080' }} />
              <button
                type="button"
                className="win95-button"
                style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '3px' }}
                onClick={() => {
                  setStartMenuOpen(false)
                  setShowCertificate(true)
                }}
              >
                📜 Print Certificate
              </button>
              <button
                type="button"
                className="win95-button"
                style={{ width: '100%', justifyContent: 'flex-start' }}
                onClick={() => alert('It is now safe to turn off your computer and visit euton.co.')}
              >
                🔌 Shut Down
              </button>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div className="win95-inset" style={{ padding: '2px 8px', fontSize: '12px', fontFamily: 'monospace' }}>
            🖱️ Clicks: {clicksCount}
          </div>
          <div className="win95-inset" style={{ padding: '2px 8px', fontSize: '12px', fontFamily: 'monospace' }}>
            🏃 Distance: {mouseKm.toFixed(3)} km
          </div>
          <div
            className="win95-inset"
            style={{
              padding: '2px 8px',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#000080',
              fontWeight: 'bold'
            }}
          >
            ⏱️ Time Wasted: {formatTimer(secondsWasted)}
          </div>
        </div>
      </footer>

      {showCookieNotice && (
        <CookieModal
          onAccept={() => {
            handleGlobalClick()
            setShowCookieNotice(false)
          }}
        />
      )}

      {showCertificate && (
        <CertificateModal
          userName={userName}
          secondsWasted={secondsWasted}
          clicksCount={clicksCount}
          mouseKm={mouseKm}
          badges={badges}
          onClose={() => setShowCertificate(false)}
          onIncrementClicks={handleGlobalClick}
          onTriggerHireUs={() => setShowHireUsModal(true)}
        />
      )}

      <HireUsModal
        isOpen={showHireUsModal}
        onClose={() => setShowHireUsModal(false)}
      />
    </div>
  )
}
