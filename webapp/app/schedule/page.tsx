'use client';

import React from "react";
import {Calendar, Form, Input, Button, Textarea} from "@heroui/react";
import {today, getLocalTimeZone, isWeekend, parseDate, DateValue} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";

export default function SchedulePage() {
  
  let [date, setDate] = React.useState(today(getLocalTimeZone()));
  let {locale} = useLocale();
  let isInvalid = isWeekend(date, locale);
  let now = today(getLocalTimeZone());

  let blockedDates = [
    parseDate("2025-07-18"),
    parseDate("2025-07-20"),
  ];

  let isDateUnavailable = (date: DateValue) =>
    blockedDates.some((d) => date.compare(d) === 0);


  return (
    <div>
      
    <Calendar
      aria-label="Date (Min Date Value)"
      errorMessage={isInvalid ? "We do not allow scheduling on weekends." : undefined}
      //isInvalid={isInvalid}
      isDateUnavailable={isDateUnavailable}
      value={date}
      onChange={setDate}
      defaultValue={today(getLocalTimeZone())}
      minValue={today(getLocalTimeZone())}
      color="primary"
      calendarWidth={ 400 }
      showMonthAndYearPickers
    />

    <Form>

      <Input
      isRequired
      errorMessage="Please enter your name."
      label="Name:"
      name="name"
      placeholder="Please enter your name here"
      />

      <Input
        isRequired
        errorMessage="Please enter your number."
        label="Contact Number:"
        name="number"
        placeholder="Please enter your number here"
        />

      <Textarea 
      isClearable
      errorMessage="Please enter your description."
      label="Description:"
      name="description"
      placeholder="Please enter your description here" 
      />

      <Button type="submit" variant="bordered"  className="mt-4 border-black text-black bg-blue-300">
        Submit
      </Button>

    </Form>

    </div>
  );
}
