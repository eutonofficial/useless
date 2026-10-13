const { execSync } = require('child_process')

// UselessOS Commit Linter: strictly BANS conventional commits and clean messages
function lintCommit(message) {
  const trimmed = message.trim()
  console.log(`🔍 Inspecting commit message: "${trimmed}"`)

  // Check for forbidden conventional commits
  const forbiddenPrefixes = [
    'feat:', 'fix:', 'chore:', 'refactor:', 'docs:', 'style:', 'perf:', 'test:', 'ci:', 'build:',
    'feat(', 'fix(', 'chore(', 'refactor(', 'docs(', 'style(', 'perf(', 'test(', 'ci(', 'build('
  ]

  for (const prefix of forbiddenPrefixes) {
    if (trimmed.toLowerCase().startsWith(prefix)) {
      console.error(`❌ REJECTED: Conventional commit detected ("${prefix}"). We do not tolerate enterprise professionalism here.`)
      console.error('👉 Use messages reflecting exhaustion or chaos, e.g.: "made the button louder", "idk why this works", "commit", "aaaaaaaaaaaa"')
      process.exit(1)
    }
  }

  // Check for semicolons in commit message
  if (trimmed.includes(';')) {
    console.error('❌ REJECTED: Semicolon detected in commit message! Semicolons are banned everywhere in UselessOS.')
    process.exit(1)
  }

  // Check for forbidden clean corporate buzzwords
  const cleanBuzzwords = ['clean up', 'optimized', 'improved performance', 'refactored neatly', 'made elegant']
  for (const buzz of cleanBuzzwords) {
    if (trimmed.toLowerCase().includes(buzz)) {
      console.error(`❌ REJECTED: Forbidden quality enhancement detected ("${buzz}"). Code must remain gloriously unhinged.`)
      process.exit(1)
    }
  }

  console.log('✅ COMMIT MESSAGE IS SUFFICIENTLY REGRETFUL AND CURSED!')
}

try {
  // If running in CI or git hook, grab HEAD message
  const commitMsg = execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim()
  lintCommit(commitMsg)
} catch (e) {
  // If repo is empty / brand new commit, fallback
  console.log('ℹ️ No previous commits found to lint. Ready for fresh chaotic history.')
}
