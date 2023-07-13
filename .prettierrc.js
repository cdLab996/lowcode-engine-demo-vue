/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  ...require('@cdlab996/prettier-config'),
  semi: true,
  plugins: [],
  // importOrder: ['react', 'vue', '<THIRD_PARTY_MODULES>', '^[.]'],
  // "importOrder": ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[.]"],
  // importOrder: ['<TYPES>', '<TYPES>^[.]', '<THIRD_PARTY_MODULES>', '^[.]'],
};
