const DataHelper = {};
/* global DataGenerator */
DataHelper.generateData = function() {
  return DataGenerator.insertSavedRequestData({
    projectsSize: 1,
    requestsSize: 20
  })
  .then((data) => {
    const projectId = data.projects[0]._id;
    const requests = [];
    data.requests.forEach((item) => {
      if (item.projects && item.projects.indexOf(projectId) !== -1) {
        requests.push(item);
      }
    });
    return {
      projectId,
      requests
    };
  });
};

DataHelper.loaded = [false, false];
DataHelper.doneWhenLoaded = function(element) {
  DataHelper.loaded = [false, false];
  return new Promise((resolve) => {
    function checkDone() {
      if (DataHelper.loaded[0] && DataHelper.loaded[1]) {
        resolve();
      }
    }
    element.addEventListener('loading-project-changed', function c1(e) {
      if (e.detail.value === false) {
        element.removeEventListener('loading-project-changed', c1);
        DataHelper.loaded[0] = true;
        checkDone();
      }
    });
    element.addEventListener('loading-requests-changed', function c2(e) {
      if (e.detail.value === false) {
        element.removeEventListener('loading-requests-changed', c2);
        DataHelper.loaded[1] = true;
        checkDone();
      }
    });
  });
};