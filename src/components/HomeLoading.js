import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    height={600}
    width={1110}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="46" rx="5" ry="5" width="253" height="253" />
    <rect x="283" y="46" rx="5" ry="5" width="253" height="253" />
    <rect x="566" y="46" rx="5" ry="5" width="253" height="253" />
    <rect x="849" y="46" rx="5" ry="5" width="253" height="253" />
    <rect x="0" y="347" rx="5" ry="5" width="253" height="253" />
    <rect x="283" y="347" rx="5" ry="5" width="253" height="253" />
    <rect x="566" y="347" rx="5" ry="5" width="253" height="253" />
    <rect x="849" y="347" rx="5" ry="5" width="253" height="253" />

  </ContentLoader>
)



export default function HomeLoading(){
  return(

      <div className="row">
        <div className="col">
          <MyLoader/>
        </div>
      </div>

  )
}
