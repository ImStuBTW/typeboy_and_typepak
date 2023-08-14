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
  (module Custom:SLLB510100 (layer F.Cu) (tedit SLLB510100)

  ${p.at /*Parametric Position */}
  
  ${'' /* Footprint Reference */}
    (fp_text reference S** (at 0.000 0.175) (layer F.SilkS)
      (effects (font (size 1.27 1.27) (thickness 0.254)))
    )
    (fp_text user %R (at 0.000 0.175) (layer F.Fab)
      (effects (font (size 1.27 1.27) (thickness 0.254)))
    )
    (fp_text value "SLLB510100" (at 0.000 0.175) (layer F.SilkS) hide
      (effects (font (size 1.27 1.27) (thickness 0.254)))
    )

    ${'' /* Outline */}
    (fp_line (start -7.5 -5.425) (end 7.5 -5.425) (layer F.CrtYd) (width 0.1))
    (fp_line (start 7.5 -5.425) (end 7.5 5.775) (layer F.CrtYd) (width 0.1))
    (fp_line (start 7.5 5.775) (end -7.5 5.775) (layer F.CrtYd) (width 0.1))
    (fp_line (start -7.5 5.775) (end -7.5 -5.425) (layer F.CrtYd) (width 0.1))
    (fp_line (start -4.75 4.425) (end -4.75 2.575) (layer F.Fab) (width 0.1))
    (fp_line (start -4.75 2.575) (end -4.75 2.575) (layer F.Fab) (width 0.1))
    (fp_line (start 4.75 2.575) (end 4.75 4.375) (layer F.Fab) (width 0.1))
    (fp_line (start 4.75 4.375) (end -4.75 4.375) (layer F.Fab) (width 0.1))
    (fp_line (start -6.5 -0.625) (end -5.5 -0.625) (layer F.Fab) (width 0.1))
    (fp_line (start -5.5 -0.625) (end -5 -1.225) (layer F.Fab) (width 0.1))
    (fp_line (start -5 -1.225) (end -5 -1.225) (layer F.Fab) (width 0.1))
    (fp_line (start 5 -1.225) (end 5.5 -0.625) (layer F.Fab) (width 0.1))
    (fp_line (start 5.5 -0.625) (end 6.5 -0.625) (layer F.Fab) (width 0.1))
    (fp_line (start -6.5 0.375) (end -5.5 0.375) (layer F.Fab) (width 0.1))
    (fp_line (start -5.5 0.375) (end -4.5 -0.725) (layer F.Fab) (width 0.1))
    (fp_line (start -4.5 -0.725) (end -4.5 -0.725) (layer F.Fab) (width 0.1))
    (fp_line (start 4.5 -0.725) (end 5.5 0.375) (layer F.Fab) (width 0.1))
    (fp_line (start 5.5 0.375) (end 6.5 0.375) (layer F.Fab) (width 0.1))
    (fp_line (start -1.5 -2.625) (end -1.5 -1.925) (layer F.Fab) (width 0.1))
    (fp_line (start 1.5 -2.625) (end 1.5 -1.925) (layer F.Fab) (width 0.1))
    (fp_line (start -6.5 0.375) (end -5.5 0.375) (layer Cmts.User) (width 0.2))
    (fp_line (start -5.5 0.375) (end -4.5 -0.725) (layer Cmts.User) (width 0.2))
    (fp_line (start -4.5 -0.725) (end -4.5 -0.725) (layer Cmts.User) (width 0.2))
    (fp_line (start 4.5 -0.725) (end 5.5 0.375) (layer Cmts.User) (width 0.2))
    (fp_line (start 5.5 0.375) (end 6.5 0.375) (layer Cmts.User) (width 0.2))
    (fp_line (start -6.5 -0.625) (end -5.5 -0.625) (layer Cmts.User) (width 0.2))
    (fp_line (start -5.5 -0.625) (end -5 -1.225) (layer Cmts.User) (width 0.2))
    (fp_line (start -5 -1.225) (end -5 -1.225) (layer Cmts.User) (width 0.2))
    (fp_line (start 5 -1.225) (end 5.5 -0.625) (layer Cmts.User) (width 0.2))
    (fp_line (start 5.5 -0.625) (end 6.5 -0.625) (layer Cmts.User) (width 0.2))
    (fp_line (start -1.5 -2.625) (end -1.5 -1.925) (layer Cmts.User) (width 0.2))
    (fp_line (start 1.5 -2.625) (end 1.5 -1.925) (layer Cmts.User) (width 0.2))
    (fp_line (start 6.5 -0.725) (end 6.5 0.475) (layer F.Fab) (width 0.1))
    (fp_line (start 6.5 -0.725) (end 6.5 0.475) (layer Cmts.User) (width 0.2))
    (fp_line (start -6.5 -0.725) (end -6.5 0.475) (layer F.Fab) (width 0.1))
    (fp_line (start -6.5 -0.725) (end -6.5 0.475) (layer Cmts.User) (width 0.2))
    (fp_line (start -4 4.375) (end -4.75 4.375) (layer Cmts.User) (width 0.2))
    (fp_line (start -4.75 4.375) (end -4.75 2.575) (layer Cmts.User) (width 0.2))
    (fp_line (start -4.75 2.575) (end -4.75 2.575) (layer Cmts.User) (width 0.2))
    (fp_line (start 4.75 2.575) (end 4.75 4.375) (layer Cmts.User) (width 0.2))
    (fp_line (start 4.75 4.375) (end 4 4.375) (layer Cmts.User) (width 0.2))
    (fp_line (start -1.5 -3.425) (end -1.5 -3.725) (layer F.Fab) (width 0.1))
    (fp_line (start -1.5 -3.725) (end -1 -3.725) (layer F.Fab) (width 0.1))
    (fp_line (start -1 -3.725) (end -1 -4.425) (layer F.Fab) (width 0.1))
    (fp_line (start -1 -4.425) (end 1 -4.425) (layer F.Fab) (width 0.1))
    (fp_line (start 1 -4.425) (end 1 -3.725) (layer F.Fab) (width 0.1))
    (fp_line (start 1 -3.725) (end 1.5 -3.725) (layer F.Fab) (width 0.1))
    (fp_line (start 1.5 -3.725) (end 1.5 -3.425) (layer F.Fab) (width 0.1))
    (fp_line (start -1.5 -3.425) (end -1.5 -3.725) (layer Cmts.User) (width 0.2))
    (fp_line (start -1.5 -3.725) (end -1 -3.725) (layer Cmts.User) (width 0.2))
    (fp_line (start -1 -3.725) (end -1 -4.425) (layer Cmts.User) (width 0.2))
    (fp_line (start -1 -4.425) (end 1 -4.425) (layer Cmts.User) (width 0.2))
    (fp_line (start 1 -4.425) (end 1 -3.725) (layer Cmts.User) (width 0.2))
    (fp_line (start 1 -3.725) (end 1.5 -3.725) (layer Cmts.User) (width 0.2))
    (fp_line (start 1.5 -3.725) (end 1.5 -3.425) (layer Cmts.User) (width 0.2))
    (fp_line (start -3 5.2) (end -3 5.2) (layer Cmts.User) (width 0.1))
    (fp_line (start -3 5.3) (end -3 5.3) (layer Cmts.User) (width 0.1))
    (fp_arc (start 0 2.575) (end -4.750 2.575) (angle 180) (layer F.Fab) (width 0.1))
    (fp_arc (start 0 2.9415) (end -5.000 -1.225) (angle 100.4) (layer F.Fab) (width 0.1))
    (fp_arc (start 0 3.3655) (end -4.500 -0.725) (angle 95.5) (layer F.Fab) (width 0.1))
    (fp_arc (start 0 3.3655) (end -4.500 -0.725) (angle 95.5) (layer Cmts.User) (width 0.2))
    (fp_arc (start 0 2.9415) (end -5.000 -1.225) (angle 100.4) (layer Cmts.User) (width 0.2))
    (fp_arc (start 0 2.575) (end -4.750 2.575) (angle 180) (layer Cmts.User) (width 0.2))
    (fp_arc (start -3 5.25) (end -3.000 5.2) (angle -180) (layer Cmts.User) (width 0.1))
    (fp_arc (start -3 5.25) (end -3.000 5.3) (angle -180) (layer Cmts.User) (width 0.1))

    ${'' /* Front Pads */}
    (pad 1 smd rect (at -3.000 4.125 ${p.rot}) (size 1.000 1.300) (layers F.Cu F.Paste F.Mask) ${p.A.str})
    (pad 2 smd rect (at 3.000 4.125 ${p.rot}) (size 1.000 1.300) (layers F.Cu F.Paste F.Mask) ${p.B.str})
    (pad C1 smd rect (at -1.000 4.125 ${p.rot}) (size 1.000 1.300) (layers F.Cu F.Paste F.Mask) ${p.COM.str})
    (pad T1 smd rect (at 1.000 4.125 ${p.rot}) (size 1.000 1.300) (layers F.Cu F.Paste F.Mask) ${p.PUSH.str})
    (pad MH1 np_thru_hole circle (at -1.900 2.175 ${p.rot}) (size 1.1 1.1) (drill 1.1) (layers *.Cu *.Mask))
    (pad MH2 np_thru_hole circle (at 1.900 2.175 ${p.rot}) (size 1.1 1.1) (drill 1.1) (layers *.Cu *.Mask))

    ${'' /* Back Pads */}
    (pad 1 smd rect (at -3.000 4.125 ${p.rot}) (size 1.000 1.300) (layers B.Cu B.Paste B.Mask) ${p.A.str})
    (pad 2 smd rect (at 3.000 4.125 ${p.rot}) (size 1.000 1.300) (layers B.Cu B.Paste B.Mask) ${p.B.str})
    (pad C1 smd rect (at -1.000 4.125 ${p.rot}) (size 1.000 1.300) (layers B.Cu B.Paste B.Mask) ${p.PUSH.str})
    (pad T1 smd rect (at 1.000 4.125 ${p.rot}) (size 1.000 1.300) (layers B.Cu B.Paste B.Mask) ${p.COM.str})
    (pad MH1 np_thru_hole circle (at -1.900 2.175 ${p.rot}) (size 1.1 1.1) (drill 1.1) (layers *.Cu *.Mask))
    (pad MH2 np_thru_hole circle (at 1.900 2.175 ${p.rot}) (size 1.1 1.1) (drill 1.1) (layers *.Cu *.Mask))
  )`
}