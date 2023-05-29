import context from "./context";
import { useState } from "react";

function ContextProvider({ children }) {

  const [courseId, setCourseId] = useState(1);
  const [access, setAccess] = useState(false);
  const [onCourse, setOnCourse] = useState(false);

  const value = {
    courseId,
    setCourseId,
    access,
    setAccess,
    onCourse,
    setOnCourse
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider;
