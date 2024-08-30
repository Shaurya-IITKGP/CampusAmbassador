import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req: NextRequest) {
    const body = await req.json();
    //zod
    const client = new PrismaClient();
    if (!body.username || !body.password) {
        return NextResponse.json({ message: "Username and password are required." }, { status: 400 });
    }
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });



    return NextResponse.json({ message: "Signed up" })
}