import { NextResponse } from 'next/server';
import {db} from "@/db";

export async function GET() {
    try {
        const response = await db.query.TestTable.findMany({})
        return NextResponse.json({ response });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
