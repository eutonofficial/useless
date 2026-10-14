'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ContributorsPage() {
  const [copiedSol, setCopiedSol]: any = useState(false)
  const solAddress: any = '3PnBmtLsoMSDRfYhYCZj9zf71C3fxgPRcxK9K3fGm8AH'

  const handleCopySol = () => {
    navigator.clipboard.writeText(solAddress)
    setCopiedSol(true)
    setTimeout(() => setCopiedSol(false), 2500)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#008080',
        fontFamily: "'Comic Neue', 'Comic Sans MS', cursive, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '40px'
      }}
    >
      <div className="marquee-container">
        <div className="marquee-text">
          ⚠️ WE WANT YOUR HELP TO MAKE THIS PROJECT MORE CHAOTIC ⚠️ GOT SILLY IDEAS? ⚠️ WRITE BAD CODE WITH US ⚠️ ALL PRs WELCOME ⚠️
        </div>
      </div>

      <main style={{ padding: '24px 20px', maxWidth: '960px', margin: '0 auto', width: '100%' }}>
        <div
          className="win95-outset"
          style={{
            padding: '16px 20px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '36px' }}>💻</span>
            <div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#000080' }}>
                Contributor Sanctuary | UselessOS
              </div>
              <div style={{ fontSize: '12px', color: '#555' }}>
                <em>&quot;Help us build the most chaotic, funny, and over-engineered app on the internet.&quot;</em>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Link href="/" className="win95-button" style={{ textDecoration: 'none', color: '#000' }}>
              ⬅️ Back to Desktop Funnel
            </Link>
            <a
              href="https://euton.co"
              target="_blank"
              rel="noreferrer"
              className="win95-button"
              style={{ textDecoration: 'none', background: '#d4edda', color: '#155724', fontWeight: 'bold' }}
            >
              🚀 Real Agency: euton.co
            </a>
          </div>
        </div>

        <div className="win95-outset" style={{ marginBottom: '20px', background: '#c0c0c0' }}>
          <div className="win95-titlebar">
            <span>📢 We Want Your Help To Make This More Chaotic!</span>
            <span style={{ fontSize: '11px' }}>HELP_WANTED.EXE</span>
          </div>

          <div style={{ padding: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#000080' }}>
              Want to help us make this project more chaotic?
            </h2>
            <p style={{ margin: '0 0 14px 0', color: '#222' }}>
              Every day at work, you are told to write clean code, keep things simple, and make apps run super fast. That gets boring!
            </p>
            <p style={{ margin: '0 0 14px 0', color: '#222' }}>
              <strong>Here, we want the exact opposite.</strong> We want your help to make UselessOS even more chaotic, slow, and ridiculous. If you have a funny or terrible idea, we want you to build it and add it here!
            </p>

            <div
              className="win95-inset"
              style={{
                background: '#fffbe6',
                padding: '12px 16px',
                marginBottom: '16px',
                borderLeft: '4px solid #ffaa00',
                fontSize: '13px'
              }}
            >
              <strong>🚨 The Only Golden Rule:</strong>
              <br />
              Whatever you build must actually work, and all tests (<code>npm test</code>) must pass.
              The final result must be real, but the journey to get there should be pure creative chaos!
            </div>

            <h3 style={{ margin: '16px 0 8px 0', color: '#800000', fontSize: '16px' }}>
              💡 Fun Ways You Can Make It More Chaotic:
            </h3>
            <ul style={{ margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li><strong>Add Silly Buttons:</strong> Make buttons that dodge the mouse, shuffle letters, or play loud retro beeps.</li>
              <li><strong>Make Simple Things Hard:</strong> Why let users just click once when they could solve a puzzle first?</li>
              <li><strong>Over-Complicate Everything:</strong> Replace a 1-line function with a huge 500-line lookup table.</li>
              <li><strong>Zero Semicolons:</strong> Semicolons are strictly banned in code. Keep the files delightfully cursed!</li>
              <li><strong>Keep Tests Passing:</strong> Add fun new tests for your modules without breaking old ones.</li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <a
                href="https://github.com/eutonofficial/useless"
                target="_blank"
                rel="noreferrer"
                className="win95-button"
                style={{
                  fontSize: '15px',
                  padding: '8px 20px',
                  textDecoration: 'none',
                  color: '#000',
                  background: '#ffd700',
                  fontWeight: 'bold'
                }}
              >
                🐙 Help Us Make It More Chaotic (Submit a PR)
              </a>
            </div>
          </div>
        </div>

        <div className="win95-outset" style={{ background: '#c0c0c0', padding: '16px' }}>
          <div className="win95-titlebar" style={{ background: 'linear-gradient(90deg, #f39c12 0%, #d35400 100%)' }}>
            <span>🪙 Still Want To Pay Us Anyway? xD (Solana Tip Jar)</span>
            <span style={{ fontSize: '11px' }}>DONATE.BAT</span>
          </div>

          <div style={{ padding: '16px', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div
              className="win95-inset"
              style={{
                background: '#fff',
                padding: '8px',
                display: 'inline-block',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.2)'
              }}
            >
              <Image
                src="/sol-qr.jpg"
                alt="Solana Deposit QR Code"
                width={160}
                height={220}
                style={{ display: 'block', objectFit: 'contain' }}
              />
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#965a00', marginBottom: '6px' }}>
                Official Digital Bribery Address (SOL):
              </div>
              <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#333' }}>
                If you survived this operating system and genuinely feel compelled to send crypto into the ether, here is our Solana network address:
              </p>

              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="text"
                  readOnly
                  value={solAddress}
                  className="win95-inset"
                  style={{
                    flex: 1,
                    padding: '6px 8px',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    background: '#fff'
                  }}
                />
                <button
                  type="button"
                  className="win95-button"
                  onClick={handleCopySol}
                  style={{ padding: '6px 12px', fontSize: '12px', whiteSpace: 'nowrap' }}
                >
                  {copiedSol ? '✅ Copied!' : '📋 Copy Address'}
                </button>
              </div>

              <div style={{ fontSize: '11px', color: '#666' }}>
                Only send <strong>Solana (SOL)</strong> network assets. Other assets will be lost forever in the void.
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        className="win95-outset"
        style={{
          height: '36px',
          background: '#c0c0c0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2px 12px'
        }}
      >
        <span style={{ fontSize: '12px' }}>UselessOS™ Contributors Club</span>
        <span style={{ fontSize: '12px' }}>
          Real work at <a href="https://euton.co" target="_blank" rel="noreferrer" style={{ color: '#000080', fontWeight: 'bold' }}>euton.co</a>
        </span>
      </footer>
    </div>
  )
}
