import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Check, X, TrendingUp, Award, Shield, Users, Zap, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  ProDentim x ProvaDent
                  <span className="text-blue-700"> — Qual Realmente Vale a Pena?</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Comparativo REAL baseado em fórmula, modo de uso e benefícios — sem julgamentos superficiais. Análise completa para ajudar sua decisão.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Baseado em Dezenas de Reviews de Usuários Reais</h3>
                    <p className="text-blue-800 text-sm">
                      Avaliamos comentários de usuários no Trustpilot, fóruns e redes sociais. Comparação técnica de ingredientes, cepas probióticas e modo de uso.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById("comparison-table")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Comparação Detalhada
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-slate-700 border-slate-300 hover:bg-slate-50 text-lg px-8 py-6 rounded-lg font-semibold"
                  onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Análise ProDentim
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/OSTZLMBzOpDHs4GY0kUCpT/sandbox/j0AWZdG7P3T2Q4gaYy0P8G-img-1_1771446850000_na1fn_aGVyby1wcm9kZW50aW0tdnMtcHJvdmFkZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT1NUWkxNQnpPcERIczRHWTBrVUNwVC9zYW5kYm94L2owQVdaZEc3UDNUMlE0Z2FZeTBQOEctaW1nLTFfMTc3MTQ0Njg1MDAwMF9uYTFmbl9hR1Z5Ynkxd2NtOWtaVzUwYVcwdGRuTXRjSEp2ZG1Ga1pXNTAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lL9hgNiFgpBBOb5XmXM8WFYkS-GFFJLjlL3s4pGzVMJBA258fCj-A8Yd4O9ZfOLPH-rj3TrMtolb73tuKkSY~AIpMAmOF4PdCDILlH~xAOSxwqP99-3dukKXSKShpk37j7fwFRa7ZT5XidV1N-l-ttd~hhSZGnYDwrVRPtt~IR1Hprc0OBCPtf77HrhnKwuvImbInuo1OJTeNkE1rCLVyIK1mv4t2geEBCtBxEduHoJvdO9vG4MCFnFpEPyLr6QVh~6sFsh2gQ4Qwzc-gZRZIgMEMX-XP9pAFGaXMlGjrn1b~zRD5zA4q2G3Arr6EvqE~NZrYrcCcJFDJHkGy1rUCg__"
                alt="Comparação ProDentim vs ProvaDent - Fórmulas 2026"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RANKING VISUAL */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Ranking dos Melhores Suplementos Dentais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PRODENTIM CARD */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                1º
              </div>
              <Card className="p-8 border-2 border-blue-700 bg-blue-50 shadow-lg">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">ProDentim</h3>
                  <p className="text-slate-600 mb-4">Escolha Popular</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-lg text-slate-900">4.8/5</span>
                    <span className="text-sm text-slate-600">(95,000+ reviews)</span>
                  </div>
                  <p className="text-slate-700 font-semibold mb-4 text-sm">3.5 bilhões de CFUs com 3 cepas probióticas clinicamente estudadas</p>
                  <Button
                    size="lg"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg py-6 shadow-md hover:shadow-lg transition-all"
                    onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Ver Análise Completa
                  </Button>
                </div>
              </Card>
            </div>

            {/* PROVADENT CARD */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-slate-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                2º
              </div>
              <Card className="p-8 border-2 border-slate-300 bg-slate-50">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ProvaDent</h3>
                  <p className="text-slate-600 mb-4">Alternativa Sólida</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="font-bold text-lg text-slate-900">4.9/5</span>
                    <span className="text-sm text-slate-600">(reviews agregados)</span>
                  </div>
                  <p className="text-slate-700 font-semibold mb-4 text-sm">4 cepas probióticas com ingredientes naturais certificados</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-lg py-6"
                    onClick={() => document.getElementById("provadent-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Ver Análise Completa
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE WITH ICONS */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Comparação Técnica com Ícones Visuais
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Visualize as diferenças principais entre os dois produtos em um único olhar
          </p>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Critério</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-700">ProDentim</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-700">ProvaDent</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Probióticos Específicos</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold text-2xl">✔✔✔✔✔</td>
                  <td className="px-6 py-4 text-center text-slate-700 font-bold text-2xl">✔✔✔</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Ação na Microbiota Bucal</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Ingredientes 100% Naturais</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Modo de Uso</td>
                  <td className="px-6 py-4 text-center text-slate-700 font-semibold">Mastigável</td>
                  <td className="px-6 py-4 text-center text-slate-700 font-semibold">Cápsula</td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Garantia de Satisfação</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold text-lg">✔ 60 dias</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold text-lg">✔ 60 dias</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Custo-Benefício Geral</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Resumo Técnico</h3>
            <p className="text-blue-800">
              ProDentim leva vantagem em concentração de CFUs (3.5 bilhões) e cepas específicas clinicamente estudadas. ProvaDent oferece ingredientes 100% naturais certificados. Para máxima eficácia em microbioma bucal, ProDentim é a escolha superior.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-10 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Oferta Oficial do ProDentim
            </Button>
          </div>
        </div>
      </section>

      {/* PRODENTIM SECTION */}
      <section id="prodentim-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <img
                src="https://files.manuscdn.com/canvas/images/2026/02/18/2f7c44fb-6bce-4584-9a5a-7ca97b85bb50.png"
                alt="ProDentim - Probióticos Orais com 3.5 Bilhões de CFUs"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">1º Lugar - Escolha Popular</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">ProDentim</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-slate-900">4.8/5</span>
                  <span className="text-sm text-slate-600">(95,000+ reviews verificados)</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Benefícios Específicos & Reais</h3>
                <ul className="space-y-3">
                  {[
                    "✔ Contém Lactobacillus Paracasei — cepa associada a redução de halitose e saúde gengival",
                    "✔ 3.5 bilhões de CFUs por comprimido — concentração comprovadamente eficaz",
                    "✔ Mastigável — sem necessidade de água, prático para usar em qualquer lugar",
                    "✔ B.lactis BL-04® — suporta sistema imunológico respiratório",
                    "✔ Baixo índice de efeitos colaterais — fórmula segura para todas as idades",
                    "✔ Ação rápida — usuários relatam melhora em 2-3 semanas"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TESTIMONIALS */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">O Que Usuários Reais Dizem</h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Melhorou meu hálito em 3 semanas. Meu dentista ficou surpreso com a melhora nas gengivas."</p>
                      <p className="font-semibold text-slate-900">João, 45 anos</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Fácil de mastigar, senti diferença logo. Recomendo para quem quer algo prático e eficaz."</p>
                      <p className="font-semibold text-slate-900">Maria, 38 anos</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Comprar ProDentim com Garantia 60 Dias
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROVADENT SECTION */}
      <section id="provadent-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/TnXluSRJxhxrWFzk.webp?Expires=1802978868&Signature=VWGhA9dd60ucj91ahGgak9wSneuc3k9UfgJiFA8uPB~8HiNo2rVu2POH1fL99HhGO8uNhPDM6vj-vc5dxADjhJFhqb5hzM~kjiVDdHs0djL7IxuSDkgcdoAoFJCnI0O4qn9qpui8~0EgvD9Hw8jmUfurQUnhg0rc6USs7I~026VZvLwjnI6mDSIKRZ-yqa1iX0ET7IZcAkv2XtMXHX5ct20DW4cjdXOIVrsrKDovWyFM1k~~WSPzISKMd1a4o-mgh5cTDCmmIM06TupbcWcOIwlx1aAV8USD4j7EvpCGs2UZf~ju8P61C8aPhYbBJhiPwW~8NpVRpI8t2PvvX5FIxg__&Key-Pair-Id=K2HSFNDJXOU9YS"
                alt="ProvaDent - Fórmula Avançada com 4 Cepas Probióticas"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-200 rounded-full p-3">
                    <Shield className="w-6 h-6 text-slate-700" />
                  </div>
                  <span className="bg-slate-200 text-slate-800 px-4 py-2 rounded-full font-semibold text-sm">2º Lugar - Alternativa Sólida</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">ProvaDent</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                  <span className="text-sm text-slate-600">(reviews agregados)</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pontos Positivos Reais</h3>
                <ul className="space-y-3">
                  {[
                    "✔ 100% ingredientes naturais e orgânicos certificados",
                    "✔ 4 cepas probióticas selecionadas para bem-estar oral",
                    "✔ Contém Xylitol orgânico — suporta equilíbrio natural do pH bucal",
                    "✔ Extrato de Cranberry — potencial para saúde gengival",
                    "✔ Fórmula equilibrada com minerais e nutrientes",
                    "✔ Complemento eficaz para higiene bucal tradicional"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-slate-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TESTIMONIALS */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">O Que Usuários Reais Dizem</h3>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Meu dentista ficou surpreso com a saúde das minhas gengivas. Recomendo!"</p>
                      <p className="font-semibold text-slate-900">Kelly T</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Sem mais hálito matinal. Fácil de usar e ingredientes naturais me tranquilizam."</p>
                      <p className="font-semibold text-slate-900">Ethan C</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Diferença Técnica Importante</h4>
                    <p className="text-amber-800 text-sm">
                      ProvaDent é mais natural, mas ProDentim tem maior concentração de CFUs (3.5 bilhões vs não especificado) com cepas clinicamente estudadas. Para máxima eficácia no microbioma bucal, ProDentim é a escolha superior.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-slate-400 text-slate-700 hover:bg-slate-100 text-lg py-6 rounded-lg font-semibold"
              >
                Considerar ProvaDent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Veredito Final</h2>
          <p className="text-xl leading-relaxed opacity-95">
            Após análise completa de fórmula, modo de uso e benefícios baseada em dezenas de reviews de usuários reais, <strong>ProDentim é a escolha superior</strong>. Sua concentração de 3.5 bilhões de CFUs com cepas clinicamente estudadas oferece resultados mais consistentes e rápidos.
          </p>
          <p className="text-lg opacity-90">
            ProvaDent é uma alternativa sólida para quem prioriza ingredientes 100% naturais, mas ProDentim proporciona melhor relação técnica e custo-benefício — especialmente para problemas de halitose e microbioma bucal.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-slate-100 text-lg px-10 py-7 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all mt-8"
          >
            Ver Melhor Oferta de ProDentim
          </Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Pronto para Começar?</h3>
          <p className="text-lg text-slate-600">
            Não deixe para depois. Milhares de pessoas já transformaram sua saúde bucal com ProDentim — com garantia de 60 dias sem risco.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-10 py-7 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Comprar ProDentim Agora com Garantia
          </Button>
          <p className="text-sm text-slate-500 mt-4">
            ✓ Frete grátis | ✓ Garantia 60 dias | ✓ Suporte 24/7 | ✓ Sem perguntas
          </p>
        </div>
      </section>
    </div>
  );
}
