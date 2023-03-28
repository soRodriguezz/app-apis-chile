export interface MetroNetwork {
  api_status: string;
  time:       Date;
  issues:     boolean;
  lines:      Line[];
}

export interface Line {
  name:                        string;
  id:                          ID;
  issues:                      boolean;
  stations_closed_by_schedule: number;
  stations:                    Station[];
}

export enum ID {
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
  L4 = "L4",
  L4A = "L4A",
  L5 = "L5",
  L6 = "L6",
}

export interface Station {
  name:                  string;
  id:                    string;
  status:                number;
  lines:                 ID[];
  description:           Description;
  is_closed_by_schedule: boolean;
  schedule:              Schedule;
}

export enum Description {
  EstaciónOperativa = "Estación Operativa",
}

export interface Schedule {
  open:  Close;
  close: Close;
}

export interface Close {
  weekdays: Weekdays;
  saturday: Saturday;
  holidays: Holidays;
}

export enum Holidays {
  The0800 = "08:00",
  The2300 = "23:00",
}

export enum Saturday {
  The0630 = "06:30",
  The2300 = "23:00",
}

export enum Weekdays {
  The0600 = "06:00",
  The2300 = "23:00",
}
