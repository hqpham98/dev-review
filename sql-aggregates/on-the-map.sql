SELECT  "a"."name" as "country",
  COUNT(*) as "numberOfCities"
  FROM "countries" as "a"
  JOIN "cities" as "b" using ("countryId")
  GROUP by "a"."countryId";
