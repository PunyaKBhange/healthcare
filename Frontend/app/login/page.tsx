"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Navbar } from "@/components/navbar"
import { useAuth } from "@/context/auth-context"
import { API_BASE_URL } from "@/lib/utils"

// Import the necessary icons
import { Github } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/profile")
  }, [router])
  return null
}
