import { Action } from '@ngrx/store';
import { Translation } from '../models/translation.model';

export const ORIGINAL = 'ORIGINAL';
export const TRANSLATION = 'TRANSLATION';

export class TranslationOutput implements Action {
  readonly type = TRANSLATION;
  constructor(public payload: Translation) {}
}
export class OriginalInput implements Action {
  readonly type = ORIGINAL;
}

export type TranslationActions = TranslationOutput | OriginalInput;
