import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://*.youtube.com/*"],
  world: "MAIN"
}

function blockShorts() {
  const richShortsNode = document.querySelector("ytd-rich-shelf-renderer") // shorts on yt home page
  const reelShortsNode = document.querySelector("ytd-reel-shelf-renderer") // shorts related to search term

  if (richShortsNode) {
    richShortsNode.remove()
    console.log("Blocked rich shorts successfully")
  }

  if (reelShortsNode) {
    reelShortsNode.remove()
    console.log("Blocked reel shorts successfully")
  }
}

const Observer = new MutationObserver((mutationList, _observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      const addedNodes = mutation.addedNodes
      addedNodes.forEach((node: Node) => {
        if (node instanceof HTMLElement) {
          if (
            node.tagName?.toLowerCase() === "ytd-rich-shelf-renderer" ||
            node.tagName?.toLowerCase() === "ytd-reel-shelf-renderer"
          ) {
            blockShorts()
          }
        }
      })
    }
  }
})

Observer.observe(document.body, {
  childList: true,
  subtree: true
})
