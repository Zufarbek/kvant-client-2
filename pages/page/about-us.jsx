import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import OurTeam from '~/components/partials/page/about-us/OurTeam';
import AboutAwards from '~/components/partials/page/about-us/AboutAwards';
import AboutMissions from '~/components/partials/page/about-us/AboutMissions';
import AboutBackground from '~/components/partials/page/about-us/AboutBackground';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'О нас',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="About Us">
            <div className="ps-page--single">
                <div style={{
                    position: 'relative',
                    height: 480,
                    overflow: 'hidden'
                }}>
                <video src='/static/videos/Kvant10.mp4' loop autoPlay muted style={{ 
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    objectFit: 'none'
                 }} ></video>  
                </div>
                {/* <img src="/static/img/bg/about-us.jpg" alt="" /> */}
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <OurTeam /> */}
                <AboutAwards />
                {/* <AboutMissions/> */}
                <AboutBackground/>
            </div>
        </PageContainer>
    );
};
export default AboutUsPage;
