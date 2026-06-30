/**
 * Build a Date from celebrity birth fields (date, time, timezone offset string).
 */
export function parseBirthDateTime(birthDate, birthTime, timeZone) {
  const datePart = String(birthDate || '').split('T')[0];
  const tz = timeZone || '+00:00';
  return new Date(`${datePart}T${birthTime}:00${tz}`);
}
