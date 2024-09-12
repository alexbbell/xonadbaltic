export default function RootLayout({
    //children,
  }: {
    children: React.ReactNode
  }) {
    return (


    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Vitamins!</h1>
        <div>
          <div>A</div><div>Fat-soluble</div>
        </div>
    </div>
    )
  }
