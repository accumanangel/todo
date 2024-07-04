import React, { Suspense, lazy } from "react";
const TodoComponent = lazy(() => import("./TodoComponent"));
import Loading from "./loading";

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TodoComponent />
      </Suspense>
    </div>
  );
};

export default App;
