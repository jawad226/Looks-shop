"use client";

export const dynamic = "force-dynamic";

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <>
      Order ID: {orderId}
    </>
  );
}
