export default {
  theme: {
    extend: {
      fontFamily: {
        // Clean app UI
        ui: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],

        // Old-school serif (VERY different)
        classic: [
          'Times New Roman',
          'Times',
          'serif',
        ],

        // Typewriter style (high contrast)
        typewriter: [
          'Courier New',
          'Courier',
          'monospace',
        ],

        // Wide, humanist sans
        humanist: [
          'Tahoma',
          'Verdana',
          'Geneva',
          'sans-serif',
        ],

        // Aggressive, poster font
        poster: [
          'Impact',
          'Arial Black',
          'sans-serif',
        ],

        // Script / handwritten (rare but dramatic)
        script: [
          'Comic Sans MS',
          'Comic Neue',
          'cursive',
        ],
      },
    },
  },
  plugins: [],
};
