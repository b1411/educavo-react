import React from "react";
import { useRootContext } from "../../../components/Context/context";
import { ErrorBoundary } from "react-error-boundary";

import courseData from "./data/courseData";

const OverviewData = ({ id }) => {
    let courseId = id;
  return (
      courseData[courseId].overview.map((item, i) => {
        return <p key={i}>{item}</p>;
    })
  );
};

const OverviewPart = () => {
  let courseId = useRootContext().courseId;
  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Что-то пошло не так:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Попробовать еще раз</button>
      </div>
    );
  };

  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
    <div className="content white-bg pt-30">
      <div className="course-overview">
        <div className="inner-box">
          <h4>Детали курса</h4>
          <OverviewData id={courseId} />
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default OverviewPart;
