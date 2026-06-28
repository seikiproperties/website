// TODO: Once client testimonials and permissions are ready, replace this
// trust-statement block with real quotes (name + designation/city, or
// anonymized if preferred). Structure to use: name, role/city, quote.

export default function TrustSection() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold">Why Clients Work With Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            We treat every transaction like it&rsquo;s
            <span className="block italic text-gold">our own capital on the line.</span>
          </h2>
          <p className="mt-6 text-cream/65 text-base leading-relaxed max-w-2xl">
            Clients come to us through referral, not advertising. We work with a
            deliberately small number of investors at a time, because the value
            we offer — direct developer access, transparent negotiation, and a
            planned exit — depends on that focus.
          </p>
        </div>
      </div>
    </section>
  );
}
