namespace $ { $mol_style_attach( "milis/ballsort/ballsort.view.css",
 ":root {\n\t--milis_ballsort_ball_main: #466799;\n\t--milis_ballsort_ball_light: #00B2FF;\n\t--milis_ballsort_ball_green_main: #247516;\n\t--milis_ballsort_ball_green_light: #70FF00;\n\t--milis_ballsort_ball_yellow_main: #8F7E22;\n\t--milis_ballsort_ball_yellow_light: #FFE600;\n\t--milis_ballsort_ball_cyan_main: #29777C;\n\t--milis_ballsort_ball_cyan_light: #00FFF0;\n\t--milis_ballsort_ball_blue_main: #466799;\n\t--milis_ballsort_ball_blue_light: #00B2FF;\n}\n\n[milis_ballsort_body] {\n\tgap: var(--mol_gap_block);\n\talign-items: center;\n}\n\n[milis_ballsort_game] {\n\tgap: var(--mol_gap_block);\n}\n\n[milis_ballsort_info] {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: var(--mol_gap_block);\n}\n\n[milis_ballsort_table] {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: var(--mol_gap_block);\n}\n\n[milis_ballsort_column] {\n    display: flex;\n    flex-direction: column;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    flex-shrink: 0;\n    -webkit-box-align: center;\n    align-items: center;\n    border-right: 2px solid lightgray;\n    border-bottom: 2px solid lightgray;\n    border-left: 2px solid lightgray;\n    border-image: initial;\n    border-top: none;\n    width: 3rem;\n    height: 10rem;\n    padding-bottom: 0.4rem;\n    padding-top: 0.4rem;\n    border-bottom-left-radius: 2.4rem;\n    border-bottom-right-radius: 2.4rem;\n}\n\n[active=\"true\"]>[milis_ballsort_ball]:first-child {\n\tmargin-bottom: 20px;\n}\n\n[milis_ballsort_ball] {\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    border: 2px solid black;\n    margin: 1px;\n    flex-shrink: 0;\n    background: radial-gradient( circle at 65% 15%, white 1px, var(--milis_ballsort_ball_light) 3%, var(--milis_ballsort_ball_main) 60%, var(--milis_ballsort_ball_light) 100% );\n    position: relative;\n}\n\n[color='green'] {\n    background: radial-gradient( circle at 65% 15%, white 1px, var(--milis_ballsort_ball_green_light) 3%, var(--milis_ballsort_ball_green_main) 60%, var(--milis_ballsort_ball_green_light) 100% );\n}\n\n[color='yellow'] {\n    background: radial-gradient( circle at 65% 15%, white 1px, var(--milis_ballsort_ball_yellow_light) 3%, var(--milis_ballsort_ball_yellow_main) 60%, var(--milis_ballsort_ball_yellow_light) 100% );\n}\n\n[color='cyan'] {\n    background: radial-gradient( circle at 65% 15%, white 1px, var(--milis_ballsort_ball_cyan_light) 3%, var(--milis_ballsort_ball_cyan_main) 60%, var(--milis_ballsort_ball_cyan_light) 100% );\n}\n[color='blue'] {\n    background: radial-gradient( circle at 65% 15%, white 1px, var(--milis_ballsort_ball_blue_light) 3%, var(--milis_ballsort_ball_blue_main) 60%, var(--milis_ballsort_ball_blue_light) 100% );\n}\n"
) }