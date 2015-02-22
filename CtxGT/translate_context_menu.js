chrome.contextMenus.create({
  "title": 'Translate "%s" with Google Translate', 
  "contexts":["selection"],                                   
  "onclick": function(info, tab) {
    var text = info.selectionText,
        dir = text.match(/\w/) ? '#en/ru' : '#ru/en';
    
    chrome.tabs.create({
      url: 'https://translate.google.com/' + dir + '/' + text
    });
  }
});
