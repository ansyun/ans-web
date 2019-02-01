---
id: startup
title: Startup
---

## DPDK environment setup

```
Run dpdk-setup.sh script to set DPDK environment. Need choice [17], [19], [20], [23].

/src/dpdk-17.11.4# ./usertools/dpdk-setup.sh
------------------------------------------------------------------------------
 RTE_SDK exported as /root/src/dpdk-17.11.4
------------------------------------------------------------------------------
----------------------------------------------------------
 Step 1: Select the DPDK environment to build
----------------------------------------------------------
[1] arm64-armv8a-linuxapp-clang
[2] arm64-armv8a-linuxapp-gcc
[3] arm64-dpaa2-linuxapp-gcc
[4] arm64-dpaa-linuxapp-gcc
[5] arm64-thunderx-linuxapp-gcc
[6] arm64-xgene1-linuxapp-gcc
[7] arm-armv7a-linuxapp-gcc
[8] i686-native-linuxapp-gcc
[9] i686-native-linuxapp-icc
[10] ppc_64-power8-linuxapp-gcc
[11] x86_64-native-bsdapp-clang
[12] x86_64-native-bsdapp-gcc
[13] x86_64-native-linuxapp-clang
[14] x86_64-native-linuxapp-gcc
[15] x86_64-native-linuxapp-icc
[16] x86_x32-native-linuxapp-gcc

----------------------------------------------------------
 Step 2: Setup linuxapp environment
----------------------------------------------------------
[17] Insert IGB UIO module
[18] Insert VFIO module
[19] Insert KNI module
[20] Setup hugepage mappings for non-NUMA systems
[21] Setup hugepage mappings for NUMA systems
[22] Display current Ethernet/Crypto device settings
[23] Bind Ethernet/Crypto device to IGB UIO module
[24] Bind Ethernet/Crypto device to VFIO module
[25] Setup VFIO permissions

----------------------------------------------------------
 Step 3: Run test application for linuxapp environment
----------------------------------------------------------
[26] Run test application ($RTE_TARGET/app/test)
[27] Run testpmd application in interactive mode ($RTE_TARGET/app/testpmd)

----------------------------------------------------------
 Step 4: Other tools
----------------------------------------------------------
[28] List hugepage info from /proc/meminfo

----------------------------------------------------------
 Step 5: Uninstall and system cleanup
----------------------------------------------------------
[29] Unbind devices from IGB UIO or VFIO driver
[30] Remove IGB UIO module
[31] Remove VFIO module
[32] Remove KNI module
[33] Remove hugepage mappings

[34] Exit Script

```

## ANS startup parameters

```
root@ubuntu:~/dpdk-ans/ans# ./build/ans --help
EAL: Detected 12 lcore(s)

Usage: ./build/ans [options]

EAL common options:
  -c COREMASK         Hexadecimal bitmask of cores to run on
  -l CORELIST         List of cores to run on
                      The argument format is <c1>[-c2][,c3[-c4],...]
                      where c1, c2, etc are core indexes between 0 and 128
  --lcores COREMAP    Map lcore set to physical cpu set
                      The argument format is
                            '<lcores[@cpus]>[<,lcores[@cpus]>...]'
                      lcores and cpus list are grouped by '(' and ')'
                      Within the group, '-' is used for range separator,
                      ',' is used for single number separator.
                      '( )' can be omitted for single element group,
                      '@' can be omitted if cpus and lcores have the same value
  --master-lcore ID   Core ID that is used as master
  -n CHANNELS         Number of memory channels
  -m MB               Memory to allocate (see also --socket-mem)
  -r RANKS            Force number of memory ranks (don't detect)
  -b, --pci-blacklist Add a PCI device in black list.
                      Prevent EAL from using this PCI device. The argument
                      format is <domain:bus:devid.func>.
  -w, --pci-whitelist Add a PCI device in white list.
                      Only use the specified PCI devices. The argument format
                      is <[domain:]bus:devid.func>. This option can be present
                      several times (once per device).
                      [NOTE: PCI whitelist cannot be used with -b option]
  --vdev              Add a virtual device.
                      The argument format is <driver><id>[,key=val,...]
                      (ex: --vdev=net_pcap0,iface=eth2).
  -d LIB.so|DIR       Add a driver or driver directory
                      (can be used multiple times)
  --vmware-tsc-map    Use VMware TSC map instead of native RDTSC
  --proc-type         Type of this process (primary|secondary|auto)
  --syslog            Set syslog facility
  --log-level         Set default log level
  -v                  Display version information on startup
  -h, --help          This help

EAL options for DEBUG use only:
  --huge-unlink       Unlink hugepage files after init
  --no-huge           Use malloc instead of hugetlbfs
  --no-pci            Disable PCI
  --no-hpet           Disable HPET
  --no-shconf         No shared config (mmap'd files)

EAL Linux options:
  --socket-mem        Memory to allocate on sockets (comma separated values)
  --huge-dir          Directory where hugetlbfs is mounted
  --file-prefix       Prefix for hugepage filenames
  --base-virtaddr     Base virtual address
  --create-uio-dev    Create /dev/uioX (usually done by hotplug)
  --vfio-intr         Interrupt mode for VFIO (legacy|msi|msix)
  --xen-dom0          Support running on Xen dom0 without hugetlbfs

  -p PORTMASK: hexadecimal bitmask of ports to configure
  -P : enable promiscuous mode
  --config (port,queue,lcore): rx queues configuration
  --no-numa: optional, disable numa awareness
  --enable-kni: optional, disable kni awareness
  --enable-ipsync: optional, sync ip/route from kernel kni interface
  --enable-jumbo: enable jumbo frame which max packet len is PKTLEN in decimal (64-9600)

```

## ANS startup example

```
- ANS startup without kni/ipsync
# ./build/ans -c 0x4 -n 1 --base-virtaddr=0x2aaa2aa0000 -- -p 0x1 --config="(0,0,2)"
EAL: Detected 12 lcore(s)
EAL: 128 hugepages of size 2097152 reserved, but no mounted hugetlbfs found for that size
EAL: Probing VFIO support...
EAL: PCI device 0000:06:00.0 on NUMA socket -1
EAL:   probe driver: 8086:10fb net_ixgbe
EAL: PCI device 0000:06:00.1 on NUMA socket -1
EAL:   probe driver: 8086:10fb net_ixgbe
EAL: PCI device 0000:07:00.0 on NUMA socket -1
EAL:   probe driver: 8086:10fb net_ixgbe
EAL: PCI device 0000:07:00.1 on NUMA socket -1
EAL:   probe driver: 8086:10fb net_ixgbe
param nb 1 ports 1
port id 0

- ANS startup with kni/ipsync enable
# ./build/ans -c 0x4 -n 1 --base-virtaddr=0x2aaa2aa0000 -- -p 0x1 --config="(0,0,2)" --enable-kni --enable-ipsync

```
