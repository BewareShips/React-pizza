import ContentLoader from "react-content-loader"

import React from 'react'

function LoadingPizzaBlock() {
  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="135" cy="122" r="120" /> 
    <rect x="0" y="261" rx="6" ry="6" width="280" height="23" /> 
    <rect x="0" y="300" rx="6" ry="6" width="280" height="96" /> 
    <rect x="2" y="428" rx="0" ry="0" width="89" height="30" /> 
    <rect x="103" y="420" rx="20" ry="20" width="172" height="48" />
  </ContentLoader>
  )
}

export default LoadingPizzaBlock
