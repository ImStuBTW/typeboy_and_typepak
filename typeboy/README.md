# The TypeBoy

The TypeBoy is a four row, six column, five modifier column staggered split ergonomic keyboard. A 6x4+5 layout as the cool kids would say. Stop me if you've heard this one before, but it was inspired by [Josef Adamčík](https://josef-adamcik.cz/)'s [Sofle keyboard](https://josefadamcik.github.io/SofleKeyboard/).

This keyboard was designed mostly as a testbed for the TypePak microcontroller cartridge.. It doesn't have too much going on outside of the Game Boy slot on the side. The only other peculiar hardware feature is the SLLB510100 thumb switch. It's a low profile slide switch that you can rotate to the left or right as well as pushing straight in. It's similar in purpose to a rotary encoder, but it just rocks back and forth instead of spinning. If you used a CD player around the turn of the century you probably know what to expect.

## Ergogen Outputs

It should come as no surprise that I leveraged [Ergogen](https://flatfootfox.com/ergogen-introduction/) to design the TypeBoy. The ergonomic keyboard generator makes it easy to turn keyboard concepts into full fledged designs. I wrote a whole blog post about it if you’re interested.

The TypeBoy uses several custom footprints. Most notably, the large Game Boy cartridge slot. To use these config files, clone this repository and install Ergogen onto your local system. Browse to this TypeBoy folder and run `ergogen .`to process `config.yaml`.

The primary output is the TypeBoy PCB. Ergogen will create an unrouted KiCAD file, but I’ve gone ahead and included the fully routed board in the repository. The resulting Gerber files are also included if you want to run the board off without any modifications.

Ergogen also has the ability to output vector outline files or 3D case files. The TypeBoy’s config outputs several outlines, but the case design I had in mind for this board were a little too complicated tor Ergogen itself. I ended up building the TypeBoy’s case in AutoDesk Fusion 360.

There’s one unusual output Ergogen produces in this design. It makes a “backplate” PCB. This is a bit of an unusual concept I’ve experimented with for my last few builds. It’s loosely based off the [Horizon](https://github.com/skarrmann/horizon) keyboard, with the intention of providing cutouts for diodes and footprint switches when building a case.

Unlike the Horizon, I just export the PCB design as a `.step` file and then use an online tool to convert the file into a `.stl` file I can e corporate into a 3D printed case design. The end result is a bottom piece that perfectly fits the components without providing a lot of echo-y blank space.

The case output folder has three files. The bottom pieces aren’t symmetrical. (The hotswap sockets aren’t flipped.) The top piece is symmetrical, so you can just flip it in your 3D printing software of choice before sending it though. The top and bottom pieces use seven M2 heat set screw inserts.

## Additional Footprints

Ergogen v4 supports custom footprints! The TypeBoy colors outsides the lines and includes a few not included in the standard repo:

* buttonrightangle.js - A right angle pushbutton.
* gbareversible.js - A reversible game boy cartridge slot footprint based off of [Martin Refseth's KiCAD footprint](https://github.com/HDR/Game-Boy-KiCad-Library/blob/master/Footprints/DSL_Cartridge_Reader.kicad_mod).
* lowproro.js - A footprint for the SIQ-02FVS3 low profile rotary encoder. Used in an earlier TypeBoy design.
* lowprothumb.js - A footprint for the SLLB510100 thumb switch used on later TypeBoy builds.
* mountinghole.js - An M2 mounting hole footprint.

There's also several "backplate" footprints. These are footprints which just have an edge cut drawn around the space where the standard component goes. `diode.js` handles the diodes, `diodebackplate.js` handles the cutout. Etc. Creating these as footprints rather than Ergogen outlines makes it a bit easier to place each backplate cutout exactly where the corresponding component goes.