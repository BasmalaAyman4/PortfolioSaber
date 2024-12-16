import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Sidebar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slices/UserSlice";
import Environment from "../config";
import axios from "axios";
import { useSelector } from "react-redux";
import clientimg from '../assets/images/customers.png'
import tiketimg from '../assets/images/discount.png'
import notificationimg from '../assets/images/notification.png'
import contactimg from '../assets/images/customer-service.png'
import helpimg from '../assets/images/question.png'
import complain from '../assets/images/complaint.png'
import employeeimg from '../assets/images/employee.png'
import { useTranslation } from "react-i18next";
const Sidebar = (props) => {
  const { token } = useSelector((state) => state.user);
  const [active, setActive] = useState(`${props.active}`);
  const { t } = useTranslation()

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem('firebaseToken', '');
    localStorage.removeItem('firebaseToken');
    dispatch(logout());
  };
  return (
    <>
      <div className={`${styles.sidebar}`}>
        <div className={`${styles.top}`}></div>
        <div className={`${styles.center}`}>
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "clients" ? styles.active : styles.li
                }`}
              >
               <img alt='' src={clientimg} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("العملاء")}</span>
              </li>
            </Link>
            <Link to="/tickets" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "tickets" ? styles.active : styles.li
                }`}
              >
                <img alt='' src={tiketimg} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("تذكرة")}</span>
              </li>
            </Link>
            <Link to="/notification" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "notification" ? styles.active : styles.li
                }`}
              >
                <img alt='' src={notificationimg} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("إشعارات")}</span>
              </li>
            </Link>
            <Link to="/help" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "help" ? styles.active : styles.li
                }`}
              >
                <img alt='' src={helpimg} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("المساعدة")}</span>
              </li>
            </Link>
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "contact" ? styles.active : styles.li
                }`}
              >
                <img alt='' src={contactimg} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("تواصل معنا")}</span>
              </li>
            </Link>
            <Link to="/complaints" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "Complaints" ? styles.active : styles.li
                }`}
              >
                <img alt='' src={complain} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("الشكاوي")}</span>
              </li>
            </Link>
<Link to="/employee" style={{ textDecoration: "none" }}>
              <li
                className={` ${
                  active === "employee" ? styles.active : styles.li
                }`}
              >
                <img alt='' src={employeeimg} className={`${styles.banner__ico}`}/>
                <span className={`${styles.span}`}>{t("موظفين")}</span>
              </li>
            </Link>


          </ul>
        </div>
        {/* <div className={`${styles.bottom}`}>
                    <ul>

                        <li className={`${styles.li}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path d="M11.2205 13.0954C11.0536 12.8891 10.9701 12.6549 10.9701 12.3928C10.9701 12.1312 11.0536 11.9132 11.2205 11.7387L12.9047 9.97723H6.37269C6.11475 9.97723 5.89868 9.88583 5.72449 9.70302C5.5497 9.52085 5.4623 9.29488 5.4623 9.02512C5.4623 8.75535 5.5497 8.52906 5.72449 8.34626C5.89868 8.16408 6.11475 8.073 6.37269 8.073H12.9047L11.2205 6.31158C11.0384 6.12116 10.9474 5.89519 10.9474 5.63367C10.9474 5.37152 11.0384 5.14524 11.2205 4.95481C11.3874 4.76439 11.5962 4.66918 11.8468 4.66918C12.0969 4.66918 12.3054 4.75645 12.4723 4.93101L15.7496 8.35863C15.8407 8.45385 15.9053 8.55699 15.9436 8.66807C15.9812 8.77915 16 8.89817 16 9.02512C16 9.15207 15.9812 9.27108 15.9436 9.38216C15.9053 9.49324 15.8407 9.59639 15.7496 9.6916L12.4723 13.1192C12.275 13.3255 12.0589 13.4166 11.8241 13.3925C11.5886 13.369 11.3874 13.27 11.2205 13.0954ZM1.82077 17.5942C1.32006 17.5942 0.891266 17.4079 0.534395 17.0353C0.178132 16.6621 0 16.2136 0 15.6899V2.36029C0 1.83663 0.178132 1.38818 0.534395 1.01495C0.891266 0.642352 1.32006 0.456055 1.82077 0.456055H7.28307C7.54101 0.456055 7.75738 0.547141 7.93218 0.729312C8.10636 0.912119 8.19346 1.13841 8.19346 1.40817C8.19346 1.67794 8.10636 1.90391 7.93218 2.08608C7.75738 2.26889 7.54101 2.36029 7.28307 2.36029H1.82077V15.6899H7.28307C7.54101 15.6899 7.75738 15.7813 7.93218 15.9642C8.10636 16.1463 8.19346 16.3723 8.19346 16.6421C8.19346 16.9118 8.10636 17.1378 7.93218 17.32C7.75738 17.5028 7.54101 17.5942 7.28307 17.5942H1.82077Z" fill="#808191" className={`${styles.icon}`} />
                            </svg>
                            <span >{"Logout"}</span>
                        </li>
                    </ul>
                </div> */}
      </div>
    </>
  );
};

export default Sidebar;
