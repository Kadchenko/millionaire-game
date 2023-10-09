import { RootState } from '@store';
import { createSelector } from '@reduxjs/toolkit';

import { AnswerButtonState } from '@screens/Game/Answers/AnswerButton';
import shuffleArray from '@helpers/shuffleArray';

const gameSelector = (state: RootState) => state.game;
const resultSelector = (state: RootState) => state.game.result;
const currentQuestionSelector = (state: RootState) => state.game.questions[state.game.currentQuestionIndex];
const pickedAnswerSelector = (state: RootState) => state.game.pickedAnswer;
const friendCallHintVariantSelector = (state: RootState) => state.game.hints.friendCall.variant;
const fiftyFiftyHintVariantsSelector = (state: RootState) => state.game.hints.fiftyFifty.variants;
const allAnswersShuffledSelector = createSelector([currentQuestionSelector], (currentQuestion) =>
  shuffleArray([...currentQuestion.incorrectAnswers, ...currentQuestion.correctAnswers]),
);
const currentQuestionStatedAnswersSelector = createSelector(
  [
    currentQuestionSelector,
    allAnswersShuffledSelector,
    pickedAnswerSelector,
    friendCallHintVariantSelector,
    fiftyFiftyHintVariantsSelector,
  ],
  (currentQuestion, allAnswersShuffled, pickedAnswer, friendCallHintVariant, fiftyFiftyHintVariants) => {
    return allAnswersShuffled.map((answer) => {
      const isSelectedByFriendCall = friendCallHintVariant === answer;
      const isHidden = fiftyFiftyHintVariants.includes(answer);
      const isDisabled = !!pickedAnswer;
      const answerState: AnswerButtonState | undefined =
        !pickedAnswer || pickedAnswer !== answer
          ? undefined
          : currentQuestion.correctAnswers.includes(pickedAnswer)
          ? 'correct'
          : 'wrong';

      return {
        answer,
        isSelectedByFriendCall,
        isHidden,
        isDisabled,
        answerState,
      };
    });
  },
);

export { gameSelector, resultSelector, currentQuestionSelector, currentQuestionStatedAnswersSelector };
