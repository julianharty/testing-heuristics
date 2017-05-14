# Integrations
## Description
Some apps are self-contained, others integrate and/or incorporate other services, libraries and APIs. From a user's perspective the integrations are part of the app, and if there are problems they blame the app.

Android is particularly rich in the various integrations it offers, for instance with:

* **Content Providers**: encapsulate data which may be for the same app or other apps. A good example is for contacts.
* **Intents**: allow the flexibility for several apps to offer their services to other apps to perform actions. Good examples include: Web browsing, text messages, phone calls, and emails. Android documents common Intents online at <https://developer.android.com/guide/components/intents-common.html>
* ** Broadcast Receivers**: Apps can subscribe to broadcasts from the Android system and other Android apps. They enable apps to listen to events of interest for that app and potentially take action.

In addition there may be integrations with user authentication (for instance using OAUTH, Facebook, Google, and/or Twitter logins) and with online services (for instance APIs).
## Testing focus
Test the interfaces, how well and completely software integrates with significant other apps, services, and systems. Also test the overall system that includes whatever the app is expected or intended to integrate with.

Is data treated identically across the integrated system? Are there mismatches in the expectations of the systems, particularly for errors [See the errors topic for more ideas](errors.md)
## Test ideas
For Android it's practical to create installable software to help with testing all the various integrations. These can stimulate behaviours, provide content, and/or respond to Intents and Broadcasts.
## Further reading
An example of API Testing is **PAPAS BE @ SFO** mentioned online at  <http://www.qualityperspectives.ca/resources_mnemonics.html>
