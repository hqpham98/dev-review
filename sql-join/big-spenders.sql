SELECT  "c"."firstName" as "firstName",
        "c"."lastName" as "lastName",
        "p"."amount" as "amount",
  FROM "payments" as "p"
  JOIN "customers" as "c" using "customerId"
  ORDER by "p"."amount" DESC
  LIMIT 10;
