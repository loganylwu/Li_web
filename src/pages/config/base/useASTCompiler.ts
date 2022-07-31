import * as escodegen from 'escodegen';

const cssLoaders = {
  type: 'ObjectExpression',
  start: 135,
  end: 393,
  properties: [
    {
      type: 'Property',
      start: 201,
      end: 224,
      method: false,
      shorthand: false,
      computed: false,
      key: {
        type: 'Identifier',
        start: 201,
        end: 205,
        name: 'test',
      },
      value: {
        type: 'Literal',
        start: 207,
        end: 224,
        value: {},
        raw: '/\\.(s[ac]|c)ss$/i',
        regex: {
          pattern: '\\.(s[ac]|c)ss$',
          flags: 'i',
        },
      },
      kind: 'init',
    },
    {
      type: 'Property',
      start: 267,
      end: 366,
      method: false,
      shorthand: false,
      computed: false,
      key: {
        type: 'Identifier',
        start: 267,
        end: 270,
        name: 'use',
      },
      value: {
        type: 'ArrayExpression',
        start: 272,
        end: 366,
        elements: [
          {
            type: 'MemberExpression',
            start: 291,
            end: 318,
            object: {
              type: 'Identifier',
              start: 291,
              end: 311,
              name: 'MiniCssExtractPlugin',
            },
            property: {
              type: 'Identifier',
              start: 312,
              end: 318,
              name: 'loader',
            },
            computed: false,
            optional: false,
          },
          {
            type: 'Literal',
            start: 320,
            end: 332,
            value: 'css-loader',
            raw: "'css-loader'",
          },
          {
            type: 'Literal',
            start: 334,
            end: 350,
            value: 'postcss-loader',
            raw: "'postcss-loader'",
          },
          {
            type: 'Literal',
            start: 352,
            end: 365,
            value: 'sass-loader',
            raw: "'sass-loader'",
          },
        ],
      },
      kind: 'init',
    },
  ],
};
const fileLoaders = {
  type: 'ObjectExpression',
  start: 427,
  end: 681,
  properties: [
    {
      type: 'Property',
      start: 445,
      end: 474,
      method: false,
      shorthand: false,
      computed: false,
      key: {
        type: 'Identifier',
        start: 445,
        end: 449,
        name: 'test',
      },
      value: {
        type: 'Literal',
        start: 451,
        end: 474,
        value: {},
        raw: '/\\.(jpeg|jpg|png|gif)/i',
        regex: {
          pattern: '\\.(jpeg|jpg|png|gif)',
          flags: 'i',
        },
      },
      kind: 'init',
    },
    {
      type: 'Property',
      start: 492,
      end: 667,
      method: false,
      shorthand: false,
      computed: false,
      key: {
        type: 'Identifier',
        start: 492,
        end: 495,
        name: 'use',
      },
      value: {
        type: 'ArrayExpression',
        start: 497,
        end: 667,
        elements: [
          {
            type: 'ObjectExpression',
            start: 498,
            end: 666,
            properties: [
              {
                type: 'Property',
                start: 520,
                end: 541,
                method: false,
                shorthand: false,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 520,
                  end: 526,
                  name: 'loader',
                },
                value: {
                  type: 'Literal',
                  start: 528,
                  end: 541,
                  value: 'file-loader',
                  raw: "'file-loader'",
                },
                kind: 'init',
              },
              {
                type: 'Property',
                start: 563,
                end: 648,
                method: false,
                shorthand: false,
                computed: false,
                key: {
                  type: 'Identifier',
                  start: 563,
                  end: 570,
                  name: 'options',
                },
                value: {
                  type: 'ObjectExpression',
                  start: 572,
                  end: 648,
                  properties: [
                    {
                      type: 'Property',
                      start: 598,
                      end: 626,
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: 'Identifier',
                        start: 598,
                        end: 602,
                        name: 'name',
                      },
                      value: {
                        type: 'Literal',
                        start: 604,
                        end: 626,
                        value: '[name][hash:8].[ext]',
                        raw: "'[name][hash:8].[ext]'",
                      },
                      kind: 'init',
                    },
                  ],
                },
                kind: 'init',
              },
            ],
          },
        ],
      },
      kind: 'init',
    },
  ],
};
const ast = {
  type: 'Program',
  start: 0,
  end: 700,
  body: [
    {
      type: 'ExpressionStatement',
      start: 0,
      end: 700,
      expression: {
        type: 'AssignmentExpression',
        start: 0,
        end: 700,
        operator: '=',
        left: {
          type: 'MemberExpression',
          start: 0,
          end: 14,
          object: {
            type: 'Identifier',
            start: 0,
            end: 6,
            name: 'module',
          },
          property: {
            type: 'Identifier',
            start: 7,
            end: 14,
            name: 'exports',
          },
          computed: false,
          optional: false,
        },
        right: {
          type: 'ObjectExpression',
          start: 17,
          end: 700,
          properties: [
            {
              type: 'Property',
              start: 23,
              end: 46,
              method: false,
              shorthand: false,
              computed: false,
              key: {
                type: 'Identifier',
                start: 23,
                end: 28,
                name: 'entry',
              },
              value: {
                type: 'Literal',
                start: 30,
                end: 46,
                value: './src/index.js',
                raw: '"./src/index.js"',
              },
              kind: 'init',
            },
            {
              type: 'Property',
              start: 54,
              end: 697,
              method: false,
              shorthand: false,
              computed: false,
              key: {
                type: 'Identifier',
                start: 54,
                end: 60,
                name: 'module',
              },
              value: {
                type: 'ObjectExpression',
                start: 62,
                end: 697,
                properties: [
                  {
                    type: 'Property',
                    start: 93,
                    end: 691,
                    method: false,
                    shorthand: false,
                    computed: false,
                    key: {
                      type: 'Identifier',
                      start: 93,
                      end: 98,
                      name: 'rules',
                    },
                    value: {
                      type: 'ArrayExpression',
                      start: 100,
                      end: 691,
                      elements: [
                        cssLoaders,
                        // fileLoaders
                      ],
                    },
                    kind: 'init',
                  },
                ],
              },
              kind: 'init',
            },
          ],
        },
      },
    },
  ],
  sourceType: 'module',
};
export default () => {
  const out = escodegen.generate(ast);
  return {
    out,
  };
};
