import ics from 'ics';
import download from 'downloadjs';
console.log(ics);
export default async function generateCalendarInvite(event) {
  const value = await new Promise((resolve, reject) => {
    ics.createEvent(event, (error, value) => {
      if (error) {
        reject(error);
      }
      resolve(value); 
   
    });
  });

  return download(value, 'landlord_reminder.ics', 'text/calendar');
}
