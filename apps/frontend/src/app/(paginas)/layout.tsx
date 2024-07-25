"use client"

import { ProvedorUsuario } from "@/data/contexts/ContextoUsuario"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProvedorUsuario>{children}</ProvedorUsuario>
}
