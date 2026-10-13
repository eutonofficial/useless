import { NextResponse } from 'next/server'

export async function POST(req: any) {
  try {
    const body: any = await req.json()
    const { name, secondsWasted, clicksCount, mouseKm, badges }: any = body

    const rawString: any = `${name}-${secondsWasted}-${clicksCount}-${mouseKm}-${Date.now()}`
    let hash: any = 0
    for (let i: any = 0; i < rawString.length; i++) {
      hash = (hash << 5) - hash + rawString.charCodeAt(i)
      hash |= 0
    }

    const fakeSha256: any = '0x' + Array.from({ length: 64 }, (_, i: any) => {
      const charCode: any = (Math.abs(hash) * (i + 13)) % 16
      return charCode.toString(16)
    }).join('').toUpperCase()

    return NextResponse.json({
      status: 'CERTIFICATE_SEALED',
      signature: fakeSha256,
      issueTimestamp: new Date().toISOString(),
      wastedMetrics: {
        recipient: name || 'Anonymous Sloth',
        seconds: secondsWasted || 0,
        clicks: clicksCount || 0,
        mouseKm: mouseKm || 0,
        achievementsUnlocked: badges || []
      },
      bureaucraticSignoff: 'Issued with 0% legal authority by the UselessOS Foundation'
    })
  } catch (err: any) {
    return NextResponse.json({ error: 'CERTIFICATE_GENERATION_FAILED', detail: String(err) }, { status: 500 })
  }
}
