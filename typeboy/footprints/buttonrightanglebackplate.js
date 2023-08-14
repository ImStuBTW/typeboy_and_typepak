// TH Angled Power Switch Footprint
// Uses OS102011MA1QN1 Switch

module.exports = {
  params: {
    designator: 'B', // for button
    from: undefined,
    to: undefined
  },
  body: p => `
    (module SW_Tactile_SPST_Angled_PTS645Vx39-2LFS (layer F.Cu) (tedit 5A02FE31)
    
    ${p.at /* parametric position */}

    ${'' /* footprint reference */}
    (fp_line (start -3.75 0) (end 8.26 0) (layer Edge.Cuts) (width 0.05))       ${'' /* 0 0, -1.25 2.49 */}
    (fp_line (start 8.26 0) (end 8.26 4.99) (layer Edge.Cuts) (width 0.05)) ${'' /* -1.25 2.49, 5.76 2.49 */}
    (fp_line (start 8.26 4.99) (end -3.75 4.99) (layer Edge.Cuts) (width 0.05))      ${'' /* 5.76 2.49, 4.5 0 */}
    (fp_line (start -3.75 4.99) (end -3.75 0) (layer Edge.Cuts) (width 0.05))            ${'' /* 4.5 0, 0 0 */}
  )
  `
}