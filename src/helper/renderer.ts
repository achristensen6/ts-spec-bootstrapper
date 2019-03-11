import { SPACER } from '../constants';
import { ScriptConfiguration, Statistics } from '../types/types';

// tslint:disable:no-console

export class Renderer {
  public static renderWelcomeBanner(config: ScriptConfiguration): void {
    this.log(`
  ___________    _____
 /_  __/ ___/   / ___/____  ___  _____
  / /  \\__ \\    \\__ \\/ __ \\/ _ \\/ ___/
 / /  ___/ /   ___/ / /_/ /  __/ /__
/_/  /____/   /____/ .___/\\___/\\___/
                    /_/

Generating missing tests for ${ config.testPrivate ? 'PRIVATE and PUBLIC' : 'PUBLIC' } methods, functions and arrow functions
`);
  }

  public static renderStats(statistics: Statistics): void {
    this.log(`
################################################

READ

${ SPACER }Files: ${ statistics.filesRead }
${ SPACER }Functions: ${ statistics.functions }
${ SPACER }Arrow functions: ${ statistics.arrowFunctions }
${ SPACER }Methods: ${ statistics.methods }


BRANCHES

${ SPACER }Then: ${ statistics.thenBranches }
${ SPACER }Else: ${ statistics.elseBranches }
${ SPACER }Else If: ${ statistics.elseIfBranches }
${ SPACER }Implicit Else: ${ statistics.implicitElseBranches }


FUNCTIONS SKIPPED

${ SPACER }Because already tested: ${ statistics.skipsBecauseTested }
${ SPACER }Because private: ${ statistics.skipsBecausePrivate }
${ SPACER }Because protected: ${ statistics.skipsBecauseProtected }


WRITTEN

${ SPACER }Files: ${ statistics.filesWritten }
${ SPACER }Tests: ${ statistics.testsWritten }


(Finished in ${ Date.now() - statistics.started } ms)

################################################
`);
}

  public static log(text: string): void {
    console.log(text);
  }

  public static warn(text: string): void {
    console.log(`⚠️  ${ text }`);
  }
}
