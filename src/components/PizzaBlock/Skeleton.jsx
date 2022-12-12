import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="125" r="125" />
    <rect x="0" y="267" rx="13" ry="13" width="280" height="28" />
    <rect x="0" y="314" rx="26" ry="26" width="280" height="88" />
    <rect x="0" y="413" rx="15" ry="15" width="90" height="45" />
    <rect x="126" y="413" rx="15" ry="15" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
