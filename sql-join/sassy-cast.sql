SELECT  "a"."firstName" as "firstName",
        "a"."lastName" as "lastName"
  FROM "actors" as "a"
  JOIN "castMembers" using ("actorId")
  JOIN "films" as "f" using ("filmId")
  WHERE "f"."title" = 'Jersey Sassy';
