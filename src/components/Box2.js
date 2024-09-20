import React from 'react'

export default function Box2() {
  return (
    <div className="rectangle-1870">
    <div className="rectangle-1875">
      <p id="subhead1">Threadbuild</p>
      <img id="disclogo" src="images/Group 1735.png" alt="" />
    </div>
    <div className="rectangle-2319">
      <div className="discription">
        <span id="boldtext">Description:</span>
        <span id="disctex">
          Watch the video and threadbuild, and jot out key threads while
          watching the video
        </span>
      </div>
      <div className="dropdown">
        <img src="images/Vector.png" alt="" />
        <p>Thread A</p>
      </div>
      <div className="box1">
        <div id="innerBox">
          <p>Sub thread 1</p>
        </div>
        <input
          id="inputBox"
          type="text"
          placeholder="Enter Text Here"
        />
      </div>
      <div className="box2">
        <div id="innerBox">
          <p>Sub Interpretation 1</p>
        </div>
        <input
          id="inputBox"
          type="text"
          placeholder="Enter Text Here"
        />
      </div>
      <div className="icons">
        <img id="iconslogo" src="images/Group 1588.png" alt="" />
        <div id="dropdown1">
          <p>Select Categ</p>
          <img src="images/Vector (1).png" alt="" />
        </div>
        <div id="dropdown2">
          <p>Select Proces</p>
          <img src="images/Vector (1).png" alt="" />
        </div>
        <div className="box3">
          <p>Sub-thread</p>
        </div>
        <div className="bottomRectangle">
          <div className="box4">
            <p>Summary for Thread A</p>
          </div>
          <input
            type="text"
            name=""
            id="inputBox1"
            placeholder="Enter Text Here"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
