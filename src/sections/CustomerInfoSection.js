import React from 'react'
import CreditCard from '../assets/images/credit-card.svg';
import CustomerSupport from '../assets/images/customer-service.svg';
import DeliveryTruck from '../assets/images/delivery-truck.svg';

const CustomerInfoSection = () => {
  return (
    <section className="customer-info">
        <div className="container">
            <div class="info">
                <img src={CustomerSupport} alt="" />
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div class="info">
                <img src={CreditCard} alt="" />
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div class="info">
                <img src={DeliveryTruck} alt="" />
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div class="info">
                <img src={DeliveryTruck} alt="" />
                <h1>30 Day Returns</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
</section>
  )
}

export default CustomerInfoSection