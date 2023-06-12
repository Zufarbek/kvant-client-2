import React from 'react'

export default function AboutBackgroun() {
  return (
    <div className='ps-post--detail ps-post--parallax'>
      <div
            className="ps-post__header bg--parallax"
            style={{ backgroundImage: `url(/static/img/kvant/services/6.jpg)` }}>
            <div style={{
              background: "#00000045",
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              bottom: 0
            }}></div>
            <div className="container">
            <div className="ps-section__header ">
                <p>KVANT</p>
                <h1>
                    Наша миссия
                </h1>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            {/* <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-1.png" alt="martfury" />
                            </div> */}
                            <div className="ps-block__content">
                                <div className="ps-block__desc " data-mh="about-desc">
                                    <p style={{ fontSize: 20}}>
                                        расширять бизнес, способствуя формированию и развитию цивилизованного рынка в Центральной Азии
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            {/* <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-2.png" alt="martfury" />
                            </div> */}
                            <div className="ps-block__content">
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p style={{ fontSize: 20}}>
                                        формировать сплоченную команду высоко квалифицированных специалистов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--icon-box-2">
                            {/* <div className="ps-block__thumbnail">
                                <img src="/static/img/icons/vendor-3.png" alt="martfury" />
                            </div> */}
                            <div className="ps-block__content">
                                <div className="ps-block__desc" data-mh="about-desc">
                                    <p style={{ fontSize: 20}}>
                                        обеспечить удовлетворенность каждого клиента, точнее жить народу служить
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
