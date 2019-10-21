import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
} from '@lemoncode/fonk';

import { DEFAULT_ENCODING } from 'crypto';

// TODO: Add validator type
const VALIDATOR_TYPE = 'PREVIOUS_DATE';

export interface CustomArgs {
  date: Date;
}

const DEFAULT_PARAMS: CustomArgs = {
  date: new Date(),
};

const BAD_PARAMETER = 'Value must be a valid Date object';

// TODO: Add default message
let defaultMessage = "Date isn't previous to the one provided";
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

export const validator: FieldValidationFunctionSync = fieldValidatorArgs => {
  const {
    value,
    message = defaultMessage,
    customArgs = DEFAULT_PARAMS as CustomArgs,
  } = fieldValidatorArgs;
  const { date } = <CustomArgs>customArgs;

  if (!(value instanceof Date)) {
    throw new TypeError(BAD_PARAMETER);
  }
  console.log({ value });
  console.log({ date });
  // TODO: Add validator
  const succeeded = !isDefined(value) || value < date;

  return {
    succeeded,
    message: succeeded
      ? ''
      : parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
