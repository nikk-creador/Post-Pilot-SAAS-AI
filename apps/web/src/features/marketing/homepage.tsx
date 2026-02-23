'use client';

import { motion } from 'framer-motion';
import { Logo } from '@/components/logo';

const platforms = ['LinkedIn', 'X/Twitter', 'Instagram', 'Facebook'] as const;

export function Homepage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-xl font-semibold">post pilot</p>
            <p className="text-sm text-slate-400">Plan. Create. Schedule. Grow — with AI.</p>
          </div>
        </div>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium hover:bg-indigo-500">Start Free</button>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 pt-12 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-bold tracking-tight">Schedule smarter. Grow faster.</h1>
          <p className="mt-5 text-lg text-slate-300">Generate AI-powered content, optimize it for each network, and schedule posts with confidence.</p>
          <div className="mt-8 flex gap-3">
            <button className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-500">Start Free</button>
            <button className="rounded-lg border border-slate-600 px-5 py-3 font-semibold">View Demo</button>
          </div>
        </motion.div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-widest text-slate-400">How It Works</p>
          <ol className="mt-4 space-y-3 text-slate-100">
            <li>1. Generate AI post drafts by platform.</li>
            <li>2. Schedule by timezone and audience windows.</li>
            <li>3. Publish with automated retries and logs.</li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Platform Support</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {platforms.map((platform) => (
            <span key={platform} className="rounded-full border border-slate-700 px-4 py-2 text-sm">
              {platform}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
