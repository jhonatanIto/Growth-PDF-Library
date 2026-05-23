import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const collectionEnum = pgEnum("collection", [
  "parenting",
  "pets",
  "fitness&health",
  "relationship",
]);

export const roleEnum = pgEnum("role", ["user", "moderator", "admin"]);

export const products = pgTable("products", {
  id: serial("id").primaryKey(),

  title: text("title").notNull(),

  description: text("description").notNull(),

  image_url: text("image_url").notNull(),

  price: integer("price").notNull(),

  collection: collectionEnum("collection").notNull(),

  active: boolean("active").default(true).notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull(),

  role: roleEnum("role").default("user").notNull(),

  googleId: text("google_id"),

  picture: text("picture"),

  password: text("password").notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
