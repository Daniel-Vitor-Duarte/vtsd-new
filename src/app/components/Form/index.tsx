"use client";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import Script from "next/script";
import SelectCustom from "../SelectCustom";
import Image from "next/image";

import { usePathname, useSearchParams } from "next/navigation";


interface FormState {
  name: string;
  email: string;
  phonenumber: string;
  whatsapp: string;
  ddi: string;
}

type FormFields = "name" | "email" | "whatsapp" | "ddi";

type Form = Record<FormFields, string>;

type InputHandler = (field: FormFields) => ChangeEventHandler<HTMLInputElement>;

interface FormProps {
  type?: string;
  xid: string;
  urlredirect: string;
  typeredirect: string;
}

export default function FormInfusion({
  type = "vtsd",
  xid,
  urlredirect,
  typeredirect,
}: FormProps) {
  const [telReady, setTelReady] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phonenumber: "",
    whatsapp: "",
    ddi: "+55",
  });

  const pathpage = useSearchParams();
  const pathname = usePathname();
  const conversion = pathpage.get("conversion");
  const utm_campaign = pathpage.get("utm_campaign");
  const utm_content = pathpage.get("utm_content");
  const utm_medium = pathpage.get("utm_medium");
  const utm_source = pathpage.get("utm_source");
  const utm_term = pathpage.get("utm_term");

  const handleInput: InputHandler = (field) => (e) => {
    console.log("opaaaaaa");

    setForm({
      ...form,
      [field]: e.currentTarget.value,
    });
  };

  const handleDdi = (ddi: any) => {
    setForm({
      ...form,
      ddi: ddi,
    });
  };

  const phoneMask = (value: any) => {
    if (!value) return "";

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handlePhone = (whatsapp: any) => {
    let input = whatsapp.target;
    input.value = phoneMask(input.value);

    setForm({
      ...form,
      whatsapp: whatsapp.target.value,
    });
  };

  useEffect(() => {
    setTelReady("+" + form.ddi + form.whatsapp);

    console.log("setTelReady ->", telReady);
  }, [form.ddi, form.whatsapp, telReady]);

  return (
    <>
      <section>
        <div className="w-full flex flex-col">
          {type === "stories10x" && (
            <>
              <div className="flex px-[29px] py-[19px] gap-4">
                <div className="w-[25px] h-[25px] border border-white rounded-full"></div>
                <div className="w-[25px] h-[25px] border border-white rounded-full"></div>
              </div>
              <div className="w-[75%] h-[1px] bg-white"></div>
            </>
          )}
          <div className="">
            {type === "vtsd" ? (
                <>
                </>
            ) : (
              <>
                <div className="lg:hidden">
                  <Image
                    src="/stories10x/logo.svg"
                    layout="fixed"
                    width="136"
                    height="20"
                    alt="Image"
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/stories10x/logo.svg"
                    layout="fixed"
                    width="180"
                    height="26"
                    alt="Image"
                  />
                </div>
              </>
            )}
            <div>
            </div>
            <form
              className="flex flex-col justify-center items-center"
              acceptCharset="UTF-8"
              action={`https://ov870.infusionsoft.com/app/form/process/${xid}`}
              id={`inf_form_${xid}`}
              method="POST"
            >
              <div className="w-full flex flex-col gap-[.81rem] lg:gap-5 pb-[.81rem]">
                <input name="inf_form_xid" type="hidden" value={xid} />
                <input
                  name="inf_form_name"
                  type="hidden"
                  value="Pre-checkout"
                />
                <input
                  name="infusionsoft_version"
                  type="hidden"
                  value="1.70.0.641495"
                />
                <input
                  name="inf_custom_conversion"
                  readOnly
                  type="hidden"
                  value={conversion ? conversion : ""}
                />
                <input
                  name="inf_custom_utmcampaign"
                  readOnly
                  type="hidden"
                  value={utm_campaign ? utm_campaign : ""}
                />
                <input
                  name="inf_custom_utmcontent"
                  readOnly
                  type="hidden"
                  value={utm_content ? utm_content : ""}
                />
                <input
                  name="inf_custom_utmsource"
                  readOnly
                  type="hidden"
                  value={utm_source ? utm_source : ""}
                />
                <input
                  name="inf_custom_utmmedium"
                  readOnly
                  type="hidden"
                  value={utm_medium ? utm_medium : ""}
                />
                <input
                  name="inf_custom_utmterm"
                  readOnly
                  type="hidden"
                  value={utm_term ? utm_term : ""}
                />
                <input
                  name="inf_custom_pathpage"
                  readOnly
                  type="hidden"
                  value={pathname ? pathname : ""}
                />
                <input name="urlredirect" type="hidden" value={urlredirect} />
                <input name="typeredirect" type="hidden" value={typeredirect} />

                <input
                  className={`h-[40px] lg:h-[50px] ${
                    type === "vtsd" ? "border-[1px] text-[0.75rem] border-[#C8C8C8]" : ""
                  } text-black px-3 lg:px-5 rounded-lg w-full`}
                  type="text"
                  required
                  id="inf_field_FirstName"
                  name="inf_field_FirstName"
                  placeholder="Digite seu nome completo"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                />
                <input
                  className={`h-[40px] lg:h-[50px] ${
                    type === "vtsd" ? "border-[1px] text-[0.75rem] border-[#C8C8C8]" : ""
                  } text-black px-3 lg:px-5 rounded-lg w-full`}
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  id="inf_field_Email"
                  name="inf_field_Email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                />

                <div className={`flex gap-[.5rem] `}>
                  <SelectCustom handleDdi={handleDdi} />

                  <input
                    name="phonenumber"
                    type={"tel"}
                    placeholder="Telefone"
                    className={`p-4 w-full rounded-lg text-black ${
                      type === "vtsd" ? "border-[1px] border-[#C8C8C8] text-[0.75rem]" : ""
                    }`}
                    maxLength={15}
                    onChange={(e) => handlePhone(e)}
                    required
                  />

                  <input
                    type="hidden"
                    value={telReady}
                    name="inf_field_Phone1"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`${
                  type === "vtsd"
                    ? "bg-[#00A99D] text-[#EDEDED]"
                    : "primary-shadow bg-gradient-to-r from-[#E7004C] to-[#FF0072]"
                } w-full py-4 px-8 rounded-lg text-[1.125rem] sm:text-[20px] font-bold hover:scale-105 transition-all flex items-center justify-center `}
              >
                {type === "vtsd"
                  ? "Quero entrar para a lista de espera"
                  : "Aumentar em 10x o impacto do meu instagram"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Script
        type="text/javascript"
        src="https://ov870.infusionsoft.app/app/webTracking/getTrackingCode"
      ></Script>
      <Script
        type="text/javascript"
        src={`https://ov870.infusionsoft.com/app/timezone/timezoneInputJs?xid=${xid}`}
      ></Script>
      <Script
        type="text/javascript"
        src="https://ov870.infusionsoft.com/js/jquery/jquery-3.3.1.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://ov870.infusionsoft.app/app/webform/overwriteRefererJs"
      ></Script>
    </>
  );
}
