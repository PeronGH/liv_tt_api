import { get, route, routes, verbs } from "jsr:@pixel/funweb@0.8.2";
import { extractAttendCodes, getTimetable } from "./mod.ts";

const handler = routes(
  route(
    "/attcodes",
    verbs(
      get(async (req) => {
        const username = req.headers.get("x-username");
        const clientId = req.headers.get("x-client-id");

        if (!username || !clientId) {
          return new Response("Missing username or client ID", {
            status: 400,
          });
        }

        const timetable = await getTimetable(username, clientId);

        return Response.json(extractAttendCodes(timetable));
      }),
    ),
  ),
);

Deno.serve({ port: parseInt(Deno.env.get("PORT") || "8000") }, handler);
