import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = body;

    if (!email || !message) {
      return NextResponse.json({ error: 'Brakujące dane' }, { status: 400 });
    }

    const newRequest = await prisma.contactRequest.create({
      data: {
        email,
        message,
      },
    });

    return NextResponse.json({ success: true, data: newRequest }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 });
  }
}
