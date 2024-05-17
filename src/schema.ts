import {integer, pgTable, serial, timestamp, numeric, boolean} from "drizzle-orm/pg-core"

export const TestTable = pgTable("test",{
    id: serial('id').primaryKey(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),

    delay: integer('delay').default(100),
    isActive: boolean('isActive').default(true),
})

export const MeasurementTable = pgTable("measurement",{
    id: serial('id').primaryKey(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),

    measurementNumber: numeric('measurementNumber'),
    topValue: numeric('topValue'),
    bottomValue: numeric('bottomValue'),

    testId: integer('testId').references(() => TestTable.id)
})