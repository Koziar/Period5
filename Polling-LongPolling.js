/*
 Regular polling is when a client requests a web-page from a server using regular HTTP. The requested web-page then
 executes some JavaScript which requests a file from the server at regular intervals. The server calculates each
 response and sends it back.

 In long-polling a client also requests a web-page from a server using regular HTTP. The same happens here; the web-page
 excutes some JavaScript which requests a resource from the server. However, in long-polling it doesn't send it back
 right away. It (the server) waits until new information is available. When that new information becomes available the
 server responds with this information. The client then receives that information and sends new another request.

 Same, same, but different you say? Yes, when and why would you use one rather than the other?
 The difference is this: long-polling allows for some kind of event-driven notifying, so the server is able to actively
 send data to the client. Regular polling is a periodical checking for data to fetch, so to say.

 Wikipedia is quite detailed about that:
 With long polling, the client requests information from the server in a way similar to a normal polling; however, if
 the server does not have any information available for the client, then instead of sending an empty response, the
 server holds the request and waits for information to become available (or for a suitable timeout event), after which
 a complete response is finally sent to the client.
 Long polling reduces the amount of data that needs to be sent because the server only sends data when there really
 IS data, hence the client does not need to check at every interval 'x'.

 REGULAR POLLING PRO:
 Unless the polling interval is very high (checks the server very often) it's a great way to see changes almost
 instantaneously. Not too demanding on the server.

 LONG POLLING CON:
 If too many clients are connected to the server, it can overload the server by having too many uncompleted requests
 in the task-line.
 */
//                     =================random examples from the internet=================
// An example of regular polling:
(function poll() {
    setTimeout(function () {
        $.ajax({
            url: "server", success: function (data) {
                //Update your dashboard gauge
                salesGauge.setValue(data.value);

                //Setup the next poll recursively
                poll();
            }, dataType: "json"
        });
    }, 30000);
})();

// An example of long-polling:
(function poll() {
    $.ajax({
        url: "server", success: function (data) {
            //Update your dashboard gauge
            salesGauge.setValue(data.value);

        }, dataType: "json", complete: poll, timeout: 30000
    });
})();
/*
 1)  Polling ->
 -  A client requests a webpage from a server using regular HTTP
 -  The requested webpage executes JavaScript which requests a file from the server at regular intervals
 -  The server calculates each response and sends it back

 Pros and Cons:
 -  The main goal of using polling is to keep clients up-to-date with data arriving or changing on the server side
 As an example, a chat based application will poll the server every 10 seconds to see if new chat messages are available.
 Technically, it means the browser will open a connection to the server every time data are required
 -  The number of requests made to the server can be extremely high if the frequency of polling is set to a small value
 This will lead to really bad performance when handling many users.
 -  if there is no data on the server, the response will not contain any data.
 Doing such “void” request overload the server for nothing

 2) Long Polling ->
 -  A client requests a webpage from a server using regular HTTP
 -  The requested webpage executes JavaScript which requests a resource from the server
 -  The server does not immediately respond but waits until there's new information available
 -  When there's new information available, the server responds with the new information
 -  The client receives the new information and immediately sends another request to the server.

 Pros and Cons:
 - With long polling, you open a persistent connection and wait for the server to push data when available.
 - If your server support asynchronous request processing, then you are possibly in a good shape.
 If not, then long polling might give extremely bad results. Why?
 if 10 000 AJAX applications open one long polled connection, that means 10 000 threads will blocks waiting for data to come.
 - If the server can’t push data fast enough, the AJAX application might not be updated as fast as you expect.
 - if the server receives a lot of update, you might ends up in a situation where your are mostly doing the polling technique
 as your request is never parked because the server always execute pushes
 */