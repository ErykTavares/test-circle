module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"eslint:recommended",
		"prettier",
		"universe/native",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: path.join(__dirname, "tsconfig.eslint.json"),
		ecmaVersion: "latest",
		sourceType: "module",
		parser: "@typescript-eslint/parser",
		extraFileExtensions: ".react",
	},
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
			rules: {
				"no-undef": "off",
			},
		},
	],
	plugins: [
		"react",
		"react-hooks",
		"@typescript-eslint",
		"jsx-a11y",
		"prettier",
	],
	rules: {
		quotes: "off",
		"linebreak-style": "off",
		"react/prop-types": "off",
		"import/prefer-default-export": "off",
		"arrow-body-style": "off",
		"react/jsx-no-bind": "off",
		"react/no-array-index-key": "off",
		"no-console": "off",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
	},
};
