// TH Angled Power Switch Footprint
// Uses OS102011MA1QN1 Switch

module.exports = {
  params: {
    designator: 't', // for toggle
    from: undefined,
    to: undefined
  },
  body: p => `
    (module SW_CuK_OS102011MA1QN1_SPDT_Angled (layer F.Cu) (tedit 59AFFC74)
    
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference REF** (at 1.4 -3.6) (layer F.SilkS)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value SW_CuK_OS102011MA1QN1_SPDT_Angled (at 1.7 7.7) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text user %R (at 2.3 1.7) (layer F.Fab)
        (effects (font (size 0.5 0.5) (thickness 0.1)))
      )
      (fp_line (start -2.3 -2.2) (end 6.3 -2.2) (layer F.Fab) (width 0.1))
      (fp_line (start -2.3 -2.2) (end -2.3 2.2) (layer F.Fab) (width 0.1))
      (fp_line (start -2.3 2.2) (end 6.3 2.2) (layer F.Fab) (width 0.1))
      (fp_line (start 6.3 2.2) (end 6.3 -2.2) (layer F.Fab) (width 0.1))
      (fp_line (start 2 2.2) (end 2 6.2) (layer F.Fab) (width 0.1))
      (fp_line (start 2 6.2) (end 0 6.2) (layer F.Fab) (width 0.1))
      (fp_line (start 0 6.2) (end 0 2.2) (layer F.Fab) (width 0.1))
      (fp_line (start -2.3 -2.3) (end 6.3 -2.3) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.3 2.3) (end -0.1 2.3) (layer F.SilkS) (width 0.15))
      (fp_line (start 4 2.3) (end 6.3 2.3) (layer F.SilkS) (width 0.15))
      (fp_line (start 7.7 -2.7) (end 7.7 6.7) (layer F.CrtYd) (width 0.05))
      (fp_line (start 7.7 6.7) (end -3.7 6.7) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.7 6.7) (end -3.7 -2.7) (layer F.CrtYd) (width 0.05))
      (fp_line (start -3.7 -2.7) (end 7.7 -2.7) (layer F.CrtYd) (width 0.05))

      ${'' /* footprint reference */}
      (pad 1 thru_hole rect (at 0 0) (size 1.5 2.5) (drill 0.9) (layers *.Cu *.Mask) ${p.to.str})
      (pad 2 thru_hole oval (at 2 0) (size 1.5 2.5) (drill 0.9) (layers *.Cu *.Mask) ${p.from.str})
      (pad 3 thru_hole oval (at 4 0) (size 1.5 2.5) (drill 0.9) (layers *.Cu *.Mask))
      (pad "" thru_hole oval (at -2.1 0) (size 2.2 3.5) (drill 1.5) (layers *.Cu *.Mask))
      (pad "" thru_hole oval (at 6.1 0) (size 2.2 3.5) (drill 1.5) (layers *.Cu *.Mask))
    )
  `
}