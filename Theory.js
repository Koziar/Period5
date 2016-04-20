// # HandIn5 WebSockets/Real Time Communication
//-----------------------------------------------------------------------------------------------------
// 1. Name attributes of HTTP protocol makes it difficult to use for real time systems.
/*
    ...
 */
//-----------------------------------------------------------------------------------------------------
// 2. Explain polling and long-polling strategies, their pros and cons.
/*
Polling is when the client request is made via a normal HTTP request, which is then processed by the server.
    Although the request might only be done once polling will make sure to execute certain requests at a certain
time interval. The goal of this being that the server and client remain up to date, making a real time system.
    The thing with polling being that the connection between client and server is maintained. A new
    connection is made with the server when polling is initiated.

    Pros                                                            Con
Lot of request that are processed as they come on server.                scalability. The number of requests made to the
Creates a lot of traffic (uses resources, but frees                      server can be extremely high if the frequency
them as soon as response is send back):                                  of polling is set to high value.

    HTTP Long-polling is a technique used to push updates to a web client.
    A connection is held open between the web client and the web server so that
when the server has new information it can push it to the client.
    That connection is then closed. A new connection is then established between
the client and the server and then wait for another update from the server.

    Pros                                                            Con
Long polling is a lot more intensive on the server,         You are notified WHEN the server event happens with no delay.
    but more widely accepted for browsers.
 */
//-----------------------------------------------------------------------------------------------------
// 3. What is HTTP streaming, SSE (Server sent events)?
/*
When communicating using SSEs, a server can push data to your app whenever it wants, without the need to make an initial request.
    In other words, updates can be streamed from server to client as they happen. SSEs open a single unidirectional channel between
server and client.
 */
//-----------------------------------------------------------------------------------------------------
//4. What is WebSocket protocol, how is it different from HTTP communication, what advantages it has over
/*
HTTP?
Websocket is alternative for http communication. Main differences is that it is full duplex and uses single TCP connection.
    Does not use http request, response pattern. Websockets are widely used in realtime comunication systems. Websockets are bi-directional.
 */
//-----------------------------------------------------------------------------------------------------
//  5. Explain what the WebSocket Protocol brings to the Web-world.
/*
Full duplex Communication - bi-directional communication between the server and the client. Better efficency, less traffic load.
Faster communication between client and server.
 */
//-----------------------------------------------------------------------------------------------------
//  6. Explain and demonstrate the process of WebSocket communication - From connecting client to server,
//  through sending messages, to closing connection.
/*
Client makes http request to server. An upgrade header is included that tells to server that clients wants to establish websocket connection.

    Initial websocket request:

    GET ws://websocket.example.com/ HTTP/1.1
    Origin: http://example.com
        Connection: Upgrade
Host: websocket.example.com
Upgrade: websocket

If the server supports the WebSocket protocol, it agrees to the upgrade and communicates this through an Upgrade
header in the response. So then handshake is made between client and server.

    server response:

    HTTP/1.1 101 WebSocket Protocol Handshake
Date: Wed, 16 Oct 2013 10:07:34 GMT
Connection: Upgrade
Upgrade: WebSocket

Now that the handshake is complete the initial HTTP connection is replaced by a WebSocket connection that uses the same
underlying TCP/IP connection. At this point either party can starting sending data (messages etc.)
 */
//-----------------------------------------------------------------------------------------------------
// 7. What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure WebSocket libraries in the
// backend and standard APIs on frontend? Which problems do they solve?
/*
    ...
 */
//-----------------------------------------------------------------------------------------------------
// 8. What is Backend as a Service, Database as a Service, why would you consider using Firebase in your
// projects?
/*
BaaS is a model for providing web and mobile app developers with a way to link their applications to backend cloud
storage and APIs exposed by back end applications while also providing features such as user management,
    push notifications, and integration with social networking services.
    Database as a Service is a cloud-based approach to the storage and management of structured data. It delivers similar
functionality as a relational database maangment systems.
    Firebase is suitable for handling real time data updates. Built-in support for authentication services like Facebook,
    Google, and Twitter. Robust APIs for Javascript (including several frameworks like Angular), iOS, and Android.
 */
//-----------------------------------------------------------------------------------------------------
// 9. Explain the pros & cons of using a Backend as a Service Provider like Firebase.
/*
Pros                                                              Cons
Stored in the cloud so readily available everywhere.                     Implementation of REST API could be difficult on embedded
Autoscaling built-in.                                                    platforms.
    Robust APIs for Javascript (including several frameworks like Angular),  query capabilities are very limited.
    iOS, and Android.
 */
//-----------------------------------------------------------------------------------------------------
//10. Explain and demonstrate “three-way data binding” using Firebase and Angular.
/*
By syncing your Angular model with Firebase, your app’s data in the model is synchronized in real-time across all clients.
    When data changes in one client, those updates are immediately persisted to Firebase and rendered across all clients.
    This is called Thee-way data binding.
 */
//-----------------------------------------------------------------------------------------------------
//  11. Explain and demonstrate the difference between the simple chat system in your own WebSocket + Node.js
//  backend vs. Firebase.
