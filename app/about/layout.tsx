export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
       <div className="flex gap-3">
        <div className="flex items-center p-24">
            sidebar
        </div>
        {children}
       </div>
      </>
    )
  }