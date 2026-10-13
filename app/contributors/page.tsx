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
          ⚠️ CALLING ALL DEVELOPERS ⚠️ TIRED OF CLEAN ARCHITECTURE? ⚠️ COME WRITE HORRIBLE CODE THAT ACTUALLY WORKS ⚠️ PRs MAKING IT BETTER WILL BE REJECTED ⚠️
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
                <em>&quot;A safe space for developers who want to write terrible code on purpose.&quot;</em>
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
            <span>📢 Are You A Developer Tired of Clean Code?</span>
            <span style={{ fontSize: '11px' }}>HELP_WANTED.EXE</span>
          </div>

          <div style={{ padding: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#000080' }}>
              Are you a dev? Do you secretly want to write bad code?
            </h2>
            <p style={{ margin: '0 0 14px 0', color: '#222' }}>
              At your 9-to-5 job, you spend 40 hours a week suffering under Jira sprints, SonarQube linter warnings, clean architecture dogmas, and senior engineers rejecting your PR over an extra newline.
            </p>
            <p style={{ margin: '0 0 14px 0', color: '#222' }}>
              <strong>Welcome to your safe haven.</strong> In UselessOS, we celebrate bad code, 1,000-branch manual lookup tables, artificial server bottlenecks, and multi-layered div soups.
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
              <strong>🚨 The Iron Golden Rule:</strong>
              <br />
              Any PR that optimizes performance, makes the UI cleaner, removes redundancy, or makes the app intuitive will be <strong>straight-away rejected</strong>.
              However, your code <em>must actually work</em> and all tests (<code>npm test</code>) must pass 100%!
            </div>

            <h3 style={{ margin: '16px 0 8px 0', color: '#800000', fontSize: '16px' }}>
              📜 Sins You Must Commit:
            </h3>
            <ul style={{ margin: '0 0 16px 0', paddingLeft: '24px' }}>
              <li><strong>Zero Semicolons:</strong> Semicolons are strictly banned. Let ASI fight for its life.</li>
              <li><strong>Cursed Variables:</strong> Use single characters (<code>a</code>, <code>b</code>, <code>_0x4f</code>) or deceptive flags (e.g. <code>isDone</code> for a counter).</li>
              <li><strong>Nested Div Soup:</strong> Never use clean flexbox without at least 3 redundant wrapper divs.</li>
              <li><strong>Chaotic Commits:</strong> Conventional commits (<code>feat:</code>, <code>fix:</code>) are banned. Use messages like <code>made button louder</code> or <code>fixed nothing</code>.</li>
              <li><strong>Protect Existing Tests:</strong> Do not touch existing core tests. Only add new tests for your new useless modules!</li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <a
                href="https://github.com/your-username/useless-os"
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
                🐙 Open A Pull Request (Make It Worse)
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
