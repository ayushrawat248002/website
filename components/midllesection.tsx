"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  { id: 1, name: "Linen Relaxed Shirt", price: 79, oldPrice: 99, colors: ["#f8fafc","#fde68a","#c7f9cc"], tag: "Bestseller", desc: "Breathable linen, relaxed fit." },
  { id: 2, name: "Everyday Sneakers", price: 119, oldPrice: null, colors: ["#111827","#eab308"], tag: "New", desc: "Lightweight sole with premium canvas." },
  { id: 3, name: "Minimalist Watch", price: 199, oldPrice: 249, colors: ["#f3f4f6","#0ea5a4"], tag: "Limited", desc: "Slim profile, sapphire glass." },
  { id: 4, name: "Canvas Tote", price: 39, oldPrice: null, colors: ["#fef3c7","#fce7f3"], tag: null, desc: "Durable cotton canvas." },
];

export default function ElevatedEcomMiddle() {
  const [quick, setQuick] = useState(null);
  const [added, setAdded] = useState(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
       <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

  .font-hand {
    font-family: 'Patrick Hand', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }

  @keyframes pulse-scale {
    0% { transform: scale(1); }
    50% { transform: scale(2.06); }
    100% { transform: scale(1); }
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateX(16px); }
    100% { transform: translateY(0); }
  }
`}</style>


      {/* HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-50 to-rose-50 text-amber-700 text-xs font-semibold shadow-sm">
              New drop
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
              Fresh arrivals that stop you mid-scroll
            </h2>

            <p className="mt-3 text-sm text-black">
              Curated essentials with elevated details — bold color accents, tactile finishes, and pieces that feel premium.
            </p>

            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-lg hover:scale-105 transition" href="#shop">
                Shop collection
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" href="#learn">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Promo visual */}
        <div className="lg:col-span-6 relative">
          <div className="relative">
            <div className="absolute -left-8 -top-8 w-44 h-44 rounded-3xl bg-gradient-to-br from-pink-50 via-amber-50 to-sky-50 opacity-70 blur-3xl transform rotate-6 pointer-events-none" />
            <div className="relative rounded-3xl bg-gradient-to-br from-white/60 to-slate-50/60 border border-white/30 backdrop-blur-md shadow-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-slate-100 to-white flex items-center justify-center transform -rotate-3 shadow-inner">
                  <div className="w-20 h-20 rounded-md bg-slate-200/60 animate-float" />
                </div>
                <div>
                  <p className="text-xs text-rose-600 font-semibold">Limited drop</p>
                  <h3 className="mt-1 text-xl font-semibold">The Weekend Edit</h3>
                  <p className="mt-1 text-sm text-slate-600">A small edit of versatile pieces for relaxed weekends.</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a className="px-3 py-2 rounded-full bg-rose-50 text-rose-700 text-sm border border-rose-100 hover:scale-105 transition" href="#shop">Shop the drop</a>
                <a className="px-3 py-2 rounded-full border border-slate-100 text-sm hover:bg-slate-50" href="#learn">See details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div id="shop" className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-slate-700">Featured</h4>
          <div className="text-xs text-slate-500">Handpicked for you</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl p-4 bg-gradient-to-br from-white/70 to-slate-50/60 border border-white/30 backdrop-blur-md shadow-xl overflow-hidden"
            >
              {/* neon accent line */}
              <div className={`absolute left-0 top-0 h-full w-1 ${idx % 2 === 0 ? 'bg-gradient-to-b from-rose-400 to-amber-300' : 'bg-gradient-to-b from-sky-400 to-indigo-400'} opacity-90`} />

              {/* floating accent blob */}
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-60 blur-2xl" style={{ background: idx % 2 === 0 ? 'linear-gradient(135deg,#fff1f2,#fff7ed)' : 'linear-gradient(135deg,#ecfeff,#eef2ff)' }} />

              <div className="relative z-10 flex gap-3">
                {/* product image placeholder with tilt */}
                <motion.div
                  whileHover={{ rotate: -6, x: -4 }}
                  className="w-24 h-24 rounded-xl bg-slate-100 flex items-center justify-center shadow-md overflow-hidden"
                >
                  <div className="w-20 h-20 rounded-md bg-white/60" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="text-sm font-semibold text-slate-900">{p.name}</h5>
                      <p className="mt-1 text-xs text-slate-500">{p.desc}</p>
                    </div>

                    {p.tag && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/40 backdrop-blur-sm text-slate-800 border border-white/20">{p.tag}</span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <div className="text-lg font-bold text-slate-900">₹{p.price}</div>
                      {p.oldPrice && <div className="text-xs text-slate-400 line-through">₹{p.oldPrice}</div>}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {p.colors.map((c, i) => (
                          <button
                            key={i}
                            aria-label={`color ${i}`}
                            className="w-6 h-6 rounded-full ring-2 ring-white border border-slate-100 shadow-sm"
                            style={{ background: c }}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setQuick(p)}
                        className="text-xs px-3 py-1 rounded-full bg-white/60 border border-white/20 hover:scale-105 transition"
                      >
                        Quick view
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => { setAdded(p.id); setTimeout(()=>setAdded(null),900); }}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 to-indigo-700 text-white px-3 py-2 text-sm shadow hover:shadow-2xl transform transition"
                    >
                      Add to cart
                      <span className={`ml-2 inline-block ${added === p.id ? 'animate-pulse' : ''}`}>+</span>
                    </button>

                    <button className="w-12 h-10 rounded-lg border border-white/20 bg-white/40 hover:bg-white/60 flex items-center justify-center">
                      ♥
                    </button>
                  </div>
                </div>
              </div>

              {/* animated price badge bottom-right */}
              <div className="absolute right-3 bottom-3">
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-200 to-rose-200 text-amber-800 text-xs font-semibold shadow-sm transform -rotate-3">
                  Save {p.oldPrice ? Math.round(((p.oldPrice - p.price)/p.oldPrice)*100) + '%' : '—'}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* QUICK VIEW */}
      {quick && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setQuick(null)} />
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl">
            <div className="flex gap-6">
              <div className="w-48 h-48 rounded-xl bg-slate-100 flex items-center justify-center">
                <div className="w-40 h-40 rounded-md bg-white/60" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{quick.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{quick.desc}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="text-2xl font-bold">₹{quick.price}</div>
                  {quick.oldPrice && <div className="text-sm text-slate-400 line-through">₹{quick.oldPrice}</div>}
                </div>
                <div className="mt-5 flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Add to cart</button>
                  <button className="px-4 py-2 rounded-lg border">View product</button>
                </div>
              </div>
              <button onClick={() => setQuick(null)} className="text-slate-500 hover:text-slate-700">✕</button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
