const fs = require('fs')
const path = require('path')

// Core tests baseline checklist
const requiredCoreTests = [
  {
    file: 'tests/even-odd.test.ts',
    requiredSnippets: [
      'verifyEvenOddManual(0)',
      'verifyEvenOddManual(1000)',
      'LICENSE_PAYWALL_TRIGGERED'
    ]
  },
  {
    file: 'tests/entropy.test.ts',
    requiredSnippets: [
      'Thermodynamic Entropy & Coin Flip Verification',
      'expect([\'HEADS\', \'TAILS\']).toContain(coinOutcome)'
    ]
  },
  {
    file: 'tests/weekend.test.ts',
    requiredSnippets: [
      'checkIsWeekend(0)).toBe(true)',
      'checkIsWeekend(6)).toBe(true)',
      'checkIsWeekend(1)).toBe(false)'
    ]
  }
]

console.log('🛡️ Verifying Test Suite Integrity Protection Protocol...')

let failure = false
for (const check of requiredCoreTests) {
  const fullPath = path.join(process.cwd(), check.file)
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ VIOLATION: Core test file "${check.file}" has been deleted! You cannot delete existing suffering.`)
    failure = true
    continue
  }

  const content = fs.readFileSync(fullPath, 'utf8')
  for (const snippet of check.requiredSnippets) {
    if (!content.includes(snippet)) {
      console.error(`❌ TEST TAMPERING DETECTED: Missing required assertion snippet "${snippet}" in ${check.file}.`)
      console.error('👉 You are forbidden from modifying or nerfing existing tests! You may ONLY add new tests for new modules.')
      failure = true
    }
  }
}

if (failure) {
  process.exit(1)
} else {
  console.log('✅ TEST INTEGRITY INTACT: All existing core tests remain unnerfed. New tests are welcomed!')
  process.exit(0)
}
