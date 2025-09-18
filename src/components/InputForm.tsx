"use client";

import React, { useState, useEffect } from "react";
import style from "./InputForm.module.css";
import { OrderInputType } from "@/types/orderFormType";

const InputForm = () => {
  const initialOrderInput: OrderInputType = {
    name: "",
    depositName: "",
    phone: "",
    address: "",
    detailAddress: "",
    quantity: 1,
  };
  const [orderInput, setOrderInput] =
    useState<OrderInputType>(initialOrderInput);
  const [nameCheck, setNameCheck] = useState(false);

  // 주문자명이 바뀌거나, 체크박스 상태에 따라 입금자명 반영
  useEffect(() => {
    if (nameCheck) {
      setOrderInput((prev) => ({ ...prev, depositName: orderInput.name }));
    }
  }, [orderInput.name, nameCheck]);

  // input state 처리
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setOrderInput((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  }

  //입금자명 체크박스 처리
  function handleNameCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setNameCheck(checked);
    
    if (checked) {
      setOrderInput((prev) => ({ ...prev, depositName: orderInput.name }));
    }
  }

  // input form 제출
  function handleSubmit() {
    console.log("주문정보", orderInput);
    // 제출 동작 연결필요
    setOrderInput(initialOrderInput);
  }
  return (
    <form action={handleSubmit} className={style.orderForm}>
      <ul>
        <li>
          <label htmlFor="name">주문자명</label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderInput.name}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="">입금자명</label>
          <input
            type="text"
            id="depositName"
            name="depositName"
            value={orderInput.depositName}
            onChange={handleChange}
            disabled={nameCheck}
          />
          <input
            type="checkbox"
            id="checkName"
            name="checkName"
            checked={nameCheck}
            onChange={handleNameCheck}
          />
          <label htmlFor="checkName">주문자와 일치</label>
        </li>
        <li>
          <label htmlFor="phone">연락처</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={orderInput.phone}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="address">주소</label>
          <input
            type="text"
            id="address"
            name="address"
            value={orderInput.address}
            onChange={handleChange}
          />
          <input
            type="text"
            id="detailAddress"
            name="detailAddress"
            value={orderInput.detailAddress}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="quantity">수량</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={orderInput.quantity}
            onChange={handleChange}
            min="1"
          />
        </li>
        <li>
          <p>입금계좌정보</p>
          <p>3333129242146 카카오뱅크</p>
        </li>
      </ul>
      <button type="submit">주문요청</button>
    </form>
  );
};

export default InputForm;
