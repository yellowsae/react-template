
import { Suspense } from 'react';

// The Project use router LazyLoad 
const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => <Suspense>
  <Component />
</Suspense>

export default LazyLoad
