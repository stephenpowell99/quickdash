import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export type AuthUser = {
  id: string;
  email: string;
};

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
      return null;
    }

    const secret = process.env.JWT_SECRET || "your-secret-key";
    const decoded = verify(token, secret) as AuthUser;
    
    return decoded;
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("auth-token");
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}; 