import { ConfigReader } from '../helper/config-reader';
import { ScriptConfiguration } from '../types/types';

export const CONFIG: ScriptConfiguration = ConfigReader.getScriptConfig();
