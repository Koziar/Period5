/*

What WebSocket brings to the Web-world is that it provides full-duplex communication unlike HTTP. This means that webSockets allows
communication in both directions, and,unlike half-duplex, allows this to happen simultaneously.) .
Additionally, WebSocket enables streams of messages on top of TCP. TCP alone deals with streams of bytes with no inherent concept of a
message. Before WebSocket, port 80 full-duplex communication was attainable using Comet channels; however, Comet implementation is
nontrivial, and due to the TCP handshake and HTTP header overhead, it is inefficient for small messages. WebSocket protocol aims to
solve these problems without compromising security assumptions of the web.

    The WebSocket protocol specification defines ws and wss as two new uniform resource identifier (URI) schemes that are used for
    unencrypted and encrypted connections, respectively. Apart from the scheme name and fragment (# is not supported), the rest of the
URI components are defined to use URI generic syntax.*/
