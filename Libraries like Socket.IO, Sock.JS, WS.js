/*
 Socket.io can be used as a wrapper for WebSocket, but provides many more features, including broadcasting to multiple sockets,
 storing data associated with each client, and asynchronous I/O. It allowes you to send/emit messages by specifying an event name.
 Furtheremore it simplifies the usage of WebSockets, and provides failovers to other protocols in the event that WebSockets
 are not supported on the browser or server. Ex. It will test Websocket compatibility and if it's not supported it will use Adobe
 Flash, AJAX, or an iFrame. Socket.io supports a very large set of browsers: Internet Explorer 5.5+, Safari 3+, Google Chrome 4+,
 Firefox 3+, Opera 10.61+, iPhone Safari, iPad Safari, Android WebKit & WebOs WebKit.

 SockJS is a JavaScript library (for browsers) that provides a WebSocket-like object. SockJS gives you a coherent, cross-browser,
 Javascript API which creates a low latency, full duplex, cross-domain communication channel between the browser and the web server,
 with WebSockets or without.

 In short terms ws is a node.js websocket library. Ws is a simple to use WebSocket implementation, up-to-date against RFC-6455,
 and probably the fastest WebSocket library for node.js.

 The reason why you would use libraries like the above on top of WebSocket is that it si still a young technology and not fully
 implemented in all browsers. However, by using WebSocket with libraries it fallbacks, whenever WebSocket is not available. A library
 that has become very popular in this domain is socket.io which comes with a client and a server implementation of the protocol and
 includes fallbacks.*/
