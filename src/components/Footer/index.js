const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>

                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i class="bi bi-egg-fill text-warning"></i>Kitchen Recipe <br />Management System
                                </h6>
                                <p>

                                    The Kitchen Recipe Management System is a digital platform for organizing, storing, and accessing recipes efficiently. It offers features like recipe categorization, search functionality, editing capabilities and meal planning.
                                </p>
                            </div>
                            {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div> */}
                            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="bi bi-buildings"></i> Tamil Nadu, Theni 00000, IN</p>
                                <p>
                                    <i className="bi bi-envelope-at me-3"></i>
                                    info@manojconcept.com
                                </p>
                                <p><i className="bi bi-telephone me-3"></i> + 91 234 567 88</p>
                                <p><i className=" bi bi-printer me-3"></i> + 91 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="">@manojconcept</a>
                </div>
            </footer>
        </>

    )
}

export default Footer;