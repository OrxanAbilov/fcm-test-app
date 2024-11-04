// App.js
import React, { useEffect } from 'react';
import { setupNotifications } from './firebase';
import { toastNotification, sendNativeNotification } from './notificationHelpers';
import useVisibilityChange from './useVisibilityChange';

function App() {
  const isForeground = useVisibilityChange();
  const title = 'test';
  const body = 'test body';
  useEffect(() => {
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title,
          description: body,
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title,
          body,
        });
      }
    });
  }, [isForeground]);
  return (
    <div className="App">
      {/* Your app content */}
    </div>
  );
}
export default App;