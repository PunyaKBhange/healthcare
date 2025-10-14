"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Activity,
  Heart,
  Droplet,
  Brain,
  Thermometer,
  Waves,
  Users,
  FileText,
  CalendarDays,
} from "lucide-react"
import { useState } from "react"

const mockPatients = [
  { id: "P-1001", name: "Aarav Sharma", age: 34, gender: "Male" },
  { id: "P-1002", name: "Ishita Verma", age: 41, gender: "Female" },
  { id: "P-1003", name: "Rahul Mehta", age: 52, gender: "Male" },
  { id: "P-1004", name: "Neha Gupta", age: 28, gender: "Female" },
]

const mockPatientSummary = {
  bmi: 26.4,
  bloodPressure: "128/84",
  glucoseLevel: 104,
  cholesterol: 210,
  heartRate: 76,
  diseaseRisks: {
    diabetes: 18,
    heart: 16,
    stroke: 9,
    depression: 6,
    parkinsons: 2,
    thyroid: 8,
    kidney: 7,
    hepatitis: 5,
  },
  recentAssessments: [
    { id: 1, type: "Diabetes Risk Assessment", date: "2025-08-15", result: "Low Risk" },
    { id: 2, type: "Heart Disease Assessment", date: "2025-08-01", result: "Moderate Risk" },
    { id: 3, type: "Thyroid Assessment", date: "2025-07-10", result: "Low Risk" },
    { id: 4, type: "Kidney Function Assessment", date: "2025-06-28", result: "Low Risk" },
  ],
}

export default function DoctorPage() {
  const [activeTab, setActiveTab] = useState("patients")
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(mockPatients[0]?.id ?? null)

  const selectedPatient = mockPatients.find((p) => p.id === selectedPatientId) ?? mockPatients[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showBackButton />
      <main className="container mx-auto max-w-6xl flex-1 py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
            <p className="text-muted-foreground">Review patients, summaries, and recent assessments</p>
          </div>
          <Button variant="outline" size="sm">
            Export Reports
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="summaries">Summaries</TabsTrigger>
            <TabsTrigger value="assessments">Recent Assessments</TabsTrigger>
          </TabsList>

          <TabsContent value="patients">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Users className="h-4 w-4" /> Patient List</CardTitle>
                  <CardDescription>Select a patient to view details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {mockPatients.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPatientId(p.id)}
                        className={`w-full text-left p-3 rounded-md border transition ${
                          selectedPatientId === p.id ? "bg-primary/5 border-primary" : "hover:bg-muted"
                        }`}
                      >
                        <div className="font-medium">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.id} • {p.gender} • {p.age} yrs</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Selected Patient Summary</CardTitle>
                  <CardDescription>{selectedPatient.name} • {selectedPatient.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg border">
                      <div className="text-xs text-muted-foreground">BMI</div>
                      <div className="text-xl font-semibold">{mockPatientSummary.bmi}</div>
                    </div>
                    <div className="p-4 rounded-lg border">
                      <div className="text-xs text-muted-foreground">Blood Pressure</div>
                      <div className="text-xl font-semibold">{mockPatientSummary.bloodPressure}</div>
                    </div>
                    <div className="p-4 rounded-lg border">
                      <div className="text-xs text-muted-foreground">Glucose</div>
                      <div className="text-xl font-semibold">{mockPatientSummary.glucoseLevel} mg/dL</div>
                    </div>
                    <div className="p-4 rounded-lg border">
                      <div className="text-xs text-muted-foreground">Cholesterol</div>
                      <div className="text-xl font-semibold">{mockPatientSummary.cholesterol} mg/dL</div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                          <Activity className="h-4 w-4 mr-2" /> Disease Risk Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {Object.entries(mockPatientSummary.diseaseRisks).map(([disease, risk]) => (
                            <div key={disease} className="flex items-center justify-between">
                              <span className="text-sm capitalize">{disease}</span>
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${risk > 20 ? "bg-red-500" : risk > 10 ? "bg-amber-500" : "bg-green-500"}`}
                                  style={{ width: `${risk}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">{risk}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center">
                          <CalendarDays className="h-4 w-4 mr-2" /> Recent Assessments
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {mockPatientSummary.recentAssessments.map((a) => (
                            <div key={a.id} className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium">{a.type}</div>
                                <div className="text-xs text-muted-foreground">{a.date}</div>
                              </div>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  a.result.includes("Low") ? "bg-green-100 text-green-800" : a.result.includes("Moderate") ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"
                                }`}
                              >
                                {a.result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="summaries">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><FileText className="h-4 w-4" /> Patient Summaries</CardTitle>
                  <CardDescription>High-level patient health overviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockPatients.map((p) => (
                      <div key={p.id} className="p-4 rounded-md border">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-medium">{p.name}</div>
                            <div className="text-xs text-muted-foreground">{p.id} • {p.gender} • {p.age} yrs</div>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2"><Heart className="h-3 w-3" /> BP 126/82</div>
                          <div className="flex items-center gap-2"><Droplet className="h-3 w-3" /> Glucose 98</div>
                          <div className="flex items-center gap-2"><Thermometer className="h-3 w-3" /> BMI 24.8</div>
                          <div className="flex items-center gap-2"><Waves className="h-3 w-3" /> Chol 190</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Brain className="h-4 w-4" /> Risk Snapshot</CardTitle>
                  <CardDescription>Aggregated risk indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Diabetes</span>
                      <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800">Medium</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Heart</span>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Low</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Stroke</span>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Low</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Thyroid</span>
                      <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800">Medium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="assessments">
            <Card>
              <CardHeader>
                <CardTitle>Recent Assessments</CardTitle>
                <CardDescription>Latest assessments across all patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPatientSummary.recentAssessments.map((a) => (
                    <div key={a.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full p-2 bg-primary/10">
                          {a.type.includes("Diabetes") ? (
                            <Droplet className="h-4 w-4 text-primary" />
                          ) : a.type.includes("Heart") ? (
                            <Heart className="h-4 w-4 text-primary" />
                          ) : a.type.includes("Depression") ? (
                            <Brain className="h-4 w-4 text-primary" />
                          ) : a.type.includes("Stroke") ? (
                            <Activity className="h-4 w-4 text-primary" />
                          ) : a.type.includes("Thyroid") ? (
                            <Thermometer className="h-4 w-4 text-primary" />
                          ) : (
                            <FileText className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{a.type}</p>
                          <div className="text-sm text-muted-foreground">{a.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            a.result.includes("Low") ? "bg-green-100 text-green-800" : a.result.includes("Moderate") ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {a.result}
                        </span>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


