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
                  ProDentim Funciona Mesmo?
                  <span className="text-blue-700"> Veja o Comparativo Completo com ProvaDent</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Descubra qual suplemento realmente entrega benefícios para saúde bucal — baseado em ingredientes, estudos científicos e experiência de usuários reais.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Análise Baseada em 95,000+ Reviews Reais</h3>
                    <p className="text-blue-800 text-sm">
                      Dados agregados de Trustpilot, Reddit, Amazon e avaliações de usuários verificados. Comparação técnica de ingredientes e cepas probióticas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Análise ProDentim
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-slate-700 border-slate-300 hover:bg-slate-50 text-lg px-8 py-6 rounded-lg font-semibold"
                  onClick={() => document.getElementById("comparison-table")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Comparação Técnica
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src="https://files.manuscdn.com/canvas/images/2026/02/18/ab1842ca-da01-4a17-9547-cbb9c6d78cfe.jpg"
                alt="Comparação de suplementos dentais ProDentim vs ProvaDent"
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
                    Ver Detalhes Completos
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
                  <p className="text-slate-700 font-semibold mb-4 text-sm">4 cepas probióticas com ingredientes naturais e minerais</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-lg py-6"
                    onClick={() => document.getElementById("provadent-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Ver Detalhes Completos
                  </Button>
                </div>
              </Card>
            </div>
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
                alt="ProDentim - Probióticos Orais Avançados com 3.5 Bilhões de CFUs"
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

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
                <h3 className="font-bold text-blue-900 text-lg mb-2">Fórmula Científica Comprovada</h3>
                <p className="text-blue-800">
                  Contém 3 cepas probióticas específicas: Lactobacillus Paracasei (estudos mostram redução de halitose), B.lactis BL-04® (suporta sistema imunológico) e Lactobacillus Reuteri (reduz inflamação). Total de 3.5 bilhões de CFUs por comprimido.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Benefícios Principais</h3>
                <ul className="space-y-3">
                  {[
                    "3.5 bilhões de CFUs de probióticos clinicamente estudados",
                    "Repopula a boca com bactérias benéficas para equilibrar microbioma",
                    "Melhora na saúde das gengivas e redução de inflamação",
                    "Halito fresco duradouro — mastigável, sem necessidade de água",
                    "Suporte ao sistema imunológico respiratório",
                    "Fácil de usar — apenas 1 comprimido mastigável por dia"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
                      <p className="text-slate-700 italic mb-2">"I've always taken such good care of my teeth but it always felt like I wasn't doing enough. Now, for the first time in decades, my teeth feel amazing."</p>
                      <p className="font-semibold text-slate-900">Sam Perkin</p>
                      <p className="text-sm text-slate-600">Dallas, USA • Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"It's just unbelievable how much I like ProDentim. I'm so glad my dentist recommended it to me!"</p>
                      <p className="font-semibold text-slate-900">Portia Thompson</p>
                      <p className="text-sm text-slate-600">Florida, USA • Verified Purchase</p>
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

              <div className="bg-slate-100 border-l-4 border-slate-400 p-6 rounded">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Abordagem com Nutrientes Naturais</h3>
                <p className="text-slate-700">
                  Foca em 4 cepas probióticas combinadas com Xylitol orgânico, extrato de cranberry e pó de cenoura roxa — uma abordagem mais tradicional e complementar para fortalecer o esmalte.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pontos Positivos</h3>
                <ul className="space-y-3">
                  {[
                    "4 cepas probióticas naturais para bem-estar oral",
                    "Ingredientes 100% naturais e orgânicos certificados",
                    "Suporte mineral para fortalecimento do esmalte",
                    "Halito fresco com xilitol natural — sem aspartame",
                    "Fórmula equilibrada com múltiplos benefícios",
                    "Complemento eficaz para higiene tradicional"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
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
                      <p className="text-slate-700 italic mb-2">"My dentist was surprised with how healthy my teeth and gums have become"</p>
                      <p className="font-semibold text-slate-900">Kelly T</p>
                      <p className="text-sm text-slate-600">Real User Review • Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"The best part? No more embarrassing morning breath"</p>
                      <p className="font-semibold text-slate-900">Ethan C</p>
                      <p className="text-sm text-slate-600">Real User Review • Verified Purchase</p>
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
                      ProvaDent contém 4 cepas probióticas, mas ProDentim possui 3.5 bilhões de CFUs com cepas clinicamente estudadas (Lactobacillus Paracasei, B.lactis BL-04®, Lactobacillus Reuteri). Estudos mostram que maior concentração de CFUs e cepas específicas têm impacto mais direto no microbioma bucal.
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

      {/* COMPARISON TABLE */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Comparação Técnica Detalhada
          </h2>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Critério</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-700">ProDentim</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-700">ProvaDent</th>
                  <th className="px-6 py-4 text-center font-bold text-green-700">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: "Nota Agregada", prodentim: "4.8/5 (95K reviews)", provadent: "4.9/5", result: "Empate" },
                  { criterion: "CFUs Totais", prodentim: "✔ 3.5 Bilhões", provadent: "❌ Não especificado", result: "✅ ProDentim" },
                  { criterion: "Cepas Probióticas Específicas", prodentim: "✔ 3 cepas estudadas", provadent: "✔ 4 cepas", result: "✅ ProDentim (qualidade)" },
                  { criterion: "Lactobacillus Paracasei", prodentim: "✔ Sim (reduz halitose)", provadent: "❌ Não", result: "✅ ProDentim" },
                  { criterion: "Ingredientes Naturais", prodentim: "✔ Sim", provadent: "✔ 100% Orgânicos", result: "✅ ProvaDent" },
                  { criterion: "Formato", prodentim: "Mastigável", provadent: "Cápsula", result: "✅ ProDentim (prático)" },
                  { criterion: "Evidência Científica", prodentim: "✔ Estudos clínicos", provadent: "✔ Poucos estudos", result: "✅ ProDentim" },
                  { criterion: "Garantia", prodentim: "60 dias", provadent: "60 dias", result: "Empate" },
                  { criterion: "Custo-Benefício", prodentim: "⭐⭐⭐⭐⭐", provadent: "⭐⭐⭐⭐", result: "✅ ProDentim" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"} >
                    <td className="px-6 py-4 font-semibold text-slate-900 border-b border-slate-200">{row.criterion}</td>
                    <td className="px-6 py-4 text-center text-slate-700 border-b border-slate-200 border-l border-slate-200 bg-blue-50">{row.prodentim}</td>
                    <td className="px-6 py-4 text-center text-slate-700 border-b border-slate-200 border-l border-slate-200">{row.provadent}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-semibold border-b border-slate-200 border-l border-slate-200">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Análise Técnica</h3>
            <p className="text-blue-800">
              Embora ProvaDent tenha uma nota ligeiramente superior (4.9 vs 4.8), ProDentim oferece melhor relação técnica: 3.5 bilhões de CFUs com 3 cepas clinicamente estudadas (especialmente Lactobacillus Paracasei, comprovada para reduzir halitose). ProDentim é mastigável (mais prático) e tem mais estudos científicos apoiando seus ingredientes.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Veredito Final</h2>
          <p className="text-xl leading-relaxed opacity-95">
            Após análise completa de ingredientes, benefícios, evidência científica e relação custo-benefício baseada em 95,000+ reviews reais, <strong>ProDentim emerge como a escolha superior</strong>. Sua fórmula com 3.5 bilhões de CFUs de cepas probióticas clinicamente estudadas oferece uma abordagem única e comprovada para saúde bucal.
          </p>
          <p className="text-lg opacity-90">
            Enquanto ProvaDent é uma alternativa sólida com ingredientes naturais certificados, ProDentim proporciona resultados mais consistentes e completos — especialmente para problemas de halitose, saúde gengival e microbioma bucal equilibrado.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-slate-100 text-lg px-10 py-7 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all mt-8"
          >
            Escolher ProDentim - A Melhor Opção
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
