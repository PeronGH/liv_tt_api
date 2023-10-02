import { Hono } from "https://deno.land/x/hono@v3.7.3/mod.ts";
import { extractAttendCodes, getTimetable } from "./mod.ts";

const app = new Hono();

app.get("/timetable", async (ctx) => {
  const username = ctx.req.header("username");
  const clientId = ctx.req.header("x-client-id");

  if (!username || !clientId) {
    return ctx.text("Missing username or client ID", 400);
  }

  const timetable = await getTimetable(username, clientId);

  return ctx.json(extractAttendCodes(timetable));
});
