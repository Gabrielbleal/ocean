
"use client";
import React, { useState, useRef } from "react";

export default function AnaliseCreditoPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cpfRef = useRef<HTMLInputElement>(null);
  const rendaRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData();
    formData.append("nome", form.nome.value);
    formData.append("renda", form.renda.value);
    formData.append("telefone", form.telefone.value);
    formData.append("email", form.email.value);
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbyJNE-Lrk-1HS3SVrncCTYt4n101hgw7FZglikTGy5mMSWraJCZuFm8ePt1rPP5rjTggA/exec", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setIsSubmitting(false);
  };

  // Máscara de CPF
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
  };

  // Máscara de moeda para renda bruta
  const handleRendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = (parseInt(value, 10) / 100).toFixed(2) + '';
    value = value.replace('.', ',');
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    e.target.value = value;
  };

  // Máscara para telefone
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    }
    e.target.value = value;
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl shadow-lg border border-blue-100">
      <h1 className="text-3xl font-bold mb-8 text-black text-center tracking-tight">Solicite sua análise de crédito</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium text-black">Nome completo</label>
          <input type="text" name="nome" className="w-full border rounded px-3 py-2 text-black" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Renda familiar</label>
          <input
            type="text"
            name="renda"
            className="w-full border rounded px-3 py-2 text-black"
            required
            ref={rendaRef}
            onChange={handleRendaChange}
            inputMode="numeric"
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Telefone</label>
          <input
            type="tel"
            name="telefone"
            className="w-full border rounded px-3 py-2 text-black"
            required
            inputMode="tel"
            autoComplete="off"
            ref={telefoneRef}
            onChange={handleTelefoneChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">E-mail</label>
          <input type="email" name="email" className="w-full border rounded px-3 py-2 text-black" required autoComplete="off" />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
        {status === "success" && (
          <div className="mt-4 p-3 rounded bg-green-100 text-green-800 text-center font-semibold border border-green-300 animate-fade-in">
            Formulário enviado com sucesso! Em breve entraremos em contato.
          </div>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Erro ao enviar. Tente novamente.</p>
        )}
      </form>
      <div className="mt-8 text-center text-xs text-gray-500">
        <span className="inline-block bg-gray-100 px-3 py-2 rounded">Dados protegidos pelo direito constitucional à intimidade (Art. 5º, X, CF/88)</span>
      </div>
    </div>
  );
}
