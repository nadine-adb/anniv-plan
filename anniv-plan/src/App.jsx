import { useEffect, useState } from "react"

export default function App() {
  const [step, setStep] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [showThwip, setShowThwip] = useState(false)
  const [openMemory, setOpenMemory] = useState("baby")
  const [showSpiderPop, setShowSpiderPop] = useState(false)

  const nextStep = () => setStep((prev) => prev + 1)
  const resetSteps = () => {
    setStep(0)
    setOpenMemory("baby")
    setShowSpiderPop(false)
  }

  useEffect(() => {
    setAnimate(false)
    const timer = setTimeout(() => setAnimate(true), 50)
    return () => clearTimeout(timer)
  }, [step])

  useEffect(() => {
    if (step === 0) return
    setShowThwip(true)
    const timer = setTimeout(() => setShowThwip(false), 700)
    return () => clearTimeout(timer)
  }, [step])

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => setShowSpiderPop(true), 1200)
      return () => clearTimeout(timer)
    } else {
      setShowSpiderPop(false)
    }
  }, [step])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {step === 0 ? (
        <div className="absolute inset-0 bg-zinc-950" />
      ) : (
        <>
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="halftone-overlay" />

          <div className="corner-web left-0 top-0" />
          <div className="corner-web right top-0 right-0" />
          <div className="corner-web bottom left-0 bottom-0" />
          <div className="corner-web right bottom right-0 bottom-0" />

          <div className="web-line left-0 top-0" />
          <div className="web-line right-0 top-0 rotate-90" />
          <div className="web-line small left-10 bottom-10 rotate-180" />

          <div className="spider-wrap swing">
            <div className="spider-thread" />
            <div className="spider-body" />
          </div>
        </>
      )}

      {showThwip && <div className="thwip-pop">THWIP!</div>}

      {showSpiderPop && (
        <div className="spider-pop">
          <div className="spider-pop-title">SPIDER-SENSE!</div>
          <div className="spider-pop-text">
            Tap the comic cards to reveal the hidden message.
          </div>
        </div>
      )}

      <main className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-8">
        <div
          className={`${
            step === 0
              ? "w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md"
              : "poster-shell p-6 md:p-10"
          } transition-all duration-500 ${
            animate ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-[0.98]"
          }`}
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <span className={`pill pill-blue ${step !== 0 ? "-rotate-2" : ""}`}>
              Earth-1610
            </span>

            <span className={`pill pill-red ${step !== 0 ? "rotate-2" : ""}`}>
              Step {step + 1} / 5
            </span>
          </div>

          {step === 0 && (
            <section className="text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Interface Prototype
              </p>

              <h1 className="mb-4 text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
                Testing
                <span className="block text-red-500">Visual Flow</span>
              </h1>

              <p className="message-font mx-auto mb-8 max-w-md text-sm leading-7 text-white/70 md:text-base">
                A simple step-by-step presentation prototype for single-page interaction.
              </p>

              <button
                onClick={nextStep}
                className="rounded-full bg-red-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:scale-105 hover:bg-red-400"
              >
                Open
              </button>
            </section>
          )}

          {step === 1 && (
  <section className="panel-grid">
    {/* LEFT SIDE */}
    <div>
      <div className="action-badge mb-5 -rotate-2 bg-red-500/15 text-red-300">
        Plot Twist
      </div>

      <h2 className="comic-font mb-5 text-5xl leading-none md:text-7xl">
        <span className="block text-white">OKAY...</span>
        <span className="mt-2 block text-cyan-300 soft-glow-blue">THIS ISN’T</span>
        <span className="mt-2 block text-red-500 soft-glow-red">FOR MY THESIS.</span>
      </h2>

      <p className="mb-3 text-lg font-semibold text-red-200">
        Happy Anniversary, love!!!! 🕷️❤️
      </p>

      <p className="message-font mb-8 max-w-xl text-base leading-8 text-white/90">
        I just wanted to make you something simple, fun, and a little
        bit Spider-Man coded because I know how much you like the theme.
      </p>

      <button
        onClick={nextStep}
        className="comic-font rounded-full border-2 border-cyan-300/20 bg-cyan-500 px-7 py-3 text-lg tracking-wider text-zinc-950 shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400"
      >
        KEEP GOING
      </button>
    </div>

    {/* RIGHT SIDE */}
    <div className="hidden md:flex items-center justify-center">
      <div className="relative max-w-md">
        <div className="absolute -top-4 left-4 z-10 rounded-full border-2 border-white bg-red-500 px-4 py-1 text-white comic-font text-lg shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          OUR UNIVERSE
        </div>

        <div className="overflow-hidden rounded-[1.7rem] border-4 border-white bg-white p-3 shadow-[14px_14px_0_rgba(0,0,0,0.35)] rotate-[2deg]">
          <img
            src="/us.jpg"
            alt="Us together"
            className="h-[420px] w-full rounded-[1rem] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
)}

          {step === 2 && (
            <section className="panel-grid">
              <div>
                <div className="action-badge mb-5 rotate-2 bg-fuchsia-500/12 text-fuchsia-300">
                  Multiverse
                </div>

                <h2 className="comic-font mb-5 text-5xl leading-none md:text-7xl">
                  <span className="block text-white">IN EVERY</span>
                  <span className="mt-2 block text-cyan-300 soft-glow-blue">UNIVERSE,</span>
                  <span className="mt-2 block text-red-500 soft-glow-red">I’D STILL CHOOSE YOU.</span>
                </h2>

                <p className="message-font mb-8 max-w-xl text-base leading-8 text-white/90">
                  If there are thousands of universes out there, I think I’d still
                  find you in every one of them. And somehow, you’d still end up
                  being my favorite person.
                </p>

                <button
                  onClick={nextStep}
                  className="comic-font rounded-full border-2 border-red-300/20 bg-red-500 px-7 py-3 text-lg tracking-wider text-white shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-400"
                >
                  NEXT
                </button>
              </div>

              <div className="note-card p-6 md:p-8">
                <p className="comic-font text-4xl text-cyan-300">MULTIVERSE NOTE</p>
                <p className="message-font mt-4 leading-8 text-white/90">
                  You’d still be my favorite plot twist, my comfort person, and
                  the one I’d still choose no matter what universe we end up in.
                </p>
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="memory-stage">
              <div className="mb-8 text-center">
                <div className="action-badge mb-5 rotate-1 bg-yellow-400/12 text-yellow-200">
                  Favorite Memories
                </div>

                <h2 className="comic-font text-5xl leading-none md:text-7xl">
                  <span className="block text-white">COMIC BOOK</span>
                  <span className="mt-2 block text-red-400 soft-glow-red">MEMORIES</span>
                </h2>

                <p className="message-font mt-4 text-white/85">
                  Tap the cards to reveal the hidden message.
                </p>
              </div>

              <div className="memory-grid">
                <div
                  onClick={() => setOpenMemory(openMemory === "baby" ? "" : "baby")}
                  className={`comic-card comic-card-left ${openMemory === "baby" ? "is-open" : ""}`}
                >
                  <div className="comic-card-inner">
                    <div className="comic-card-frame">
                      <div className="comic-card-stamp">BABY YOU</div>

                      <div className="comic-card-image-wrap">
                        <img
                          src="/babypic.jpg"
                          alt="Baby picture"
                          className="comic-card-image"
                        />
                      </div>

                      <div className="comic-card-overlay">
                        <span className="comic-card-chip">Tap to read</span>
                      </div>

                      <div className="comic-card-body">
                        <div className="comic-card-hidden-note">
                          <div className="comic-speech">
                            <p className="comic-card-text">
                              Cute na cute talaga ako sa picture mo dito HAHAHAH.
                              Pag nakikita ko tong picture mo, sarap mong pisilin sa
                              pisngi HAHAHA.
                            </p>
                          </div>
                        </div>

                        <p className="comic-card-hint">
                          {openMemory === "baby" ? "Tap again to hide" : "Tap to reveal message"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setOpenMemory(openMemory === "us" ? "" : "us")}
                  className={`comic-card comic-card-right ${openMemory === "us" ? "is-open" : ""}`}
                >
                  <div className="comic-card-inner">
                    <div className="comic-card-frame">
                      <div className="comic-card-stamp blue">US</div>

                      <div className="comic-card-image-wrap">
                        <img
                          src="/favoritepic.jpg"
                          alt="Us together"
                          className="comic-card-image"
                        />
                      </div>

                      <div className="comic-card-overlay">
                        <span className="comic-card-chip">Tap to read</span>
                      </div>

                      <div className="comic-card-body">
                        <div className="comic-card-hidden-note">
                          <div className="comic-speech">
                            <p className="comic-card-text">
                              This is one of my favorite pictures of us cuz ang saya natin
                              dito :D Wala lang, naalala ko kasi yung araw na yan na sobra
                              akong nag enjoy kasama ka. Nahiya pa akong magsabi sayo non
                              na magpic tayo LOL.
                            </p>
                          </div>
                        </div>

                        <p className="comic-card-hint">
                          {openMemory === "us" ? "Tap again to hide" : "Tap to reveal message"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <button
                  onClick={nextStep}
                  className="comic-font rounded-full border-2 border-cyan-300/20 bg-cyan-500 px-7 py-3 text-lg tracking-wider text-zinc-950 shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400"
                >
                  ONE LAST THING
                </button>
              </div>
            </section>
          )}

          {step === 4 && (
            <section className="panel-grid">
              <div>
                <div className="action-badge mb-5 -rotate-2 bg-red-500/12 text-red-300">
                  Final Note
                </div>

                <h2 className="comic-font mb-5 text-5xl leading-none md:text-7xl">
                  <span className="block text-white">HAPPY</span>
                  <span className="mt-2 block text-white">ANNIVERSARY</span>
                  <span className="mt-2 block text-red-500 soft-glow-red">MY MILES MORALES ❤️</span>
                </h2>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <button
                    onClick={resetSteps}
                    className="comic-font rounded-full border-2 border-white/20 px-7 py-3 text-lg tracking-wider text-white shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10"
                  >
                    REPLAY
                  </button>

                  <button
                    onClick={() => alert("Tara na chick chicken sa susunod 🕷️❤️")}
                    className="comic-font rounded-full border-2 border-red-300/20 bg-red-500 px-7 py-3 text-lg tracking-wider text-white shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-400"
                  >
                    ONE LAST SECRET
                  </button>
                </div>
              </div>

              <div className="note-card p-6 md:p-8">
                <p className="message-font mb-4 leading-8 text-white/90">
                  I know life has been busy and I’ve been deep in thesis mode lately,
                  but even with all that, I still wanted to make something just for you.
                </p>

                <p className="message-font mb-4 leading-8 text-white/90">
                  To remind you how much I love and appreciate you. Thank you for waiting
                  for me when I&apos;m busy, for being patient with me, and for being the
                  best partner I could ask for.
                </p>

                <p className="message-font mb-4 leading-8 text-white/90">
                  I know I&apos;m not a perfect or best girlfriend, but I hope you know
                  that I love you so much. I will do everything, anything, to make you happy.
                </p>

                <p className="message-font mb-4 leading-8 text-white/90">
                  May we play more games together in this universe and every other one.
                  May we find some tasty foods in every universe. And may we always have
                  chick chicken in every universe HAHAHAH.
                </p>

                <p className="message-font mb-4 leading-8 text-white/90">
                  You&apos;ll always have me, my Spider-Man.
                </p>

                <p className="message-font leading-8 text-white/90">
                  In this universe and every other one, you’re still one of the best
                  parts of my world.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}