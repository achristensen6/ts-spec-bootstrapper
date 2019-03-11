import { PARAMS } from '../constants';
import { ScriptConfiguration } from '../types/types';

const PARAM_ASSIGNMENT_CHARACTER = '=';
const DEFAULT_ROOT_PATH = './';
const DEFAULT_IT_CONTENT = '// ...';

export class ConfigReader {
  public static getScriptConfig(): ScriptConfiguration {
    const config: ScriptConfiguration = {
      testPrivate: false,
      testProtected: false,
      verboseMode: false,
      itContent: DEFAULT_IT_CONTENT,
      rootPath: DEFAULT_ROOT_PATH,
    };

    process.argv
      .forEach((arg) => {
        const [ param, value ] = arg.split(PARAM_ASSIGNMENT_CHARACTER);

        if (param === PARAMS.TEST_PRIVATE) {
          config.testPrivate = true;
        } else if (param === PARAMS.TEST_PROTECTED) {
          config.testProtected = true;
        } else if (param === PARAMS.VERBOSE_MODE) {
          config.verboseMode = true;
        } else if (param === PARAMS.IT_CONTENT) {
          config.itContent = value;
        } else if (param === PARAMS.ROOT_PATH) {
          config.rootPath = value;
        }
      });

    return config;
  }
}
