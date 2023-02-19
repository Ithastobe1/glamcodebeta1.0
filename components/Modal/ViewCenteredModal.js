
import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import { addtoCartData, decrementQty, removeFromCart } from '../../store/actions';
import { useDispatch } from 'react-redux';
import AddToCartModalView from "../Cart/AddToCartModalView";
import tag from "../../assets/img/tag.svg"
export default function ViewCenteredModal(props) {
    const handleClose = () => props.onHide();
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = React.useState(0);
    const onDecrement = (itemsid) => {
        setItemCount(Math.max(itemCount - 1, 0));
        if (Math.max(itemCount - 1, 0) === 0) {
            dispatch(removeFromCart(itemsid))
        } else {
            dispatch(decrementQty(itemsid, 1))
        }

    }
    const onIncrement = (items) => {
        setItemCount(itemCount + 1);

        //     dispatch({
        //         type: 'FETCH_DATA',
        //         data: responseData
        //    })
        dispatch(addtoCartData(items, 1));
    }
    const mapItems = (items) => {
        return (
            items.map((item, index) => {
                return (<li key={index}>
                    {/* <i className="fa fa-snowflake-o" aria-hidden="true" /> */}
                    {` ` + item.toString()}</li>);
            })
        );
    }
    return (
        <>
            <Modal
                {...props}
                // fullscreen
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='mobilepopud'
            >
                <div onClick={handleClose} className="image-d-location-close">X</div>
                <Modal.Body className="p-4">
                    <Row >
                        <Col md={12}>
                            <div className="product-single-thumb">
                                <img src={props.datato.service_image_url} alt="Luxury Party Makeup" className="popimag" />

                            </div>
                        </Col>
                        <Col md={12}>

                            <div className="product-details-content">
                                <div className="d-flex justify-content-between mt-3">
                                    <h3 className="product-details-title"> {props.datato.name}</h3>
                                    <div className="product-details-pro-qty">
                                        <AddToCartModalView data={props.datato} />
                                    </div>
                                </div>
                                <div className="product-details-review mb-1">
                                    <div className="product-review-icon">
                                        <i className="fa fa-star" /> <span className="rate">4.77 (225K)</span>
                                        {/* <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" /> */}
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="offerPrice">₹ {Math.round(props.datato.discounted_price)}</div>
                                    <div className="p-rl-2 price">₹ {Math.round(props.datato.price)}</div>
                                    <div className="time-text"><li>{props.datato.time} {props.datato.time_type}</li></div>
                                </div>
                                <div className="px-1 my-2"><img src={tag.src} width={20} height={20} /><span className="discountPercentage ps-2">{props.datato.discount}% off</span></div>
                                {props.datato.description && <ul className="mb-6" style={{ paddingLeft: '0px' }}>
                                    {mapItems(props.datato.description.replace(/(<([^>]+)>)/ig, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/(?:&nbsp;)/g, '')
                                        .replace(/&amp;/g, '&').toString().split('.'))}
                                </ul>}
                                <p className="mb-6"> </p>
                                <div className="product-details-action">
                                    {/* <div className="product-item prices">
                                        <span className="price">₹ {Math.round(props.datato.discounted_price)}</span>
                                        <span
                                            className="price-old"
                                            style={{ textDecorationLine: "line-through" }}
                                        >
                                            ₹ {Math.round(props.datato.price)}
                                        </span>
                                    </div> */}
                                    {/* <div className="product-details-cart-wishlist" style={{ marginLeft: '35px' }}>
                                        <button type="button" className="btn">
                                            <i className="fa fa-clock-o" />&nbsp;
                                            {props.datato.time} {props.datato.time_type}
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>
            </Modal>
        </>
    )
}