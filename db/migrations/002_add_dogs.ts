import { type Knex } from "knex";

export async function up(db: Knex) {
  //#region Dog Information
  // Dog
  await db.schema.createTable("dog", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table
      .specificType("user_id", "short_id")
      .notNullable()
      .references("user.id")
      .onDelete("CASCADE");
    table.date("birth_date");
    table.string("breed", 100);
    table.jsonb("picture").notNullable().defaultTo("{}"); // E.g. { filename: "/user/123.jpg", width: 60, height: 60 }
    table.timestamp("deleted_at");
  });

  // Vaccination
  await db.schema.createTable("vaccination", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table.string("name", 100);
    table.timestamp("deleted_at");
  });

  // Dog-Vaccination
  await db.schema.createTable("dog_vaccination", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table
      .specificType("dog_id", "short_id")
      .notNullable()
      .references("dog.id")
      .onDelete("CASCADE");
    table
      .specificType("vaccination_id", "short_id")
      .notNullable()
      .references("vaccination.id")
      .onDelete("CASCADE");
    table.date("valid_through").notNullable();
    table.jsonb("proof").notNullable().defaultTo("{}");
  });
}

export async function down(db: Knex) {
  await db.schema.dropTableIfExists("dog_vaccination");
  await db.schema.dropTableIfExists("dog");
  await db.schema.dropTableIfExists("vaccination");
}
