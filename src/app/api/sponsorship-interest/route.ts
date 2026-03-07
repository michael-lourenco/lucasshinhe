import { NextResponse } from "next/server";
import { z } from "zod";

const sponsorLeadSchema = z.object({
  companyName: z.string().trim().min(2),
  contactName: z.string().trim().min(2),
  email: z.email(),
  message: z.string().trim().min(20),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const result = sponsorLeadSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      lead: result.data,
      message: "Lead de patrocínio recebido com sucesso.",
    },
    { status: 201 },
  );
}
