# Errors, error messages, & error testing
We have grouped three terms and topics that seem similar. Feel free to let us know if you disagree.
## Description
No software or system is free of errors, this includes the app we're testing, the device it's running on, the actions of the user, and everything that surrounds the app, including servers, inputs, and content. Here's a quick checklist to consider:

* Error _detection_: how [easily, etc.] can the error(s) be detected by people, by other software?
* Error _mitigation_: how can the effects be mitigated (minimised or reduced)? are there ways to constrain and limit whatever's wrong?
* Error _correction_: are there ways to correct the errors, either automatically or manually? What are these ways? How do we, and the users, know about them?
* Error _recovery_: recovery is an important factor to consider and address. Some recoveries may be able to be automatic (they occur without intervention), automated (people can use code to apply the recovery actions), and/or manual (performed by people). Recovery times can vary massively from almost instantaneous to taking months, for instance after data corruption and loss. Well designed and implemented apps, and their supporting systems, aim to make recovery easy.
* Error _prevention_: Preventing errors addresses errors at source, before they occur in use.

There are various related considerations:

* Comprehension: do users (and the project team) understand the error correctly. Some error messages are vague, incomplete, incomprehensible, contradictory, or just plain wrong.
* Action(s): what actions would the app developer like the user to take?
* Instructions, Indicators & Guides: what information is available to help the user understand and deal well with the error?
* Internationalisation and Localisation: will users see the message in their preferred language and will they understand it based on their experiences and context?

## Testing focus
Our focus is errors that may be experienced by the app, the server, and/or the users. The language matters, Spanish, German, Hindi, and also the way the messages are written and presented. Involving users can help us test their comprehension of errors, and related instructions, guides, and so on. With rare exceptions we are not the users of the app.
## Test ideas
In many cases, we can read some of the error messages directly in the application's source files. Often they'll be in text-based 'resources' such as `strings.xml` for Android apps, however some may be embedded in the program's source code (if so they're unlikely to be localised). Build tools and other software utilities can help us find some problems, for instance Android Lint, and the Android Studio IDE can find hard-coded strings, missing translations, etc.
## Further reading
