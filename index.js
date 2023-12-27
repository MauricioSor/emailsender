import { Resend } from 'resend';
import express from "express"

const resend = new Resend('re_XohbZVTH_BSg8bWzSDsAkQdQTCL1zrQEX');

(async function () {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['mauricioutn2017@gmail.com'],
        subject: 'Hello World',
        html: '<strong>Hola soy yo!</strong>',
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
})();