import FeatureSingle from "../Feature/FeatureSingle";
import { Fade } from "react-reveal";

// Feature Image
import image1 from "../../assets/img/features/icon/3.png";
import image2 from "../../assets/img/features/icon/2.png";
import image3 from "../../assets/img/features/icon/1.png";

const FeatureStyle1 = (props) => {
    return (
        <div className="rs-features main-home">
            <div className="container">
                <div className="row">
                    <Fade left>
                        <div className="col-lg-4 col-md-12 md-mb-30">
                            <FeatureSingle
                                itemClass="features-wrap"
                                itemImg={image1}
                                itemTitle="Гибкость и удобство"
                                itemDesc=""
                            />
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="col-lg-4 col-md-12 md-mb-30">
                            <FeatureSingle
                                itemClass="features-wrap"
                                itemImg={image2}
                                itemTitle="Множество курсов"
                                itemDesc=""
                            />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-4 col-md-12">
                            <FeatureSingle
                                itemClass="features-wrap"
                                itemImg={image3}
                                itemTitle="Онлайн сертификация"
                                itemDesc=""
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default FeatureStyle1;
