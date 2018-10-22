declare module 'ics' {
  type DateTimeArray = number[];
  interface Duration {
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }
  interface CalendarPerson {
    name?: string;
    email?: string;
    dir?: string;
    rsvp?: boolean;
  }
  interface CalendarAlarm {
    action: 'DISPLAY'|'AUDIO';
    trigger: DateTimeArray|(Duration&{before:boolean});
    repeat?: boolean;
    attachType?: 'VALUE=URI';
    attach?: 'Basso'|'Blow'|'Bottle'|'Frog'|'Funk'|'Glass'|'Hero'|'Morse'|'Ping'|'Pop'|'Purr'|'Sousumi'|'Submarine'|'Tink';
  }
  interface CalendarEvent {
    start: DateTimeArray;
    end?: DateTimeArray;
    duration?: Duration;
    title?: string;
    description?: string;
    location?: string;
    geo?: {lat: number, lon: number};
    url?: string;
    status?: 'CONFIRMED'|'CANCELLED'|'TENTATIVE';
    organizer?: CalendarPerson;
    attendees?: CalendarPerson[];
    categories?: string[];
    alarms?: CalendarAlarm[];
    productId?: string;
    uid?: string;
    method?: 'PUBLISH';
    sequence?: number;
  }

  export function createEvent(attributes: CalendarEvent): {error: Error, value: string};
  export function createEvent(attributes: CalendarEvent, cb: (error: Error|null, value: string) => any): void;

  export function createEvents(events: CalendarEvent[]): {error: Error, value: string};
  export function createEvents(events: CalendarEvent[], cb: (error: Error|null, value) => any): void;
}
