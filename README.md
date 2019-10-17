https://www.youtube.com/watch?time_continue=6&v=WoSzy-4mviQ

Forms are hard…

Form UI is different…
	• Different input device
	• Rapid state change
	• Unidirectional data flow in React
		○ Form data must be centralized place in react
	• "React exposed the inherent complexity of forms interactions that was always there."
		○ React inventor
	• There's just so much form state

What is Form State?
	• Which field currently has focus?
	• Which fields are dirty?
	• Which fields have errors?
	• Which fields has the user visited?
	• Are we currently runnign some sort of asynchronous validation?
	• Are we currently submitting?
		○ Spinner, etc…
	• Have we tried to submit and received some errors from the server?
	• Which fields are dirty since we last tried to submit?

Forms are hard…

He invented Redux-Form
	Redux-form.com

Redux-form complaints
	• It's only for React?
		○ Redux can be used with Angular and other things…
		○ I have to use Redux??
			§ Maybe I was using hooks
		○ Why so much rerendering?
		○ It's over 26k gzipped??
			§ I guess that's large…

Conceiving the ideal form library
	• Pure JavaScript
	• Framework agnostic
	• Subscription based
		○ I want to be notifed when this part of form updates, but not that…
		○ Known as the Observer pattern
	• Modular, pluggable solutions
		○ Reminds me of shrinerb

Final Form
	• Standalone form state management engine
	• Framework agnostic
	• Subscription based
	• Plugin capabilities, with "mutators" and "decorators" that allow arbitrary additional functionality
	• Zero dependencies
	• Only 4.3k gzipped

React final Form
	The companion app!
	• React bindings for Final From
	• Maps form and field state to render props
	• Handles React SyntheticEvents
	• Even smaller: 3.1k gzipped
	• Total react form solution…

React Final Form API
	• Form
		○ Wraps the entire form and provides form state to a render porp
	• Field
		○ Registers a field and prived field stat eand callback functions to a render porp
	• FormSpy
		○ Provides a way to read form state whitni your form wiohtout rerendereing the netire form.

Live Coding! 14:24

How to Pick a library
  Functionality
  Extensibility
  How many examples are in documentation??
    React Final Form has 35 use cases for examples!
  Is the repo well maintained?
    any super popuplar repos will have a lot of issues
    PRs are a good gauge
    PR too dated? maintainer's not prioritizing it
  Code Coverage
    He will never release anything aside from 100% code coverage...
    woah...
    hmmmmm doesn't sound kent c dodds-y
  Bundle Size
    It's important but not everything...
  Does it make sense to you??
    probably the most important
    does it jive with your mindset and how you code

One more tweet code from influential thought reader...
  Form library authors are like anethesiologists: They help people feel a "little" bit better when enduring an excruciating experience/"

  Himself

Q: Should I migrate from redux form to final form?
A: This is a better way...but if you need tight coupling with redux...then do redux form...
migration would be so easy he didn't write a migration guide...

hmmm scary

Divvy to resize windows!