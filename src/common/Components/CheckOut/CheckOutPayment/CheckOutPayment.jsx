
import { useState } from "react"

export default function CheckOutPayment() {
  const [typeCheckOut, setTypeCheckOut] = useState();
   

  const getValue = (e) => {
    setTypeCheckOut(e)
  }
  return (
    <>
    {
      console.log(typeCheckOut)
    }
      <h4 className="selectBuy__title">
        <i className="fa-solid fa-credit-card" /> Hình thức thanh
        toán
      </h4>
      <ul className="selectBuy__main" >
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="fruit" id="fruit-1" value={"adasdasd"} onChange={e => getValue("tienmat")}/>
            <picture>
              <img
                src="./images/png-clipart-money-cash-cash-coupon-material-miscellaneous-rectangle-thumbnail.png"
                alt=""
              />
            </picture>
            <span>Thanh toán bằng tiền mặt </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="fruit" id="fruit-2" />
            <picture>
              <img src="./images/momo.png" alt="" />
            </picture>
            <span>Thanh toán bằng Momo </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="fruit" id="fruit-3" />
            <picture>
              <img src="./images/zalopay.png" alt="" />
            </picture>
            <span>Thanh toán bằng ZaloPay </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="fruit" id="fruit-4" />
            <picture>
              <img src="./images/vnpay.png" alt="" />
            </picture>
            <span>Thanh toán bằng VNPAY </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="fruit" id="fruit-5" />
            <picture>
              <img src="./images/visa.png" alt="" />
            </picture>
            <span>Thanh toán bằng Visa </span>
          </div>
        </li>
        <li className="selectBuy__main___item">
          <div className="inner">
            <input type="radio" name="fruit" id="fruit-6" onChange={e => getValue("ATM")}/>
            <picture>
              <img src="./images/vnpay.png" alt="" />
            </picture>
            <span>
              Thanh toán bằng ATM nội địa / Internet Banking ( Hỗ
              trợ )
            </span>
          </div>
          {
            typeCheckOut && typeCheckOut === "ATM" ? 
          <ul className="listBuy">
            <li className="listBuy__item active">
              <i className="fa-solid fa-circle-check fa-size" />
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
            <li className="listBuy__item">
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
            <li className="listBuy__item">
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
            <li className="listBuy__item">
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
            <li className="listBuy__item">
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
            <li className="listBuy__item">
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
            <li className="listBuy__item">
              <img src="./images/logo-agribank.jpeg" alt="" />
            </li>
          </ul> : <></>
            
          }
        </li>
      </ul>

    </>
  )
}
