export default function Container({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12 md:py-16">
      {children}
    </div>
  )
}