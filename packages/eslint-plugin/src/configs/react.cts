import type { Linter } from 'eslint';
import { JSFileExtensions, mapElementWithPrefix, TSFileExtensions } from './core.cjs';

export const react: Linter.Config = {
  plugins: [
    // https://www.npmjs.com/package/eslint-plugin-react
    'react',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks2
    'react-hooks2',
  ],
  // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    'plugin:@imhele/core',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks2/recommended',
  ],
  env: {
    browser: true,
    commonjs: false,
    node: false,
  },
  rules: {
    /*
     * react
     */
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool'],
        rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md
    'react/button-has-type': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
     * @TODO
     * @TIPS
     * for stateless component: use named function for now
     * const Dialog = ({ children }) => (
     *   <div className="dialog">{children}</div>
     * )
     * ->
     * const Dialog = function Dialog({ children }) {
     *   return (
     *     <div className="dialog">{children}</div>
     *   )
     * }
     * issues:
     * https://github.com/yannickcr/eslint-plugin-react/issues/1297
     * https://github.com/yannickcr/eslint-plugin-react/issues/412
     * feedback:
     * - 把一个render 作为props传入组件还是比较常见的
     * - 嗯ok，这个规则现在的性价比是不太高了…
     */
    'react/display-name': 'off',
    // 'react/display-name': [
    //   'error',
    //   {
    //     ignoreTranspilerName: false,
    //   },
    // ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 'off',

    /*
     * @CUSTOM
     * "react/forbid-component-props": [
     *   "error",
     *   {
     *     "forbid": [
     *       "className",
     *       "style"
     *     ]
     *   }
     * ],
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-dom-props.md
     */
    'react/forbid-dom-props': 'off',

    /*
     * @CUSTOM
     * "react/forbid-dom-props": [
     *   "error",
     *   {
     *     "forbid": []
     *   }
     * ],
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-elements.md
     */
    'react/forbid-elements': 'off',

    /*
     * @CUSTOM
     * "react/forbid-elements": [
     *   "error",
     *   {
     *     "forbid": [
     *       {
     *         "element": "button",
     *         "message": "use <Button> instead"
     *       }
     *     ]
     *   }
     * ],
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /*
     * @CUSTOM
     * "react/forbid-prop-types": [
     *   "error",
     *   {
     *     "forbid": [],
     *     "allowInPropTypes": []
     *   }
     * ],
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-foreign-prop-types.md
     */
    'react/forbid-foreign-prop-types': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-access-state-in-setstate.md
     * @TIPS
     * this.setState({value: this.state.value + 1});
     * ->
     * this.setState(prevState => ({value: prevState.value + 1}));
     */
    'react/no-access-state-in-setstate': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger.md
     * @TIPS
     * explicitly declare `eslint-disable` when truly necessary
     */
    'react/no-danger': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md
     * @TIPS
     * explicitly declare `eslint-disable` when truly necessary
     */
    'react/no-danger-with-children': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-multi-comp.md
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-set-state.md
    'react/no-set-state': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-typos.md
    'react/no-typos': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unsafe.md
    'react/no-unsafe': ['error', { checkAliases: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
        ignore: ['children', 'className'],
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
    // react 17
    'react/react-in-jsx-scope': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-default-props.md
    'react/require-default-props': ['error', { forbidDefaultForRequired: true }],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-optimization.md
     * https://github.com/facebook/react/pull/7195#issuecomment-236361372
     * https://hackernoon.com/react-purecomponent-considered-harmful-8155b5c1d4bc
     */
    'react/require-optimization': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md
    'react/require-render-return': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'class-properties-and-methods',
          'instance-variables',
          'state',
          'getInitialState',
          'getChildContext',
          'getDefaultProps',
          'constructor',
          'lifecycle',
          '/^is.+$/',
          '/^_is.+$/',
          '/^has.+$/',
          '/^_has.+$/',
          '/^should.+$/',
          '/^_should.+$/',
          '/^get.+$/',
          '/^_get.+$/',
          'getters',
          '/^set.+$/',
          '/^_set.+$/',
          'setters',
          '/^on.+$/',
          '/^_on.+$/',
          '/^handle.+$/',
          '/^_handle.+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          'class-properties-and-methods': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'getDerivedStateFromProps',
            'static-methods',
          ],
          lifecycle: [
            'UNSAFE_componentWillMount',
            'componentWillMount',
            'componentDidMount',
            'UNSAFE_componentWillReceiveProps',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'UNSAFE_componentWillUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-prop-types.md
    'react/sort-prop-types': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'error',
      { extensions: [...JSFileExtensions, ...TSFileExtensions].filter(ext => ext.endsWith('sx')) },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-handler-names.md
    // does not support this.#privateMethod
    'react/jsx-handler-names': 'off',
    // 'react/jsx-handler-names': [
    //   'error',
    //   {
    //     eventHandlerPrefix: '',
    //     eventHandlerPropPrefix: 'on',
    //   },
    // ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md
    'react/jsx-key': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        ignoreRefs: true,
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': 'off',

    /*
     * "react/jsx-curly-brace-presence": [
     *   "error",
     *   "never"
     * ],
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md
     * @TODO bug
     */
    'react/jsx-fragments': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md
     * @TODO bug: conflict with prettier
     */
    'react/jsx-sort-props': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
    // react 17
    'react/jsx-uses-react': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'never'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/static-property-placement.md
    'react/static-property-placement': 'error',
    // // https://reactjs.org/docs/hooks-rules.html
    'react-hooks2/rules-of-hooks': 'error',
    // // https://github.com/facebook/react/issues/16006
    'react-hooks2/exhaustive-deps': [
      'error',
      {
        additionalHooks: '^use(ComponentDidUpdate|ImmedEffect)$',
        immediateRefHooks: '^use(.*Ref)$',
        stableRefHooks: '^use(ClickOutside|Constant|.*Ref|.*RefCallback|RefGetter)$',
        stableStateHooks: [
          '^use(.*Model|CountDown|DOMRect|Immer|SearchParam(s|List)?|Storage)$',
          '^use(.+)State$',
          ['^useForceUpdate$', 0],
          ['^useToggle$', [1, 2]],
        ],
      },
    ],
  },
  // https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
  // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-overrides-in-an-extended-config-file-can-now-be-overridden-by-a-parent-config-file
  overrides: [
    {
      files: mapElementWithPrefix(TSFileExtensions, '*'),
      rules: {
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  settings: { react: { version: '17' } },
};
