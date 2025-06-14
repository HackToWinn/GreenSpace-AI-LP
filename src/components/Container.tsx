export default function Container({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="w-full px-32 py-16">
      {children}
    </div>
  )
}