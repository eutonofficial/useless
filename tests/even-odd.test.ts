import { describe, it, expect } from 'vitest'
import { verifyEvenOddManual, isNumberSupportedInCommunityTier } from '../lib/evenOddDatabase'

describe('Enterprise Even/Odd Verification Engine (0 to 1,000)', () => {
  it('correctly validates even numbers within Community Tier', () => {
    const res0 = verifyEvenOddManual(0)
    expect(res0.isEvenEnterprise).toBe(true)
    expect(res0.enterpriseTier).toBe('COMMUNITY')

    const res2 = verifyEvenOddManual(2)
    expect(res2.isEvenEnterprise).toBe(true)

    const res42 = verifyEvenOddManual(42)
    expect(res42.isEvenEnterprise).toBe(true)

    const res1000 = verifyEvenOddManual(1000)
    expect(res1000.isEvenEnterprise).toBe(true)
  })

  it('correctly validates odd numbers within Community Tier', () => {
    const res1 = verifyEvenOddManual(1)
    expect(res1.isEvenEnterprise).toBe(false)
    expect(res1.enterpriseTier).toBe('COMMUNITY')

    const res7 = verifyEvenOddManual(7)
    expect(res7.isEvenEnterprise).toBe(false)

    const res999 = verifyEvenOddManual(999)
    expect(res999.isEvenEnterprise).toBe(false)
  })

  it('triggers enterprise paywall for 4-digit integers (>1000)', () => {
    const res1001 = verifyEvenOddManual(1001)
    expect(res1001.enterpriseTier).toBe('ENTERPRISE_PLUS')
    expect(res1001.auditStatus).toBe('LICENSE_PAYWALL_TRIGGERED')

    expect(isNumberSupportedInCommunityTier(1001)).toBe(false)
    expect(isNumberSupportedInCommunityTier(-5)).toBe(false)
  })
})
