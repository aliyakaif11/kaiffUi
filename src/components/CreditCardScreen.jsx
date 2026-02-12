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
            <div className="summary-month">February 2026 </div>
            <div className="summary-cardno">5334 •••• •••• 1753</div>

            <p className="summary-info">
              Transactions made after your current bill generation
            </p>

            <div className="summary-row">
              <div>
                <div className="label">TOTAL DUE</div>
                <div className="summary-amount">₹84,437.41</div>
              </div>

              <div>
                <div className="label">MINIMUM DUE</div>
                <div className="summary-amount">₹2,420.00</div>
              </div>
            </div>

            <div className="summary-date">
              <span className="label">DUE DATE</span>
              <div className="date-text">02 Mar </div>
            </div>
          </div>
        </div>

        {/* ===== Transactions ===== */}
        <div className="transactions">

          <div className="tx-header">
            <span>All Transactions (25)</span>
            <span className="download-icon"></span>
          </div>

          <div className="emi-box">
            <span className="star">✦</span>
            <div>
              <div className="emi-title">Manage your bill, your way </div>
              <div className="emi-sub">
                Convert ₹58,600 eligible into EMIs one click
              </div>
            </div>
          </div>

          {/* Transaction Rows */}

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">10</span>
                <span className="month">FEB</span>
              </div>
              <div>
                <div className="tx-title">Debit Interest</div>
                <div className="tx-ref">REF# 11653342187</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹2,987.63</span>
              <span className="arrow red">↑</span>
            </div>
          </div>

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">10</span>
                <span className="month">FEB</span>
              </div>
              <div>
                <div className="tx-title">GST</div>
                <div className="tx-ref">REF# 11291453754</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹537.28</span>
              <span className="arrow red">↑</span>
            </div>
          </div>

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">08</span>
                <span className="month">FEB</span>
              </div>
              <div>
                <div className="tx-title">ZEPTO MARKET PLACE...</div>
                <div className="tx-ref">REF# 11323992495</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹137.00</span>
              <span className="arrow red">↑</span>
            </div>
          </div>

          <div className="tx-row">
            <div className="tx-left">
              <div className="date">
                <span className="day">05</span>
                <span className="month">FEB</span>
              </div>
              <div>
                <div className="tx-title">ALL SEASON SUPER...</div>
                <div className="tx-ref">REF# 11547625366</div>
              </div>
            </div>
            <div className="tx-right">
              <span className="tx-amount">₹154.00</span>
              <span className="arrow red">↑</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreditCardScreen;

