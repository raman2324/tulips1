import { useState } from "react";
import { FlowerButton } from "./FlowerButton";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-cream-100 section-y">
      <div className="container-page max-w-3xl text-center">
        <p className="eyebrow text-primary mb-4">Stay in bloom</p>
        <h2 className="display-md text-foreground">
          Early access, planting reminders, and an open invitation to the fields.
        </h2>
        <p className="lede mt-4 max-w-xl mx-auto">
          A short letter, every other Sunday. Seasonal collections before they're listed,
          a heads-up when peonies arrive, and notes from the family.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <label className="sr-only" htmlFor="nl-email">Email</label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-full bg-background border border-anchor/20 px-5 py-3.5 text-[15px] focus:outline-none focus:border-anchor"
          />
          <FlowerButton type="submit" variant="secondary">
            {done ? "Welcome — see you Sunday." : "Subscribe"}
          </FlowerButton>
        </form>
        <p className="text-[12px] text-ink-500 mt-4">
          We send roughly 26 letters a year. Unsubscribe with one click.
        </p>
      </div>
    </section>
  );
}
