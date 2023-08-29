import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Modal } from "react-bootstrap";

import OverviewPart from "./OverviewPart";
import CurriculumPart from "./CurriculumPart";
import { useRootContext } from "../../../components/Context/context";

const CourseDetailsTab = () => {
    let tab1 = "Обзор",
        tab2 = "Курс";
    const tabStyle = "intro-tabs tabs-box";

    const [showModal, setShowModal] = useState(false);
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
                            <div
                                style={{
                                    position: "relative",
                                    cursor: "not-allowed",
                                }}
                            >
                                <button disabled>{tab2}</button>
                            </div>
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
            <Modal
                show={showModal}
                onHide={() => {}}
                size="lg"
                aria-labelledby="courseEnterFormLabel"
                centered
                className="modal"
            >
                <Modal.Body>
                    <i
                        className="fa fa-times close-icon"
                        onClick={() => setShowModal(false)}
                    ></i>
                    <h2>У вас нет доступа к курсу</h2>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CourseDetailsTab;
