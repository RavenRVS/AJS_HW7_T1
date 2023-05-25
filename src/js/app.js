export default class Validator {
  static validateUsername(username) {
    const rules = [
      /[^a-zA-Z0-9_-]+/, // содержит недопустимые символы
      /\D*\d{4,}/, // содержит более трех цифр подряд
      /^[0-9_-]|[0-9_-]$/, // содержит цифру, нижнее подчеркивание или тире в начале или в конце строки
    ];
    let isValid = true;
    rules.forEach((rule) => {
      if (rule.test(username)) {
        isValid = false;
      }
    });
    return isValid;
  }
}
