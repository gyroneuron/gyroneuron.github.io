export function IntroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/linkedin-banner.png)",
          filter: "grayscale(100%) contrast(1.1) brightness(0.3)",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Vivek Jaglan</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">Building scalable mobile apps</p>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Mobile developer specializing in React Native and iOS apps that deliver results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>React Native</span>
            <span>•</span>
            <span>Swift</span>
            <span>•</span>
            <span>Supabase</span>
            <span>•</span>
            <span>Firebase</span>
          </div>
        </div>
      </div>
    </section>
  )
}
