// Reversible Game Boy Advance Cartridge Slot
// Based of HDR's Game-Boy-KiCad-Library DS Lite Footprint
// https://github.com/HDR/Game-Boy-KiCad-Library
// Pin Definitions based off of the TypePak PCB.
// https://github.com/ImStuBTW/TypePak

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'up',
    BATOUT: {type: 'net', value: 'BATOUT'},
    BATIN: {type: 'net', value: 'BATIN'},
    RST: {type: 'net', value: 'RST'},
    GND: {type: 'net', value: 'GND'},
    VCC: {type: 'net', value: 'VCC'},
    MOSI: {type: 'net', value: 'MOSI'},
    MISO: {type: 'net', value: 'MISO'},
    SCK: {type: 'net', value: 'SCK'},
    IO_CS: {type: 'net', value: 'IO_CS'},
    row0: {type: 'net', value: 'row0'},
    row1: {type: 'net', value: 'row1'},
    row2: {type: 'net', value: 'row2'},
    row3: {type: 'net', value: 'row3'},
    row4: {type: 'net', value: 'row4'},
    row5: {type: 'net', value: 'row5'},
    LCD_CS: {type: 'net', value: 'LCD_CS'},
    col0: {type: 'net', value: 'col0'},
    col1: {type: 'net', value: 'col1'},
    col2: {type: 'net', value: 'col2'},
    col3: {type: 'net', value: 'col3'},
    col4: {type: 'net', value: 'col4'},
    col5: {type: 'net', value: 'col5'},
    col6: {type: 'net', value: 'col6'},
    col7: {type: 'net', value: 'col7'},
    NFC0: {type: 'net', value: 'NFC0'},
    NFC1: {type: 'net', value: 'NFC1'}
  },
  body: p => `
    (module Custom:GBA_Reversible_Cart_Reader (layer F.Cu) (tedit 5CF930D9)

    ${p.at /*Parametric Position */}

    ${'' /* Footprint Reference */}
    (fp_text reference J2 (at 0 1.7272 180) (layer F.SilkS)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value CartBus (at 0 -11) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user %R (at 0 -1) (layer F.Fab)
      (effects (font (size 2 2) (thickness 0.2)))
    )

    ${'' /* Mounting Holes */}
    (pad "" np_thru_hole circle (at -12.93204 -2.04724 ${p.rot}) (size 2 2) (drill 2) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 12.93204 -2.04724 ${p.rot}) (size 2 2) (drill 2) (layers *.Cu *.Mask))

    ${'' /* GND Pads */}
    (pad GND smd rect (at 12.68204 -12.9208 ${p.rot}) (size 4.5 2) (layers F.Cu F.Paste F.Mask))
    (pad GND smd rect (at -12.68204 -12.9208 ${p.rot}) (size 4.5 2) (layers F.Cu F.Paste F.Mask))
    (pad GND smd rect (at 12.68204 -12.9208 ${p.rot}) (size 4.5 2) (layers B.Cu B.Paste B.Mask))
    (pad GND smd rect (at -12.68204 -12.9208 ${p.rot}) (size 4.5 2) (layers B.Cu B.Paste B.Mask))

    ${'' /* Top Pads */}
    (pad 1 smd rect (at -23.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.BATOUT.str})
    (pad 2 smd rect (at -21.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.BATIN.str})
    (pad 3 smd rect (at -20.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.RST.str})
    (pad 4 smd rect (at -18.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.GND.str})
    (pad 5 smd rect (at -17.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VCC.str})
    (pad 6 smd rect (at -15.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.MOSI.str})
    (pad 7 smd rect (at -14.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.MISO.str})
    (pad 8 smd rect (at -12.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.SCK.str})
    (pad 9 smd rect (at -11.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.IO_CS.str})
    (pad 10 smd rect (at -9.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.row5.str})
    (pad 11 smd rect (at -8.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.row4.str})
    (pad 12 smd rect (at -6.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.row3.str})
    (pad 13 smd rect (at -5.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.row2.str})
    (pad 14 smd rect (at -3.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.row1.str})
    (pad 15 smd rect (at -2.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.row0.str})
    (pad 16 smd rect (at -0.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.LCD_CS.str})
    (pad 17 smd rect (at 0.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col0.str})
    (pad 18 smd rect (at 2.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col1.str})
    (pad 19 smd rect (at 3.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col2.str})
    (pad 20 smd rect (at 5.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col3.str})
    (pad 21 smd rect (at 6.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col4.str})
    (pad 22 smd rect (at 8.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col5.str})
    (pad 23 smd rect (at 9.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col6.str})
    (pad 24 smd rect (at 11.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.col7.str})
    (pad 25 smd rect (at 12.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.MISO.str})
    (pad 26 smd rect (at 14.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.NFC0.str})
    (pad 27 smd rect (at 15.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.NFC1.str})
    (pad 28 smd rect (at 17.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.VCC.str})
    (pad 29 smd rect (at 18.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.GND.str})
    (pad 30 smd rect (at 20.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.RST.str})
    (pad 31 smd rect (at 21.75 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.BATIN.str})
    (pad 32 smd rect (at 23.25 5.75 ${p.rot}) (size 1 2.5) (layers F.Cu F.Paste F.Mask) ${p.BATOUT.str})

    ${'' /* Rear Pads */}
    (pad 33 smd rect (at -23.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.BATOUT.str})
    (pad 34 smd rect (at -21.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.BATIN.str})
    (pad 35 smd rect (at -20.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.RST.str})
    (pad 36 smd rect (at -18.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.GND.str})
    (pad 37 smd rect (at -17.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.VCC.str})
    (pad 38 smd rect (at -15.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.NFC1.str})
    (pad 39 smd rect (at -14.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.NFC0.str})
    (pad 40 smd rect (at -12.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.MISO.str})
    (pad 41 smd rect (at -11.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col7.str})
    (pad 42 smd rect (at -9.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col6.str})
    (pad 43 smd rect (at -8.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col5.str})
    (pad 44 smd rect (at -6.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col4.str})
    (pad 45 smd rect (at -5.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col3.str})
    (pad 46 smd rect (at -3.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col2.str})
    (pad 47 smd rect (at -2.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col1.str})
    (pad 48 smd rect (at -0.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.col0.str})
    (pad 49 smd rect (at 0.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.LCD_CS.str})
    (pad 50 smd rect (at 2.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.row0.str})
    (pad 51 smd rect (at 3.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.row1.str})
    (pad 52 smd rect (at 5.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.row2.str})
    (pad 53 smd rect (at 6.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.row3.str})
    (pad 54 smd rect (at 8.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.row4.str})
    (pad 55 smd rect (at 9.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.row5.str})
    (pad 56 smd rect (at 11.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.IO_CS.str})
    (pad 57 smd rect (at 12.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.SCK.str})
    (pad 58 smd rect (at 14.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.MISO.str})
    (pad 59 smd rect (at 15.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.MOSI.str})
    (pad 60 smd rect (at 17.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.VCC.str})
    (pad 61 smd rect (at 18.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.GND.str})
    (pad 62 smd rect (at 20.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.RST.str})
    (pad 63 smd rect (at 21.75 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.BATIN.str})
    (pad 64 smd rect (at 23.25 5.75 ${p.rot}) (size 1 2.5) (layers B.Cu B.Paste B.Mask) ${p.BATOUT.str})
  )`
}