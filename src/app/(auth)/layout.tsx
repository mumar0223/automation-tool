import AuthLayout from "@/features/auth/components/auth-layout";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
