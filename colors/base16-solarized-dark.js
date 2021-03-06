// Base16 Solarized Dark
// Scheme: Ethan Schoonover (http://ethanschoonover.com/solarized)

var color_scheme = {
        'base00': '#002b36',
        'base01': '#073642',
        'base02': '#586e75',
        'base03': '#657b83',
        'base04': '#839496',
        'base05': '#93a1a1',
        'base06': '#eee8d5',
        'base07': '#fdf6e3',
        'base08': '#dc322f',
        'base09': '#cb4b16',
        'base0A': '#b58900',
        'base0B': '#859900',
        'base0C': '#2aa198',
        'base0D': '#268bd2',
        'base0E': '#6c71c4',
        'base0F': '#d33682',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(147, 161, 161, 0.5)");

term_.prefs_.set('color-palette-overrides', 
                        [color_scheme.base00,
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base05,
                        color_scheme.base03,
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base07,
                        color_scheme.base09,
                        color_scheme.base0F,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06]);
