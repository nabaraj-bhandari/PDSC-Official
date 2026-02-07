import './EventsComponent.css'
// import { useState } from 'react'

const EventsComponent = () => {
    // const [activeCarousel, setActiveCarousel] = useState(0);
    return (
        <section className="section events" data-section="section4">
            <div className="section-heading">
                <h2>Our Events</h2>
            </div>
            <div className="container py-2 mt-4 mb-4">
                {/* Design Thinking (right) */}
                <div className="row no-gutters">
                    <div className="col-sm"> </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm py-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Design Thinking</h4>
                                <small className="card-text mb-2 d-block">June 24th - 25th, 2025</small>
                                <p className="card-text">Successfully wrapped up 2 days interactive Design Thinking workshop, engaging participants in hands-on activities to foster creative problem-solving and innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Open Source Path (Left) */}
                <div className="row no-gutters">
                    <div className="col-sm py-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">The Open Source Path</h4>
                                <small className="card-text mb-2 d-block">June 26th, 2025</small>
                                <p className="card-text">Successfully wrapped up “The Open Source Path” event, empowering students to explore open source, learn how to crack GSoC, and unlock global career opportunities with talks from experts in the domain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm"> </div>
                </div>

                {/* Bug Bounty (right) */}
                <div className="row no-gutters">
                    <div className="col-sm"> </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm py-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Bug Bounty</h4>
                                <small className="card-text mb-2 d-block">December 17th-19th, 2025</small>
                                <p className="card-text">Successfully wrapped up a 3-day Bug Bounty Bootcamp featuring expert-led sessions, hands-on labs, and live bug hunt challenges, providing participants with real-world exposure to cybersecurity and ethical hacking.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CodeJam (Left) */}
                <div className="row no-gutters">
                    <div className="col-sm py-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Code Jam</h4>
                                <small className="card-text mb-2 d-block">January 16th, 2026</small>
                                <p className="card-text">Successfully organized LogPoint CodeJam 2026, bringing together students for a competitive coding challenge focused on problem-solving, critical thinking, and building solutions under pressure as part of LOCUS 2026.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm"> </div>
                </div>

                {/* AI Workshop (right) */}
                <div className="row no-gutters">
                    <div className="col-sm"> </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-right border-success custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm py-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">AI Workshop</h4>
                                <small className="card-text mb-2 d-block">February 5th,6th & 8th, 2026</small>
                                <p className="card-text">Successfully conducted a 3-day AI & ML workshop introducing participants to the fundamentals of artificial intelligence and machine learning through interactive sessions, discussions, and practical insights.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Git and GitHub (Left) */}
                <div className="row no-gutters">
                    <div className="col-sm py-2">
                        <div className="card border-warning">
                            <div className="card-body">
                                <h4 className="card-title text-warning">Git and GitHub</h4>
                                <small className="card-text mb-2 d-block">Upcoming...</small>
                                <p className="card-text">Workshop on Git and GitHub.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col border-right border-warning custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-warning border border-warning custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-right border-warning custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm"> </div>
                </div>

                {/* Coming Soon (right) */}
                <div className="row no-gutters">
                    <div className="col-sm"> </div>
                    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                        <div className="row h-50">
                            <div className="col border-right border-warning custom-border">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-2">
                            <span className="badge rounded-pill bg-warning border border-warning custom-badge">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm py-2">
                        <div className="card border-warning">
                            <div className="card-body">
                                <h4 className="card-title text-warning">More Events on the Horizon</h4>
                                <small className="card-text mb-2 d-block">Something special coming soon...</small>
                                <p className="card-text">Follow us on social media for announcements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsComponent;
