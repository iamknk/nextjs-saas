import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p className="text-lg">
        Pick a name, subject, voice, personality - and start learning with your
        AI-powered companion today!
      </p>
      <Image
        src="/images/cta.svg"
        alt="cta image"
        width={362}
        height={232}
      />
      <button className="btn-primary">
        <Image
          src="/icons/plus.svg"
          alt="add companion"
          width={12}
          height={12}
        />
        <Link href="/companion/new">Create Your Companion</Link>
      </button>
    </section>
  );
};

export default CTA;
