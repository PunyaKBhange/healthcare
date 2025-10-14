"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Your AI Partner for Early Health Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
                HealthPredict helps you assess risks for diabetes, heart disease, kidney issues, and more.
                Upload reports, get quick screenings, and understand results with AI-powered explanations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/FileUploadPage">
                  <Button size="lg" variant="outline">Analyze Medical PDF</Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Patient</h2>
                  <p className="text-muted-foreground">
                    Access assessments and AI explanations tailored for you.
                  </p>
                </div>
                <Link href="/">
                  <Button className="mt-6 w-full">Go to Patient Portal</Button>
                </Link>
              </Card>

              <Card className="p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Doctor</h2>
                  <p className="text-muted-foreground">
                    View patient summaries and insights (coming soon).
                  </p>
                </div>
                <Link href="/doctor">
                  <Button className="mt-6 w-full" variant="secondary">Enter Doctor View</Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


