"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("018d63e1-c052-4bcb-8cd0-9153650a6925");
    }, []);

    return null;
}