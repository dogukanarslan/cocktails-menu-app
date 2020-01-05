import React from "react";
import ContentLoader from "react-content-loader";


const MyLoader = () => (
  <ContentLoader
    height={400}
    width={1100}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="48" rx="5" ry="5" width="350" height="350" />
    <rect x="380" y="48" rx="0" ry="0" width="100" height="15" />
    <rect x="380" y="87" rx="0" ry="0" width="140" height="15" />
    <rect x="380" y="126" rx="0" ry="0" width="120" height="15" />
    <rect x="380" y="165" rx="0" ry="0" width="140" height="15" />
    <rect x="380" y="204" rx="0" ry="0" width="280" height="15" />
  </ContentLoader>
)



export default function Loading(){
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <MyLoader/>
        </div>
      </div>
    </div>
  )
}
