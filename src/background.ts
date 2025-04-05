console.log("background script runs")

chrome.tabs.onUpdated.addListener(async (_, __, tabInfo) => {
  const isShortsPage = tabInfo.url.includes("youtube.com/shorts")
  if (!isShortsPage) return
  await chrome.tabs.update(tabInfo.id, {
    url: "https://www.youtube.com"
  })
})
