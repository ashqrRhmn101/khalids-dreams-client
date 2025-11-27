"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "./authContext";
import { useRouter } from "next/navigation";

export default function PrivateRouter({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/Auth/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <h2>Loading…</h2>;
  }

  if (!user) {
    return null; 
  }

  return <>{children}</>;
}
