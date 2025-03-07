// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="mb-0 text-center">
//         <div className="d-flex align-items-center justify-content-center pb-5">
//           <div className="col-md-6">
//             <p className="mb-3 mb-md-0">
//               Made with by{" "}
//               <a
//                 href=""
//                 className="text-decoration-underline text-dark fs-5"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 nk
//               </a>
//             </p>
//             <a
//               className="text-dark fs-4"
//               href=""
//               target="_blank"
//               rel="noreferrer"
//             >
//               <i className="fa fa-github"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

// import React from "react";
// import "./Footer.css"; // Import the separate CSS file

// const Footer = () => {
//   return (
//     <footer className="footer-dark">
//       <div className="footer-container">
//         <div className="social-icons">
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-instagram"></i>
//           </a>
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-facebook"></i>
//           </a>
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-twitter"></i>
//           </a>
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-github"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer-dark">
//       <div className="footer-content">
//         <div className="social-icons">
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-instagram"></i>
//           </a>
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-facebook"></i>
//           </a>
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-twitter"></i>
//           </a>
//           <a href="" target="_blank" rel="noreferrer">
//             <i className="fa fa-github"></i>
//           </a>
//         </div>

//         <p className="footer-info">
//           E-commerce | Email: support@example.com | Contact: +1234567890
//         </p>

//         <p className="footer-copyright">
//           © 2025 E-commerce. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-container">
        {/* Left Side - Payment Options */}
        <div className="footer-payments">
          <h4 className="payment-heading">Safe & Secure Payment</h4>
          <img src="./assets/Visa-card.png" alt="Visa" />
          <img src="./assets/rupay.png" alt="RuPay" />
          <img src="./assets/upi.png" alt="UPI" />
          <img src="./assets/mastercard.png" alt="MasterCard" />
        </div>

        {/* Center - Social Icons & Info */}
        <div className="footer-content">
          <p className="footer-follow">Follow us on</p> {/* Added this line */}
          <div className="social-icons">
            <a href="" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <p className="footer-info">
            E-commerce | Email: support@example.com | Contact: +1234567890
          </p>
          <p className="footer-copyright">
            © 2025 E-commerce. All rights reserved.
          </p>
        </div>

        {/* Right Side - Embedded Map */}
        <div className="footer-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086166!2d144.95373531550423!3d-37.81627974202151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C+VIC%2C+Australia!5e0!3m2!1sen!2sin!4v1610963617131"
            width="200"
            height="150"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
