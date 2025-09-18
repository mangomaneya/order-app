import React from "react";
import style from "./page.module.css";
import InputForm from "@/components/InputForm";


const Page = () => {

  return (
    <div className={style.formWrap}>
      주문정보 입력
      <InputForm/>
    </div>
  );
};

export default Page;
