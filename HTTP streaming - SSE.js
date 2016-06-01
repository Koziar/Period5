/*
 Server-sent events (SSE) is a technology where a browser receives automatic updates from a server via HTTP connection.
 The Server-Sent Events EventSource API is standardized as part of HTML5 by the W3C(World Wide Web).

 Server-sent events is a standard describing how servers can initiate data transmission towards clients once an initial
 client connection has been established. They are commonly used to send message updates or continuous data streams to a
 browser client and designed to enhance native, cross-browser streaming through a JavaScript API called EventSource,
 through which a client requests a particular URL in order to receive an event stream.

 When communicating using SSEs, a server can push data to your app whenever it wants, without the need to make an
 initial request. In other words, updates can be streamed from server to client as they happen. SSEs open a single
 unidirectional channel between server and client.

 The main difference between Server-Sent Events and long-polling is that SSEs are handled directly by the browser and
 the user simply has to listen for messages.

 Server-Sent Events are better than server WebSockets when you simply need updates from some server action.
 Examples: Facebook/Twitter updates, stock price updates, news feeds, sport results or other automated data
 push mechanisms (e.g. updating a client-side Web SQL Database or IndexedDB object store).

 Another advantage of SSEs are that they are sent over traditional HTTP. That means they do not require a special
 protocol or server implementation to get working.*/
