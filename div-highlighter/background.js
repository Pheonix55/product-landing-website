let enabled = false;

chrome.action.onClicked.addListener((tab) => {
  enabled = !enabled;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleDivBorders,
    args: [enabled]
  });
});

function toggleDivBorders(enabled) {
  const borderStyle = "1px solid red";
  const divs = document.querySelectorAll("*");
  divs.forEach((div) => {
    div.style.outline = enabled ? borderStyle : "none";
  });
}
