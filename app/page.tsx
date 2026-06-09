export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Tax Compliance Made Simple
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Collect &amp; Manage<br />
          <span className="text-[#58a6ff]">Contractor W-9 Forms</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Send secure W-9 request links, let contractors fill forms online, and automatically generate 1099s at year-end. Stay compliant without the paperwork headache.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Get Started — $14/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Send Secure Links", desc: "Email contractors a unique form link — no account needed on their end." },
            { title: "Track Submissions", desc: "Dashboard shows who's submitted, pending, or overdue at a glance." },
            { title: "Auto-Generate 1099s", desc: "Year-end 1099 PDFs generated automatically from collected W-9 data." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Simple Pricing</p>
          <div className="text-5xl font-bold text-white mb-1">$14<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything included. Cancel anytime.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited contractor profiles",
              "Secure W-9 form links",
              "Submission tracking dashboard",
              "Automated 1099 PDF generation",
              "Email reminders for pending forms",
              "Compliance audit log"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do contractors need to create an account?",
              a: "No. Contractors receive a unique secure link and fill out the W-9 directly in their browser — no sign-up required."
            },
            {
              q: "When are 1099s generated?",
              a: "1099 PDFs are automatically generated at year-end using the W-9 data on file. You can download and file them directly."
            },
            {
              q: "Is my data secure?",
              a: "Yes. All form data is encrypted in transit and at rest. Sensitive fields like SSN/EIN are stored with AES-256 encryption."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} W9 Manager. All rights reserved.
      </footer>
    </main>
  )
}
