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

import React from "react";
import "./Footer.css"; // Import separate CSS file

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-content">
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
    </footer>
  );
};

export default Footer;
