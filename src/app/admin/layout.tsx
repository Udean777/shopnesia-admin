import { ADMIN } from "@/constants/consntants";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AdminLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const supabase = createClient();

  const { data: authData } = await (await supabase).auth.getUser();

  if (authData?.user) {
    const { data, error } = await (await supabase)
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (error || !data) {
      console.error(`Error fetching user data! ${error}`);
      return;
    }

    if (data.type === ADMIN) return redirect("/");
  }

  return <>{children}</>;
};

export default AdminLayout;
