import React, { useState } from 'react';
import { 
  Ship, 
  Plane, 
  ShieldCheck, 
  Warehouse, 
  Globe2, 
  MapPin, 
  ArrowRight, 
  Search, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Send 
} from 'lucide-react';

export default function ServicesPreview() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setTrackingStatus({
      id: trackingNumber.trim(),
      status: 'In Transit — Pacific Corridor',
      origin: 'Singapore (SGSIN)',
      destination: 'Rotterdam (NLRTM)',
      eta: 'Nov 18, 2026',
      vessel: 'PR Precision Trader / V.048W'
    });
  };

  return (
    <div className="home-sections-wrapper">
      {/* 1. Services Section */}
      <section id="services" className="content-section services-section" aria-labelledby="services-heading">
        <div className="section-container">
          <div className="section-header-centered">
            <span className="section-eyebrow">OUR SPECIALIZED SOLUTIONS</span>
            <h2 id="services-heading" className="section-title">Global Freight & Maritime Operations</h2>
            <p className="section-subtitle">
              Engineered for velocity, safety, and supply chain continuity across every international corridor.
            </p>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card" id="ocean-freight">
              <div className="service-icon-box">
                <Ship className="service-icon" size={26} strokeWidth={1.8} />
              </div>
              <div className="service-num">01</div>
              <h3 className="service-title">Ocean Freight Forwarding</h3>
              <p className="service-desc">
                Full-container-load (FCL) and consolidated (LCL) maritime solutions with guaranteed space allocations on primary international carrier loops.
              </p>
              <ul className="service-features">
                <li><CheckCircle2 size={15} /> Port-to-port & door-to-door multimodal transit</li>
                <li><CheckCircle2 size={15} /> Out-of-gauge (OOG) & project breakbulk cargo</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card" id="air-freight">
              <div className="service-icon-box">
                <Plane className="service-icon" size={26} strokeWidth={1.8} />
              </div>
              <div className="service-num">02</div>
              <h3 className="service-title">Air Freight Logistics</h3>
              <p className="service-desc">
                High-priority flight routing, temperature-controlled life-sciences transport, and dedicated charter charters for time-critical global delivery.
              </p>
              <ul className="service-features">
                <li><CheckCircle2 size={15} /> Scheduled priority uplift & express courier</li>
                <li><CheckCircle2 size={15} /> Dangerous goods (DG) & high-value security flights</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card" id="customs-brokerage">
              <div className="service-icon-box">
                <ShieldCheck className="service-icon" size={26} strokeWidth={1.8} />
              </div>
              <div className="service-num">03</div>
              <h3 className="service-title">Customs Brokerage</h3>
              <p className="service-desc">
                Cross-border tariff optimization, complete bonded documentation, and rigorous regulatory clearance in key ports across six continents.
              </p>
              <ul className="service-features">
                <li><CheckCircle2 size={15} /> HS Code classification & duty optimization</li>
                <li><CheckCircle2 size={15} /> Pre-clearance EDI filing & audit defense</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="service-card" id="warehousing">
              <div className="service-icon-box">
                <Warehouse className="service-icon" size={26} strokeWidth={1.8} />
              </div>
              <div className="service-num">04</div>
              <h3 className="service-title">Warehousing & Distribution</h3>
              <p className="service-desc">
                Modern strategic fulfillment centres with automated inventory management, cross-docking, and last-mile cold chain integration.
              </p>
              <ul className="service-features">
                <li><CheckCircle2 size={15} /> Bonded bonded free-trade storage hubs</li>
                <li><CheckCircle2 size={15} /> Real-time WMS inventory visibility API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section id="about" className="content-section about-section" aria-labelledby="about-heading">
        <div className="section-container about-grid">
          <div className="about-content">
            <span className="section-eyebrow">ABOUT PR GLOBAL LOGISTICS</span>
            <h2 id="about-heading" className="section-title">Built on Precision, Trust & Commitment</h2>
            <p className="about-lead">
              Founded on the principle that international trade demands unwavering dependability, PR Global Logistics has grown into a trusted worldwide logistics partner.
            </p>
            <p className="about-text">
              We manage supply chains with surgical precision — bridging shipping lines, air carriers, and customs authorities into one seamless global operation.
            </p>
            <div className="about-highlights">
              <div className="about-stat-box">
                <div className="about-stat-val">99.4%</div>
                <div className="about-stat-lbl">On-Time Vessel Delivery</div>
              </div>
              <div className="about-stat-box">
                <div className="about-stat-val">24/7</div>
                <div className="about-stat-lbl">Global Operations Desk</div>
              </div>
            </div>
          </div>
          <div className="about-quote-box">
            <div className="about-tagline-quote">
              <div className="quote-mark">“</div>
              <p className="quote-body">YOUR CARGO • OUR COMMITMENT</p>
              <p className="quote-sub">A standard etched into every container, flight manifest, and delivery order we execute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Network Section */}
      <section id="network" className="content-section network-section" aria-labelledby="network-heading">
        <div className="section-container">
          <div className="section-header-centered">
            <span className="section-eyebrow">INTERNATIONAL PRESENCE</span>
            <h2 id="network-heading" className="section-title">Strategically Connected Across 6 Continents</h2>
            <p className="section-subtitle">
              Direct presence and established agency partnerships at every key deepwater port and air freight gateway.
            </p>
          </div>

          <div className="hubs-grid">
            <div className="hub-card">
              <div className="hub-region">Asia-Pacific Hubs</div>
              <div className="hub-cities">Singapore • Shanghai • Tokyo • Dubai • Mumbai</div>
            </div>
            <div className="hub-card">
              <div className="hub-region">European Corridors</div>
              <div className="hub-cities">Rotterdam • Hamburg • Antwerp • London • Genoa</div>
            </div>
            <div className="hub-card">
              <div className="hub-region">Americas Gateways</div>
              <div className="hub-cities">Los Angeles • New York • Santos • Panama City</div>
            </div>
            <div className="hub-card">
              <div className="hub-region">Africa & Middle East</div>
              <div className="hub-cities">Jebel Ali • Durban • Alexandria • Casablanca</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Tracking Section */}
      <section id="tracking" className="content-section tracking-section" aria-labelledby="tracking-heading">
        <div className="section-container tracking-container">
          <div className="tracking-card">
            <div className="tracking-header">
              <span className="section-eyebrow">CARGO VISIBILITY</span>
              <h2 id="tracking-heading" className="section-title tracking-title">Real-Time Consignment Tracking</h2>
              <p className="tracking-lead">Enter your Container Number, Bill of Lading (B/L), or Air Waybill (AWB) to query live status.</p>
            </div>

            <form className="tracking-form" onSubmit={handleTrack}>
              <div className="tracking-input-wrapper">
                <Search className="search-icon" size={18} />
                <input
                  type="text"
                  placeholder="e.g. PRGL-8940284 or MEDU1294829"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="tracking-input"
                  aria-label="Tracking or Consignment ID"
                />
              </div>
              <button type="submit" className="tracking-btn">
                <span>TRACK CARGO</span>
                <ArrowRight size={15} />
              </button>
            </form>

            {trackingStatus && (
              <div className="tracking-result">
                <div className="result-header">
                  <div className="result-badge"><Clock size={14} /> LIVE UPDATE</div>
                  <div className="result-id">Shipment: <strong>{trackingStatus.id}</strong></div>
                </div>
                <div className="result-grid">
                  <div className="result-item">
                    <span className="res-lbl">Status</span>
                    <span className="res-val status-active">{trackingStatus.status}</span>
                  </div>
                  <div className="result-item">
                    <span className="res-lbl">Origin & Destination</span>
                    <span className="res-val">{trackingStatus.origin} → {trackingStatus.destination}</span>
                  </div>
                  <div className="result-item">
                    <span className="res-lbl">Carrier Vessel</span>
                    <span className="res-val">{trackingStatus.vessel}</span>
                  </div>
                  <div className="result-item">
                    <span className="res-lbl">Estimated Arrival</span>
                    <span className="res-val eta-highlight">{trackingStatus.eta}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Contact & Quote Section */}
      <section id="quote" className="content-section contact-section" aria-labelledby="contact-heading">
        <div className="section-container contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">CONNECT WITH AN EXPERT</span>
            <h2 id="contact-heading" className="section-title">Request a Freight Quote</h2>
            <p className="contact-lead">
              Our trade specialists formulate transparent, cost-effective container and air cargo rates within 2 hours.
            </p>
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <div>
                  <strong>Commercial Inquiries</strong>
                  <span>quotes@prgloballogistics.com</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <div>
                  <strong>24/7 Operations Centre</strong>
                  <span>+1 (800) 482-9428 / +65 6749 2000</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon"><MapPin size={18} /></div>
                <div>
                  <strong>Global Corporate Headquarters</strong>
                  <span>Marina Bay Financial Centre, Tower 2, Singapore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card" id="contact">
            <form className="quote-form" onSubmit={(e) => { e.preventDefault(); alert('Quote Request Received. Our commercial team will contact you shortly.'); }}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input id="fullname" type="text" placeholder="John Doe" required className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Business Email</label>
                <input id="email" type="email" placeholder="john@company.com" required className="form-input" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="originPort">Origin Port</label>
                  <input id="originPort" type="text" placeholder="e.g. Shanghai" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="destPort">Destination Port</label>
                  <input id="destPort" type="text" placeholder="e.g. Rotterdam" required className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="serviceType">Transport Mode</label>
                <select id="serviceType" className="form-input form-select" defaultValue="Ocean FCL">
                  <option value="Ocean FCL">Ocean Freight — FCL</option>
                  <option value="Ocean LCL">Ocean Freight — LCL</option>
                  <option value="Air Priority">Air Freight Priority</option>
                  <option value="Customs Brokerage">Customs Brokerage Only</option>
                </select>
              </div>
              <button type="submit" className="form-submit-btn">
                <span>SUBMIT QUOTE REQUEST</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Professional Corporate Footer */}
      <footer className="site-footer">
        <div className="section-container footer-container">
          <div className="footer-col-brand">
            <img src="/images/pr_global_logo.png" alt="PR Global Logistics" className="footer-logo" width="160" height="55" />
            <p className="footer-tagline">YOUR CARGO • OUR COMMITMENT</p>
            <p className="footer-copy">Delivering comprehensive international supply chain solutions across 6 continents.</p>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#ocean-freight">Ocean Freight (FCL/LCL)</a></li>
              <li><a href="#air-freight">Air Freight Priority</a></li>
              <li><a href="#customs-brokerage">Customs Clearance</a></li>
              <li><a href="#warehousing">Bonded Warehousing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About PR Global</a></li>
              <li><a href="#network">Global Port Network</a></li>
              <li><a href="#tracking">Consignment Tracking</a></li>
              <li><a href="#contact">Contact & Quotes</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Compliance</h4>
            <ul>
              <li><a href="#home">ISO 9001 / ISO 28000</a></li>
              <li><a href="#home">C-TPAT & AEO Certified</a></li>
              <li><a href="#home">Maritime Safety Policy</a></li>
              <li><a href="#home">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <div className="section-container footer-bottom-inner">
            <p>© {new Date().getFullYear()} PR GLOBAL LOGISTICS PTE LTD. ALL RIGHTS RESERVED.</p>
            <p className="footer-designed">Designed for Precision Trade Operations Worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
