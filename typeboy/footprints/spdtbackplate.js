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
      (fp_line (start -3.6 2) (end -3.6 -2) (layer Edge.Cuts) (width 0.05))
      (fp_line (start -3.6 -2) (end 7.05 -2) (layer Edge.Cuts) (width 0.05))
      (fp_line (start 7.05 -2) (end 7.05 -0.3) (layer Edge.Cuts) (width 0.05))
      (fp_line (start 7.05 -0.3) (end 7.6 -0.3) (layer Edge.Cuts) (width 0.05))
      (fp_line (start 7.6 -0.3) (end 7.6 2) (layer Edge.Cuts) (width 0.05))
      (fp_line (start 7.6 2) (end -3.6 2) (layer Edge.Cuts) (width 0.05))
    )
  `
}