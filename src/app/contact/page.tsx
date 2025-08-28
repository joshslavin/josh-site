export const revalidate = 0;

export default function ContactPage() {
  const action = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-id";
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="opacity-80 mb-6">Brand inquiries, collaborations, or tips—drop me a note.</p>
      <form action={action} method="POST" className="space-y-4">
        <input type="hidden" name="_redirect" value="/contact/success" />
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" required className="w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" required className="w-full border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" rows={6} required className="w-full border rounded-lg px-3 py-2" />
        </div>
        <button className="rounded-2xl px-5 py-2 border hover:shadow">Send</button>
      </form>
    </div>
  );
}
