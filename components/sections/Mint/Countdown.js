import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const Countdown = ({ toTime }) => {
  toTime = "2023-05-01T12:00:00Z";
  const browserTime = dayjs();
  const [countdownOver, setCountdownOver] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);
  const [hoursLeft, setHoursLeft] = useState(null);
  const [minLeft, setMinLeft] = useState(null);
  const [secLeft, setSecLeft] = useState(null);

  const getTimer = (browserTime, futureTime) => {
    const browserTimeUTC = browserTime.utc();
    futureTime = dayjs.utc(futureTime);
    let remainingTime = futureTime.diff(browserTimeUTC, "seconds");
    if (browserTimeUTC.isAfter(futureTime)) {
      setCountdownOver(true);
      return;
    }
    // let remainingTime = toThursday.diff(cstTime, "seconds");
    const intervalId = setInterval(() => {
      setDaysLeft(Math.floor(remainingTime / 86400));
      setHoursLeft(Math.floor((remainingTime % 86400) / 3600));
      setMinLeft(Math.floor(((remainingTime % 86400) % 3600) / 60));
      setSecLeft(Math.floor(((remainingTime % 86400) % 3600) % 60));
      remainingTime--;
      if (remainingTime < 0) {
        clearInterval(intervalId);
        getTimer();
      }
    }, 1000);
  };

  useEffect(() => {
    getTimer(browserTime, toTime);
  }, []);
  if (countdownOver) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center transition-all duration-500">
      <div className="flex justify-center gap-[.8rem]">
        <>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-md font-bold min-h-[12px]">{daysLeft}</span>
            <span className="text-sm ">Days</span>
          </div>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-md font-bold min-h-[12px]">{hoursLeft}</span>
            <span className="text-sm ">Hours</span>
          </div>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-md font-bold min-h-[12px]">{minLeft}</span>
            <span className="text-sm ">Minutes</span>
          </div>
          <div className="flex flex-col items-center leading-tight">
            <h2 className="text-md font-bold min-h-[12px]">{secLeft}</h2>
            <span className="text-sm ">Seconds</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Countdown;
