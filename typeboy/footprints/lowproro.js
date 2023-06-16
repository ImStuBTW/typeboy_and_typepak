// Low Profile Rotatry Encoder Footprint
// Uses SIQ-02FVS3 Encoder

module.exports = {
  params: {
    designator: 'ROT',
    A: undefined,
    PUSH: undefined,
    COM: undefined,
    B: undefined
  },
  body: p => `
    (module Custom:SIQ-02FVS3 (layer F.Cu) (tedit 5E12F420)

    ${p.at /*Parametric Position */}

    ${'' /* Footprint Reference */}
    (fp_text reference REF** (at 0 1.8) (layer F.SilkS)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value SIQ-02FVS3 (at 0 2.95) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )

    ${'' /* Outline */}
    (fp_line (start -5.2 -0.83) (end 5.2 -0.83) (layer F.SilkS) (width 0.12))
    (fp_line (start -5.2 0.83) (end 5.2 0.83) (layer F.SilkS) (width 0.12))
    (fp_line (start -5.2 7.02) (end -6.36 7.02) (layer F.SilkS) (width 0.12))
    (fp_line (start 5.2 7.02) (end 6.36 7.02) (layer F.SilkS) (width 0.12))
    (fp_line (start -6.36 7.02) (end -6.36 5.36) (layer F.SilkS) (width 0.12))
    (fp_line (start 6.36 7.02) (end 6.36 5.36) (layer F.SilkS) (width 0.12))
    (fp_line (start -6.36 5.36) (end -5.2 5.36) (layer F.SilkS) (width 0.12))
    (fp_line (start 6.36 5.36) (end 5.2 5.36) (layer F.SilkS) (width 0.12))
    (fp_line (start -5.2 5.36) (end -5.2 -0.83) (layer F.SilkS) (width 0.12))
    (fp_line (start 5.2 5.36) (end 5.2 -0.83) (layer F.SilkS) (width 0.12))
    (fp_line (start -6.6 -1.05) (end 6.6 -1.05) (layer F.CrtYd) (width 0.05))
    (fp_line (start 6.6 -1.05) (end 6.6 7.25) (layer F.CrtYd) (width 0.05))
    (fp_line (start -6.6 7.25) (end 6.6 7.25) (layer F.CrtYd) (width 0.05))
    (fp_line (start -6.6 -1.05) (end -6.6 7.25) (layer F.CrtYd) (width 0.05))

    ${'' /* Front Pads */}
    (pad 4 smd rect (at -3.9 0 ${p.rot}) (size 1.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.B.str})
    (pad 3 smd rect (at -1.3 0 ${p.rot}) (size 1.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.COM.str})
    (pad 2 smd rect (at 1.3 0 ${p.rot}) (size 1.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.PUSH.str})
    (pad 1 smd rect (at 3.9 0 ${p.rot}) (size 1.3 1.3) (layers F.Cu F.Paste F.Mask) ${p.A.str})
    (pad MP smd rect (at -5.35 6.25 ${p.rot}) (size 1.3 1.3) (layers F.Cu F.Paste F.Mask))
    (pad MP smd rect (at 5.35 6.25 ${p.rot}) (size 1.3 1.3) (layers F.Cu F.Paste F.Mask))
    (pad "" np_thru_hole circle (at -2.9 3.05 ${p.rot}) (size 1.6 1.6) (drill 1.6) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 3.1 3.05 ${p.rot}) (size 1.6 1.6) (drill 1.6) (layers *.Cu *.Mask))

    ${'' /* Back Pads */}
    (pad 8 smd rect (at -3.9 0 ${p.rot}) (size 1.3 1.3) (layers B.Cu B.Paste B.Mask) ${p.B.str})
    (pad 7 smd rect (at -1.3 0 ${p.rot}) (size 1.3 1.3) (layers B.Cu B.Paste B.Mask) ${p.PUSH.str})
    (pad 6 smd rect (at 1.3 0 ${p.rot}) (size 1.3 1.3) (layers B.Cu B.Paste B.Mask) ${p.COM.str})
    (pad 5 smd rect (at 3.9 0 ${p.rot}) (size 1.3 1.3) (layers B.Cu B.Paste B.Mask) ${p.A.str})
    (pad MP smd rect (at -5.35 6.25 ${p.rot}) (size 1.3 1.3) (layers B.Cu B.Paste B.Mask))
    (pad MP smd rect (at 5.35 6.25 ${p.rot}) (size 1.3 1.3) (layers B.Cu B.Paste B.Mask))
    (pad "" np_thru_hole circle (at -2.9 3.05 ${p.rot}) (size 1.6 1.6) (drill 1.6) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 3.1 3.05 ${p.rot}) (size 1.6 1.6) (drill 1.6) (layers *.Cu *.Mask))
  )`
}