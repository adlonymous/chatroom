import { User } from "@supabase/supabase-js";
import React, { useEffect, useRef } from "react";

export default function InitUser({ user }: { user: User | undefined }) {
  const init = useRef(false);
  useEffect(() => {}, []);
  return <></>;
}
