import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import data from '@data/game.json';
import shuffleArray from '@helpers/shuffleArray';

export interface Question {
  question: string;
  incorrectAnswers: string[];
  correctAnswers: string[];
}

export type GameStatus = 'NOT_STARTED' | 'PLAYING' | 'FINISHED';
export interface GameState {
  levels: number[];
  currentQuestionIndex: number;
  questions: Question[];
  status: GameStatus;
  result: number;
  pickedAnswer?: string | null;
  hints: {
    fiftyFifty: {
      variants: string[];
      isDisabled: boolean;
    };
    friendCall: {
      variant?: string;
      isDisabled: boolean;
    };
  };
}

const dataLevels = data.levels as unknown as number[];
const dataQuestions = data.questions.slice(0, dataLevels.length) as unknown as Question[];

export const initialState: GameState = {
  levels: dataLevels,
  currentQuestionIndex: 0,
  questions: dataQuestions,
  status: 'NOT_STARTED',
  result: 0,
  pickedAnswer: undefined,
  hints: {
    fiftyFifty: {
      variants: [],
      isDisabled: false,
    },
    friendCall: {
      variant: undefined,
      isDisabled: false,
    },
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    answerQuestion: (state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrectAnswer = state.pickedAnswer && currentQuestion.correctAnswers.includes(state.pickedAnswer);

      state.result = isCorrectAnswer
        ? state.levels[state.currentQuestionIndex]
        : state.levels[state.currentQuestionIndex - 1] || 0;

      if (state.currentQuestionIndex === state.questions.length - 1 || !isCorrectAnswer) {
        state.status = 'FINISHED';
        return;
      }
      state.currentQuestionIndex += 1;
      state.hints.fiftyFifty.variants = [];
      state.hints.friendCall.variant = undefined;
    },
    setPickedAnswer: (state, action: PayloadAction<string | undefined | null>) => {
      state.pickedAnswer = action.payload;
    },
    applyFiftyFiftyHint: (state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const correctAnswers = shuffleArray(currentQuestion.correctAnswers);
      const incorrectAnswers = shuffleArray(currentQuestion.incorrectAnswers);
      const isIncorrectLessThenIncorrect = correctAnswers.length >= incorrectAnswers.length;

      const correctHalf = Math[isIncorrectLessThenIncorrect ? 'ceil' : 'floor'](correctAnswers.length / 2);
      const incorrectHalf = Math[!isIncorrectLessThenIncorrect ? 'ceil' : 'floor'](incorrectAnswers.length / 2);
      const correctVariants = shuffleArray(correctAnswers).slice(0, correctHalf);
      const incorrectVariants = shuffleArray(incorrectAnswers).slice(0, incorrectHalf);

      state.hints.fiftyFifty.variants = [...correctVariants, ...incorrectVariants];
      state.hints.fiftyFifty.isDisabled = true;
    },
    applyFriendCallHint: (state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const answers = [...currentQuestion.correctAnswers, ...currentQuestion.incorrectAnswers].filter(
        (answer) => !state.hints.fiftyFifty.variants.includes(answer),
      );

      state.hints.friendCall.variant = answers[Math.floor(Math.random() * answers.length)];
      state.hints.friendCall.isDisabled = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    startGame: (state) => ({ ...initialState, status: 'PLAYING' }),
  },
});

export const { answerQuestion, setPickedAnswer, startGame, applyFiftyFiftyHint, applyFriendCallHint } =
  gameSlice.actions;

export default gameSlice.reducer;
