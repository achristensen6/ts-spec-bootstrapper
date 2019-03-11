export type ASTNode = any;

export interface FunctionToTest {
  isPrivate: boolean;
  isTested: boolean;
  name: string;
  branches: Array<TestBranch>;
}

export interface TestBranch {
  condition: string;
  branches: Array<TestBranch>;
}

export interface Statistics {
  filesRead: number;
  arrowFunctions: number;
  functions: number;
  methods: number;

  thenBranches: number;
  elseBranches: number;
  elseIfBranches: number;
  implicitElseBranches: number;

  filesWritten: number;
  testsWritten: number;

  skipsBecausePrivate: number;
  skipsBecauseProtected: number;
  skipsBecauseTested: number;

  started: number;
}

export interface ScriptConfiguration {
  testPrivate: boolean;
  testProtected: boolean;
  verboseMode: boolean;
  itContent: string;
  rootPath: string;
}
