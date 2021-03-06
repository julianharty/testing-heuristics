# Structure
## Description
Structures are used throughout software. They're part of the design, they are used to connect elements of data, they're used layout the graphical-user-interface (GUI).
## Testing focus
Can we perceive the structures as a user of the application (users seldom consider the structure unless it's flawed). If we have access to the structure of the code (in binary and possibly source formats) we can assess the structures, for instance the class structures, data structures, etc.

## Test ideas
Are there source files that seem overly complex? How can we test their behaviour? For data structures, can we generate: minimal, complete, and data with gaps in? Consider using [SPIES](spies) to test the Internationalisation aspects. How is the application structured? For Android apps, investigate the contents of the resources, for instance languages, screen layouts, screen dimensions, etc. and consider how we might test these various elements of the app.

As we learn more about the structures used in the app, its data, etc. we can devise relevant tests. 
## Further reading
Here are some additional ideas by Mike Kelly we can usefully try:
*"Structure tour - In this tour you attempt to find everything you can about what comprises the physical product (code, interfaces, hardware, files, etc...)."*
from <http://michaeldkelly.com/blog/2005/9/16/touring-a-new-application.html>
