# The TypePak

![The TypePak microcontroller cartridge.](../images/TypePak-Hero.jpg)

The TypePak is a custom keyboard controller PCB housed inside of an aftermarket Game Boy Advance cartridge shell. It features Bluetooth connectivity, ZMK support, a low-power monochrome display, a built in LiPo battery, 9 GPIO pins, and 8 dedicated output pins. Simply slot the TypePak into a keyboard with a compatible Game Boy cartridge slot, flip the power switch, and you've got yourself a working wireless keyboard. (After flashing the appropriate firmware and keymap, naturally.)

Unlike its companion TypeBoy, the TypePak was designed in KiCAD from scratch. Sadly there aren't any esoteric Game Boy cartridge generators just yet. This repository contains a standard KiCAD project. There's a schematic, a routed PCB, and a Gerber file.

## Layout & Pinout

![The TypePak PCB layout.](../images/TypePak-Diagram.png)

The heart of the TypePak is a XIAO nRF52840 microcontroller. It handles all of the Bluetooth communication, the wireless battery charging, and USB connectivity. The XIAO "BLE" famously has several pins mounted in the middle of the board on its underside, so the TypePak has several small holes in the PCB to reach the reset, power, and NFC pins.

There's a few additional pieces of hardware mounted onto the board. The TypePak features a LS011B7DH03 Sharp Memory Display. This is the same module found on the Nice!View keyboard display, but instead leverages karnadii's excellent [sharp_memory_display_breakout](https://github.com/karnadii/sharp_memory_display_breakout) circuit design. The microcontroller also takes advantage of a 74HC595 shift register to provide several more output pins. All of this is powered by a 401020 LiPo battery.

A Game Boy cartridge has 32 pins on its edge connector. The XIAO nRF52840 and the shift register have a total of 26 pins. Rather than leave twenty precent of the TypePak's cartridge pins unused, several of the important pins are exposed on both ends of the cartridge's edge connector. The battery output, power pins, reset pins, and a few others are duplicated so that you can more easily route some of the support hardware on your keyboard PCB.

Speaking of which, the TypePak does not have a built in power switch or reset button of its own. (Technically the XIAO does have a reset button, but it's underneath the cartridge's plastic casing.) You'll need to create out these components on the keyboard itself. The whole idea of this setup is to evoke the stylings of a classic Game Boy, so a large chunky power switch is honestly a welcome addition. Just remember, the battery is physically disconnected unless the keyboard's power switch is turned on, so the TypePak can't charge when disconnected from a board.

## Building a TypePak

![The TypePak inside of a plastic cartridge case.](../images/TypePak-Drilling.jpg)

The TypePak is enclosed inside of an aftermarket Game Boy Advance cartridge. Believe it or not, these cartridges typically did not feature cutouts for USB-C ports. You'll need to drill one into the side of your cartridge so that the TypePak can charge and be flashed with new firmware.

![The top half of the TypePak's case with several millimeters of plastic shaved away.](../images/TypePak-Top.jpg)

Cutting a hole in the side of the cartridge won't be enough. You'll also need to shave away some of the inside of the top of the case. You should be able to leave most of the exterior of the top untouched. There's *just* enough material on the inside of the case to make everything fit. The cartridge may bow slightly, but you should be able to get all the tabs locked securely into place and the fastener screw fully secured into place. Aftermarket cartridges are fairly cheap, so you may want to buy an extra to practice on.

## Build of Materials

| Part                             | Amount         | Price       | Link |
| -------------------------------- | -------------- | --------------------- | ---- |
| TypePak PCB Via JLCPCB           | 1 (5 PCB Pack) | $2-4.00 USD | https://jlcpcb.com |
| XIAO nRF52840 Microcontroller    | 1              | $10.00 USD  | https://www.digikey.com/en/products/detail/seeed-technology-co-ltd/102010448/16652893 |
| HFK110CT-ND Display Connector    | 1              | $1.35 USD   | https://www.digikey.com/en/products/detail/hirose-electric-co-ltd/FH12A-10S-0-5SH-55/1110331 |
| 560PF Capacitor                  | 2              | $0.15 USD   | https://www.digikey.com/en/products/detail/samsung-electro-mechanics/CL21C561JBANNNC/3887492 |
| 1UF Capacitor                    | 2              | $0.10 USD   | https://www.digikey.com/en/products/detail/samsung-electro-mechanics/CL21B105KBFNNNG/3894467 |
| 300 OHM Ferrite Beads            | 2              | $0.20 USD   | https://www.digikey.com/en/products/detail/vishay-dale/ILBB0805ER301V/2574914 |
| SN74HC595 Shift Register         | 1              | $1.00 USD   | https://www.digikey.com/en/products/detail/texas-instruments/SN74HC595DT/1571266 |
| LS011B7DH03 Sharp Memory Display | 1              | $15.00 USD  | https://www.aliexpress.us/item/3256801622787441.html |
| 401020 LiPo Battery (80 mAh)     | 1              | $7.00 USD   | https://www.amazon.com/gp/product/B09FLX9VZD/ |
| Game Boy Advance Cartridge Shell | 1              | $3.50 USD   | https://www.aliexpress.us/item/3256803793023444.html |

The above table represents the parts needed to construct a single TypePak. You'll need to double everything except for the PCB order if you plan on making two. (JLCPCB fabricates PCBs in groups of 5 as a minimum.) If you're building two TypePaks, it's probably worth bumping the capacitor and ferrite bead orders up to 10. You don't want to have your entire project get stalled if you misplace one of the small components, and the bulk ordering pricing makes buying 4-6 units approximately the same cost as 10.