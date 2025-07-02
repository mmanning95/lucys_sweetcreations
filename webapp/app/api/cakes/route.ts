import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const cakes = await prisma.cake.findMany();
        return NextResponse.json(cakes);
    } catch (error) {
        console.error('Error fetching cakes:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}