import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import OverviewPart from "./OverviewPart";
import CurriculumPart from "./CurriculumPart";
import { useRootContext } from "../../../components/Context/context";

const CourseDetailsTab = () => {
  let tab1 = "Обзор",
    tab2 = "Курс";
  const tabStyle = "intro-tabs tabs-box";

  const context = useRootContext();

  return (
    <div className="intro-info-tabs">
      <Tabs>
        <TabList className={tabStyle}>
          <Tab>
            <button>{tab1}</button>
          </Tab>
          <Tab>
            {context.access ? (
              <button>{tab2}</button>
            ) : (
              <button disabled>{tab2}</button>
            )}
          </Tab>
        </TabList>

        <TabPanel>
          <OverviewPart />
        </TabPanel>

        <TabPanel>
          <CurriculumPart />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CourseDetailsTab;
