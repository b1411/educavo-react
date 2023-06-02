import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Custom Components

import Home from "../pages/home";
import About from "../pages/about";
import CourseThree from "../pages/course-3";
import CourseSingle from "../pages/course/course-single";
import Blog from "../pages/blog";
import SinglePostRightSidebar from "../pages/blog/single-post-right-sidebar";
import Contact from "../pages/contact";
import Error from "../pages/404";
import LoadTop from "../components/Common/ScrollTop/LoadTop";

const App = () => {
  return (
    <div className="App">
      <Router>
        <LoadTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/course-3" component={CourseThree} />
          <Route path="/course/course-single/:id" component={CourseSingle} />
          <Route path="/blog" exact component={Blog} />
          <Route
            path="/blog/single-post-right-sidebar"
            component={SinglePostRightSidebar}
          />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
