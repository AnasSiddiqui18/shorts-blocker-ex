import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://*.youtube.com/*"],
  world: "MAIN"
}

function blockShorts() {
  const shortsNode = document.querySelector("ytd-rich-shelf-renderer")
  if (shortsNode) {
    shortsNode.remove()
    console.log("Blocked shorts successfully")
  }
}

const Observer = new MutationObserver((mutationList, _observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") blockShorts()
  }
})

Observer.observe(document.body, {
  childList: true,
  subtree: true
})
