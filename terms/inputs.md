# Inputs
We live in a world as software testers where we probably have at least one smartphone we use throughout our working hours, typing, swiping, jiggling and sometimes speaking to. These are all inputs to apps which then interpret them.

Additional inputs may also be used, such as location, data feeds, connected-devices such as keyboards, headsets, etc.

Testing inputs can become monotonous and facile unless we choose to actively consider a wide variety of inputs. As when we are forced to enter 'our' details in a captive portal to use WiFi we may choose to minify what we enter so it's just enough to pass their often broken validation `a@a.com`, etc. Conversely, we can just keep typing `onandonandonandonandonandon` and then copy paste the text `onandonandonandonandonandon+onandonandonandonandonandon+onandonandonandonandonandon+onandonandonandonandonandon` until we find the maximum length.
## Automated Testing
The test automation frameworks are often limited to text and touch. They can really help us test these inputs, once we learn and choose to write code that does so effectively.
## Test ideas

* Rotate (see PAOLO heuristic).
