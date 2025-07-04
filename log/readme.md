# $milis_log

Decorator for fast log function input and outputs arguments in console. Good for checking mol reactivity

## [Online demo](https://mol.hyoo.ru/#!section=demos/readme/demo=milis_log)

## Usage example

*Add `@$milis_log` decorator on needed function*

in `component.view.ts`
```ts
	@$milis_log
	@$mol_mem
	input_value(next?: string): string {
		return next || ''
	}
```

logging in console
```js
	input_value
>>> ['hello'] 	 ["hello"] 
<<< hello 	 "hello"
```

![image](https://github.com/user-attachments/assets/4022a849-c1ea-4def-88a5-d80a531659b8)


## API

`@$milis_log` - input arguments and output result in console
`@$milis_log_in` - only input arguments in console
`@$milis_log_out` - only result output in console


