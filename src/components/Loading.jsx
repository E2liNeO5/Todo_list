const Loading = ({ text }) => {
  return (
    <div className="loading">
      <div className="loading-text">{ text }</div>
      <div className="loading-animation-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default Loading