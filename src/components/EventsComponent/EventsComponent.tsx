import "./EventsComponent.css";
import { EventsData } from "./EventsData";

const EventsComponent = () => {
  return (
    <section className="section events" data-section="section4">
      <div className="section-heading">
        <h2>Our Events</h2>
      </div>
      <div className="container py-2 mt-4 mb-4">
        {EventsData.map((event, idx) => {
          const isRight = idx % 2 === 0;
          const color = event.completed ? "success" : "warning";
          const first = idx === 0;
          const last = idx === EventsData.length - 1;

          return (
            <div key={idx}>
              {isRight && (
                <div className="row g-0">
                  <div className="col-sm"> </div>
                  <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                      <div
                        className={`col ${!first ? `border-left border-${color} custom-border` : ""}`}
                      >
                        &nbsp;
                      </div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                      <span
                        className={`badge rounded-pill bg-${color} border border-${color} custom-badge`}
                      >
                        &nbsp;
                      </span>
                    </h5>
                    <div className="row h-50">
                      <div
                        className={`col border-right border-${color} custom-border`}
                      >
                        &nbsp;
                      </div>
                      <div className={`${!last ? "col" : ""}`}>&nbsp;</div>
                    </div>
                  </div>
                  <div className="col-sm py-2">
                    <div
                      className={`card ${event.completed ? "" : `border-${color}`}`}
                    >
                      <div className="card-body">
                        <h4 className="card-title">{event.title}</h4>
                        <small className="card-text mb-2 d-block">
                          {event.date}
                        </small>
                        <p className="card-text">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!isRight && (
                <div className="row g-0">
                  <div className="col-sm py-2">
                    <div
                      className={`card ${event.completed ? "" : `border-${color}`}`}
                    >
                      <div className="card-body">
                        <h4 className="card-title">{event.title}</h4>
                        <small className="card-text mb-2 d-block">
                          {event.date}
                        </small>
                        <p className="card-text">{event.description} </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                      <div
                        className={`col border-right border-${color} custom-border`}
                      >
                        &nbsp;
                      </div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <h5 className="m-2">
                      <span
                        className={`badge rounded-pill bg-${color} border border-${color} custom-badge`}
                      >
                        &nbsp;
                      </span>
                    </h5>
                    <div className="row h-50">
                      <div
                        className={`col ${!last ? `border-right border-${color} custom-border` : ""}`}
                      >
                        &nbsp;
                      </div>
                      <div className="col">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col-sm"> </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventsComponent;
