# Special Formats
## Description
Dates, times, timezones, formatting numbers, currencies, are all relevant examples where special formats may be very relevant and a source of frustration and bugs for users (and also for the project teams).

09-10-11 could represent a date, however the interpretation may change based on the user's expectations. What does 09 represent? the Year, the Month, or the Day? and similarly for 10 and 11, what do they represent? Additional special cases include other calendars than one based on the Christian one used in the Western World.  

And how about a number formatted as 1,23,456.78 Where might this format be expected and commonplace?

For times, do users expect a 12-hour clock e.g. 2pm or a 24-hour clock e.g. 21:45

Timezones is also a rich subject, different locations change from winter to summer time on different dates, some regions don't change timezone, some, such as India have a common timezone, but one that includes both hours and 30 minutes e.g. IST (India Standard Time) is +5:30 UTC.

## Testing focus
Correct interpretation of the information as presented to the users and to other systems (a consideration of [integrations](integrations.md), etc.).
## Test ideas
Change the locale and language of the device and then review the behaviours of the app when it accepts, uses, and outputs data where formatting is applied/relevant.
## Further reading
<https://en.wikipedia.org/wiki/Time_zone>
