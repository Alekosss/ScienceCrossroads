import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const registrations = sqliteTable('registrations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  createdAt: text('created_at').notNull().$defaultFn(() => 
    new Date().toLocaleString('el-GR', { timeZone: 'Europe/Athens', hour12: false })
),});

export const ConfirmationCodes = sqliteTable('ConfirmationCodes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  code: text('code').notNull(),
});

