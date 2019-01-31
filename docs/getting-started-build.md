---
id: build
title: Build
---

## Compile DPDK

```
- Create work directory
# mkdir work

- Download DPDK package to work directory
# wget http://dpdk.org/rel/dpdk-17.11.4.tar.xz

- Uncompressing DPDK package
# xz -d dpdk-17.11.4.tar.xz
# tar xvf dpdk-17.11.4.tar

- Compile all DPDK libs
# make config T=x86_64-native-linuxapp-gcc
# make install T=x86_64-native-linuxapp-gcc
All DPDK libs are copied to x86_64-native-linuxapp-gcc/lib/ directory.
For detail steps, please refer to DPDK website.
(http://dpdk.org/doc/guides/linux_gsg/index.html）.

Notes: should choice DPDK version based on ANS version.
```

## Generate ANS static libs

```
-	Set DPDK environment
# export RTE_SDK=/home/work/dpdk-17.11.4
# export RTE_TARGET=x86_64-native-linuxapp-gcc

-	Set ANS environment
# export RTE_ANS=/home/work/dpdk-ans

-	Clone ANS from github
# git clone https://github.com/ansyun/dpdk-ans.git

-	Generate librte_ans/librte_anssock/librte_anscli
# ./ install_deps.sh
librte_ans is generated in librte_ans directory.
librte_anssock is generated in librte_anssock directory.
librte_anscli is generated in librte_anscli directory.

```

## Compile ANS

```
# cd dpdk-ans/ans
# make

Notes: If compile ans failed, shall upgrade your gcc and binutils version.
```
