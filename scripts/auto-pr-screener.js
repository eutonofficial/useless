const { execSync } = require('child_process')

console.log('🤖 Running Automated UselessOS PR Screener Bot...')

const bannedIntentions = [
  'improved performance',
  'refactored to clean code',
  'removed redundant',
  'made it faster',
  'code cleanup',
  'simplified logic',
  'prettier formatting',
  'better ux',
  'more intuitive'
]

try {
  const diff = execSync('git diff HEAD~1 HEAD', { encoding: 'utf8' }).toLowerCase()
  for (const phrase of bannedIntentions) {
    if (diff.includes(phrase)) {
      console.error(`❌ AUTO-REJECT: Detected suspicious quality improvement phrase: "${phrase}".`)
      console.error('This project is strictly an anti-pattern repository. PRs making code better are rejected on sight.')
      process.exit(1)
    }
  }
  console.log('✅ AUTO-SCREENER PASSED: No positive engineering contributions detected. PR may proceed to CI torture.')
} catch (e) {
  console.log('ℹ️ No parent commit diff available to screen.')
}
