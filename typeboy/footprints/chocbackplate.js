module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'S',
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${''/* middle shaft, updated 
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))*/}
      
        
      ${''/* stabilizers, updated
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))*/}
      

      ${'' /* hotswap socket + Stabalizes */}

      (fp_line (start -2.25 -8.95) (end 2.25 -8.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 2.25 -8.95) (end 3.25 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 3.25 -7.95) (end 3.25 -7.35) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 3.75 -7.35) (end 3.25 -7.35) (angle -90) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 3.75 -6.85) (end 7.25 -6.85) (layer Edge.Cuts) (width 0.15))

      (fp_line (start 7.25 -6.85) (end 9.6 -5.75) (layer Edge.Cuts) (width 0.15))
      
      (fp_line (start 9.6 -5.75) (end 9.6 -1.75) (layer Edge.Cuts) (width 0.15))

      (fp_line (start 9.6 -1.75) (end 7 0) (layer Edge.Cuts) (width 0.15))
      
      (fp_arc (start 5.5 0.0) (end 4 0.0) (angle -180) (layer Edge.Cuts) (width 0.15))
      
      (fp_line (start 4 0) (end 2.65 0) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 0.25 0.0) (end -2.15 0.0) (angle -180) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -2.15 0) (end -4 0) (layer Edge.Cuts) (width 0.15))

      (fp_arc (start -5.5 0) (end -5.5 -1.5) (angle -270) (layer Edge.Cuts) (width 0.15))

      (fp_line (start -5.5 -1.5) (end -5.5 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -5.5 -7.95) (end -3.25 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -3.25 -7.95) (end -2.25 -8.95) (layer Edge.Cuts) (width 0.15))


      ${'' /* hotswap socket + Stabalizes (Old)

      (fp_line (start -1.75 -8.45) (end 1.75 -8.45) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 1.75 -8.45) (end 2.25 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 2.25 -7.95) (end 2.25 -6.95) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 2.75 -6.95) (end 2.25 -6.95) (angle -90) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 2.75 -6.45) (end 7.25 -6.45) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -6.45) (end 7.25 -5.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -5.25) (end 9.6 -5.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 9.6 -5.25) (end 9.6 -2.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 9.6 -2.25) (end 7.25 -2.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -2.25) (end 7.25 0) (layer Edge.Cuts) (width 0.15))

      (fp_line (start 7.25 0) (end 6.5 0) (layer Edge.Cuts) (width 0.15))
      
      (fp_arc (start 5.5 0.0) (end 4.5 0.0) (angle -180) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 4.5 0) (end 1.9 0) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 0.0 0.0) (end -1.9 0.0) (angle -180) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -1.9 0) (end -4.5 0) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start -5.5 0) (end -5.5 -1) (angle -270) (layer Edge.Cuts) (width 0.15))

      (fp_line (start -5.5 -1) (end -5.5 -7.5) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -5.5 -7.5) (end -2.25 -7.5) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -2.25 -7.5) (end -2.25 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -2.25 -7.95) (end -1.75 -8.45) (layer Edge.Cuts) (width 0.15))

      */}
  
      ${'' /* hotswap socket 

      (fp_line (start -1.75 -8.45) (end 1.75 -8.45) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 1.75 -8.45) (end 2.25 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 2.25 -7.95) (end 2.25 -6.95) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 2.75 -6.95) (end 2.25 -6.95) (angle -90) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 2.75 -6.45) (end 7.25 -6.45) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -6.45) (end 7.25 -5.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -5.25) (end 9.6 -5.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 9.6 -5.25) (end 9.6 -2.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 9.6 -2.25) (end 7.25 -2.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -2.25) (end 7.25 -1.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 7.25 -1.25) (end 6.5 -1.25) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 6.5 -1.25) (end 6.5 0) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 5.5 0.0) (end 4.5 0.0) (angle -180) (layer Edge.Cuts) (width 0.15))
      (fp_line (start 4.5 0) (end 1.9 0) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start 0.0 0.0) (end -1.9 0.0) (angle -180) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -1.9 0) (end -4.5 0) (layer Edge.Cuts) (width 0.15))
      (fp_arc (start -5.5 0) (end -5.5 -1) (angle -270) (layer Edge.Cuts) (width 0.15))

      (fp_line (start -5.5 -1) (end -4.75 -1) (layer Edge.Cuts) (width 0.15))

      (fp_line (start -4.75 -1) (end -4.75 -7.5) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -4.75 -7.5) (end -2.25 -7.5) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -2.25 -7.5) (end -2.25 -7.95) (layer Edge.Cuts) (width 0.15))
      (fp_line (start -2.25 -7.95) (end -1.75 -8.45) (layer Edge.Cuts) (width 0.15))

      */}

      ${''/* pins 
      (pad "" np_thru_hole circle (at -5 3.8) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 0 5.9) (size 3 3) (drill 3) (layers *.Cu *.Mask))*/}
      )`
      return `${standard}`;
  }
}