const LOG_LEVEL = {
	DBG: 0,
	INFO: 1,
	WARN: 2,
	ERR: 3,
};

export default class Log {
  private static logLevel: number;

  static {
    Log.setLogLevel(process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info');
  }

	static setLogLevel(logLevelStr: string) {
		if (logLevelStr === 'debug') Log.logLevel = LOG_LEVEL.DBG;
		else if (logLevelStr === 'info') Log.logLevel = LOG_LEVEL.INFO;
		else if (logLevelStr === 'warn') Log.logLevel = LOG_LEVEL.WARN;
		else if (logLevelStr === 'error') Log.logLevel = LOG_LEVEL.ERR;
		else Log.logLevel = LOG_LEVEL.INFO;
	}

	static debug(str: string) {
		if (!Log.logLevel || Log.logLevel <= LOG_LEVEL.DBG) {
			console.log(str);
		}
	}

	static info(str: string) {
		if (!Log.logLevel || Log.logLevel <= LOG_LEVEL.INFO) {
			console.log(str);
		}
	}

	static warning(str: string) {
		if (!Log.logLevel || Log.logLevel <= LOG_LEVEL.WARN) {
			console.log(str);
		}
	}

	static error(str: string) {
		if (!Log.logLevel || Log.logLevel <= LOG_LEVEL.ERR) {
			console.log(str);
		}
	}
}
