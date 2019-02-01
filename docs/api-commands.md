---
id: commands
title: CLI commands
---

## anscli usage

```
-	Compile anscli
# make

-	Run anscli with command directly
# ./build/anscli "help"

-	Run anscli
# ./build/anscli
ans>

-	Run anscli with file-prefix
# ./build/anscli --file-prefix=host
ans>

-	Run anscli with file-prefix and command
# ./build/anscli --file-prefix=host "help"

Notes：
-	should run ans process before run anscli.
-	File-prefix shall same as ans’s file-prefix.
```

## help
```
ans> help
ip addr add IFADDR dev STRING
ip addr del IFADDR dev STRING
ip addr show
ip route add DESTIP via NEXTHOP
ip route del DESTIP
ip route show
ip link show
ip neigh show
ip stats show
acl add index NUMBER srcaddr IPADDR dstaddr IPADDR srcportstart NUMBER srcportend NUMBER dstportstart NUMBER dstportend NUMBER protocol NUMBER dev IFACE
   index - ACL rule index [1 - 2048], large index has high priority.
   srcaddr - source IP subnet address, 0.0.0.0/0 match all IP, [ip-address/mask]
   dstaddr - destination IP subnet address, 0.0.0.0/0 match all IP, [ip-address/mask]
   srcportstart - source port start [0...65535]
   srcportend - source port end [0...65535]
   dstportstart - destination port start [0...65535]
   dstportend - destination port start [0...65535]
   protocol - IP protocol, 0 match all protocol, [0...255]
   iface - input interface name, 'any' match all iface
   drop|accept - drops or accepts all packets that match the rule
 note: match ACL rule at PREROUTING.
acl del index NUMBER
   index - ACL rule index [1 - 2048]
acl show
bypass add...
bypass del...
   protocol - IP protocol, 0 match all protocol, [0...255]
   srcport - source port, 0 match all source port, [0...65535]
   dstport - destination port, 0 match all destination port, [0...65535]
 note: match bypass rule at PREROUTING.
         bypass: forward packets to kernel.
bypass show
flow filter add ...
flow filter del ...
   portid - DPDK port id
   dstip - destination IP address, 0.0.0.0: disable destination IP filter
   dstport - destination port, 0: disable destination port filter
   queueid - RX queue id of the DPDK port
 note: match the rule traffic will be forwarded the queue.
flow filter show
port queue show
log level set [emerg | alert | crit | err | warning | notice | info | debug]
help
quit
ans>
```
## Configure IP
```
-	Add IP
ans> ip addr add 10.10.10.10/24 dev veth0
Add IP address successfully
ans>

-	Delete IP
ans> ip addr del 10.10.10.10/24 dev veth0
Del IP address successfully
ans>

-	Show IP
ans> ip addr show

 eth0: mtu 1500
   link/ether 08:00:27:de:5d:8e
   inet addr: 10.0.0.2/24
ans>
```

## Configure route
```
-	Add route
ans> ip route add 20.0.0.0/24 via 10.0.0.20
Add routing successfully
ans>

-	Delete route
ans> ip route del 20.0.0.0/24
Del routing successfully
ans>

-	Show route
ans> ip route show

ANS IP routing table
 10.0.0.0/24 via dev veth0 src 10.0.0.2
 10.10.0.0/24 via 10.0.0.5 dev veth0
ans>
```

## Configure neigh
```
-	Show arp table
ans> ip neigh show

ANS IP neigh table
   10.0.0.11 dev veth0 lladdr 08:00:27:82:ca:ad REACHABLE
ans>
```
## Configure link
```
-	Show link status
ans> ip link show

 veth0: port 0 state UP speed 1000Mbps full-duplex mtu 1500
   link/ether 08:00:27:de:5d:8e
   RX packets:29 errors:0 dropped:0
   TX packets:4 errors:0 dropped:0
   RX bytes:5433 TX bytes:312
ans>
.6.	Show IP statistics
ans> ip stats show
 Total packets received               :33
 Checksum bad                         :0
 Packet too short                     :0
 Not enough data                      :0
 IP header length < data size         :0
 IP length < ip header length         :0
 Fragments received                   :0
 Frags dropped (dups, out of space)   :0
 Fragments timed out                  :0
 Packets forwarded                    :0
 Packets fast forwarded               :0
 Packets rcvd for unreachable dest    :0
 Packets forwarded on same net        :0
 Unknown or unsupported protocol      :0
 Datagrams delivered to upper level   :31
 Total ip packets generated here      :3
 Lost packets due to nobufs, etc.     :0
 Total packets reassembled ok         :0
 Datagrams successfully fragmented    :0
 Output fragments created             :0
 Don't fragment flag was set, etc.    :0
 Error in option processing           :0
 Packets discarded due to no route    :0
 IP version != 4                      :0
 Total raw ip packets generated       :0
 IP length > max ip packet size       :0
 Multicasts for unregistered grps     :0
 No match gif found                   :0
 Invalid address on header            :0
 Packets filtered                     :0
ans>
```
## Configure ACL
```
-	Add acl rule
ans> acl add index 100 srcaddr 10.10.10.0/24 dstaddr 20.20.20.0/24 srcportstart 0 srcportend 65535 dstportstart 0 dstportend 65535 protocol 0 iface any drop
Add ACL rule successfully
ans>

-	Delete acl rule
ans> acl del index 100
Delete ACL rule successfully
ans>

-	Show acl rule

ans> acl show

ACL rule 100:
  Source subnet address      : 10.10.10.0/24
  Destination subnet address : 20.20.20.0/24
  Source port range          : 0 - 65535
  Destination port range     : 0 - 65535
  IP protocol                : 0
  Interface name             : any
  Action                     : drop
ans>
```

## Configure bypass
```
-	Add bypass rule
ans> bypass add protocol 17 dstport 68
Add bypass rule successfully
ans>

-	Delete bypass rule
ans> bypass del protocol 17 dstport 68
Del bypass rule successfully
ans>

-	Show bypass rule

ans> bypass show

Bypass rule 0:
  IP protocol        : 17
  Destination port   : 68
ans>
```
## Show port queue
```
-	Show port queue lcore mapping

ans> port queue show
        port     queue   lcore
        0        0       1
        0        1       2
ans>
```
## Configure flow
```
- Add flow filter rule
ans> flow filter add portid 0 dstip 10.0.0.2 dstport 80 queueid 1
Add flow filter successfully
ans>

-	Delete flow filter rule
ans> flow filter del portid 0 dstip 10.0.0.3 dstport 80 queueid 0
Del flow filter rule successfully
ans>

-	Show flow filter rule
ans> flow filter show

Flow filter rule 0:
  Port ID               : 0
  Destination IP        : 10.0.0.2
  Destination port      : 80
  Queue ID              : 1

Flow filter rule 1:
  Port ID               : 0
  Destination IP        : 10.0.0.3
  Destination port      : 80
  Queue ID              : 0
ans>
```
