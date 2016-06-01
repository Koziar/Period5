/*
A hard real-time system (also known as an immediate real-time system) is hardware or software that must operate within
the confines of a stringent deadline. The application may be considered to have failed if it does not complete its
function within the allotted time span.

    Examples of attributes of the HTTP protocol that makes it difficult to use for real time systems could be:

    Cache-Control: max-age=0
    *This instructs the user agent that the content is stale and should be validated before use.

    if-Modified-Since
* Allows a 304 Not Modified to be returned if content is unchanged.

    If-Unmodified-Since
* Only send the response if the entity has not been modified since a specific time.

    If-Match
* Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for
    methods like PUT to only update a resource if it has not been modified since the user last updated it.

    If-None-Match
* Allows a 304 Not Modified to be returned if content is unchanged.

    The reason why these could be examples is that they are used as a common way to prevent old content from being shown
to the user without validation. It just tells the browser and proxies to validate the cache content with the server
before using it. Thereby sending a no-cache value thus instructs a browser or proxy to not use the cache contents merely
based on "freshness criteria" of the cache content.

    The main point of this question is that because the HTTP protocol is so big and it takes a lot of information with it
    to make each call it is slow.
    In other words the protocol contains a lot of information - information that is a overhead.
    One of the core principles of the HTTP protocol, is the Request - Response model. A client sends a request to the server
and the server then comes with a appropriate response. This is a great construction for a traditional website where the
client do an action and gets a response back. Since HTTP is stateless, every single request must have some information
about what it want to do, where it should be done and who is doing it and so on. All this information that needs to be
send every time, adds up to alot of bytes which affects the speed of the request - response time.

    Links:
http://whatis.techtarget.com/definition/hard-real-time-system-immediate-real-time-system
    https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
    */
