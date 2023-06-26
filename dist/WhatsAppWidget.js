import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
const WhatsAppWidget = ({
  phone
}) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleSendClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  const handleWhatsappClick = () => {
    setOpen(!open);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AnimatePresence, null, open && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      translateY: "10%"
    },
    animate: {
      opacity: 1,
      translateY: "0%"
    },
    exit: {
      opacity: 0,
      translateY: "10%"
    },
    className: "fixed bg-white rounded-md shadow-xl z-40 right-0 bottom-[100px] m-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-xl font-semibold"
  }, "Hello !"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-textGray"
  }, "Message us on Whatsapp!")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("textarea", {
    type: "text",
    className: "w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-sm",
    placeholder: "Message...",
    value: message,
    onChange: e => {
      setMessage(e.target.value);
    },
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSendClick,
    className: "bg-[#25D366] flex flex-row gap-2 items-center text-white w-[70px] h-[40px] hover:text-black justify-center text-[12px] rounded-md hover:bg-transparent hover:border transition duration-200"
  }, "Send")))))), /*#__PURE__*/React.createElement("div", {
    onClick: handleWhatsappClick,
    className: "fixed bg-[#25D366] z-40 right-0 bottom-10 m-6 rounded-full p-2 cursor-pointer bg-secondary"
  }, /*#__PURE__*/React.createElement(AiOutlineWhatsApp, {
    className: "text-4xl text-white"
  })));
};
export default WhatsAppWidget;