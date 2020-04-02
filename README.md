# google-tasks-viewer
Small web app to get and display user's Google Tasks and Tasklists

# screenshots

# motivation
The only way to view your tasks outside of Gmail or Google Calendar is at https://tasks.google.com/embed/list/~default?fullWidth=1, but this page may be too simple for heavy Google Tasks users. This app provides a way to view Google Tasks, or copy all Google Tasks data in JSON format.

# use deployed app
1. Go to https://script.google.com/macros/s/AKfycbyKKxbPidgM6WmWu5X8w3n1tm50i_HisVQGdGjL-uKz9kIN0kw/exec
2. Sign in to your Google Account
3. Grant the app permission (Google has not reviewed and verified this app, so you need to click the button at the bottom to proceed past the warning.
4. The app will load and fetch your Google Tasks data as in the screenshots above

# deploy personal copy
1. Create a new Google Apps Script file (standalone or bound)
2. Copy the server.gs and index.html files into your project
3. Click Resources > Advanced Google services and enable the Tasks API
3. Click Publish > Deploy as web app
4. Configure settings (see https://developers.google.com/apps-script/guides/web)
5. Publish
