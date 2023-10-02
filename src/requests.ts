import { Timetable } from "./types.ts";
import { getAuthorization, getTimestamp } from "./utils.ts";

export async function getTimetable(
  username: string,
  clientId: string,
): Promise<Timetable> {
  const timestamp = getTimestamp();

  const res = await fetch(
    `https://ttservices.liverpool.ac.uk/timetable/service/student?username=${username}`,
    {
      headers: {
        "x-client-timestamp": timestamp.toString(),
        "Authorization": await getAuthorization(username, timestamp),
        "x-client-id": clientId,
        "x-api-version": "5",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch timetable: ${await res.text()}`);
  }

  return res.json();
}
