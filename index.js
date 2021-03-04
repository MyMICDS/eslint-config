module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'sort-imports-es6-autofix'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-extra-parens': 'warn',
		'@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
		'@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'eqeqeq': 'error',
		'no-duplicate-imports': 'warn',
		'no-else-return': 'warn',
		'no-eval': 'error',
		'no-lonely-if': 'warn',
		'no-restricted-syntax': ['error', 'ForInStatement'], // based on AST nodes
		'no-return-await': 'warn',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['warn', 'never'],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'radix': 'error',
		'sort-imports-es6-autofix/sort-imports-es6': ['warn', {
			ignoreCase: true,
			memberSyntaxSortOrder: ["none", "multiple", "all", "single"]
		}]
	}
};