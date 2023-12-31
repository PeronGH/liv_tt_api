import { Timetable } from "./types.ts";

export function extractAttendCodes(timetable: Timetable) {
  const today = Intl.DateTimeFormat("en-CA").format(new Date());
  const todayTimetable = timetable.schedule.find(({ date }) => date === today);

  if (!todayTimetable) {
    return {};
  }

  const attCodes = Object.fromEntries(
    todayTimetable.items.map((
      { activityDescription, startTime, endTime, attCode },
    ) => [
      attCode
        ? `${startTime} - ${endTime} | ${attCode}`
        : `${startTime} - ${endTime}`,
      activityDescription,
    ]),
  );

  return attCodes;
}
