import { LoginForm } from "@/components/pages/LoginForm";

import { login } from "./actions";

type PageProps = {
  params?: {
    num?: string;
  }
  searchParams?: {
    error?: string;
  }
}

export default function Page(props: PageProps) {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <form>
        <LoginForm formAction={login} error={props?.searchParams?.error} />
      </form>
    </section>
  )
}
