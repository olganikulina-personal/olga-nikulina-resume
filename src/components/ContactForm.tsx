import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./ContactForm.css";

const schema = z.object({
  email: z.string().email({ message: "that doesn't look like an email" }),
  message: z
    .string()
    .min(10, { message: "a few more words, please — at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;
type Status = { kind: "idle" } | { kind: "ok" } | { kind: "err"; text: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xeogqyzg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ kind: "ok" });
        reset();
      } else {
        setStatus({ kind: "err", text: "the form didn't go through. try again?" });
      }
    } catch {
      setStatus({ kind: "err", text: "something broke on the network." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
      <div className="field">
        <label htmlFor="email" className="label">your email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className="input"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="error" role="alert">{errors.email.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="message" className="label">what's on your mind</label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className="input textarea"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="error" role="alert">{errors.message.message}</p>}
      </div>

      <div className="actions">
        <button type="submit" disabled={isSubmitting} className="submit">
          {isSubmitting ? "sending…" : "send"}
        </button>
        {/*
         * Inline status replaces the old react-toastify pop-up. It lives in
         * the form's own flow so screen readers announce it via role=status,
         * and the UI doesn't shift in to a corner.
         */}
        {status.kind === "ok" && (
          <p className="status status-ok" role="status">sent. talk soon.</p>
        )}
        {status.kind === "err" && (
          <p className="status status-err" role="status">{status.text}</p>
        )}
      </div>
    </form>
  );
}
