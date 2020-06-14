import * as TranslationActions from './translation.actions';
import { Translation } from '../models/translation.model';

export interface State {
  translation: Translation;
}

const initalState: State = {
  translation: null,
};

export function translationReducer(
  state: State = initalState,
  action: TranslationActions.TranslationActions
) {
  switch (action.type) {
    case TranslationActions.TRANSLATION:
      const translation = new Translation();
      return {
        ...state,
        translation,
      };
    case TranslationActions.ORIGINAL:
      return {
        ...state,
        translation: null,
      };
    default:
      return state;
  }
}
