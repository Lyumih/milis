namespace $.$$ {

	const treeTemplate = `$milis_treesay $mol_view\n\ttitle \\abc\n\tkids /`

	export class $milis_treesay_demo extends $.$milis_treesay_demo {
		@ $mol_mem
		view_tree_input(next?: string){
			console.log(next)
			return next ?? treeTemplate
		}
		
		view_tree_parse() {
			const translated = $milis_treesay.parse(this.view_tree_input());
			return translated
		}
		
		@ $mol_mem
		view_tree_parsed_show() {
			return this.view_tree_parse().join('\n')
		}
		say(event?: any) {
			console.log($mol_speech.say('123'))
			console.log('sa2y', event)
			$mol_speech.say(this.view_tree_parse[0])
		}
		@ $mol_mem
		grammar_text() {
			return $milis_treesay.grammar().map((item, index) => `${index}. ${item.key} -> ${item.value}`).join('\n')
		}
	}
}
