var context = "selection"
var title = "- Test";
chrome.contextMenus.create(
  {
    "title": title, 
    "contexts":[context],
    "onclick": function () {
      var selection = window.getSelection();
      console.log('---- ', selection);
    }
  }
);
