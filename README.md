# The TypeBoy & TypePak

*Please do not build this keyboard, it's still a work in progress and these current files most likely have bugs.*

Ho boy. I may have bit off more than I can chew here. This is an upcoming split keyboard design trying out a few things I haven't done in isolation yet, and testing a few honestly rediculous ideas.

Most mechanical keyboards are based off the Arduino Pro Micro microcontroller. Recently, the Seeedstudio XIAO formfactor has also started to catch on. The XIAO is small, and I got it in my head that it would be neat to put a XIAO BLE inside of a Game Boy Advance cartridge and make a self-contained mechanical keyboard cartridge.

## The TypePak

The Big N doesn't include a "C" in "Pack".

The TypePak is a keyboard daughterboard with a XIAO BLE, a SN74HC595DT shift register, and a LS011B7DH03 Sharp Memory Display. The display breakout circuit is based on karnadii's [Sharp Memory Display Breakout](https://github.com/karnadii/sharp_memory_display_breakout/tree/niceview-compat-no-mount) design. The TypePak uses an edge connector with 32 pins. Every pin is broken out in case you find some novel use for SPI, or chose not to use the screen. The battery trace and reset pins are also broken out so that you can put a power and reset switch on the main board. It can fit a 401020 lipo battery. You'll need to cut some of the cartridge slot for the XIAO BLE's USB port.

## The TypeBoy

The TypeBoy is a fairly standard reversible split keyboard design. The big difference being that it has a 32 pin socket for the Game Boy Advance cartrdige. The connector appears on both sides of the board, with traces and vias making the connector pinout reversible. The other notable feature is a SIQ-02FVS3 low profile rotary encoder with side pushbutton.

## ZMK

This ZMK firmware image is heavily inspired by previous configs by [Geist](https://github.com/GEIGEIGEIST/zmk-config-totem/tree/master/config), [PeteJohanson](https://github.com/petejohanson/zaphod-config/tree/main/boards/shields/zaphod_lite), and [JonMuller](https://github.com/JonMuller/gerbers/tree/main/corne-choc-xiao).