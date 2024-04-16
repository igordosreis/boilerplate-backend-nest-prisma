// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [
// 			2,
// 			'always',
// 			[
// 				'build',
//         ':package: build',
// 				'chore',
//         ':truck: chore',
// 				'ci',
//         ':bricks: ci',
// 				'docs',
// 				':books: docs',
// 				'feat',
//         ':sparkles: feat',
// 				'fix',
//         ':boom: fix',
// 				'perf',
// 				':zap: perf',
// 				'refactor',
// 				':recycle: refactor',
// 				'revert',
// 				':boom: revert',
// 				'style',
// 				':ok_hand: style',
// 				'test',
//         ':test_tube: test',
// 			],
// 		],
//   },
// };

// commitlint.config.js
// emojis like "✅ ", "😂 ", ...
const matchAnyEmojiWithSpaceAfter =
  /(?<!:)(?::package: build|:truck: chore|:bricks: ci|:books: docs|:sparkles: feat|:boom: fix|:zap: perf|:recycle: refactor|:boom: revert|:ok_hand: style|:test_tube: test|build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)\b(?!_)/;
const matchOptionalTicketNumberWithSpaceAfter = /(?:\((T-\d+)\)\s)?/; // "[T-4605] ", "[T-1]"
const subjectThatDontStartWithBracket = /([^\()].+)/; // "Add tests" but don't allow "[ Add tests"

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        "^" +
          matchAnyEmojiWithSpaceAfter.source +
          matchOptionalTicketNumberWithSpaceAfter.source +
          subjectThatDontStartWithBracket.source +
          "$"
      ),
      headerCorrespondence: ["type", "ticket", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { type, ticket, subject } = parsed;
          if (type === null && ticket === null && subject === null) {
            const allowedTypes = [
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
            ]

            return [
              false,
              `header must be in format 'build: add new dependency' or ':package: build: add new dependency'

              ---------------

allowed types:
${(allowedTypes)
                        .map((type) => `${type}`)
                        .join("\n")}`,
            ];
          }
          return [true, ""];
        },
        // "explained-emoji-enum": (parsed, _when, allowedTypes) => {
        //   const { type } = parsed;
        //   if (type && (allowedTypes).includes(type)) {
        //     return [
        //       false,
        //       `emoji must be one of:
        //       ${(allowedTypes)
        //         .map((type) => `${type}`)
        //         .join("\n")}`,
        //     ];
        //   }
        //   return [true, ""];
        // },
      },
    },
  ],
  rules: {
    "header-match-team-pattern": [2, "always"],
    // "explained-emoji-enum": [
    //   2,
    //   "always",
			// [
			// 	'build',
      //   ':package: build',
			// 	'chore',
      //   ':truck: chore',
			// 	'ci',
      //   ':bricks: ci',
			// 	'docs',
			// 	':books: docs',
			// 	'feat',
      //   ':sparkles: feat',
			// 	'fix',
      //   ':boom: fix',
			// 	'perf',
			// 	':zap: perf',
			// 	'refactor',
			// 	':recycle: refactor',
			// 	'revert',
			// 	':boom: revert',
			// 	'style',
			// 	':ok_hand: style',
			// 	'test',
      //   ':test_tube: test',
			// ],
    // ],
  },
};
