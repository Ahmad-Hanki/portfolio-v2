"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import toast, { LoaderIcon } from "react-hot-toast";

const EmailSection = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendMessage = async () => {
    setLoading(true);
    let valid = true;
    const newErrors = { email: "", subject: "", message: "", name: "" };

    if (!name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      valid = false;
    }

    if (!subject) {
      newErrors.subject = "Subject is required.";
      valid = false;
    }

    if (!message) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setLoading(true);

    const data = {
      name,
      email,
      subject,
      message,
    };

    const res = await sendEmail(data);
    if (res == 1) {
      toast.success(data.name + "," + " your message was received");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      toast.error("Sadly, we could not receive your message");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ahmad-hanki" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ahmad-hanki/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="name"
              className={`text-white block mb-2 text-sm font-medium ${
                errors.name ? "text-red-500" : ""
              }`}
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ahmad Hanki"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className={`text-white block mb-2 text-sm font-medium ${
                errors.email ? "text-red-500" : ""
              }`}
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className={`text-white block mb-2 text-sm font-medium ${
                errors.subject ? "text-red-500" : ""
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setErrors({ ...errors, subject: "" });
              }}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className={`text-white block mb-2 text-sm font-medium ${
                errors.message ? "text-red-500" : ""
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors({ ...errors, message: "" });
              }}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            onClick={handleSendMessage}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer "
          >
            {loading ? (
              <LoaderIcon className="animate-spin mx-auto " />
            ) : (
              "Submit Message"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
