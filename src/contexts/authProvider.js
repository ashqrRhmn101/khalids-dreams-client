"use client";

import { AuthContext } from "./authContext";

export default function AuthProvider({children}) {

    const authInfo = {

    }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
}