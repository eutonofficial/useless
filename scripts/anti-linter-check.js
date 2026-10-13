const fs = require('fs')
const path = require('path')

// Anti-Linter: BANS semicolons in all src/app/lib/components/tests .ts and .tsx files
function checkDirectory(dir) {
  let violations = []
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== '.agents') {
        violations = violations.concat(checkDirectory(full))
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8')
      const lines = content.split('\n')
      lines.forEach((line, idx) => {
        const trimmed = line.trim()
        // Check for trailing semicolon (ignoring for-loop headers or comments)
        if (trimmed.endsWith(';') && !trimmed.startsWith('//') && !trimmed.startsWith('/*')) {
          violations.push(`${full}:${idx + 1} -> Semicolons are forbidden in UselessOS!`)
        }
      })
    }
  }
  return violations
}

console.log('🔍 Executing UselessOS Strict Anti-Linter...')
const violations = checkDirectory(process.cwd())
if (violations.length > 0) {
  console.error('❌ CODE PURITY FAILURE: Clean code detected! Found forbidden semicolons:')
  violations.slice(0, 10).forEach(v => console.error('  ' + v))
  if (violations.length > 10) console.error(`  ... and ${violations.length - 10} more`)
  process.exit(1)
} else {
  console.log('✅ CODE IS SUFFICIENTLY CURSED! No semicolons detected. Maintainers are crying.')
  process.exit(0)
}
