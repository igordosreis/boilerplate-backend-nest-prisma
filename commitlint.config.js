const matchAnyType =
  /(?<!:)(?::package: build|:truck: chore|:bricks: ci|:books: docs|:sparkles: feat|:boom: fix|:zap: perf|:recycle: refactor|:boom: revert|:ok_hand: style|:test_tube: test|build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)\b(?!_)/;
const matchOptionalTicketNumberWithSpaceAfter = /(?:\((T-\d+)\)\s)?/;
const subjectThatDontStartWithParenthesis = /([^\()].+)/;

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        "^" +
          matchAnyType.source +
          matchOptionalTicketNumberWithSpaceAfter.source +
          subjectThatDontStartWithParenthesis.source +
          "$"
      ),
      headerCorrespondence: ["type", "ticket", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "allowed-types-rule": (parsed, _when, allowedTypes) => {
          const { type, ticket, subject } = parsed;
          if (type === null && ticket === null && subject === null) {
            return [
              false,
              `The header must be in one of the following formats: 
                    'build: add new dependency'
                    'build (ticket): add new dependency'
                    ':package: build: add new dependency'
                    ':package: build (ticket): add new dependency'

Allowed types listed below:

${(allowedTypes)
                        .map((type) => `${type}`)
                        .join("\n")}`,
            ];
          }
          return [true, ""];
        },
      },
    },
  ],
  rules: {
    "allowed-types-rule": [
      2,
      "always", 
      [
        'build',
        ':package: build',
        'chore',
        ':truck: chore',
        'ci',
        ':bricks: ci',
        'docs',
        ':books: docs',
        'feat',
        ':sparkles: feat',
        'fix',
        ':boom: fix',
        'perf',
        ':zap: perf',
        'refactor',
        ':recycle: refactor',
        'revert',
        ':boom: revert',
        'style',
        ':ok_hand: style',
        'test',
        ':test_tube: test',
      ],
    ],
  },
};
