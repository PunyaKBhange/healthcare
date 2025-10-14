"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: number
  username: string
  email: string
  profile?: {
    fullName?: string
    age?: number
    gender?: string
    height?: number
    weight?: number
  }
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (userData: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  // Default, always-logged-in user
  const defaultUser: User = {
    id: 1,
    username: "health_user",
    email: "user@example.com",
    profile: {
      fullName: "HealthPredict User",
      age: 29,
      gender: "Prefer not to say",
      height: 170,
      weight: 68,
    },
  }

  const [user, setUser] = useState<User | null>(defaultUser)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Persist the default user to localStorage so refreshes keep the session
    localStorage.setItem("user", JSON.stringify(defaultUser))
  }, [])

  // No-op login/logout; keep user always logged in
  const login = (_userData: User) => {
    setUser(defaultUser)
    localStorage.setItem("user", JSON.stringify(defaultUser))
  }

  const logout = () => {
    setUser(defaultUser)
    localStorage.setItem("user", JSON.stringify(defaultUser))
  }

  const isAuthenticated = true

  if (loading) return null

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
