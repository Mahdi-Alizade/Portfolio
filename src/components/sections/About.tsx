import React from 'react'
import { Terminal, Shield, Wrench, Code2 } from 'lucide-react'

export function About() {
  // تعریف ستون‌های مهندسی به صورت تفکیک شده و خوانا
  let engineeringPillars = []

  let firstPillarTitle = 'Internals & Low-Level Foundations'
  let firstPillarDesc = 'Building core components from scratch instead of treating dependencies as black boxes: stack-based bytecode virtual machines, raw RESP parsers, append-only disk storage, and autodiff engines.'
  let firstPillarIcon = Terminal

  let firstPillar = {
    title: firstPillarTitle,
    description: firstPillarDesc,
    icon: firstPillarIcon,
  }
  engineeringPillars.push(firstPillar)

  let secondPillarTitle = 'Distributed Platforms & Isolation'
  let secondPillarDesc = 'Designing scalable microservice pipelines using BullMQ, Dockerode for isolated container execution, and robust message queuing architectures.'
  let secondPillarIcon = Shield

  let secondPillar = {
    title: secondPillarTitle,
    description: secondPillarDesc,
    icon: secondPillarIcon,
  }
  engineeringPillars.push(secondPillar)

  let thirdPillarTitle = 'Production Software Delivery'
  let thirdPillarDesc = 'Shipping production-grade systems like Nova AI: automating complex multi-channel business interactions with strict state control, scheduling integrity, and secure API boundaries.'
  let thirdPillarIcon = Wrench

  let thirdPillar = {
    title: thirdPillarTitle,
    description: thirdPillarDesc,
    icon: thirdPillarIcon,
  }
  engineeringPillars.push(thirdPillar)

  return (
    <section id="about" className="py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-electric-400">
              <Code2 className="w-4 h-4" />
              <span>PHILOSOPHY &amp; APPROACH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight leading-snug">
              Understanding systems from the memory and runtime layer up.
            </h2>

            {/* ارتقای سایز متن از text-sm به text-base/text-lg برای خوانایی خیلی بهتر */}
            <div className="space-y-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
              <p>
                My focus as a software engineer revolves around digging into the fundamental
                mechanics of computation. Rather than simply wiring together external SaaS APIs,
                I deliberately explore how runtimes evaluate bytecode, how databases persist logs to disk,
                and how distributed queues coordinate work across containers.
              </p>
              <p>
                This low-level curiosity directly informs how I build high-level applications.
                Whether developing an embedded key-value store like <span className="text-zinc-200">DBDB</span>,
                rebuilding PyTorch autodiff in <span className="text-zinc-200">SlowTorch</span>,
                or orchestrating clinic scheduling pipelines in <span className="text-zinc-200">Nova AI</span>,
                the goal remains unchanged: deterministic behavior, predictable memory, and zero bloat.
              </p>
            </div>

            <div className="pt-4">
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-850 font-mono text-sm text-zinc-400 space-y-2">
                <div className="text-zinc-500">// Engineering Principle</div>
                <div className="text-zinc-200 leading-relaxed">
                  &quot;If you don&apos;t know how the abstraction works beneath you, you don&apos;t own the reliability of your system.&quot;
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {engineeringPillars.map(function (pillar) {
              let IconComponent = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded bg-zinc-900 border border-zinc-800 text-electric-400 shrink-0 mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-3">
                        {pillar.title}
                      </h3>
                      {/* ارتقای متن توضیحات کارت‌ها به text-base */}
                      <p className="text-base text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}