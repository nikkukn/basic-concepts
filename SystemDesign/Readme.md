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



## Storage, Latency and Throughput.
Any app, system or service that you program will need to store and retrieve data. This is about storing and fetching data which can be done using database. A database is a software layer that helps us to store and retrieve data.


Storage can be of two types which is "Memory" storage and "Disk" Storage.

**Disk Storgae** is persistant storage which means the data will saved even when we turn off and on the power.

**Memory Storage** is usually get wiped away when you shut down or restart or otherwise loose power. RAM storage is Memory storage.

On servers if your data is keeping track of is only useful during a session of that server, then it  make sense to keep it in the memory. This is much faster and less expenssive than writing things to a persistent database.

Whenever you want to hold on to details like shopping cart you will put the information in persistent Disk Storage. That way you can access the data next time when user logs in and they still have seamless experience.

Type of storage depends on lot of factors and the needs of your application, and how users interact with it.

* The shape of your data.
* Sort of availability
* Scalability (How fast you need to read or write data, and these reads and writes happens concurrently or sequentially).
* Consistency - if you protect aganist downtime using distributed storage, then how consistent is the data across your stores.


### Latency
**Latency** and **Throughput** are fundamental factors contributing to performance of any frontend application.
**Latency** is simply the measure of duration. The duration for an action to complete something or produce a result. It is defined as a lag or time taken to complete an operation.
Most common latency is called the "round trip" network request- how long does it take for the frontend end website to send query to your server and get a response back from the server.

When you are loading the site, this will be fast and smooth as poosbile. Like example finding a value in array of elements is slower than finding a value in a hash-table.
Similarly, reading from memory is much faster than reading from a disk.

