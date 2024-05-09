export default function Validation(input) {
  input = input.current;

  if (input.validity.valid) {
    return '';
  } else {
    if (input.validity.valueMissing) {
      return 'Input cannot be empty';
    } else if (input.validity.typeMismatch) {
      return 'Please provide a valid email address';
    }
  }
}
