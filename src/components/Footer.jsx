export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto mt-16 max-w-[88rem] px-[20px] pb-8 sm:px-[20px] lg:px-[20px]">
      <div className="border-t border-white/10 pt-6">
        <p className="text-center text-sm tracking-[0.06em] text-slate-400">
          Copyright {year} Rehant Roy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
