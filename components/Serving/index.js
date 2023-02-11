
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Serving() {
    const router = useRouter()
    const dataloctions = useSelector(state => state.loctions);
    const selecthandleclick = (locId, locName, locAddress, locationslug, locMinBookingAmount) => {
        localStorage.setItem("id", locId);
        localStorage.setItem("cityname", locName);
        localStorage.setItem("locAddress", locAddress);
        localStorage.setItem("loc_min_booking_amount", locMinBookingAmount);


        router.push('/' + locationslug);
        window.location.href = '/' + locationslug;
        //Router.reload(window.location.pathname)

    }
    return (<>
        <Container fluid>
            <div className="section-title text-center">
                <h2 className="title">SERVING IN</h2>
            </div>
            <div className="SERVINGin">
                <Row>
                    <Col>
                        <div
                            className="d-flex flex-row"
                            style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
                        >
                            {dataloctions.location?.map((x, i) => {
                                return (<div className="p-2" key={i}>
                                    <Link className="salonehome-all-Category" href="#"
                                        onClick={() => selecthandleclick(x.id, x.city, x.name, x.slug, x.price)}>
                                        <div
                                            className="salonehome-all-Category-box"
                                            style={{ backgroundColor: "rgb(255, 255, 255)" }}
                                        >
                                            <div className="salonehome-all-Category-images">
                                                <img
                                                    src={`https://www.glamcode.in/user-uploads/locations/${x.image}`}
                                                    alt={x.city}
                                                    style={{ marginTop: 10 }}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="salone-all-category-text">
                                            <h5>{x.city}</h5>
                                        </div>
                                    </Link>
                                </div>
                                )
                            })}

                        </div>
                    </Col>
                </Row>

            </div>
        </Container>
    </>)

}