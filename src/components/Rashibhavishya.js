import React, { useEffect, useState } from "react";
import { Button } from "@windmill/react-ui";
import CalenderServices from "../services/CalenderServices";
import { useSelector } from "react-redux";
import aries from "../assets/img/aries.png";
import taurus from "../assets/img/taurus.png";
import geminis from "../assets/img/gemini.png";
import cancer from "../assets/img/cancer.png";
import leo from "../assets/img/leo.png";
import virgo from "../assets/img/virgo.png";
import libra from "../assets/img/libra.png";
import scorpio from "../assets/img/scorpio.png";
import sagittarius from "../assets/img/sagittarius.png";
import capricorn from "../assets/img/capricorn.png";
import aquarius from "../assets/img/aquarius.png";
import pisces from "../assets/img/pisces.png";
import { notifyError, notifySuccess } from "../utils/toast";

const initialValue = {
  marathi_aries: "",
  marathi_taurus: "",
  marathi_gemini: "",
  marathi_cancer: "",
  marathi_leo: "",
  marathi_virgo: "",
  marathi_libra: "",
  marathi_scorpio: "",
  marathi_sagittarius: "",
  marathi_capricorn: "",
  marathi_aquarius: "",
  marathi_pisces: "",
  hindi_aries: "",
  hindi_taurus: "",
  hindi_gemini: "",
  hindi_cancer: "",
  hindi_leo: "",
  hindi_virgo: "",
  hindi_libra: "",
  hindi_scorpio: "",
  hindi_sagittarius: "",
  hindi_capricorn: "",
  hindi_aquarius: "",
  hindi_pisces: "",
};
console.log(initialValue);
const Rashibhavishya = ({ getMonthData, monthData }) => {
  const myState = useSelector((state) => state.setDate);

  const { month, year } = myState;
  const [horoscope, sethoroscope] = useState(initialValue);

  let name;
  let value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    sethoroscope({ ...horoscope, [name]: value });
  };

  useEffect(() => {
    sethoroscope(monthData[month - 1].horoscope);
  }, [month, year]);

  const sendHoroscopetoDB = () => {
    let obj = { horoscope, month, year };
    CalenderServices.monthHoroscope(obj)
      .then((res) => {
        notifySuccess("Update successfully!");
        getMonthData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="inp-field-2">
        <div className="inpF-2 inpF-3">
          {/* <div style={{ marginTop: "20px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              राशी भविष्य
            </span>
          </div> */}
          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={aries} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  मेष
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_aries}
                name="marathi_aries"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_aries}
                name="hindi_aries"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={taurus} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  वृषभ
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_taurus}
                name="marathi_taurus"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_taurus}
                name="hindi_taurus"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={pisces} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  मीन
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_pisces}
                name="marathi_pisces"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_pisces}
                name="hindi_pisces"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={geminis} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  मिथुन
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_gemini}
                name="marathi_gemini"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_gemini}
                name="hindi_gemini"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={cancer} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  कर्क
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_cancer}
                name="marathi_cancer"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_cancer}
                name="hindi_cancer"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={leo} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  सिंह
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_leo}
                name="marathi_leo"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_leo}
                name="hindi_leo"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={virgo} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  कन्या
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_virgo}
                name="marathi_virgo"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_virgo}
                name="hindi_virgo"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={libra} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  तुला
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_libra}
                name="marathi_libra"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_libra}
                name="hindi_libra"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={scorpio} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  वृश्चिक
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_scorpio}
                name="marathi_scorpio"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_scorpio}
                name="hindi_scorpio"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={sagittarius} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  धनु
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_sagittarius}
                name="marathi_sagittarius"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_sagittarius}
                name="hindi_sagittarius"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={capricorn} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  मकर
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_capricorn}
                name="marathi_capricorn"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_capricorn}
                name="hindi_capricorn"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>

          <div className="Q_and_A_card">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-45px me-5">
                <img src={aquarius} alt="" />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a
                  href="#"
                  className="text-dark fw-bolder text-hover-primary fs-6"
                >
                  कुंभ
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: "10px", display: "flex" }}
              className="form-group textarea-holder"
            >
              <textarea
                value={horoscope?.marathi_aquarius}
                name="marathi_aquarius"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
              <textarea
                value={horoscope?.hindi_aquarius}
                name="hindi_aquarius"
                onChange={handleChange}
                type="text"
                class="form-control form-control-solid"
                placeholder="तुमचा मजकूर येथे प्रविष्ट करा..."
              />
            </div>
          </div>
        </div>
        <div className="rsb-btn-div">
          <Button
            onClick={() => {
              sendHoroscopetoDB(horoscope, month, year);
            }}
            className="rsb-btn"
          >
            SAVE
          </Button>
        </div>
      </div>
    </>
  );
};

export default Rashibhavishya;
