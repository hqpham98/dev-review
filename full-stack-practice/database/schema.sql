SET client_min_messages TO warning;

-- DANGER: this is NOT how to do it in the real world.
-- `DROP SCHEMA` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA "public" CASCADE;

CREATE SCHEMA "public";

CREATE TABLE "public"."products" (
  "productId"        serial,
  "name"             text    NOT NULL,
  "price"            integer NOT NULL,
  "imageUrl"         text    NOT NULL,
  "shortDescription" text    NOT NULL,
  "longDescription"  text    NOT NULL,
  PRIMARY KEY ("productId")
);

CREATE TABLE "public"."cart" (
  "userId"           integer NOT NULL,
  "productId"        integer NOT NULL,
  "quantity"         integer NOT NULL,
  PRIMARY KEY ("userId", "productId")
);

CREATE TABLE "public"."users" (
  "userId"           serial,
  "firstName"        text NOT NULL,
  "lastName"         text NOT NULL,
  "email"            text NOT NULL,
  "username"         text NOT NULL,
  "hashedPassword"   text NOT NULL,
  "createdAt"        timestamptz,
  PRIMARY KEY ("userId")
);

ALTER TABLE "cart" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "cart" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");
