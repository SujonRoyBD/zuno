"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

export function According() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")

  return (
    <div className="container py-10">
      <div>
        <div className="py-5">
          <button className="flex justify-center items-center mx-auto py-2 px-6 rounded-full bg-[#1313130f]">
            Question?
          </button>
        </div>
        <p className="font-bold text-3xl text-center">We’re here to help</p>
      </div>

      <Accordion
        type="single"
        collapsible
        value={openItem || undefined}
        onValueChange={(val) => setOpenItem(val)}
        className="w-full mt-8"
      >
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="flex justify-between items-center [&>svg]:hidden no-underline hover:no-underline">
            <span>What is Zuno?</span>
            <span className="text-2xl font-bold select-none">
              {openItem === "item-1" ? "−" : "+"}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Zuno combines AI technology with real psychology-based techniques,
              offering support that adapts to your mood, routine, and specific
              challenges like anxiety, sleep, libido, and focus.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="flex justify-between items-center [&>svg]:hidden no-underline hover:no-underline">
            <span>Is Zuno a replacement for therapy?</span>
            <span className="text-2xl font-bold select-none">
              {openItem === "item-2" ? "−" : "+"}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              No. Zuno is a powerful daily tool for emotional well-being, but
              it’s not a medical service or a substitute for professional
              therapy. It’s here to support you, not replace clinical care.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="flex justify-between items-center [&>svg]:hidden no-underline hover:no-underline">
            <span>Who is Zuno for?</span>
            <span className="text-2xl font-bold select-none">
              {openItem === "item-3" ? "−" : "+"}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Zuno is designed for women aged 18–35 who want to better
              understand their mental and emotional health using modern,
              tech-savvy tools — no stigma, no pressure.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="flex justify-between items-center [&>svg]:hidden no-underline hover:no-underline">
            <span>How does the AI actually help?</span>
            <span className="text-2xl font-bold select-none">
              {openItem === "item-4" ? "−" : "+"}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Zuno uses AI to learn your patterns, suggest personalized
              exercises, monitor your emotional shifts, and guide you through
              breathing, journaling, focus-building, and self-awareness
              practices.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
