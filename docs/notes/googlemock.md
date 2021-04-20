---
id: googlemock
title: Install Google Mock
sidebar_label: Google Mock
---

I ran into a few hiccups while getting googlemock to work for the book
[Modern C++ Programming with Test-Driven Development](https://www.amazon.com/Modern-Programming-Test-Driven-Development-Better/dp/1937785483)

The book is from 2013 and since then googlemock has been absorded by googletest
in the newer versions. So this is how I got things up and running.

## Google Mock

- Download the correct version of [googlemock v1.6.0](https://github.com/google/googlemock/releases/tag/release-1.6.0)

- Extract and put in root of home folder `/home/$USER/googlemock-1.6.0`

## Google Test

- Download the correct version of [googletest v1.6.0](https://github.com/google/googletest/releases/tag/release-1.6.0)

- Extract and copy to inside root directory of googlemock folder
then rename to gtest

## Setup Enviroment Variables

`export GMOCK_HOME=/home/user/googlemock-1.6.0`

## Build Google Mock

`cd $GMOCK_HOME`  
`mkdir mybuild`  
`cd mybuild`  
`cmake ..`  

## Build Google Test

`cd $GMOCK_HOME/gtest`  
`mkdir mybuild`  
`cd mybuild`  
`cmake ..`  

The above instructions are from Chapter 1.5 Google Mock section following the
directions for Unix.

## Other Notes

While trying to build the examples from the book I ran into a pthread problem.
It seems that pthread needs to be linked after gtest is linked to.  

Changing the order in CMakeLists.txt fixed the error. i.e:

From:  
`target_link_libraries(test pthread)`
`target_link_libraries(test gmock)`  
`target_link_libraries(test gtest)`  

To:  
`target_link_libraries(test gmock)`  
`target_link_libraries(test gtest)`  
`target_link_libraries(test pthread)`  
