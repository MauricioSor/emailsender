import express, { Request, Response } from "express";

export const email = async (req,res) => {
    try {
        app.get("/", async (req,res) => {
            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["delivered@resend.dev"],
                subject: "hello world",
                Text: "<strong>it works!</strong>",
            });

            if (error) {
                return res.status(400).json({ error });
            }

            res.status(200).json({ data });
        });
    } catch (error) {
        return res.status()
    }
}