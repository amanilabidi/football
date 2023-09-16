
import React, { useState } from 'react';
const timeZones = [
    'Africa/Algiers',
    'Africa/Cairo',
    'Africa/Casablanca',
    'Africa/Johannesburg',
    'Africa/Nairobi',
    'Africa/Tripoli',
    'Africa/Tunis', 
    'Asia/Baghdad',
    'Asia/Beirut',
    'Asia/Damascus',
    'Asia/Dubai',
    'Asia/Istanbul',
    'Asia/Jerusalem',
    'Asia/Kuwait',
    'Asia/Riyadh',
    'Asia/Tehran',
    'Asia/Kolkata', 
    'Asia/Tokyo',   
    'Asia/Shanghai', 
    'Asia/Seoul',   
    'Asia/Hong_Kong',
    'America/Toronto',
    'America/Vancouver',
    'America/Mexico_City',
    'Europe/Amsterdam',
    'Europe/Athens',
    'Europe/Berlin',
    'Europe/Brussels',
    'Europe/Budapest',
    'Europe/Dublin',
    'Europe/Lisbon',
    'Europe/London',
    'Europe/Madrid',
    'Europe/Paris',
    'Europe/Rome',
    'Europe/Stockholm',
    'Europe/Vienna',
    'Europe/Zurich'
  ];
  

function AccSettings() {
  const [selectedTimeZone, setSelectedTimeZone] = useState(timeZones[0]);
  const handleTimeZoneChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const options = { timeZone: selectedTimeZone, timeStyle: 'medium' };
    return new Intl.DateTimeFormat('en-US', options).format(now);
  };
  return (
    <div className="settings">
      <div className='settings-container'>
        <div className='time-zone'>
          <h2>Time Zone</h2>
          <select onChange={handleTimeZoneChange} value={selectedTimeZone}>
            {timeZones.map((timeZone, index) => (
              <option key={index} value={timeZone}>
                {timeZone}
              </option>
            ))}
          </select>
          <p>Current Time: {getCurrentTime()}</p>
        </div>
        <div className='general-settings'>
            <h2>General Settings</h2>
            <p>Order matches by:</p>
            <div className='choices'>
            <label className="checkbox-label" />
              <input
                type="radio"
                className="checkbox-input"
              />
               <span class="checkbox-custom">League name</span>
            </div>
            <div className='choices'>
            <label className="checkbox-label" />
              <input
                type="radio"
                className="checkbox-input"
              />
               <span class="checkbox-custom">Match start time</span>
            </div>
        </div>
        <div className='game-settings'>
            <h2>My Games</h2>
            <p>Display notifications in the bottom left corner of the screen:</p>
            <div className='choices'>
            <label className="checkbox-label" />
              <input
                type="radio"
                className="checkbox-input"
              />
               <span class="checkbox-custom">Yes, with sound effects</span>
            </div>
            <div className='choices'>
            <label className="checkbox-label" />
              <input
                type="radio"
                className="checkbox-input"
              />
               <span class="checkbox-custom">Yes, without sound effects</span>
            </div>
            <div className='choices'>
            <label className="checkbox-label" />
              <input
                type="radio"
                className="checkbox-input"
              />
               <span class="checkbox-custom">No</span>
            </div>
        </div>
      </div>
      </div>
  );
}

export default AccSettings;


