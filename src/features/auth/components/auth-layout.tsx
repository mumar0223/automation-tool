export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-xl p-6">{children}</div>
    </div>
  );
}
