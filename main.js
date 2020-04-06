
chrome.contextMenus.create(
  {
    "title": `Convert to hp`, 
    "contexts": ["selection"],
    "onclick": function(info, tab) { 
      alert(
        Math.floor(info.selectionText.match(/\d+/)) + 
        'kW = ' + 
        Math.floor(info.selectionText.match(/\d+/)*1.34102)
        +"hp"
      )
    }
  }
);
