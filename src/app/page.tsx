import AuditForm from "@/components/AuditForm";

export default function Home() {

  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        p-10
      "
    >

      <h1 className="text-5xl font-bold">
        AI Spend Audit
      </h1>

      <p className="mt-4 text-gray-400 max-w-2xl">
        Discover whether your startup
        is overspending on AI tools
        like ChatGPT, Claude,
        Cursor, and GitHub Copilot.
      </p>

      <AuditForm />

    </main>
  );
}