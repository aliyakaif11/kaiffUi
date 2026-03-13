import React from "react";
import "./CreditCardScreen.css";

const CreditCardScreen = () => {
  return (
    <div className="phone-frame">
      <div className="screen">

        {/* ===== Top Header ===== */}
        <div className="top-header">
          <span className="header-time">17:01</span>

          {/* Dynamic Island */}
          <div className="dynamic-island"></div>

          <div className="status-right">
            <span className="network-type">4G</span>
            <div className="signal-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="status-battery">
              <div className="battery-fill half"></div>
            </div>
          </div>

          <div className="header-menu">☰</div>
          <h1 className="header-title">Credit Cards</h1>
          <div className="header-home">⌂</div>
        </div>

        {/* ===== Summary Card ===== */}
        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-month">March 2026 </div>
            <div className="summary-cardno">5334 •••• •••• 1753</div>

            <p className="summary-info">
              Transactions made after your current bill generation
            </p>

            <div className="summary-row">
              <div>
                <div className="label">TOTAL DUE</div>
                <div className="summary-amount">₹3,988.75</div>
              </div>

              <div>
                <div className="label">MINIMUM DUE</div>
                <div className="summary-amount">₹3,988.75</div>
              </div>
            </div>

            <div className="summary-date">
              <span className="label">DUE DATE</span>
              <div className="date-text">30 Mar </div>
            </div>
          </div>
        </div>

        {/* ===== Transactions ===== */}
        <div className="transactions">

          <div className="tx-header">
            <span>All Transactions (15)</span>
            <span className="download-icon"></span>
          </div>

          <div className="emi-box">
            <span className="star">✦</span>
            <div>
              <div className="emi-title">Manage your bill, your way </div>
              <div className="emi-sub">
                Convert ₹4,323 eligible into EMIs one click
              </div>
            </div>
          </div>

          {/* Transaction Rows */}

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">11</span>
                <span className="month">MAR</span>
              </div>
              <div>
                <div className="tx-title">Debit Interest</div>
                <div className="tx-ref">REF# 28473916502</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹4,782.17</span>
              <span className="arrow red">↑</span>
            </div>
          </div>

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">11</span>
                <span className="month">MAR</span>
              </div>
              <div>
                <div className="tx-title">GST</div>
                <div className="tx-ref">REF# 90714635281</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹859.61</span>
              <span className="arrow red">↑</span>
            </div>
          </div>

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">10</span>
                <span className="month">MAR</span>
              </div>
              <div>
                <div className="tx-title">BBPS PAYMENT RECEIV.</div>
                <div className="tx-ref">REF# 63190574826</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹5,000.00</span>
              <span className="arrow green">↑</span>
            </div>
          </div>

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">10</span>
                <span className="month">MAR</span>
              </div>
              <div>
                <div className="tx-title">CASHBACK CREDIT FEB.</div>
                <div className="tx-ref">REF# 11547625366</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹2,515.00</span>
              <span className="arrow green">↑</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreditCardScreen;

