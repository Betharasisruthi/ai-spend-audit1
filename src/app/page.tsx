import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-b
        from-black
        to-gray-900
        text-white
        px-6
        py-16
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* NAVBAR (ADDED) */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-bold">
            AI Spend Audit
          </h1>

          <a
            href="/dashboard"
            className="text-blue-400 hover:underline"
          >
            Dashboard
          </a>
        </div>

        {/* HERO SECTION */}
        <div className="mb-14">
          <div
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-gray-800
              text-sm
              mb-6
            "
          >
            AI Cost Optimization Platform
          </div>

          <h1
            className="
              text-6xl
              font-bold
              leading-tight
              max-w-4xl
            "
          >
            Stop Overpaying
            <br />
            For AI Tools
          </h1>

          <p
            className="
              mt-6
              text-xl
              text-gray-400
              max-w-2xl
            "
          >
            Instantly audit your AI stack,
            identify wasted spend, and
            discover cheaper alternatives
            for ChatGPT, Claude,
            Cursor, GitHub Copilot,
            and more.
          </p>
        </div>

        {/* FORM */}
        <AuditForm />
      </div>
    </main>
  );
}