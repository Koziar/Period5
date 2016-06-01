/*
 HTTP and WebSockets aren't competing technologies, so it's a bit hard to compare them. We probably shouldn't be even
 comparing them at all. Oh well, here we go.

 HTTP is based around the concept of 'requesting' a file and then receiving a 'response'. This works really well when
 you are following links and sending forms, but is very bad at things like delivering notifications and updates to a
 page. We've tried and sort of lived by with using AJAX for these problems, but it isn't going to be good enough.

 WebSockets is a new protocol that allows the server to send things to the browser without the browser having to request
 it. The browser can also send data to the server. This is quite useful for sending notifications and updates because
 the server can send them when it gets them, instead of waiting for the browser to ask for them.

 Performance wise, HTTP is slightly faster in some cases because it can utilise caching. However, you probably wouldn't
 want to cache the data that you would be sending over WebSockets, so this isn't really an issue.

 WebSockets does save a tiny amount of bandwidth because you don't always have to send a request to the server in order
 to receive information.

 ==========================================

 WebSocket solves a few issues with REST, or HTTP in general:

 1) Bi-directional: HTTP is a uni-directional protocol where a request is always initiated by client, server processes
 and returns a response, and then the client consumes it. WebSocket is a bi-directional protocol where there are no
 pre-defined message patterns such as request/response. Either client or server can send a message to the other party.

 2) Full-duplex: HTTP allows the request message to go from client to server and then server sends a response message
 to the client. At a given time, either client is talking to server or server is talking to client. WebSocket allows
 client and server to talk independent of each other.

 3) Single TCP Connection: Typically a new TCP connection is initiated for a HTTP request and terminated after the
 response is received. A new TCP connection need to be established for another HTTP request/response. For WebSocket,
 the HTTP connection is upgraded using standard HTTP Upgrade mechanism and client and server communicate over that
 same TCP connection for the lifecycle of WebSocket connection.

 ==========================================

 1) WebSocket is a low-level protocol, think of it as a socket on the web. Every thing, including a simple
 request/response design pattern, how to create/update/delete resources need, status codes etc to be build on top of it.
 All of these are well defined for HTTP.

 2) WebSocket is a stateful protocol where as HTTP is a stateless protocol. WebSocket connections are know to scale
 vertically on a single server where as HTTP can scale horizontally. There are some proprietary solutions for WebSocket
 horizontal scaling, but they are not standards-based.

 3) HTTP comes with a lot of other goodies such as caching, routing, multiplexing, gzipping and lot more. All of these
 need to be defined on top of WebSocket.

 4) How will Search Engine Optimization (SEO) work with WebSocket ? Works very well for HTTP URLs.

 5) All proxy, DNS, firewalls are not yet fully aware of WebSocket traffic. They allow port 80 but might restrict
 traffic by snooping on it first.

 ==========================================

 WebSockets are more efficient, but less developed than HTTP.

 Why WebSockets are a game-changer:

 Finally WebSockets represent a standard for bi-directional realtime communication between servers and clients. Firstly
 in web browsers, but ultimately between any server and any client. The standards first approach means that as
 developers we can finally create functionality that works consistently across multiple platforms. Connection
 limitations are no longer a problem since WebSockets represent a single TCP socket connection. Cross domain
 communication has been considered from day one and is dealt with within the connection handshake. This means that
 services such as Pusher can easily use them when offering a massively scalable realtime platform that can be used by
 any website, web, desktop or mobile application.
 */