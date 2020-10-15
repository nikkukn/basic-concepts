# System Design Topics
This covers a many topics due to which I have divided it into smaller parts. You will find the following explained in detail in this is document.

1. Networks & Protocols
2. Storage, Latency and throughput
3. Availability
4. Caching
5. Proxies 
6. Load Balancing
7. Consistent Hashing
8. Databases
9. Leader Election
10. Polling, Streaming and Sockets
11. Enpoint protection
12. Messages & Pub-Sub model
13. Smaller Essentials


## Networks and Protocols
To communicate over the network we need to follow some rules and structure which is taken care off by the network protocols. Let's break it down into different layers like HTTP,TCP/IP.

### IP- Internet Protocol
Protocol that instructs us on how communication across internet networks are implemented. Messages over the IP are sent in form of packets which are of 2^16 bytes. Each packet has header and data.

Message--->Headers and Data

Header ---> [ Source IP, Destination IP ]


### TCP- Transmission Control Protocol
TCP is built on top of IP. It is used to solve the problem with IP. Data over IP is typically sent in multiple packets beacuse each packet is fairly small(2^16). Multiple packets can result in lost or dropped packets and disordered packets, thus corrupting the transmitted packets.

TCP needs to establish a connection between source and destination before it transmits the packets and it does this via handshake. This connection itself is established using packets where the source informs the destination before it transmits the packet via handshake.

### HTTP- Hyper Text Transfer Protocol.
It is built on top of TCP/IP. It introduces a very important pattern called request response pattern, specially for client server interactions.

A browser is a client and a web server is a server. Client request data from the server via the request-response cycle which has its own rules under the HTTP and this standardizes how informations is passed accross the internet.