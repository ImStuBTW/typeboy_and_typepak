module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'D',
    },
    body: p => {
        return `
            (module ComboDiode (layer F.Cu) (tedit 5B24D78E)

            ${p.at /* parametric position */}

            (fp_arc (start 1.75 0) (end 1.75 1.25) (angle -180) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 1.75 1.25) (end -1.75 1.25) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start -1.75 0) (end -1.75 1.25) (angle 180) (layer Edge.Cuts) (width 0.15))
            (fp_line (start -1.75 -1.25) (end 1.75 -1.25) (layer Edge.Cuts) (width 0.15))
        )
        `
    }
}