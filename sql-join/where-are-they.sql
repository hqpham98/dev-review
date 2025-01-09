SELECT  "a"."line1" as "line1",
        "c"."name" as "cityName",
        "a"."district" as "district",
        "countries"."name" as "country"
  FROM "addresses" as "a"
  JOIN "cities" as "c" USING ("cityId")
  JOIN "countries" using ("countryId");
