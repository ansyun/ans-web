---
id: architecture
title: Architecture 
---

## ANS Architecture

![](/img/ans_arch.png)

## ANS Feature List:
```
 - ANS initialize;
 - ANS run in container;
 - Ether, zero copy between NIC and ANS TCP/IP stack;
 - ARP, ARP timeout;
 - IP layer, IP fragmentation and reassemble;
 - High performance routing;
 - ICMP;
 - ACL;
 - Bypass traffic to linux kernel;
 - Sync IP/Route from linux kernel;
 - Support dynamic routing(OSPF/BGP...);
 - Support DHCP client;
 - Command Line Interface:
     - Adding, deleting, showing IP addres;
     - Adding, deleting, showing static route;
     - Showing neigh table;
     - Showing interface and statistics;
     - Showing IP statistics;
     - Adding, deleting, showing ACL;
     - Adding, deleting, showing bypass rule;
     - Showing port queue lcore mapping;
     - Adding, deleting, showing flow filter rule;     
 - UDP protocol;
 - Socket layer;
 - Socket API compatible with BSD, APP can choice ANS socket or linux socket based on a switch.
    - socket/bind/connect/listen/close/send/recv/epoll/writev/readv/shutdown...;
 - Support openssl;
 - TCP protocol; 
    - Support reliable transmission;
    - Support dupack-based retransmission, timeout-based retransmission;
    - Support flow control;
    - Support congestion control: newreno/cubic/vegas...;
    - Support maximum segment size;
    - Support selective acknowledgments;
    - Support window scaling;
    - Support TCP timestamps;
    - Support TCP ECN;
    - Support keep alive;
    - Support SO_REUSEPORT, multi application can listen the same port;
    - Support multicore tcp stack, per tcp stack per lcore;
    - Support TSO. 
  - Vrouter;
     - Support vhost;
     - Support virtio-user;     
     - Support kni; 
     - Support tap; 
   ```
   
