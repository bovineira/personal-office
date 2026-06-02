import { redirect } from "next/navigation";

/** Mantém /teste01 funcionando redirecionando para a nova home. */
export default function Teste01RedirectPage() {
  redirect("/");
}
