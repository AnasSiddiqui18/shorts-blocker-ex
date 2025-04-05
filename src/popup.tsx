import "~style.css"

function Popup() {
  return (
    <div className="flex items-center justify-center h-32 w-64 font-Poppins font-semibold tracking-wider">
      <div className="flex flex-col gap-1">
        <img src="assets/yt.png" alt="" className="size-8" />
        <h1 className="text-xl">Block Youtube Shorts</h1>
        <p className="font-normal">Block youtube shorts like a cake 🍰</p>
      </div>
    </div>
  )
}

export default Popup
