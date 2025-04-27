import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export default async function GET() {
    try{
        const cakes = await prisma.cake.findMany();
    }
}