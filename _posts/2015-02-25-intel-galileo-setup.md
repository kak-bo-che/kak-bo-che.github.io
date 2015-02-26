---
layout: post
title: Intel Galileo Setup
categories: arduino
tags: [windows, intel galileo]
minutes_spend: 0
---
## Resources

* [Intel Drivers Page](http://www.intel.com/support/galileo/sb/CS-035101.htm)
* [Intel Arduino for Windows](http://downloadmirror.intel.com/24355/eng/arduino-windows-1.0.4.7z) (rename .7z to zip because the file is a zip file)

## Compiling
1. Launch Arduino Sketch
![Combined](/images/{{ page.date | date:"%Y-%m-%d" }}/Image001.png)
1. Setup Verbose Messages
  File &rarr; Preferences show verbose output during [x] compilation [] upload
2. Load Blink Example
  File &rarr; Examples &rarr; 01.Basic &rarr; Blink
3. Compile the blink program
![Combined](/images/{{ page.date | date:"%Y-%m-%d" }}/Image003.png)
4. Copy and Paste the Compile/Error messages
![Combined](/images/{{ page.date | date:"%Y-%m-%d" }}/Image004.png)

{% highlight bash %}
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-g++ -m32 -march=i586 --sysroot=C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i586-poky-linux-uclibc -c -g -Os -w -fno-exceptions -ffunction-sections -fdata-sections -MMD -D__ARDUINO_X86__ -Xassembler -mquark-strip-lock=yes -march=i586 -m32 -DARDUINO=153 -IC:\arduino-1.5.3-Intel.1.0.4\hardware\arduino\x86\cores\arduino -IC:\arduino-1.5.3-Intel.1.0.4\hardware\arduino\x86\variants\galileo_fab_d C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Blink.cpp -o C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Blink.cpp.o 
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\fast_gpio_common.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\fast_gpio_nc.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\fast_gpio_sc.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\i2c.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\interrupt.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\mux.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\sysfs.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\trace.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\wiring_analog.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\wiring_digital.c.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\IPAddress.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\main.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Print.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\pulseIn.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\RingBuffer.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Stream.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Tone.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\TTYUART.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\UtilMisc.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\UtilTime.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\WMath.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\WString.cpp.o
  Using previously compiled: C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\variant.cpp.o
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\fast_gpio_common.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\fast_gpio_nc.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\fast_gpio_sc.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\i2c.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\interrupt.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\mux.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\sysfs.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\trace.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\wiring_analog.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\wiring_digital.c.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\IPAddress.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\main.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Print.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\pulseIn.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\RingBuffer.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Stream.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Tone.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\TTYUART.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\UtilMisc.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\UtilTime.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\WMath.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\WString.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-ar rcs C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\variant.cpp.o 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-g++ -m32 -march=i586 --sysroot=C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i586-poky-linux-uclibc -Os -Wl,--gc-sections -march=i586 -o C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/Blink.cpp.elf C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp\Blink.cpp.o C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/core.a -LC:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp -lm -lpthread 
C:\arduino-1.5.3-Intel.1.0.4/hardware/tools/x86/i686-pokysdk-mingw32/usr/bin/i586-poky-linux-uclibc/i586-poky-linux-uclibc-strip C:\Users\user\AppData\Local\Temp\build5830768072877169149.tmp/Blink.cpp.elf 
Binary sketch size: 58,031 bytes (of a 10,000,000 byte maximum) - 0% used
{% endhighlight %}