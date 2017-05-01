# Permissions
## Description
Mobile platforms restrict apps from using sensitive data and features to protect the user, their data, and their device. Sometimes the permissions are requested once, sometimes they are requested while the app is being used.

App developers may assume permissions will be granted by the user, what happens if they aren't?
## Testing focus
Are there flaws in the way the app has been implemented related to access to sensitive resources? These could materially affect the functionality and/or the runtime behaviours of the app, for instance some apps may crash when permissions are denied, especially if they've been granted previously.
## Test ideas
A quick first check is to compare the app with all permissions granted and all permissions excluded.

For Android apps, test on different versions of Android (5, 6, & 7) since the permissions model was revised significantly over this period.
## Further reading
[//]: # (This should be a comment.)
[//]: # (Optional area to add links, etc.)
