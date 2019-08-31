var logging = require('@sap/logging');



var CATEGORY = '/CompatibilityLayer';

var appContext = logging.createAppContext({ csnComponent: 'BC-XS-JS' });

//var logContext = appContext.loggingContext({ id: '1' });

var logger = loggingContext.getLogger(CATEGORY);

logger.warn = logger.warning;



module.exports = {

  CATEGORY: CATEGORY,

  appContext: appContext,

  logger: logger,

  tracer: logContext.getTracer(__filename)

};