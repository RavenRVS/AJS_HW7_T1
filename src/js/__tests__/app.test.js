import Validator from '../app';

test.each([
  ['is valid', 'John_13-doe', true],
  ['contains invalid character @', 'john@doe', false],
  ['contains invalid character .', 'john.doe', false],
  ['contains invalid character space', ' ', false],
  ['contains consecutive more then 3 digits', 'john1234doe', false],
  ['starts with a number', '1johndoe', false],
  ['starts with an underscore', '_johndoe', false],
  ['starts with a hyphen', '-johndoe', false],
  ['ends with a number', '1johndoe', false],
  ['ends with an underscore', 'johndoe_', false],
  ['ends with a hyphen', 'johndoe-', false],
])(
  ('should be done if the username %s'),
  (option, username, expected) => {
    expect(Validator.validateUsername(username)).toBe(expected);
  },
);
