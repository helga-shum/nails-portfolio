import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={315}
    height={695}
    viewBox="0 0 315 695"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="25" y="25" rx="30" ry="30" width="265" height="379" />
    <rect x="25" y="460" rx="10" ry="10" width="62" height="24" />
    <rect x="25" y="548" rx="24" ry="24" width="265" height="113" />
  </ContentLoader>
);

export default Skeleton;
