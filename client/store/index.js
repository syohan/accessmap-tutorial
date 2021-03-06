import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import analytics from 'redux-analytics';
import rakam from 'rakam-js';

import rootReducer from 'reducers';

const middlewares = [];
middlewares.push(thunkMiddleware);

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

//
// Rakam analytics support - using npm package appears to be uncommon, but
// is nice for consistency and bundling
//
// TODO: get user settings to set this on production server. Override is just
// for doing one-off user testing studies (NOT main site).

// Root URL + /analytics
const useAnalytics = process.env.FORCE_ANALYTICS === 'yes' ? true : false;
if (useAnalytics) {
  const analyticsURL = '//' + window.location.host + '/analytics';
  const analyticsWriteKey = process.env.ANALYTICS_KEY;
  rakam.init(analyticsWriteKey, null, {
    apiEndpoint: analyticsURL,
    includeUtm: true,
    trackClicks: true,
    trackForms: true,
    includeReferrer: true
  });

  const analyticsMiddleware = analytics(({ type, payload }, state) => {
    rakam.logEvent(type, { ...state.analytics, ...payload });
  });

  middlewares.push(analyticsMiddleware);

}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
