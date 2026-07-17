"use client";
import React from 'react';

import { SignInButton, UserButton, useAuth } from '@clerk/nextjs'

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <>
      <nav className="sticky top-0 bg-cream border-b border-ink flex justify-between items-center p-4 md:px-8 z-50">
        <a href="#home" className="font-tallow text-2xl border-none">Marginalia Type Co.</a>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#archive" className="nav-link">The Archive</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#commissions" className="nav-link">Commissions</a>
          <a href="#about" className="nav-link">About</a>
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="nav-link cursor-pointer uppercase">Sign In</button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>

      <section id="home" className="min-h-[90vh] flex flex-col justify-center p-8 border-b border-ink">
        <div className="font-ledger text-sm uppercase tracking-widest text-faded mb-4">Est. 2026 — Leipzig, DE</div>
        <div className="font-tallow text-6xl md:text-[10rem] leading-[0.9] mb-8 tracking-tight">Typefaces<br/>with ghosts.</div>
        <p className="text-2xl max-w-2xl italic mb-8">We excavate forgotten lettering from historical ephemera—shipping manifests, apothecary windows, matchbook labels—and revive them as licensable digital fonts. Typography with a real backstory, not decoration.</p>
        <a href="#archive" className="font-ledger text-sm text-brass uppercase border-b border-brass inline-block w-max">Enter the Archive ↓</a>
      </section>

      <section id="archive" className="p-8 py-24 border-b border-ink">
        <div className="max-w-5xl mx-auto">
          <div className="font-ledger text-sm uppercase text-faded mb-12">Catalog — 003 Active Revivals</div>
          
          <article className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 mb-24 pb-16 border-b border-dashed border-ink last:border-none last:mb-0 last:pb-0">
            <div className="text-5xl md:text-8xl p-8 border border-ink flex items-center justify-center text-center break-words font-ledger">
              1911.84<br/>003.12
            </div>
            <div className="pt-4">
              <h3 className="font-ledger text-3xl mb-2">Kestrel Ledger</h3>
              <p className="mb-6">A rigorous, monospaced workhorse designed for columns of numbers and strict tabulation.</p>
              <div className="mt-8 p-6 bg-black/5 border-l-4 border-brass">
                <div className="font-ledger text-sm uppercase text-faded mb-2">Excavation Log</div>
                <p><strong>Source:</strong> Maritime shipping manifest, port of Hamburg.<br/><strong>Year:</strong> 1911.<br/><strong>Notes:</strong> Found in a damp ledger book purchased at an estate sale. The original lead type was deliberately punched hard into the paper to prevent ledger forgery, resulting in heavy ink traps which we preserved in the digital vectors.</p>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 mb-24 pb-16 border-b border-dashed border-ink last:border-none last:mb-0 last:pb-0">
            <div className="text-6xl md:text-[8rem] p-8 border border-ink flex items-center justify-center text-center break-words font-doverhouse uppercase tracking-tighter scale-y-110">
              Doverhouse
            </div>
            <div className="pt-4">
              <h3 className="font-doverhouse text-4xl mb-2 uppercase tracking-tight">Doverhouse Sans</h3>
              <p className="mb-6">A condensed gothic sans-serif. Deliberately uneven, carrying the rhythm of a human wrist rather than a machine.</p>
              <div className="mt-8 p-6 bg-black/5 border-l-4 border-brass">
                <div className="font-ledger text-sm uppercase text-faded mb-2">Excavation Log</div>
                <p><strong>Source:</strong> Hand-painted apothecary window.<br/><strong>Year:</strong> Circa 1920s.<br/><strong>Notes:</strong> Excavated from a deteriorating photograph of a London pharmacy. The sign-painter struggled with spatial constraints toward the end of the glass pane, creating character widths that become increasingly compressed. We digitized this panicked compression as stylistic alternates.</p>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8">
            <div className="text-5xl md:text-8xl p-8 border border-ink flex items-center justify-center text-center break-words font-tallow italic">
              Tallow & Wick
            </div>
            <div className="pt-4">
              <h3 className="font-tallow text-4xl mb-2 italic">Tallow & Wick</h3>
              <p className="mb-6">A warm, slightly worn serif that feels like it has lived in a pocket for years.</p>
              <div className="mt-8 p-6 bg-black/5 border-l-4 border-brass">
                <div className="font-ledger text-sm uppercase text-faded mb-2">Excavation Log</div>
                <p><strong>Source:</strong> Defunct tavern matchbook label.<br/><strong>Year:</strong> 1944.<br/><strong>Notes:</strong> The cheap cardboard and low-quality ink of wartime matchbook printing caused the serifs to bleed and round off. Instead of correcting these "flaws," the digitization process mapped the ink bleed perfectly to retain its nocturnal, smoky character.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="process" className="p-8 py-24 border-b border-ink">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div className="font-ledger text-sm text-faded uppercase">
            03 — The Methodology<br/><br/>Location:<br/>Converted 1890s Linotype Foundry, Leipzig.
          </div>
          <div>
            <h2 className="text-3xl mb-8">Dust to Digital</h2>
            <p className="text-xl mb-8 text-justify">We do not invent letterforms; we resurrect them. The process begins in physical archives, estate sales, and decaying architectural photographs. We look for type that served a strict utilitarian purpose but was executed with subconscious craft.</p>
            <div className="workflow-step"><strong>Source Hunting:</strong> Locating physical ephemera with a complete, or near-complete, character set.</div>
            <div className="workflow-step"><strong>Archival Scan:</strong> High-resolution macro photography of the ink pressing into the paper fiber.</div>
            <div className="workflow-step"><strong>Letter-by-Letter Digitization:</strong> We do not use auto-tracing. Every bezier curve is placed manually to capture the intent of the original punchcutter or sign-painter.</div>
            <div className="workflow-step"><strong>Kerning & Hinting:</strong> Modernizing the spacing so the font functions flawlessly in modern digital environments while retaining its analog rhythm.</div>
            <div className="workflow-step"><strong>Release:</strong> A limited, highly curated catalog. No filler.</div>
          </div>
        </div>
      </section>

      <section id="commissions" className="p-8 py-24 border-b border-ink">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div className="font-ledger text-sm text-faded uppercase">04 — Bespoke Work</div>
          <div>
            <h2 className="text-3xl mb-8">Custom Commissions</h2>
            <p className="text-xl mb-8 text-justify">For heritage brands, boutique hospitality, and independent publishers who require exclusive typographic assets. If you possess a piece of archival material—a founder's handwritten ledger, a historical logo, a faded brass plaque—we can excavate it into a fully functional, proprietary typeface.</p>
            <a href="#contact" className="text-brass font-tallow text-2xl border-b border-brass">Discuss a Commission</a>
          </div>
        </div>
      </section>

      <section id="contact" className="p-8 py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-tallow text-5xl mb-4">Transmission</h2>
          <p className="mb-8">For licensing inquiries, archive access, or commissions.</p>
          <form action="https://formspree.io/f/xyzkqabp" method="POST" className="flex flex-col gap-4 text-left">
            <input type="email" name="email" required placeholder="Email Address" className="p-4 border border-ink bg-transparent focus:outline-none focus:border-brass font-ledger" />
            <textarea name="message" required placeholder="Message" rows={4} className="p-4 border border-ink bg-transparent focus:outline-none focus:border-brass font-ledger"></textarea>
            <button type="submit" className="bg-ink text-cream p-4 font-ledger uppercase tracking-widest hover:bg-brass transition-colors">Send</button>
          </form>
        </div>
      </section>

      <footer className="p-16 text-center font-ledger text-sm text-faded border-t border-ink">
        <p>&copy; 2026 Marginalia Type Co. Leipzig.</p>
      </footer>
    </>
  );
}
