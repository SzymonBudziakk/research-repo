import { NextResponse } from 'next/server';
import {db} from "@/db";
import {MeasurementTable} from "@/schema";

export async function POST(req: Request) {
    try {
        const res = await req.json()

        const testId = parseInt(res.testId)
        const measurementNumber = parseInt(res.measurementNumber)


        const bottomValue = res.bottomValue
        const topValue = res.topValue

        const n = bottomValue.length
        for (let i = 0; i < n; i++) {

            // @ts-ignore
            const measurement = await db.insert(MeasurementTable).values({topValue: parseInt(topValue[i]), bottomValue: parseInt(bottomValue[i]), testId, measurementNumber})

            console.log('POSTING MEASUREMENT')
        }


        return new NextResponse('', {status: 200});
    } catch (error) {
        console.log(error);
        return new NextResponse('[FAILED_TO_POST_MEASUREMENT]', {status: 500});
    }
}
