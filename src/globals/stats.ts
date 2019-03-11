import { Statistics } from '../types/types';

export const STATS: Statistics = {
  filesRead: 0,
  arrowFunctions: 0,
  functions: 0,
  methods: 0,

  thenBranches: 0,
  elseBranches: 0,
  elseIfBranches: 0,
  implicitElseBranches: 0,

  filesWritten: 0,
  testsWritten: 0,

  skipsBecausePrivate: 0,
  skipsBecauseProtected: 0,
  skipsBecauseTested: 0,

  started: Date.now(),
};
