'use client';

import React from "react";
import {Calendar} from "@heroui/react";
import {today, getLocalTimeZone, isWeekend} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";

export default function SchedulePage() {
  
  let [date, setDate] = React.useState(today(getLocalTimeZone()));
  let {locale} = useLocale();
  let isInvalid = isWeekend(date, locale);
  
  return (
    <div>
      
    <Calendar
      aria-label="Date (Min Date Value, invalid on weekends)"
      errorMessage={isInvalid ? "We do not allow scheduling on weekends." : undefined}
      isInvalid={isInvalid}
      value={date}
      onChange={setDate}
      defaultValue={today(getLocalTimeZone())}
      minValue={today(getLocalTimeZone())}
      color="secondary"
    />

    </div>
  );
}
