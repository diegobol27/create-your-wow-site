import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  nombre: z.string().trim().min(1, "Escribe tu nombre").max(100),
  empresa: z.string().trim().min(1, "Escribe tu empresa").max(150),
  correo: z.string().trim().email("Correo no válido").max(255),
  telefono: z
    .string()
    .trim()
    .min(5, "Teléfono no válido")
    .max(30)
    .regex(/^[0-9+()\s-]+$/, "Solo números"),
  mensaje: z.string().trim().min(1, "Cuéntanos qué necesitas").max(1000),
});

type Campos = z.infer<typeof schema>;
const vacio: Campos = { nombre: "", empresa: "", correo: "", telefono: "", mensaje: "" };

export function ContactForm() {
  const [v, setV] = useState<Campos>(vacio);
  const [err, setErr] = useState<Partial<Record<keyof Campos, string>>>({});
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  const set = (k: keyof Campos) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV({ ...v, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(v);
    if (!r.success) {
      const f: Partial<Record<keyof Campos, string>> = {};
      for (const i of r.error.issues) f[i.path[0] as keyof Campos] ??= i.message;
      setErr(f);
      return;
    }
    setErr({});
    setEstado("enviando");
    const { error } = await supabase.from("contact_submissions").insert(r.data);
    if (error) return setEstado("error");
    setEstado("ok");
    setV(vacio);
  }

  const input =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

  if (estado === "ok")
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-background/40 p-8 text-center">
        <p className="font-display text-2xl font-bold text-gradient">¡Gracias por escribirnos!</p>
        <p className="mt-3 text-muted-foreground">Recibimos tus datos y pronto nos pondremos en contacto.</p>
        <button onClick={() => setEstado("idle")} className="mt-6 rounded-full border border-border px-6 py-2 font-semibold hover:bg-muted">
          Enviar otro mensaje
        </button>
      </div>
    );

  const campo = (k: keyof Campos, label: string, type = "text", auto?: string) => (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold">{label}</span>
      <input type={type} autoComplete={auto} value={v[k]} onChange={set(k)} className={input} />
      {err[k] && <span className="mt-1 block text-sm text-destructive">{err[k]}</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-border bg-background/40 p-6 text-left sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {campo("nombre", "Nombre", "text", "name")}
        {campo("empresa", "Empresa", "text", "organization")}
        {campo("correo", "Correo electrónico", "email", "email")}
        {campo("telefono", "Teléfono de contacto", "tel", "tel")}
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold">¿Qué necesitas?</span>
        <textarea rows={4} maxLength={1000} value={v.mensaje} onChange={set("mensaje")} placeholder="Cuéntanos brevemente tu pregunta o requerimiento" className={input} />
        {err.mensaje && <span className="mt-1 block text-sm text-destructive">{err.mensaje}</span>}
      </label>
      {estado === "error" && <p className="text-sm text-destructive">No pudimos enviar tu mensaje. Intenta de nuevo.</p>}
      <button type="submit" disabled={estado === "enviando"} className="glow w-full rounded-full bg-brand px-8 py-4 font-semibold text-primary-foreground disabled:opacity-60">
        {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
