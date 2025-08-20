import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.formData();
  // Placeholder handler
  return NextResponse.json({ ok: true, email: data.get('email') });
}
