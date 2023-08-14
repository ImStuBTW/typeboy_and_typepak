# The TypeBoy & TypePak

The TypeBoy is a fairly standard split ergonomic keyboard with a very non-standard microcontroller setup. Your eyes don't deceive you: This is a keyboard that needs a Game Boy Advance cartridge to function.

More specifically, it needs a TypePak! I've been spending a lot of time in the Ergogen keyboard layout generator lately, and I recently finished building a Sanni Open Source Cartridge Reader. These two worlds collided in my head and it dawned on me that a keyboard's microcontroller stack could probably fit in the shell of a Game Boy cartridge. A bit of tinkering in KiCAD later, and suddenly this monstrosity the TypePak was born.

## The TypePak

The TypePak is a keyboard daughterboard with a XIAO nRF52840 Bluetooth microcontroller, a SN74HC595DT shift register, a LS011B7DH03 Sharp Memory Display, and a 401020 lipo battery designed to be housed inside of a standard Game Boy Advance cartridge. Every pin is broken out in case you find some novel use for SPI, or chose not to use the screen. The battery trace and reset pins are also broken out so that you can put a power and reset switch on the main keyboard. You'll need to use a tool similar to a Dremel in order to cut a USB-C port in the side of the cartridge shell.

## The TypeBoy

The TypeBoy is a fairly standard split keyboard with a 6x4+5 column staggered layout. The big difference being that it has a 32 pin slot for the Game Boy Advance cartrdige. The connector appears on both sides of the board, with traces and vias making the connector pinout reversible. The other notable feature is a SLLB510100 thumb switch.

## ZMK-Config

The ZMK wireless keyboard firmware configuration for this board is relatively standard. The software doesn't have any clue that it's being housed on an odd removable cartridge. Items to note are the LS011B7DH03 display using ZMK's built in Display support instead of the Nice!View wrapper one may be more familiar with, 74HC595 shift register support to add additional column output pins, and a [composite](https://zmk.dev/docs/config/kscan#composite-driver) key scan driver for using both a traditional keyboard matrix and direct pin reading for the thumb wheel.

## Acknowledgements

The TypeBoy isn't the first mechanical keyboard which takes microcontroller cartridges. [mujimanic](https://www.reddit.com/user/mujimanic/)'s [Giga40](https://www.reddit.com/r/MechanicalKeyboards/comments/kut2nk/now_youre_playing_with_power_giga40_power/) keyboard design and it's Famicom cartridges helped prove a low-profile Game Boy-centric version of this idea was worth pursuing.

The TypePak's display connector circuit is based off of [karnadii](https://github.com/karnadii)'s [Sharp Memory Display breakout board](https://github.com/karnadii/sharp_memory_display_breakout) design. The TypePak's PCB is based off of templates from [djedditt](https://github.com/djedditt/)'s [kicad-gamepaks](https://github.com/djedditt/kicad-gamepaks) library. The Game Boy cartridge slot KiCAD footprint was used from [Martin Refseth](https://github.com/HDR)'s [Game Boy KiCad Library](https://github.com/HDR/Game-Boy-KiCad-Library).

As usual, thanks to the [Absolem Club Discord](https://discord.gg/DbCfZfZ) and their #Ergogen channel for answering my endless onslaught of questions. Particularly special thanks to [Pete Johanson](https://github.com/petejohanson) for assisting with some ZMK troubleshooting when the low profile rotary encoders were giving me trouble. The ZMK firmware is heavily influenced by previous configs by [GEIST](https://github.com/GEIGEIGEIST/zmk-config-totem/tree/master/config), [Pete Johanson](https://github.com/petejohanson/zaphod-config/tree/main/boards/shields/zaphod_lite), and [JonMuller](https://github.com/JonMuller/gerbers/tree/main/corne-choc-xiao).

This keyboard is another derivative of [Josef Adamčík](https://josef-adamcik.cz/)'s original [Sofle Keyboard](https://josefadamcik.github.io/SofleKeyboard/) layout. I need to start experimenting with other layouts at this point, but it's hard to beat that thumb cluster.

Finally, another shout out to [GEIST](https://github.com/GEIGEIGEIST), [Freya](https://github.com/freya-irl), [Bubbleology](https://github.com/bubbleology) for their work on the [TOTEM](https://github.com/GEIGEIGEIST/TOTEM) keyboard's case. It was a big inspiration for this build, and they pulled the concept off way better than I did.