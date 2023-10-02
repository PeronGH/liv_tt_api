export interface Timetable {
  status: string;
  student: Student;
  timePeriod: TimePeriod;
  schedule: Schedule[];
}

export interface Student {
  name: string;
  id: string;
  holdStatus: boolean;
  holdTitle: string;
  holdMessage: string;
}

export interface TimePeriod {
  startDate: string;
  endDate: string;
}

export interface Schedule {
  date: string;
  dateDescription: string;
  week: string;
  items: ScheduleItem[];
}

export interface ScheduleItem {
  uniqueId: string;
  activityId: string;
  activityName: string;
  activityType: string;
  activityDescription: string;
  departmentHostKey: string;
  departmentName: string;
  startTime: string;
  endTime: string;
  activityDurationMins: string;
  allDayActivity: string;
  academics: AcademicStaff[];
  locations: Location[];
  moduleId: string;
  moduleDescription: string;
  moduleUrl: string;
  streamId: string;
  isRemote: string;
  remoteType: string;
  remoteText1: string;
  auth: string;
  remoteUrl: string;
  deliveryType: string;
  mandatory: string;
  attCode: string;
  registerStartDateTime: string;
  registerEndDateTime: string;
  facultyId: string;
  advanceStartRequest: string;
  attended: string;
}

export interface AcademicStaff {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface Location {
  locationName: string;
  locationDesc: string;
  room: string;
  buildingCode: string;
  catalogueUrl: string;
  isVirtual: string;
  virtualText: string;
}
