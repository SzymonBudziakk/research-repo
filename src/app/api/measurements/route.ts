import { NextResponse } from 'next/server';
import {db} from "@/db";
import {MeasurementTable} from "@/schema";

export async function POST(req: Request) {
    try {
        const res = await req.json()

        const testId = parseInt(res.testId)
        const bottomValue = parseInt(res.bottomValue)
        const topValue = parseInt(res.topValue)
        const measurementNumber = parseInt(res.measurementNumber)

        const measurement = await db.insert(MeasurementTable).values({
            // @ts-ignore
            topValue, bottomValue, testId, measurementNumber})

        if (!measurement) {
            return NextResponse.json({ success: false, message: 'BLAD' , data: 'BLAD DATA' });
        }

        return new NextResponse('', {status: 200});
    } catch (error) {
        console.log(error);
        return new NextResponse('[FAILED_TO_POST_MEASUREMENT]', {status: 400});
    }
}
