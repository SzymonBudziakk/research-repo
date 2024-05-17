import { NextResponse } from 'next/server';
import {db} from "@/db";

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
    try {
        const response = await db.query.TestTable.findMany()
        return NextResponse.json({ response });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
