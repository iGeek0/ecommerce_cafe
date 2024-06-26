const Footer = () => {
    return (
        <footer>
            <div className="container py-5 mt-5">
            <div className="row">
                <div className="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx={12} cy={12} r={10} /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
                    <small className="d-block mb-3 text-muted">© 2017–2022</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="https://www.google.com/">Cool stuff</a></li>
                        <li><a className="link" href="https://www.google.com/">Random feature</a></li>
                        <li><a className="link" href="https://www.google.com/">Team feature</a></li>
                        <li><a className="link" href="https://www.google.com/">Stuff for developers</a></li>
                        <li><a className="link" href="https://www.google.com/">Another one</a></li>
                        <li><a className="link" href="https://www.google.com/">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="https://www.google.com/">Resource name</a></li>
                        <li><a className="link" href="https://www.google.com/">Resource</a></li>
                        <li><a className="link" href="https://www.google.com/">Another resource</a></li>
                        <li><a className="link" href="https://www.google.com/">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="https://www.google.com/">Business</a></li>
                        <li><a className="link" href="https://www.google.com/">Education</a></li>
                        <li><a className="link" href="https://www.google.com/">Government</a></li>
                        <li><a className="link" href="https://www.google.com/">Gaming</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link" href="https://www.google.com/">Team</a></li>
                        <li><a className="link" href="https://www.google.com/">Locations</a></li>
                        <li><a className="link" href="https://www.google.com/">Privacy</a></li>
                        <li><a className="link" href="https://www.google.com/">Terms</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;