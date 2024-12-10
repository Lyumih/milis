namespace $.$$ {
	
	$mol_style_define( $milis_skills_skill_card, {
		maxWidth: $mol_style_unit.px(400),
		fontFamily: 'cursive',
		background: {
			image: [[$mol_style_func.url('https://masterpiecer-images.s3.yandex.net/fbfe209a75c211eeaead5696910b1137:upscaled')]],
			size: ['cover']
		},
		border: {
			width: $mol_gap.blur,
			color: 'lightcyan',
			style: 'ridge',
			radius: $mol_style_unit.px(24),
		},
		Content: {
			flex: {
				direction: 'column'
			}
		},
		Skill_global_level: {
			position: 'absolute',
			right: $mol_style_unit.px(12),
			background: {
				color: 'black'
			},
			border: {
				radius: '60px'
			}
		},
		Skill_title: {
			background: {
				color: $mol_style_func.rgba(0,0,0,0.6),
			},
			border: {
				radius: $mol_gap.block,
			}
		},
		Skill_type: {
			font: {
				size: 'small',
			},
			textAlign: 'center',
			padding: 0,
		},
		Skill_name: {
			font: {
				size: 'x-large',
				weight: 'bold'
			},
			textAlign: 'center',
			padding: {
				top: 0,
			}
		},
		Skill_info: {
			background: {
				color: $mol_style_func.rgba(0,0,0,0.8),
			},
			margin: {
				top: $mol_style_unit.px(150),
			},
			border: {
				width: $mol_gap.space,
				color: 'lightcyan',
				radius: $mol_gap.block,
			}
		},
		Skill_meta: {
			background: {
				color: $mol_style_func.rgba(0,0,0,0.5),
			},
			margin: {
				top: $mol_style_unit.px(16),
			},
			border: {
				width: $mol_gap.space,
				color: 'lightcyan',
				radius: $mol_gap.block,
			}
		},
		Skill_description: {
			height:$mol_style_unit.px(100)
		},
		// Skill_mod: {
		// 	'@': {
		// 		mod_disabled_by_level: {
		// 			true: {
		// 				opacity: 0.5,
		// 			}
		// 		}
				
		// 	},
		// 	height: $mol_style_unit.px(100)
		// }
	} )
	
}
