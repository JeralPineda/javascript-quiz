import { create } from 'zustand';
import { type Question } from '../types';
// import confetti from 'canvas-confetti';
// import { persist, devtools } from 'zustand/middleware';

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

const API_URL = import.meta.env.PROD
  ? 'https://midu-react-13.surge.sh/'
  : 'http://localhost:5173/';

export const useQuestionsStore = create<State>((set, get) => {
  return {
    loading: false,
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      const res = await fetch(`${API_URL}/data.json`);
      const json = await res.json();

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },
  };
});
