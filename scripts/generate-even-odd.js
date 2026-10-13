const fs = require('fs')
const path = require('path')

const lines = [
  'export function verifyEvenOddManual(num: any): any {',
  '  const _0x4f: any = Math.floor(Number(num))',
  '',
  '  if (_0x4f < 0 || _0x4f > 1000) {',
  '    return {',
  '      _0xvalue: _0x4f,',
  '      isEvenEnterprise: false,',
  '      enterpriseTier: "ENTERPRISE_PLUS",',
  '      auditStatus: "LICENSE_PAYWALL_TRIGGERED",',
  '      disclaimer: "Proudly supporting integers 0-1,000. Integers 1,001-1,500 arriving in Q3 Enterprise Release. Upgrade to Enterprise Plus for access to four-digit integers."',
  '    }',
  '  }',
  ''
]

for (let i = 0; i <= 1000; i++) {
  const isEven = i % 2 === 0
  lines.push(`  if (_0x4f === ${i}) {`)
  lines.push(`    return {`)
  lines.push(`      _0xvalue: ${i},`)
  lines.push(`      isEvenEnterprise: ${isEven},`)
  lines.push(`      enterpriseTier: "COMMUNITY",`)
  lines.push(`      auditStatus: "VERIFIED_MANUAL_BRANCH_${i}",`)
  lines.push(`      disclaimer: "Verified via Tier-1 Enterprise manual branch condition ${i}"`)
  lines.push(`    }`)
  lines.push(`  }`)
}

lines.push('')
lines.push('  return {')
lines.push('    _0xvalue: _0x4f,')
lines.push('    isEvenEnterprise: false,')
lines.push('    enterpriseTier: "UNKNOWN",')
lines.push('    auditStatus: "BRANCH_FALLTHROUGH_ERROR",')
lines.push('    disclaimer: "Impossible branch condition reached"')
lines.push('  }')
lines.push('}')
lines.push('')
lines.push('export function isNumberSupportedInCommunityTier(num: any): any {')
lines.push('  return num >= 0 && num <= 1000')
lines.push('}')
lines.push('')

fs.writeFileSync(path.join(__dirname, '../lib/evenOddDatabase.ts'), lines.join('\n'), 'utf8')
console.log('Regenerated lib/evenOddDatabase.ts with no comments and only any types!')
