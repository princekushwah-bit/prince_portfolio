export const SignatureSection = () => {
  return (
    <section className="relative py-8 px-4 flex flex-col items-center text-center overflow-hidden">
      
      <div className="group relative w-full max-w-4xl mx-auto mt-4 py-6 px-6 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none group-hover:bg-blue-400/20 transition-all duration-700"></div>

        {/* Updated Main Line */}
        <h3 className="text-2xl md:text-5xl font-black tracking-tight text-center leading-tight">
          <span className="text-slate-800 dark:text-slate-100 opacity-90">Writing </span>
          
          <span className="relative inline-block px-1 text-blue-600 dark:text-blue-400 font-extrabold italic">
            code today
          </span>
          
          <span className="text-slate-800 dark:text-slate-100 opacity-90 mx-2 text-xl md:text-3xl font-medium">for the</span>
          
          <br className="md:hidden" /> 
          
          <span className="relative inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-emerald-400">
            problems of tomorrow.
            {/* Animated Underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-700 group-hover:w-full opacity-70"></span>
          </span>
        </h3>

        {/* Technical Detail Footer */}
        <div className="mt-6 flex items-center gap-4 text-[10px] md:text-xs font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase">
          <span className="hover:text-blue-500 transition-colors cursor-default">Status: Active</span>
          <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <span className="hover:text-emerald-500 transition-colors cursor-default">v2.0.26</span>
          <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <span className="hover:text-orange-500 transition-colors cursor-default underline underline-offset-4 decoration-blue-500/30">Prince Kushwah</span>
        </div>
      </div>
    </section>
  );
};