import React, { useState, useEffect } from "react";
import { Row, Col, Spinner, Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { getAllSites } from "../../axios";
import capitilizeCityName from "../../utils";
import { Site } from "./site";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Home = () => {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);
  const city = useQuery().get("city");

  useEffect(() => {
    setLoading(true);
    getAllSites(city)
      .then((res) => {
        setSites(res.data.sites);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.error);
      });
  }, [city]);

  return (
    <>
      <Breadcrumb>
        {city && city !== "locate-me" ? (
          <>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{capitilizeCityName(city)}</Breadcrumb.Item>
          </>
        ) : (
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        )}
      </Breadcrumb>
      {loading ? (
        <Spinner className="m-3" animation="border" variant="primary" />
      ) : (
        <Row xs={1} md={4} className="g-3 mb-2 add-space">
          {sites.length ? (
            sites.map((site, index) => {
              return (
                <Col key={site._id} className="my-3 grow">
                  <Site site={site} index={index}/>
                </Col>
              );
            })
          ) : (
            <div className="mt-3">No Result Found!</div>
          )}
        </Row>
      )}
      {/* <div>
        <Link to="/scan">Scan Ticket</Link>
      </div> */}
    </>
  );
};
