function doGet(request) {
  return HtmlService.createHtmlOutputFromFile("index")
}

function getGoogleTasksData() {
  let taskLists = _getAllTaskLists()
  let tasks = []
  for (const taskList of taskLists) {
    tasks.push.apply(tasks, _getAllTasksInTaskList(taskList["id"]))
  }
  const data = {taskLists, tasks}
  console.log(data)
  return data
}

function _getAllTaskLists() {
  let taskLists = []
  let options = {"maxResults": 100, "nextPageToken": undefined}
  do {
    let response = Tasks.Tasklists.list(options)
    taskLists.push.apply(taskLists, response["items"])
    options["nextPageToken"] = response["nextPageToken"]
  } while (options["nextPageToken"])
  return taskLists
}

function _getAllTasksInTaskList(taskListId) {
  let taskListTitle = Tasks.Tasklists.get(taskListId)["title"]
  let tasks = []
  let options = {
    "maxResults": 100,
    "nextPageToken": undefined,
    "showDeleted": true,
    "showHidden": true
  }
  do {
    let response = Tasks.Tasks.list(taskListId, options)
    let taskItems = response["items"]
    for (let task of taskItems) {
      task["taskListTitle"] = taskListTitle
    }
    tasks.push.apply(tasks, taskItems)
    options["nextPageToken"] = response["nextPageToken"]
  } while (options["nextPageToken"])
  return tasks
}
