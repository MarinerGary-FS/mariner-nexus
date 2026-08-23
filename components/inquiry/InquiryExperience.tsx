"use client";

import { FormEvent, MouseEvent, useRef, useState } from "react";
import Link from "next/link";
import { trackAcquisition } from "@/lib/analytics";
import type { InquiryErrors, InquiryInput, InquirySituation } from "@/lib/inquiry/schema";

const situations: { value: InquirySituation; label: string }[] = [
  { value: "create", label: "Starting something new" }, { value: "evolve", label: "Have something that needs to evolve" },
  { value: "connect", label: "Need different pieces to work together" }, { value: "unsure", label: "Not sure yet" },
];
const steps = ["Objective", "Context", "Direction", "Contact", "Review"];
const initial: InquiryInput = { name: "", organization: "", email: "", phone: "", currentWebsite: "", situation: "unsure", objective: "", success: "", references: "", timeline: "", additionalContext: "", website: "", startedAt: 0, submissionKey: "" };

export function InquiryExperience() {
  const [data, setData] = useState(initial); const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"rest" | "submitting" | "success" | "error">("rest");
  const [errors, setErrors] = useState<InquiryErrors>({}); const [message, setMessage] = useState("");
  const [inquiryId, setInquiryId] = useState(""); const heading = useRef<HTMLHeadingElement>(null);
  const startedAt = useRef(0); const submissionKey = useRef("");
  const update = (field: keyof InquiryInput, value: string | number) => setData(previous => ({ ...previous, [field]: value }));
  const begin = () => { if (!startedAt.current) { startedAt.current = Date.now(); submissionKey.current = crypto.randomUUID(); trackAcquisition("start_project_begin", { entry: "start_page" }); } };
  const go = (next: number) => { setStep(next); setErrors({}); trackAcquisition("start_project_step", { step: steps[next].toLowerCase() }); requestAnimationFrame(() => heading.current?.focus()); };
  const next = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const local: InquiryErrors = {};
    if (step === 0 && !data.objective.trim()) local.objective = "Tell us what you are trying to create or change.";
    if (step === 2 && !data.success.trim()) local.success = "Tell us what success would look like.";
    if (step === 2 && !data.timeline.trim()) local.timeline = "Tell us when you are hoping to move.";
    if (step === 3 && !data.name.trim()) local.name = "Enter your name.";
    if (step === 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) local.email = "Enter a valid email address.";
    if (Object.keys(local).length) { setErrors(local); return; } go(step + 1);
  };
  async function submit(event: FormEvent) {
    event.preventDefault(); if (status === "submitting") return; setStatus("submitting"); setMessage("");
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, startedAt: startedAt.current, submissionKey: submissionKey.current }) });
      const result = await response.json() as { ok: boolean; inquiryId?: string; message?: string; errors?: InquiryErrors };
      if (!response.ok || !result.ok) { setErrors(result.errors ?? {}); setMessage(result.message ?? "Your inquiry was not submitted."); setStatus("error"); trackAcquisition("start_project_error", { stage: response.status === 400 ? "validation" : "submission" }); return; }
      setInquiryId(result.inquiryId ?? ""); setStatus("success"); trackAcquisition("start_project_complete", { environment: "website" }); requestAnimationFrame(() => heading.current?.focus());
    } catch { setMessage("Your inquiry was not submitted. Your responses are still here so you can retry or email Mariner Nexus."); setStatus("error"); trackAcquisition("start_project_error", { stage: "network" }); }
  }
  if (status === "success") return <section className="mn-inquiry-confirmation" aria-labelledby="inquiry-success-title"><p className="mn-kicker">Inquiry received</p><h2 id="inquiry-success-title" ref={heading} tabIndex={-1}>Your project starts here.</h2><p>We’ve received what you shared and will review it before reaching out.</p>{inquiryId && <p className="mn-inquiry-id">Reference {inquiryId}</p>}<Link href="/work">Explore Our Work <span aria-hidden="true">→</span></Link></section>;
  return <form className="mn-guided-inquiry" noValidate onFocus={begin} onSubmit={submit}>
    <div className="mn-inquiry-progress"><p aria-live="polite">{steps[step]} <span>— {step + 1} of {steps.length}</span></p><div aria-hidden="true">{steps.map((label, index) => <span className={index <= step ? "is-reached" : ""} key={label} />)}</div></div>
    <div className="mn-honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input autoComplete="off" id="website" name="website" onChange={event => update("website", event.target.value)} tabIndex={-1} value={data.website} /></div>
    <section className="mn-inquiry-step" aria-labelledby={`step-${step}-title`}>
      {step === 0 && <><p className="mn-kicker">Begin with the objective</p><h2 id="step-0-title" ref={heading} tabIndex={-1}>What are you trying to create or change?</h2><label className="mn-field"><span className="mn-sr-only">Your objective</span><textarea aria-describedby={errors.objective ? "objective-error" : "objective-note"} aria-invalid={!!errors.objective} maxLength={3000} onChange={event => update("objective", event.target.value)} placeholder="Describe it in your own words. You do not need to name the solution." rows={7} value={data.objective} /></label><p id="objective-note">Bring us the objective. We’ll help determine what needs to exist around it.</p>{errors.objective && <p className="mn-field-error" id="objective-error">{errors.objective}</p>}</>}
      {step === 1 && <><p className="mn-kicker">Current context</p><h2 id="step-1-title" ref={heading} tabIndex={-1}>Where are you today?</h2><fieldset className="mn-situation-options"><legend className="mn-sr-only">Choose your current situation</legend>{situations.map(option => <label key={option.value}><input checked={data.situation === option.value} name="situation" onChange={() => update("situation", option.value)} type="radio" value={option.value} /><span>{option.label}</span></label>)}</fieldset><label className="mn-field"><span>What exists today? <small>Optional</small></span><input aria-describedby={errors.currentWebsite ? "website-error" : undefined} aria-invalid={!!errors.currentWebsite} inputMode="url" onChange={event => update("currentWebsite", event.target.value)} placeholder="https://current-site.com" type="url" value={data.currentWebsite} /></label>{errors.currentWebsite && <p className="mn-field-error" id="website-error">{errors.currentWebsite}</p>}</>}
      {step === 2 && <><p className="mn-kicker">Direction</p><h2 id="step-2-title" ref={heading} tabIndex={-1}>What would meaningful progress look like?</h2><label className="mn-field"><span>What does success look like?</span><textarea aria-describedby={errors.success ? "success-error" : undefined} aria-invalid={!!errors.success} maxLength={2000} onChange={event => update("success", event.target.value)} rows={4} value={data.success} /></label>{errors.success && <p className="mn-field-error" id="success-error">{errors.success}</p>}<label className="mn-field"><span>When are you hoping to move?</span><input aria-describedby={errors.timeline ? "timeline-error" : undefined} aria-invalid={!!errors.timeline} maxLength={160} onChange={event => update("timeline", event.target.value)} placeholder="A date, season, or what is driving the timing" value={data.timeline} /></label>{errors.timeline && <p className="mn-field-error" id="timeline-error">{errors.timeline}</p>}<label className="mn-field"><span>Anything you’ve seen that reflects the level you’re looking for? <small>Optional</small></span><textarea maxLength={1500} onChange={event => update("references", event.target.value)} rows={3} value={data.references} /></label></>}
      {step === 3 && <><p className="mn-kicker">Contact</p><h2 id="step-3-title" ref={heading} tabIndex={-1}>Who should we continue this conversation with?</h2><div className="mn-contact-fields"><label className="mn-field"><span>Name</span><input aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={!!errors.name} autoComplete="name" maxLength={120} onChange={event => update("name", event.target.value)} value={data.name} /></label><label className="mn-field"><span>Organization <small>Optional</small></span><input autoComplete="organization" maxLength={160} onChange={event => update("organization", event.target.value)} value={data.organization} /></label><label className="mn-field"><span>Email</span><input aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={!!errors.email} autoComplete="email" maxLength={254} onChange={event => update("email", event.target.value)} type="email" value={data.email} /></label><label className="mn-field"><span>Phone <small>Optional</small></span><input autoComplete="tel" maxLength={50} onChange={event => update("phone", event.target.value)} type="tel" value={data.phone} /></label></div>{errors.name && <p className="mn-field-error" id="name-error">{errors.name}</p>}{errors.email && <p className="mn-field-error" id="email-error">{errors.email}</p>}<label className="mn-field"><span>Anything else we should understand? <small>Optional</small></span><textarea maxLength={2000} onChange={event => update("additionalContext", event.target.value)} rows={4} value={data.additionalContext} /></label></>}
      {step === 4 && <><p className="mn-kicker">Review</p><h2 id="step-4-title" ref={heading} tabIndex={-1}>Ready when you are.</h2><dl className="mn-inquiry-review"><div><dt>Objective</dt><dd>{data.objective}</dd></div><div><dt>Situation</dt><dd>{situations.find(option => option.value === data.situation)?.label}</dd></div><div><dt>Success</dt><dd>{data.success}</dd></div><div><dt>Timeline</dt><dd>{data.timeline}</dd></div><div><dt>Contact</dt><dd>{data.name}<br />{data.email}</dd></div></dl><p>Submission starts a project conversation, not a marketing enrollment. Formal engagement begins only through separate executed agreements.</p></>}
    </section>
    <div className="mn-inquiry-actions">{step > 0 && <button className="mn-button-secondary" disabled={status === "submitting"} onClick={() => go(step - 1)} type="button">Back</button>}{step < steps.length - 1 ? <button onClick={next} type="button">Continue <span aria-hidden="true">→</span></button> : <button disabled={status === "submitting"} type="submit">{status === "submitting" ? "Submitting…" : "Start a Project →"}</button>}</div>
    <div aria-live="assertive" className={status === "error" ? "mn-inquiry-message is-error" : "mn-inquiry-message"} role="status">{status === "submitting" ? "Submitting your inquiry securely." : message}</div>
    {status === "error" && <p className="mn-inquiry-fallback">Your responses remain above. Retry when ready or <a href="mailto:info@marinernexus.com">email Mariner Nexus</a>.</p>}
    <p className="mn-inquiry-privacy">By submitting, you agree that Mariner Nexus may use this information to evaluate and respond to your inquiry. <a href="/privacy">Read Privacy</a>.</p>
  </form>;
}
