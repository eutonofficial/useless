export function initCursedConsoleErrors(): any {
  if (typeof window === 'undefined') return

  const bannerStyle: any = 'color: #ff0055; font-size: 18px; font-weight: 900; background: #000; padding: 10px; border: 3px solid #ff0055;'
  const errorHeaderStyle: any = 'color: #ffffff; background: #cc0000; font-size: 14px; font-weight: bold; padding: 4px 8px;'
  const warningStyle: any = 'color: #ffff00; background: #333300; font-size: 12px; font-weight: bold; padding: 2px 6px;'
  const stackStyle: any = 'color: #ff6666; font-family: monospace; font-size: 11px;'

  console.error(
    `%c` +
    `███████╗██████╗ ██████╗  ██████╗ ██████╗     ██████╗ ███████╗██╗   ██╗███████╗███████╗███████╗\n` +
    `██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗    ██╔══██╗██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝\n` +
    `█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝    ██║  ██║█████╗  ██║   ██║███████╗█████╗  ███████╗\n` +
    `██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗    ██║  ██║██╔══╝  ██║   ██║╚════██║██╔══╝  ╚════██║\n` +
    `███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║    ██████╔╝███████╗╚██████╔╝███████║███████╗███████║\n` +
    `╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝\n` +
    `🚨 CRITICAL FAILURE: USELESS-OS KERNEL PANIC OCCURRED AT https://useless.euton.co 🚨`,
    bannerStyle
  )

  console.error(
    `%c[FATAL ERROR 0xDEADBEEF] Semicolon Depletion Incident: Zero semicolons discovered in AST.\n` +
    `Automatic Semicolon Insertion (ASI) has taken 3 hostages in lib/evenOddDatabase.ts`,
    errorHeaderStyle
  )
  console.error(
    `%c    at SemicolonDetector.failUpwards (anti-linter:13:37)\n` +
    `    at EnterpriseModulo.consultLookupTable (evenOddDatabase.ts:9040:12)\n` +
    `    at QuantumWavefunction.collapse (entropy.ts:300:1)\n` +
    `    at RealAgencyRedirect.eutonCo (agency.ts:1:1)`,
    stackStyle
  )

  console.warn(
    `%c⚠️ MEMORY CORRUPTION WARNING: Leaking 420.69MB of uncompressed existential dread into window.__USELESS_STORE__`,
    warningStyle
  )

  console.error(
    `%c🔥 THERMODYNAMIC HAZARD: Mouse movement velocity exceeded manufacturer switch warranty. Hardware degradation imminent.`,
    errorHeaderStyle
  )

  const errorMessages: any = [
    'UNCAUGHT_PROCRASTINATION_EXCEPTION: User could have been doing something productive.',
    'SECURITY_ALERT: Satellite radar in Step 4 refused to confirm if Sunday is real.',
    'BUFFER_OVERFLOW: 300 mouse shakes exceeded kinetic atmospheric friction limits.',
    'CORRUPT_PAYLOAD: JSON returned 15 levels of nested enterprise bloat.',
    'PAYWALL_BYPASS_ATTEMPT: Free tier integer quota nearly breached. Upgrade to euton.co.',
    'BROWSER_CPU_HAZARD: Comic Sans MS rendering engine overheating.',
    'ORBITAL_DESYNC: Gregorian calendar misaligned with Mayan Tzolkin epoch.'
  ]

  let errorIndex: any = 0
  setInterval(() => {
    const msg: any = errorMessages[errorIndex % errorMessages.length]
    errorIndex++
    console.error(`%c🚨 [SYSTEM CORRUPTION] ${msg}`, 'color: #ff1744; font-weight: bold; font-size: 12px; background: #300; padding: 2px 4px;')
    console.error(`%c    at SystemFutility.trigger (${window.location.origin}/useless:99:9)`, stackStyle)
  }, 4000)
}

export function logClickError(count: any): any {
  if (typeof window === 'undefined') return
  console.error(
    `%c💥 CLICK FAULT #${count}: User mouse click detected! Energy dissipated into the void without producing any business value.`,
    'color: #ff0055; font-size: 11px; font-weight: bold;'
  )
}
