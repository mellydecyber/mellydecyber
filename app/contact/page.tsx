'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    await fetch('/api/contact', { method: 'POST', body: formData });
    setSent(true);
  }
  return (
    <div className="p-4">
      {sent ? (
        <p>Thanks!</p>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-2 max-w-md">
          <input name="email" type="email" required placeholder="Email" className="p-2 rounded bg-gray-800" />
          <textarea name="message" required placeholder="Message" className="p-2 rounded bg-gray-800" />
          <button className="p-2 bg-blue-600 rounded" type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
