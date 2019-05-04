---
id: performance-report
title: Performance Report
---

## Performance Report
[ANS Performance Report](https://github.com/ansyun/dpdk-ans/tree/master/doc/guides/ans_performance_report.pdf)

## L3 forwarding with NIC performance testing

  ENV: CPU- Intel(R) Xeon(R) CPU E5-2683 v3 @ 2.00GHz, NIC- Intel 82599ES 10-Gigabit,  Test tool:pktgen-DPDK
```
    |--------------------------------------| 
    |      L3 forwarding performance       |
    |             (one lcore)              |
    |--------------------------------------| 
    | Packet size(byte)| Throughput(Mpps)  | 
    |--------------------------------------|
    |     64           |       11.78       | 
    |--------------------------------------| 
    |     128          |      Line Rate    | 
    |--------------------------------------| 
```
## L3 forwarding with NIC with 1000 ACL performance testing

  ENV: CPU- Intel(R) Xeon(R) CPU E5-2683 v3 @ 2.00GHz, NIC- Intel 82599ES 10-Gigabit,  Test tool:pktgen-DPDK
```
    |---------------------------------------| 
    |L3 forwarding with 1000 ACL performance|
    |             (one lcore)               |
    |---------------------------------------| 
    | Packet size(byte)| Throughput(Mpps)   | 
    |---------------------------------------|
    |     64           |       8.43         | 
    |---------------------------------------| 
    |     128          |      Line Rate     | 
    |---------------------------------------| 
```

## L3 forwarding with vhost/virtio performance testing

  ENV: Intel(R) Xeon(R) CPU E5-2618L v4 @ 2.20GHz, NIC- vhost/virtio,  Test tool:pktgen-DPDK
```
    |--------------------------------------| 
    |      L3 forwarding performance       |
    |             (one lcore)              |
    |--------------------------------------| 
    | Packet size(byte)| Throughput(Mpps)  | 
    |--------------------------------------|
    |     64           |       6.33        | 
    |--------------------------------------| 
    |     128          |       5.94        | 
    |--------------------------------------| 
    |     256          |     Line Rate     | 
    |--------------------------------------| 
```
## dpdk-nginx CPS performance
```
CPU: Intel(R) Xeon(R) CPU E5-2683 v3 @ 2.00GHz
NIC:82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01) 
ANS run on a lcore.
4 dpdk-nginx run on ANS.

# ./wrk --timeout=1 --latency -H "Connection: close" -t20 -c100 -d30s http://10.0.0.2
Running 30s test @ http://10.0.0.2
  20 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   480.80us   73.12us   4.66ms   88.86%
    Req/Sec     5.32k   125.94     6.98k    84.30%
  Latency Distribution
     50%  478.00us
     75%  505.00us
     90%  535.00us
     99%  648.00us
  3186335 requests in 30.10s, 2.51GB read
Requests/sec: 105860.26
Transfer/sec:     85.31MB

ANS run on two lcore.
8 dpdk-nginx run on ANS.
# ./wrk --timeout=1 --latency -H "Connection: close" -t20 -c100 -d30s http://10.0.0.2
Running 30s test @ http://10.0.0.2
  20 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   251.70us   89.45us   4.39ms   68.59%
    Req/Sec    10.28k   340.17    12.40k    67.67%
  Latency Distribution
     50%  246.00us
     75%  310.00us
     90%  363.00us
     99%  480.00us
  6155775 requests in 30.10s, 4.84GB read
Requests/sec: 204512.88
Transfer/sec:    164.81MB

```
## dpdk-nginx QPS performance
```
CPU: Intel(R) Xeon(R) CPU E5-2683 v3 @ 2.00GHz
NIC:82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01) 
ANS run on a lcore.
8 dpdk-nginx run on ANS.

# ./wrk --timeout=1 --latency -t20 -c100 -d30s http://10.0.0.2
Running 30s test @ http://10.0.0.2
  20 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   257.91us  407.36us  24.37ms   98.77%
    Req/Sec    20.85k     1.84k   26.88k    70.23%
  Latency Distribution
     50%  214.00us
     75%  289.00us
     90%  338.00us
     99%  825.00us
  12488349 requests in 30.10s, 9.89GB read
Requests/sec: 414900.42
Transfer/sec:    336.31MB

ANS run on two lcore.
10 dpdk-nginx run on ANS.
# ./wrk --timeout=1 --latency -t20 -c100 -d30s http://10.0.0.2
Running 30s test @ http://10.0.0.2
  20 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   184.60us  165.39us  12.97ms   98.92%
    Req/Sec    26.69k     0.93k   29.92k    79.17%
  Latency Distribution
     50%  186.00us
     75%  200.00us
     90%  216.00us
     99%  370.00us
  15985217 requests in 30.10s, 12.65GB read
Requests/sec: 531077.97
Transfer/sec:    430.48MB

```
## UDP application performance testing

CPU: Intel(R) Xeon(R) CPU E5-2683 v3 @ 2.00GHz
NIC:82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)
ANS run on a lcore.
UDP application run on ANS.
```
    |--------------------------------------| 
    |      UDP application throughput      |
    |--------------------------------------| 
    | Packet size(byte)| Throughput(MBps)  | 
    |--------------------------------------|
    |     64           |       3644        | 
    |--------------------------------------| 
    |     128          |       5971        | 
    |--------------------------------------| 
    |     256          |     Line Rate     | 
    |--------------------------------------| 
```
