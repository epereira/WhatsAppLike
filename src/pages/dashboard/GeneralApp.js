import React, {Suspense, lazy } from "react";

const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
