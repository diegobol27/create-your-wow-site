CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL CHECK (char_length(nombre) BETWEEN 1 AND 100),
  empresa text NOT NULL CHECK (char_length(empresa) BETWEEN 1 AND 150),
  correo text NOT NULL CHECK (char_length(correo) BETWEEN 3 AND 255),
  telefono text NOT NULL CHECK (char_length(telefono) BETWEEN 5 AND 30),
  mensaje text NOT NULL CHECK (char_length(mensaje) BETWEEN 1 AND 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitantes pueden enviar formulario" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);