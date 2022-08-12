import { type Knex } from "knex";

export async function up(db: Knex) {
  //#region Dog Information
  // Dog
  await db.schema.alterTable("dog", (table) => {
    table.string("name", 100);
  });
}

export async function down(db: Knex) {
  await db.schema.alterTable("dog", (table) => {
    table.dropColumn("name");
  });
}
