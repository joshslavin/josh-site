'use client';
import { useMemo } from 'react';

export default function NewsletterEmbed() {
  const provider = process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER; // 'beehiiv' | 'convertkit'
  const beehiivId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID; // e.g., '12345678-aaaa-bbbb-cccc-1234567890'
  const convertkitFormId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID; // e.g., '1234567'

  const embed = useMemo(() => {
    if (provider === 'beehiiv' && beehiivId) {
      // Basic Beehiiv embed (no external script)
      const action = `https://api.beehiiv.com/v2/publications/${beehiivId}/subscriptions`;
      return (
        <form action={action} method="POST" className="mt-3 flex gap-2" target="_blank">
          <input type="email" name="email" required className="border rounded px-3 py-2 flex-1" placeholder="you@example.com" />
          <button className="border rounded px-3 py-2" type="submit">Join</button>
        </form>
      );
    }
    if (provider === 'convertkit' && convertkitFormId) {
      const action = `https://app.convertkit.com/forms/${convertkitFormId}/subscriptions`;
      return (
        <form action={action} method="POST" className="mt-3 flex gap-2" target="_blank">
          <input type="email" name="email_address" required className="border rounded px-3 py-2 flex-1" placeholder="you@example.com" />
          <button className="border rounded px-3 py-2" type="submit">Join</button>
        </form>
      );
    }
    // Fallback placeholder
    return (
      <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
        <input className="border rounded px-3 py-2 flex-1" placeholder="you@example.com" />
        <button className="border rounded px-3 py-2">Join</button>
      </form>
    );
  }, [provider, beehiivId, convertkitFormId]);

  return (
    <div className="rounded-2xl border p-5">
      <h3 className="font-semibold">Subscribe</h3>
      <p className="text-sm opacity-75">One killer guide or story, once a week. No spam.</p>
      {embed}
    </div>
  );
}
