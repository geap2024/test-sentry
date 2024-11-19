// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "your dsn",

  sampleRate: 1,

  enabled: process.env.NEXT_PUBLIC_APP_ENV === 'production',

  beforeSend(event) {
    console.log('error server');
    return event;
  },


  debug: true,
});
